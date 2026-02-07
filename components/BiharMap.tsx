"use client";

import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { MapPin, Search, ArrowUpRight, Navigation, Layers } from "lucide-react";
import "leaflet/dist/leaflet.css";

// --- Types ---
type RouteId = "dastaan" | "gulzar";

type Site = {
    id: string;
    name: string;
    coords: [number, number];
    description: string;
    link: string;
    category: string;
    route: RouteId;
};

const ROUTES: Record<RouteId, { name: string; color: string }> = {
    dastaan: { name: "Dastaan-e-PatnaCity", color: "#ec4899" },  // pink
    gulzar: { name: "Gulzar-e-PatnaCity", color: "#881337" },     // maroon
};

// Route 1: Dastaan-e-PatnaCity (pink)
const DASTAAN_SITES: Omit<Site, "route">[] = [
    { id: "dastaan-1", name: "Satyanarayan Temple", coords: [25.599534417634207, 85.22622241120979], description: "Heritage temple in Patna City.", link: "#", category: "Route 1" },
    { id: "dastaan-2", name: "Bihar Hitaishi District Central Library", coords: [25.594118587524054, 85.22672585382159], description: "Historic district central library.", link: "#", category: "Route 1" },
    { id: "dastaan-3", name: "Mangal Talab", coords: [25.59379531586389, 85.22609774716098], description: "Historic water body in Patna City.", link: "#", category: "Route 1" },
    { id: "dastaan-4", name: "Gurdwara Bal Leela Maini Sangat", coords: [25.5929403185693, 85.22950013481487], description: "Sikh place of worship.", link: "#", category: "Route 1" },
    { id: "dastaan-5", name: "Mir Ashraf Masjid", coords: [25.591666296759808, 85.22797501587699], description: "Historic mosque in Patna City.", link: "#", category: "Route 1" },
    { id: "dastaan-6", name: "Chhoti Patan Devi Temple", coords: [25.59378102307602, 85.23086477653678], description: "Heritage temple site.", link: "#", category: "Route 1" },
    { id: "dastaan-7", name: "Quila House Fort Area", coords: [25.597124542965812, 85.23457728812369], description: "Historic fort area and Quila House.", link: "#", category: "Route 1" },
];

// Route 2: Gulzar-e-PatnaCity (maroon)
const GULZAR_SITES: Omit<Site, "route">[] = [
    { id: "gulzar-1", name: "Pashchim Darwaza", coords: [25.601529366689586, 85.21030524143225], description: "Historic western gate.", link: "#", category: "Route 2" },
    { id: "gulzar-2", name: "Badshah Manzil", coords: [25.600894864651433, 85.21186463937953], description: "Heritage building in Patna.", link: "#", category: "Route 2" },
    { id: "gulzar-3", name: "Christian Cemetery", coords: [25.600925053336127, 85.21505542855641], description: "Historic Christian cemetery.", link: "#", category: "Route 2" },
    { id: "gulzar-4", name: "Padri Ki Haveli", coords: [25.601034114564804, 85.2193673147208], description: "Historic Padri Ki Haveli.", link: "#", category: "Route 2" },
    { id: "gulzar-5", name: "Bhadra Ghat, Patna", coords: [25.611659067008976, 85.20718494609842], description: "Ghat on the Ganges.", link: "#", category: "Route 2" },
    { id: "gulzar-6", name: "Gulzarbagh Imambara", coords: [25.608906515381776, 85.20447992675264], description: "Imambara at Gulzarbagh.", link: "#", category: "Route 2" },
    { id: "gulzar-7", name: "Gulzarbagh Opium Factory", coords: [25.609444140205465, 85.20932412519875], description: "Historic opium factory site.", link: "#", category: "Route 2" },
];

const SITES: Site[] = [
    ...DASTAAN_SITES.map((s) => ({ ...s, route: "dastaan" as RouteId })),
    ...GULZAR_SITES.map((s) => ({ ...s, route: "gulzar" as RouteId })),
];

// --- Map Component (Client Side Only) ---
const ZOOM_FIRST_LOCATION = 16;  // zoomed in on single location by default
const ZOOM_ROUTE = 15;           // zoom when showing a route

