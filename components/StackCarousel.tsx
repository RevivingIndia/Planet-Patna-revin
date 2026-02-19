'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const ITEMS = [
    {
        id: 'a',
        href: '/#archives',
        category: 'ARCHIVAL',
        title: 'Archival',
        img: '/explore/archival.jpg',
    },
    {
        id: 'b',
        href: '/#museum',
        category: 'MUSEUM',
        title: 'Museum',
        img: '/explore/museum.jpg',
    },
    {
        id: 'c',
        href: '/#facilities',
        category: 'CAFE',
        title: 'Cafe',
        img: '/explore/cafe.jpg',
    },
    {
        id: 'd',
        href: '/#facilities',
        category: 'CLUB',
        title: 'Club',
        img: '/explore/club.jpg',
    },
    {
        id: 'e',
        href: '/#facilities',
        category: 'VENUE',
        title: 'Multi Purpose Hall',
        img: '/explore/mph.jpg',
    },
    {
        id: 'f',
        href: '/#shop',
        category: 'SHOP',
        title: 'Souvenir Shop',
        img: '/explore/souvenir-shop.jpg',
        imageFit: 'contain' as const, // show full image without cropping
    },
];

type CarouselItem = (typeof ITEMS)[number];
const getImageFit = (item: CarouselItem) => ('imageFit' in item && item.imageFit === 'contain' ? 'bg-contain' : 'bg-cover');

const HOVER_DELAY_MS = 280;

export default function MouseDrivenCarousel() {
    const [center, setCenter] = useState<number>(2);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const pendingIndexRef = useRef<number | null>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        const x = e.clientX;
        const y = e.clientY;
        // Find which card(s) contain the pointer; pick the topmost (highest z-index)
        let bestIndex = -1;
        let bestZ = -1;
        for (let i = 0; i < ITEMS.length; i++) {
            const el = cardRefs.current[i];
            if (!el) continue;
            const rect = el.getBoundingClientRect();
            if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
                const z = 50 - Math.abs(i - center);
                if (z > bestZ) {
                    bestZ = z;
                    bestIndex = i;
                }
            }
        }

        if (bestIndex < 0 || bestIndex === center) {
            // Not over a card, or already on this card — cancel any pending switch
            if (hoverTimeoutRef.current) {
                clearTimeout(hoverTimeoutRef.current);
                hoverTimeoutRef.current = null;
            }
            pendingIndexRef.current = null;
            return;
        }

        // Over a different card: only switch after staying for HOVER_DELAY_MS
        if (pendingIndexRef.current === bestIndex) return; // already waiting for this card

        if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
        pendingIndexRef.current = bestIndex;
        hoverTimeoutRef.current = setTimeout(() => {
            setCenter(bestIndex);
            hoverTimeoutRef.current = null;
            pendingIndexRef.current = null;
        }, HOVER_DELAY_MS);
    };

    const handleMouseLeave = () => {
        if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current);
            hoverTimeoutRef.current = null;
        }
        pendingIndexRef.current = null;
    };

    return (
        // Increased vertical padding (py-24) and ensured full viewport height feel
        <section className="relative w-full min-h-[90vh] flex flex-col justify-center bg-white text-gray-900 overflow-hidden py-24">

            <div className="container mx-auto px-6 md:px-12 lg:px-24 h-full flex flex-col">

                {/* Header: More margin bottom (mb-20) for separation */}
                <div className="mb-20 pointer-events-none">
          <span className="block text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-4">
            Curated For You
          </span>
                    <h2 className="text-5xl md:text-7xl font-light tracking-tight text-gray-900">
                        Explore Collection
                    </h2>
                    <div className="h-1 w-20 bg-black mt-8"></div>
                </div>

                {/* Interaction Zone
          Increased height to h-[600px] to accommodate taller, more elegant cards
        */}
                <div
                    ref={containerRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className="relative flex items-center justify-center h-[500px] md:h-[600px] w-full z-10"
                >
                    {ITEMS.map((item, i) => {
                        const offset = i - center;
                        const isActive = offset === 0;

                        // Refined Physics
                        const scale = 1 - Math.abs(offset) * 0.1;   // Less shrinking for back cards
                        const opacity = 1 - Math.abs(offset) * 0.2; // Keep back cards slightly more visible
                        const xOffset = offset * 55;                // Wider spread (55%) for better visibility
                        const zIndex = 50 - Math.abs(offset);

                        return (
                            <motion.div
                                key={item.id}
                                className="absolute"
                                animate={{
                                    x: `${xOffset}%`,
                                    scale: scale,
                                    opacity: Math.max(opacity, 0),
                                    zIndex: zIndex,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 400, // Snappier movement
                                    damping: 30,
                                    mass: 0.8
                                }}
                            >
                                {/* Card Dimensions:
                  Taller aspect ratio (Portait) looks more professional.
                  w-[320px] / h-[480px] on Mobile
                  w-[400px] / h-[600px] on Desktop
                */}
                                <div
                                    ref={(el) => {
                                        if (cardRefs.current.length <= i) cardRefs.current.length = i + 1;
                                        cardRefs.current[i] = el;
                                    }}
                                    className={`
                    relative 
                    w-[320px] h-[480px] md:w-[400px] md:h-[600px] 
                    bg-stone-200 overflow-hidden
                    transition-all duration-500 ease-out
                    ${isActive ? 'shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)]' : 'shadow-xl grayscale-[100%]'}
                  `}
                                >
                                    {/* Image - contain for Souvenir Shop so full image shows */}
                                    <div
                                        className={`absolute inset-0 bg-center transition-transform duration-700 ${getImageFit(item)}`}
                                        style={{
                                            backgroundImage: `url(${item.img})`,
                                            transform: isActive ? 'scale(1.05)' : 'scale(1)'
                                        }}
                                    />

                                    {/* Gradient: Smoother fade */}
                                    <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-40'}`} />

                                    {/* Content: Pushed to bottom with large padding */}
                                    <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
                                        <motion.div
                                            initial={false}
                                            animate={{
                                                y: isActive ? 0 : 20,
                                                opacity: isActive ? 1 : 0
                                            }}
                                            transition={{ duration: 0.4 }}
                                        >
                      <span className="inline-block py-1 px-2 border border-white/20 text-[10px] font-bold tracking-widest uppercase text-white/80 mb-4">
                        {item.category}
                      </span>
                                            <h3 className="text-3xl md:text-4xl font-light text-white leading-tight mb-2">
                                                {item.title}
                                            </h3>
                                            <Link
                                                href={item.href}
                                                className="group inline-flex items-center text-xs font-bold tracking-widest text-white mt-6 uppercase"
                                            >
                                                View Story
                                                <span className="ml-2 bg-white text-black rounded-full p-1 transition-transform group-hover:translate-x-2">
                          <ArrowRight className="w-3 h-3" />
                        </span>
                                            </Link>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Footer / Progress */}
                <div className="mt-20 flex items-center gap-6 max-w-sm">
                    <span className="text-xs font-bold text-gray-400 w-6">01</span>
                    <div className="h-[1px] flex-1 bg-gray-200 overflow-hidden">
                        <motion.div
                            className="h-full bg-black"
                            animate={{
                                width: `${((center + 1) / ITEMS.length) * 100}%`
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                    </div>
                    <span className="text-xs font-bold text-gray-400 w-6 text-right">0{ITEMS.length}</span>
                </div>

            </div>
        </section>
    );
}