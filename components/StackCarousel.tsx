'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const ITEMS = [
    {
        id: 'a',
        href: '#',
        category: 'ARCHIVAL',
        title: 'Archival',
        img: '/explore/archival.jpg',
    },
    {
        id: 'b',
        href: '#',
        category: 'MUSEUM',
        title: 'Museum',
        img: '/explore/museum.jpg',
    },
    {
        id: 'c',
        href: '#',
        category: 'CAFE',
        title: 'Cafe',
        img: '/explore/cafe.jpg',
    },
    {
        id: 'd',
        href: '#',
        category: 'CLUB',
        title: 'Club',
        img: '/explore/club.jpg',
    },
    {
        id: 'e',
        href: '#',
        category: 'VENUE',
        title: 'Multi Purpose Hall',
        img: '/explore/mph.jpg',
    },
    {
        id: 'f',
        href: '#',
        category: 'SHOP',
        title: 'Souvenir Shop',
        img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000',
    },
];

export default function MouseDrivenCarousel() {
    const [center, setCenter] = useState<number>(2);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const progress = Math.max(0, Math.min(1, mouseX / rect.width));
        const targetIndex = Math.floor(progress * ITEMS.length);
        if (targetIndex !== center) {
            setCenter(targetIndex);
        }
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
                                    className={`
                    relative 
                    w-[320px] h-[480px] md:w-[400px] md:h-[600px] 
                    bg-gray-200 overflow-hidden
                    transition-all duration-500 ease-out
                    ${isActive ? 'shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)]' : 'shadow-xl grayscale-[100%]'}
                  `}
                                >
                                    {/* Image */}
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
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