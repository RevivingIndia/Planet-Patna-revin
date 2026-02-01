"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { MapPin, Search, ArrowUpRight, Navigation, Layers } from "lucide-react";
import "leaflet/dist/leaflet.css";

// --- Types ---
type Site = {
    id: string;
    name: string;
    coords: [number, number];
    description: string;
    link: string;
    category: string;
};

const SITES: Site[] = [
    {
        id: "patna",
        name: "Patna Museum",
        coords: [25.6094, 85.1414],
        description: "State museum featuring Mauryan and Gupta artifacts.",
        link: "https://en.wikipedia.org/wiki/Patna_Museum",
        category: "Museum",
    },
    {
        id: "bodhgaya",
        name: "Mahabodhi Temple",
        coords: [24.6959, 85.0011],
        description: "UNESCO World Heritage site; place of Buddha's enlightenment.",
        link: "https://en.wikipedia.org/wiki/Bodh_Gaya",
        category: "Heritage",
    },
    {
        id: "nalanda",
        name: "Nalanda Ruins",
        coords: [25.1353, 85.4435],
        description: "Ancient monastic university and center of learning.",
        link: "https://en.wikipedia.org/wiki/Nalanda",
        category: "Archaeology",
    },
    {
        id: "vaishali",
        name: "Ashokan Pillar",
        coords: [25.6510, 85.1826],
        description: "Ancient site commemorating Buddha's last sermon.",
        link: "https://en.wikipedia.org/wiki/Vaishali_district",
        category: "Monument",
    },
    {
        id: "vikramshila",
        name: "Vikramshila",
        coords: [25.3693, 87.0527],
        description: "Major center of learning in the Pala Empire.",
        link: "https://en.wikipedia.org/wiki/Vikramashila",
        category: "Archaeology",
    },
    {
        id: "rohtas",
        name: "Rohtas Fort",
        coords: [24.9458, 84.0188],
        description: "16th-century fortress exhibiting Afghan architecture.",
        link: "https://en.wikipedia.org/wiki/Rohtas_Fort",
        category: "Fort",
    },
];

