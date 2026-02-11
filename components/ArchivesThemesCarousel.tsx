'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const ARCHIVE_THEMES = [
  { id: '1', href: '#education', category: 'ARCHIVAL THEMES', title: 'Education', img: '/archives/education.jpg' },
  { id: '2', href: '#society', category: 'ARCHIVAL THEMES', title: 'Society', img: '/archives/society.jpg' },
  { id: '3', href: '#art-music-theatre', category: 'ARCHIVAL THEMES', title: 'Art, Music and Theatre', img: '/archives/music-arts.jpg' },
  { id: '4', href: '#health-medicine', category: 'ARCHIVAL THEMES', title: 'Health and Medicine', img: '/archives/health-medicine.jpg' },
  { id: '5', href: '#sports-games', category: 'ARCHIVAL THEMES', title: 'Sports and Games', img: '/archives/sports.jpg' },
  { id: '6', href: '#famous-footprints', category: 'ARCHIVAL THEMES', title: 'Famous Footprints', img: '/archives/famous-footprints.jpg' },
  { id: '7', href: '#religion-faith', category: 'ARCHIVAL THEMES', title: 'Religion and faith', img: '/archives/faith-festivity.jpg' },
  { id: '8', href: '#patnas-past', category: 'ARCHIVAL THEMES', title: "Patna's Past", img: '/archives/patnas-past.jpg' },
  { id: '9', href: '#beyond-patna', category: 'ARCHIVAL THEMES', title: 'Beyond Patna', img: '/archives/beyond-patna.jpg' },
];

export default function ArchivesThemesCarousel({
  onImageClick,
}: {
  onImageClick?: (src: string) => void;
}) {
  const [center, setCenter] = useState<number>(4); // Start at middle for 9 items
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const progress = Math.max(0, Math.min(1, mouseX / rect.width));
    const targetIndex = Math.floor(progress * ARCHIVE_THEMES.length);
    if (targetIndex !== center) {
      setCenter(targetIndex);
    }
  };

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-center bg-white text-gray-900 overflow-hidden py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 h-full flex flex-col">
        <div className="mb-20 pointer-events-none">
          <span className="block text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-4">
            Curated For You
          </span>
          <h2 className="text-5xl md:text-7xl font-light tracking-tight text-gray-900">
            Explore Collection
          </h2>
          <div className="h-1 w-20 bg-black mt-8" />
        </div>

        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          className="relative flex items-center justify-center h-[500px] md:h-[600px] w-full z-10"
        >
          {ARCHIVE_THEMES.map((item, i) => {
            const offset = i - center;
            const isActive = offset === 0;
            const scale = 1 - Math.abs(offset) * 0.1;
            const opacity = 1 - Math.abs(offset) * 0.2;
            const xOffset = offset * 42; // Tighter spread for 9 cards
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
                  type: 'spring',
                  stiffness: 400,
                  damping: 30,
                  mass: 0.8,
                }}
              >
                <div
                  onClick={() => isActive && onImageClick?.(item.img)}
                  className={`
                    relative
                    w-[280px] h-[420px] md:w-[340px] md:h-[500px]
                    bg-gray-200 overflow-hidden
                    transition-all duration-500 ease-out
                    ${isActive ? 'shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] cursor-pointer' : 'shadow-xl grayscale-[100%]'}
                  `}
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className={`object-cover transition-transform duration-700 ${isActive ? 'scale-105' : 'scale-100'}`}
                    sizes="(max-width: 768px) 280px, 340px"
                    loading="lazy"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-40'}`} />

                  <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 pointer-events-none">
                    <motion.div
                      initial={false}
                      animate={{
                        y: isActive ? 0 : 20,
                        opacity: isActive ? 1 : 0,
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      <span className="inline-block py-1 px-2 border border-white/20 text-[10px] font-bold tracking-widest uppercase text-white/80 mb-3">
                        {item.category}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-light text-white leading-tight mb-2">
                        {item.title}
                      </h3>
                      <div className="pointer-events-auto inline-block">
                        <Link
                          href={item.href}
                          onClick={(e) => e.stopPropagation()}
                          className="group inline-flex items-center text-xs font-bold tracking-widest text-white mt-4 uppercase"
                        >
                          View Story
                          <span className="ml-2 bg-white text-black rounded-full p-1 transition-transform group-hover:translate-x-2">
                            <ArrowRight className="w-3 h-3" />
                          </span>
                        </Link>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-20 flex items-center gap-6 max-w-sm">
          <span className="text-xs font-bold text-gray-400 w-6">01</span>
          <div className="h-[1px] flex-1 bg-gray-200 overflow-hidden">
            <motion.div
              className="h-full bg-black"
              animate={{
                width: `${((center + 1) / ARCHIVE_THEMES.length) * 100}%`,
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          </div>
          <span className="text-xs font-bold text-gray-400 w-6 text-right">0{ARCHIVE_THEMES.length}</span>
        </div>
      </div>
    </section>
  );
}
