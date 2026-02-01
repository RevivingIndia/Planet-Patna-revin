'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const cards = [
    {
        title: 'Heritage Walk',
        subtitle: 'GUIDED TOURS',
        description: 'Step into the past with expert-led heritage walks through Patna. Discover ancient Pataliputra, colonial landmarks, and the city\'s layered history in an immersive, storytelling experience.',
        image: 'https://images.unsplash.com/photo-1568667256549-094345857637?w=600&h=800&fit=crop&q=80',
        href: '/heritage-walk',
    },
    {
        title: 'Gallery Tour',
        subtitle: 'MUSEUM & ARCHIVES',
        description: 'Explore our curated galleries—archival collections, Company School paintings, and thematic exhibitions—with guided tours that bring the region\'s cultural heritage to life.',
        image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=600&h=800&fit=crop&q=80',
        href: '/collection',
    },
    {
        title: 'Events & Program',
        subtitle: 'CULTURAL CALENDAR',
        description: 'Engage with history through workshops, lectures, screenings, and cultural gatherings. From heritage programs to the Multipurpose Hall, find events that animate the past.',
        image: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=600&h=800&fit=crop&q=80',
        href: '#',
    },
];

// Animation variants for staggering the cards
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function ThreeCards() {
    return (
        <section className="py-24 bg-[#Fdfbf7]">
            <div className="container mx-auto px-6">

                {/* Section Header */}
                <div className="text-center mb-16">
          <span className="text-amber-700 text-xs font-bold tracking-[0.2em] uppercase mb-3 block">
            Discover the Museum
          </span>
                    <h2 className="text-3xl md:text-4xl font-serif text-gray-900">
                        Curated Experiences
                    </h2>
                </div>

                {/* Grid Container */}
                <motion.div
                    className="grid md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="group relative bg-white border border-stone-200 hover:border-amber-700/50 transition-colors duration-500 overflow-hidden"
                        >
                            {/* Image Container with Zoom Effect */}
                            <div className="relative h-64 overflow-hidden">
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    fill
                                    className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>

                            {/* Content Box */}
                            <div className="p-8 relative">
                                {/* Decorative floating number behind text */}
                                <span className="absolute top-4 right-6 text-6xl font-serif text-stone-100 -z-10 select-none group-hover:text-amber-50 transition-colors duration-300">
                  0{index + 1}
                </span>

                                <div className="mb-4">
                  <span className="text-[10px] font-bold text-amber-700 uppercase tracking-widest mb-2 block">
                    {card.subtitle}
                  </span>
                                    <h3 className="text-xl font-serif text-gray-900 group-hover:text-amber-700 transition-colors duration-300">
                                        {card.title}
                                    </h3>
                                </div>

                                <p className="text-gray-500 text-sm leading-relaxed mb-8 line-clamp-4">
                                    {card.description}
                                </p>

                                {/* Refined Button Style */}
                                <Link
                                    href={card.href}
                                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-900 hover:text-amber-700 transition-colors duration-300"
                                >
                                    Explore
                                    <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                                </Link>
                            </div>

                            {/* Bottom Gold Line (Activates on Hover) */}
                            <div className="absolute bottom-0 left-0 w-0 h-1 bg-amber-700 group-hover:w-full transition-all duration-500 ease-in-out" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}