// --- Map Component (Client Side Only) ---
const MapComponent = ({ center, zoom, sites, selectedId, onSelect }: { center: [number, number]; zoom: number; sites: Site[]; selectedId: string | null; onSelect: (site: Site) => void }) => {
    const [mods, setMods] = useState<Record<string, any> | null>(null);

    useEffect(() => {
        let mounted = true;
        (async () => {
            const rl = await import('react-leaflet');
            const leaflet = (await import('leaflet')) as any;

            // Normalize default if needed
            const L = leaflet?.default ?? leaflet;

            // Ensure default Leaflet marker icons are set correctly in client
            try {
                const iconProto = L.Icon.Default.prototype as Record<string, unknown>;
                if ('_getIconUrl' in iconProto) delete iconProto['_getIconUrl'];
                L.Icon.Default.mergeOptions({
                    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
                    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
                    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
                });
            } catch (e) {
                // swallow; icon setup non-critical
            }

            if (mounted) {
                setMods({ MapContainer: rl.MapContainer, TileLayer: rl.TileLayer, Marker: rl.Marker, useMap: rl.useMap, L });
            }
        })();
        return () => { mounted = false; };
    }, []);

    if (!mods) {
        return <div className="w-full h-full bg-gray-100 flex items-center justify-center">Loading map...</div>;
    }

    const { MapContainer, TileLayer, Marker, useMap } = mods;

    const MapController = () => {
        const map = useMap();
        useEffect(() => {
            map.flyTo(center, zoom, { animate: true, duration: 1.5 });
        }, [center, zoom, map]);
        return null;
    };

    return (
        <MapContainer center={center} zoom={zoom} scrollWheelZoom={false} className="w-full h-full outline-none" zoomControl={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            />
            <MapController />
            {sites.map((s) => (
                <Marker
                    key={s.id}
                    position={s.coords}
                    opacity={selectedId === s.id ? 1 : 0.6}
                    eventHandlers={{
                        click: () => onSelect(s),
                    }}
                />
            ))}
        </MapContainer>
    );
};

const LazyMap = dynamic(() => Promise.resolve(MapComponent), { ssr: false });

// --- Main Layout ---
export default function ArtsCultureMap() {
    const [activeSite, setActiveSite] = useState<Site>(SITES[0]);
    const [zoom, setZoom] = useState(7);
    const [search, setSearch] = useState("");

    const filteredSites = SITES.filter(s => s.name.toLowerCase().includes(search.toLowerCase()));

    const handleSelect = (site: Site) => {
        setActiveSite(site);
        setZoom(13);
    };

    return (
        <section className="relative py-20 bg-white text-gray-900 font-sans">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">

                {/* Compact Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-gray-100 gap-4">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
                            <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400">
                Interactive Map
              </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900">
                            Heritage of Bihar
                        </h2>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="text-right hidden md:block">
                            <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">Curated Locations</p>
                            <p className="text-xl font-light text-gray-900">{SITES.length.toString().padStart(2, '0')}</p>
                        </div>
                        {/* Mobile Filter Toggle could go here */}
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 h-auto lg:h-[600px] relative">

                    {/* Sidebar: Material List */}
                    <div className="lg:col-span-4 flex flex-col h-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.04)] z-10">

                        {/* Search Bar - Floating Style inside container */}
                        <div className="p-4 bg-white z-20 shadow-sm border-b border-gray-100">
                            <div className="relative group">
                                <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400 group-focus-within:text-amber-600 transition-colors" />
                                <input
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    placeholder="Find a location..."
                                    className="w-full pl-10 pr-4 py-2 bg-gray-50 border-none rounded-lg text-sm placeholder:text-gray-400 focus:bg-white focus:ring-2 focus:ring-amber-100 transition-all outline-none"
                                />
                            </div>
                        </div>

                        {/* Scrollable List */}
                        <div className="flex-1 overflow-y-auto custom-scrollbar bg-white">
                            {filteredSites.map((site) => {
                                const isActive = activeSite.id === site.id;
                                return (
                                    <button
                                        key={site.id}
                                        onClick={() => handleSelect(site)}
                                        className={`
                      relative w-full text-left px-5 py-4 transition-all duration-200 group
                      border-l-[3px] 
                      ${isActive
                                            ? 'bg-amber-50/40 border-l-amber-500'
                                            : 'border-l-transparent hover:bg-gray-50 border-b border-gray-50'}
                    `}
                                    >
                                        <div className="flex justify-between items-start">
                                            <div className="pr-4">
                                                <div className="flex items-center gap-2 mb-1">
                          <span className={`text-[9px] font-bold tracking-wider uppercase px-1.5 py-0.5 rounded-sm ${isActive ? 'bg-amber-100 text-amber-700' : 'bg-gray-100 text-gray-500'}`}>
                            {site.category}
                          </span>
                                                </div>
                                                <h3 className={`text-sm font-semibold transition-colors ${isActive ? 'text-gray-900' : 'text-gray-600 group-hover:text-gray-900'}`}>
                                                    {site.name}
                                                </h3>
                                                <p className={`text-xs mt-1 line-clamp-1 transition-colors ${isActive ? 'text-gray-600' : 'text-gray-400'}`}>
                                                    {site.description}
                                                </p>
                                            </div>

                                            {isActive && (
                                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm border border-amber-100 text-amber-600">
                          <Navigation className="w-3 h-3" />
                        </span>
                                            )}
                                        </div>
                                    </button>
                                );
                            })}

                            {filteredSites.length === 0 && (
                                <div className="p-8 text-center text-gray-400 text-sm">
                                    No locations found.
                                </div>
                            )}
                        </div>

                        {/* Minimal Footer */}
                        <div className="px-4 py-3 bg-gray-50 border-t border-gray-100 flex justify-between items-center text-[10px] text-gray-400 uppercase tracking-wider font-semibold">
                            <span>Map View</span>
                            <Layers className="w-3 h-3" />
                        </div>
                    </div>

                    {/* Map Area */}
                    <div className="lg:col-span-8 relative h-full rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-gray-100 group">
                        <LazyMap
                            center={activeSite.coords}
                            zoom={zoom}
                            sites={SITES}
                            selectedId={activeSite.id}
                            onSelect={handleSelect}
                        />

                        {/* Floating Info Card - Material Design Style */}
                        <div className="absolute bottom-6 left-6 right-6 md:right-auto md:w-80 z-[400]">
                            <div className="bg-white p-0 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-gray-100 overflow-hidden transition-transform duration-300 hover:-translate-y-1">
                                {/* Card Header Image Placeholder or Color Strip */}
                                <div className="h-1.5 w-full bg-gradient-to-r from-amber-400 to-amber-600"></div>

                                <div className="p-5">
                                    <div className="flex items-start justify-between mb-3">
                                        <div>
                                            <h4 className="text-lg font-bold text-gray-900 leading-tight">{activeSite.name}</h4>
                                            <p className="text-[10px] font-mono text-gray-400 mt-1 uppercase">
                                                {activeSite.coords[0].toFixed(4)}° N, {activeSite.coords[1].toFixed(4)}° E
                                            </p>
                                        </div>
                                        <div className="bg-gray-50 p-2 rounded-lg">
                                            <MapPin className="w-4 h-4 text-gray-600" />
                                        </div>
                                    </div>

                                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                                        {activeSite.description}
                                    </p>

                                    <a
                                        href={activeSite.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 transition-colors uppercase tracking-wide group/link"
                                    >
                                        Read Details
                                        <ArrowUpRight className="w-3 h-3 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Map Controls Mockup (Top Right) */}
                        <div className="absolute top-4 right-4 flex flex-col gap-2 z-[400]">
                            <button className="w-8 h-8 bg-white rounded-md shadow-sm border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors" onClick={() => setZoom(z => z + 1)}>+</button>
                            <button className="w-8 h-8 bg-white rounded-md shadow-sm border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors" onClick={() => setZoom(z => z - 1)}>-</button>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}