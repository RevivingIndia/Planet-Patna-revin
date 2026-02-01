'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, MapPin, Calendar, ScrollText } from 'lucide-react';

type AboutUsProps = {
    standalone?: boolean;
};

export default function AboutUs({ standalone }: AboutUsProps) {
    return (
        <section id="about-us" className="relative py-12 md:py-12 bg-white overflow-hidden text-gray-900 font-sans scroll-mt-20">

            {/* Subtle background grid line for structure (Material style) */}
            <div className="absolute left-0 top-0 h-full w-[1px] bg-gray-100 left-8 md:left-24 lg:left-32 z-0 hidden md:block"></div>

            <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* IMAGE COLUMN: Gallery Style with Floating Info Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative order-2 lg:order-1"
                    >
                        {/* Main Art Image */}
                        <div className="relative h-[500px] md:h-[600px] w-full rounded-[2rem] overflow-hidden shadow-2xl group">
                            <Image
                                src="/about-us.jpg"
                                alt="About Us - Planet Patna"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                priority
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>

                            {/* Floating Badge (Top Left) */}
                            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-white/50 shadow-sm">
                                <span className="text-[10px] font-bold tracking-widest uppercase text-amber-700">
                                    Est. 2025
                                </span>
                            </div>
                        </div>

                        {/* Floating "Caption" Card - Matches Map Component Style */}
                        <div className="absolute -bottom-6 -right-4 md:-right-10 w-64 md:w-72 bg-white p-6 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-gray-100 z-20">
                            <div className="flex items-center gap-3 mb-3 border-b border-gray-100 pb-3">
                                <div className="p-2 bg-amber-50 rounded-lg text-amber-600">
                                    <MapPin size={18} />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase text-gray-400 font-bold tracking-wider">Location</p>
                                    <p className="text-sm font-bold text-gray-900">Patna, Bihar</p>
                                </div>
                            </div>
                            <p className="text-xs text-gray-500 leading-relaxed italic">
                                &ldquo;A hub for education, exploration, and inspiration.&rdquo;
                            </p>
                        </div>
                    </motion.div>

                    {/* TEXT CONTENT COLUMN: Editorial / Material Layout */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="order-1 lg:order-2"
                    >
                        {/* Header Group */}
                        <div className="mb-8">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-8 h-[1px] bg-amber-500"></span>
                                <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">
                                    Our Story
                                </span>
                            </div>
                            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 tracking-tight leading-none mb-6">
                                About <br/>
                                <span className="font-serif italic text-amber-700">Us</span>
                            </h2>
                        </div>

                        {/* Editorial Body Text */}
                        <div className="prose prose-lg text-gray-500 font-light leading-relaxed mb-10">
                            <p className="mb-4">
                                Established on July 25, 2025, <span className="text-gray-900 font-medium">Planet Patna Foundation</span> is a visionary non-profit institution dedicated to preserving, interpreting, and re-presenting cultural heritage through a contemporary institutional framework.
                            </p>
                            <p className="text-base">
                                Conceived as a bridge between eras, the Foundation integrates archival scholarship, museum practice, and thoughtfully designed public spaces to create an environment where history is not only safeguarded but actively experienced.
                            </p>
                        </div>

                        {/* Quick Stats Grid - Material Density */}
                        <div className="grid grid-cols-2 gap-6 border-t border-gray-100 pt-8 mb-10">
                            <div>
                                <div className="flex items-center gap-2 mb-1 text-amber-600">
                                    <ScrollText size={16} />
                                    <span className="text-[10px] font-bold uppercase tracking-wider">Mission</span>
                                </div>
                                <p className="text-sm font-medium text-gray-900">Cultural Preservation</p>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-1 text-amber-600">
                                    <Calendar size={16} />
                                    <span className="text-[10px] font-bold uppercase tracking-wider">Founded</span>
                                </div>
                                <p className="text-sm font-medium text-gray-900">July 25, 2025</p>
                            </div>
                        </div>

                        {/* Action Button - hidden on standalone About Us page */}
                        {!standalone && (
                            <Link
                                href="/about-us"
                                className="group inline-flex items-center gap-3 text-xs font-bold tracking-widest uppercase text-gray-900 hover:text-amber-700 transition-colors duration-300"
                            >
                                <span>Read more</span>
                                <span className="bg-black text-white p-2 rounded-full group-hover:bg-amber-700 transition-all duration-300 group-hover:translate-x-2">
                                    <ArrowRight size={14} />
                                </span>
                            </Link>
                        )}
                    </motion.div>

                </div>
            </div>
        </section>
    );
}