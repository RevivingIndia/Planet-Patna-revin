'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function PlanetPatna() {
    return (
        <section className="relative py-24 bg-[#Fdfbf7] overflow-hidden">

            {/* Decorative Background Pattern (Subtle geometric lines) */}
            <div className="absolute right-0 bottom-0 w-1/3 h-full border-l border-stone-200/60 opacity-50 z-0" />
            <div className="absolute left-10 top-20 w-px h-32 bg-amber-700/30" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* IMAGE COLUMN (Left Side) */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* The Back Layer (Solid Color Block) */}
                        <div className="absolute top-8 -left-8 w-full h-full bg-stone-200 rounded-sm z-0" />

                        {/* Main Image Container */}
                        <div className="relative h-[600px] w-full z-10 overflow-hidden shadow-2xl rounded-sm">
                            <Image
                                src="https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&h=1000&fit=crop&q=80"
                                alt="Planet Patna Architecture"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-1000 ease-out"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />

                            {/* Overlay Gradient for Mood */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-amber-900/10 to-transparent mix-blend-overlay" />
                        </div>

                        {/* Floating "Rotating" Badge */}
                        <motion.div
                            className="absolute -bottom-10 -right-10 z-50 block" // Changed z-20 to z-50, removed 'hidden' for testing
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity }}
                        >
                            <div className="relative w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-xl border border-stone-100">
                                {/* The SVG Badge */}
                                <svg viewBox="0 0 100 100" className="w-full h-full absolute p-2">
                                    {/* 1. Define the path (circle) the text will follow */}
                                    <defs>
                                        <path
                                            id="curve"
                                            d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                                        />
                                    </defs>

                                    {/* 2. The Text attaching to the path via 'href' */}
                                    <text className="text-[10px] font-bold uppercase tracking-[0.2em] fill-amber-700">
                                        <textPath href="#curve">
                                            Planet Patna • Est. 2025 • Heritage •
                                        </textPath>
                                    </text>
                                </svg>

                                {/* Center Dot */}
                                <div className="w-2 h-2 bg-amber-700 rounded-full z-10" />
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* TEXT COLUMN (Right Side) */}
                    <motion.div
                        className="pl-0 lg:pl-10"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {/* Elegant Subtitle */}
                        <div className="flex items-center gap-4 mb-6">
                            <span className="h-px w-12 bg-amber-700"></span>
                            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-amber-700">
                                A Historical Gem
                            </h3>
                        </div>

                        {/* Main Headline */}
                        <h2 className="text-4xl md:text-6xl font-serif text-gray-900 mb-8 leading-tight">
                            Planet <br/>
                            <span className="italic font-light text-stone-500">Patna.</span>
                        </h2>

                        {/* Body Text */}
                        <div className="space-y-6">
                            <p className="text-gray-600 text-sm leading-loose tracking-wide text-justify">
                                <span className="text-4xl float-left mr-3 mt-[-6px] font-serif text-amber-700">S</span>
                                tep into a vibrant world that showcases Patna&apos;s rich history, traditions, and cultural heritage, bringing the essence of the city to life. We believe in bridging the gap between the past and the present.
                            </p>

                            <p className="text-gray-600 text-sm leading-loose tracking-wide text-justify border-l-2 border-stone-200 pl-6">
                                Engage with interactive displays that allow you to experience Patna&apos;s evolution, from ancient times to the present, through immersive technology. Join us for special events and discussions that foster a sense of community.
                            </p>
                        </div>

                        {/* Signature / Footer note */}
                        <div className="mt-10 flex items-center gap-3 opacity-60">
                            <Image
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Seal_of_Bihar.svg/1200px-Seal_of_Bihar.svg.png"
                                width={40}
                                height={40}
                                alt="Seal"
                                className="grayscale opacity-50"
                            />
                            <span className="text-[10px] uppercase tracking-widest text-gray-400">
                Official Heritage Partner
              </span>
                        </div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
}