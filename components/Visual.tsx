'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Instagram, ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';

export default function VisualChronicle() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax effect for the background text
    const xMovement = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

    return (
        <section ref={containerRef} className="relative py-32 bg-stone-950 overflow-hidden">

            {/* 1. Moving Background Text (Marquee Effect) */}
            <div className="absolute top-20 left-0 w-full whitespace-nowrap opacity-[0.04] pointer-events-none select-none">
                <motion.div style={{ x: xMovement }} className="text-[12rem] md:text-[15rem] font-serif text-white leading-none">
                    HERITAGE CULTURE ART PATNA HISTORY
                </motion.div>
            </div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
            <span className="text-amber-500 text-xs font-bold tracking-[0.25em] uppercase mb-4 block">
              The Visual Archive
            </span>
                        <h2 className="text-4xl md:text-6xl font-serif text-white">
                            Glimpses of <span className="italic text-stone-500">History</span>
                        </h2>
                    </div>

                    <button className="flex items-center gap-2 text-white border border-stone-700 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300">
                        <Instagram size={18} />
                        <span className="text-xs font-bold uppercase tracking-widest">Follow @PlanetPatna</span>
                    </button>
                </div>

                {/* THE BENTO GRID */}
                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[800px]">

                    {/* ITEM 1: MAIN FEATURE VIDEO (Large Block) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="md:col-span-2 md:row-span-2 relative group rounded-2xl overflow-hidden bg-stone-900 border border-stone-800"
                    >
                        <div className="absolute inset-0 z-0">
                            <iframe
                                src="https://www.youtube.com/embed/uGk8mbj0cTc?autoplay=1&mute=1&loop=1&playlist=uGk8mbj0cTc"
                                title="Glimpses of History"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                            />
                        </div>

                        <div className="absolute bottom-0 left-0 p-8 z-10">
                            <h3 className="text-2xl text-white font-serif mb-2">The Sculpture Gallery</h3>
                            <p className="text-stone-400 text-sm">Explore ancient stone and bronze masterpieces.</p>
                        </div>
                    </motion.div>

                    {/* ITEM 2: Portrait Photo (Top Right) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="md:col-span-1 md:row-span-1 relative group rounded-2xl overflow-hidden cursor-pointer"
                    >
                        {/* Portrait of an antique Indian bronze statue */}
                        <Image
                            src="https://images.unsplash.com/photo-1620333986385-636cb33c1038?w=600&h=800&fit=crop&q=80"
                            alt="Antique Bronze Artifact"
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                        <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <ArrowUpRight size={16} />
                        </div>
                    </motion.div>

                    {/* ITEM 3: Text/Quote Block (Top Far Right) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="md:col-span-1 md:row-span-1 bg-amber-900/20 border border-amber-900/30 rounded-2xl p-8 flex flex-col justify-center relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity">
                            <div className="w-16 h-16 border-r-2 border-t-2 border-amber-600 rounded-tr-xl" />
                        </div>
                        <p className="font-serif text-xl md:text-2xl text-amber-500 italic leading-relaxed">
                            &ldquo;Preserving the past to inspire the future.&rdquo;
                        </p>
                        <span className="text-stone-500 text-xs font-bold uppercase tracking-widest mt-6">
                — Curator&apos;s Note
             </span>
                    </motion.div>

                    {/* ITEM 4: Landscape Photo (Bottom Span) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="md:col-span-2 md:row-span-1 relative group rounded-2xl overflow-hidden cursor-pointer"
                    >
                        <Image
                            src="/visual/glimpses-of-history.jpg"
                            alt="The Colonial Archive Hall"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                            <h4 className="text-white font-serif text-lg">The Colonial Archive Hall</h4>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}