'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const cards = [
    {
        title: 'Learning & Research',
        category: 'LEARNING',
        description: 'Our courses, workshops, publications, and research projects in museology, conservation, and cultural heritage.',
        image: '/beyond-the-walls/learning-research.jpg',
        href: '/learning-research',
    },
    {
        title: 'Beyond Gallery',
        category: 'OUTREACH',
        description: 'Extending the museum experience into the city with pop-up displays and digital heritage trails.',
        image: '/beyond-the-walls/beyond-gallery.jpg',
        href: '#',
    },
    {
        title: 'Get Involved',
        category: 'MEMBERSHIP',
        description: 'Become a patron of the arts. Enjoy exclusive access to previews, curator talks, and private viewings.',
        image: '/beyond-the-walls/get-involved.jpg',
        href: '#',
    },
];

export default function EducationCards() {
    return (
        <section className="py-24 bg-stone-950 text-white">
            <div className="container mx-auto px-6">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
            <span className="text-amber-600 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
              Engage & Learn
            </span>
                        <h2 className="text-3xl md:text-5xl font-serif text-white">
                            Beyond the Walls
                        </h2>
                    </div>
                    {/* Decorative Line */}
                    <div className="hidden md:block h-px flex-grow bg-stone-800 ml-12 mb-4" />
                </div>

                {/* Immersive Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative h-[500px] w-full overflow-hidden rounded-lg bg-stone-900 cursor-pointer"
                        >

                            {/* Background Image */}
                            <Image
                                src={card.image}
                                alt={card.title}
                                fill
                                className="object-cover opacity-80 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700 ease-out"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />

                            {/* Gradient Overlay (Always visible for text readability) */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                            {/* Content Container - Positioned at bottom */}
                            <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">

                                {/* Category Label */}
                                <span className="text-amber-500 text-[10px] font-bold tracking-widest uppercase mb-2 block opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  {card.category}
                </span>

                                {/* Title */}
                                <h3 className="text-3xl font-serif text-white mb-4 group-hover:text-amber-50 transition-colors">
                                    {card.title}
                                </h3>

                                {/* Hidden Description Area */}
                                <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
                                    <p className="text-stone-300 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                                        {card.description}
                                    </p>

                                    <Link
                                        href={card.href ?? '#'}
                                        className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-white hover:text-amber-500 transition-colors"
                                    >
                                        Read More
                                        <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </div>

                            {/* Decorative Border on Hover */}
                            <div className="absolute inset-4 border border-white/20 scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out pointer-events-none" />

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}