const MapComponent = ({
    center,
    zoom,
    sites,
    selectedId,
    onSelect,
    fitToBounds,
}: {
    center: [number, number];
    zoom: number;
    sites: Site[];
    selectedId: string | null;
    onSelect: (site: Site) => void;
    fitToBounds: [number, number][] | null;
}) => {
    const [mods, setMods] = useState<Record<string, any> | null>(null);

    useEffect(() => {
        let mounted = true;
        (async () => {
            const rl = await import("react-leaflet");
            const leaflet = (await import("leaflet")) as any;
            const L = leaflet?.default ?? leaflet;
            try {
                const iconProto = L.Icon.Default.prototype as Record<string, unknown>;
                if ("_getIconUrl" in iconProto) delete iconProto["_getIconUrl"];
                L.Icon.Default.mergeOptions({
                    iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
                    iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
                    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
                });
            } catch (e) {
                // icon setup non-critical
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

    const { MapContainer, TileLayer, Marker, useMap, L } = mods;

    const MapController = () => {
        const map = useMap();
        useEffect(() => {
            if (fitToBounds && fitToBounds.length > 0 && L) {
                const bounds = L.latLngBounds(fitToBounds as [number, number][]);
                map.fitBounds(bounds, { padding: [24, 24], maxZoom: ZOOM_ROUTE, animate: true });
            } else {
                map.flyTo(center, zoom, { animate: true, duration: 1.5 });
            }
        }, [center, zoom, map, fitToBounds, L]);
        return null;
    };

    return (
        <MapContainer center={center} zoom={zoom} scrollWheelZoom={false} className="w-full h-full outline-none" zoomControl={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            />
            <MapController />
            {/* Markers: only the selected one gets highlight; key forces remount so previous loses highlight */}
            {sites.map((s) => {
                const isSelected = selectedId === s.id;
                if (isSelected && L) {
                    const highlightIcon = L.divIcon({
                        className: "selected-marker-wrapper",
                        html: `<span class="selected-marker-ring"><img src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png" alt="" class="selected-marker-pin" /></span>`,
                        iconSize: [36, 36],
                        iconAnchor: [18, 36],
                    });
                    return (
                        <Marker
                            key={`${s.id}-selected`}
                            position={s.coords}
                            icon={highlightIcon}
                            zIndexOffset={1000}
                            eventHandlers={{ click: () => onSelect(s) }}
                        />
                    );
                }
                return (
                    <Marker
                        key={`${s.id}-normal`}
                        position={s.coords}
                        opacity={0.85}
                        eventHandlers={{ click: () => onSelect(s) }}
                    />
                );
            })}
        </MapContainer>
    );
};

const LazyMap = dynamic(() => Promise.resolve(MapComponent), { ssr: false });

// --- Main Layout ---
export default function ArtsCultureMap() {
    const [activeSite, setActiveSite] = useState<Site>(SITES[0]);
    const [zoom, setZoom] = useState(ZOOM_FIRST_LOCATION);
    const [search, setSearch] = useState("");
    const [routeFilter, setRouteFilter] = useState<RouteId | "all">("all");

    const listRef = useRef<HTMLDivElement>(null);
    const activeItemRef = useRef<HTMLButtonElement>(null);

    const filteredSites = SITES.filter((s) => {
        const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase());
        const matchesRoute = routeFilter === "all" || s.route === routeFilter;
        return matchesSearch && matchesRoute;
    });

    // Sort: names that start with search first, then contains; selected always visible at top when in list
    const sortedSites = [...filteredSites].sort((a, b) => {
        const q = search.trim().toLowerCase();
        if (!q) return 0;
        const aStart = a.name.toLowerCase().startsWith(q);
        const bStart = b.name.toLowerCase().startsWith(q);
        if (aStart && !bStart) return -1;
        if (!aStart && bStart) return 1;
        if (activeSite.id === a.id) return -1;
        if (activeSite.id === b.id) return 1;
        return 0;
    });

    useEffect(() => {
        if (search.trim() && filteredSites.length === 1) {
            setActiveSite(filteredSites[0]);
            setZoom(ZOOM_ROUTE);
        }
    }, [search, routeFilter]);

    useEffect(() => {
        activeItemRef.current?.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }, [activeSite.id]);

    const handleSelect = (site: Site) => {
        setActiveSite(site);
        setZoom(ZOOM_ROUTE);
    };

    const fitToBounds: [number, number][] | null =
        routeFilter === "dastaan"
            ? DASTAAN_SITES.map((s) => s.coords)
            : routeFilter === "gulzar"
                ? GULZAR_SITES.map((s) => s.coords)
                : null;

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

                        {/* Route legend / filter */}
                        <div className="p-4 border-b border-gray-100 space-y-2">
                            <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-2">Routes</p>
                            <div className="flex flex-wrap gap-2">
                                <button
                                    onClick={() => setRouteFilter("all")}
                                    className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${routeFilter === "all" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                                >
                                    All
                                </button>
                                <button
                                    onClick={() => setRouteFilter("dastaan")}
                                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${routeFilter === "dastaan" ? "text-white" : "hover:opacity-90"}`}
                                    style={{ backgroundColor: routeFilter === "dastaan" ? ROUTES.dastaan.color : "#fce7f3" }}
                                >
                                    <span className="w-2 h-2 rounded-full bg-pink-500" style={{ background: ROUTES.dastaan.color }} />
                                    Dastaan-e-PatnaCity
                                </button>
                                <button
                                    onClick={() => setRouteFilter("gulzar")}
                                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${routeFilter === "gulzar" ? "text-white" : "text-gray-700 hover:opacity-90"}`}
                                    style={{ backgroundColor: routeFilter === "gulzar" ? ROUTES.gulzar.color : "#fce7e8" }}
                                >
                                    <span className="w-2 h-2 rounded-full" style={{ background: ROUTES.gulzar.color }} />
                                    Gulzar-e-PatnaCity
                                </button>
                            </div>
                        </div>

                        {/* Search Bar */}
                        <div className="p-4 bg-white z-20 shadow-sm border-b border-gray-100">
                            <div className="relative group">
                                <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400 group-focus-within:text-amber-600 transition-colors" />
                                <input
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    placeholder="Find a location or route..."
                                    className="w-full pl-10 pr-4 py-2 bg-gray-50 border-none rounded-lg text-sm placeholder:text-gray-400 focus:bg-white focus:ring-2 focus:ring-amber-100 transition-all outline-none"
                                />
                            </div>
                        </div>

                        {/* Scrollable List - matches first when typing */}
                        <div ref={listRef} className="flex-1 overflow-y-auto custom-scrollbar bg-white">
                            {sortedSites.map((site) => {
                                const isActive = activeSite.id === site.id;
                                return (
                                    <button
                                        key={site.id}
                                        ref={isActive ? activeItemRef : undefined}
                                        onClick={() => handleSelect(site)}
                                        className={`
                      relative w-full text-left px-5 py-4 transition-all duration-200 group
                      border-l-4
                      ${isActive ? "border-b border-gray-50 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)]" : "border-l-transparent hover:bg-gray-50 border-b border-gray-50"}
                    `}
                                        style={isActive ? { borderLeftColor: ROUTES[site.route].color, backgroundColor: `${ROUTES[site.route].color}18` } : {}}
                                    >
                                        <div className="flex justify-between items-start">
                                            <div className="pr-4">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span
                                                        className="text-[9px] font-bold tracking-wider uppercase px-1.5 py-0.5 rounded-sm text-white"
                                                        style={{ backgroundColor: ROUTES[site.route].color }}
                                                    >
                                                        {site.route === "dastaan" ? "Route 1" : "Route 2"}
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

                            {sortedSites.length === 0 && (
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
                            fitToBounds={fitToBounds}
                        />

                        {/* Floating Info Card - Material Design Style */}
                        <div className="absolute bottom-6 left-6 right-6 md:right-auto md:w-80 z-[400]">
                            <div className="bg-white p-0 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-gray-100 overflow-hidden transition-transform duration-300 hover:-translate-y-1">
                                <div className="h-1.5 w-full" style={{ backgroundColor: ROUTES[activeSite.route].color }} />
                                <div className="p-5">
                                    <div className="flex items-start justify-between mb-3">
                                        <div>
                                            <p className="text-[10px] font-bold uppercase tracking-wider mb-0.5" style={{ color: ROUTES[activeSite.route].color }}>
                                                {ROUTES[activeSite.route].name}
                                            </p>
                                            <h4 className="text-lg font-bold text-gray-900 leading-tight">{activeSite.name}</h4>
                                            <p className="text-[10px] font-mono text-gray-400 mt-1 uppercase">
                                                {activeSite.coords[0].toFixed(6)}° N, {activeSite.coords[1].toFixed(6)}° E
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