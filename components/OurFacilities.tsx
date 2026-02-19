'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Coffee, Building2, Users } from 'lucide-react';

const facilities = [
    {
        title: 'Cafe',
        subtitle: 'Refreshments',
        icon: <Coffee size={24} />,
        description: 'Enjoy refreshments and a relaxed break at our on-site café between exhibits.',
        image: '/amenities-services/cafe-dining.jpg',
        href: '/facilities/cafe',
    },
    {
        title: 'Multi Purpose Hall',
        subtitle: 'Venue & Events',
        icon: <Building2 size={24} />,
        description: 'A flexible space for lectures, workshops, conferences, and cultural gatherings.',
        image: '/amenities-services/mph.jpg',
        href: '/facilities/multi-purpose-hall',
    },
    {
        title: 'Club',
        subtitle: 'Elite Member Club',
        icon: <Users size={24} />,
        description: 'A private forum for thinkers, patrons, and cultural leaders to engage through curated events and discussions.',
        image: '/amenities-services/club.jpg',
        href: '/facilities/club',
    },
];

export default function OurFacilities() {
    return (
        <section id="facilities" className="py-24 bg-[#Fdfbf7] relative overflow-hidden scroll-mt-20">

            {/* Background Decor: A faint architectural sketch or line */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-700/20 to-transparent" />

            <div className="container mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="text-center mb-20">
          <span className="text-amber-700 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
            Plan Your Visit
          </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-gray-900">
                        Facilities & Service
                    </h2>
                </div>

                {/* The Arched Grid */}
                <div className="grid md:grid-cols-3 gap-12">
                    {facilities.map((facility, index) => (
                        <Link key={index} href={facility.href} className="group text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                            >

                            {/* Image Container (The Arch) */}
                            <div className="relative mx-auto w-full max-w-[320px] h-[420px] mb-10">

                                {/* Decorative border outline that rotates slightly on hover */}
                                <div className="absolute inset-0 border border-amber-700/30 rounded-t-full rounded-b-[100px] transform rotate-3 group-hover:rotate-6 transition-transform duration-500 ease-out z-0" />

                                {/* Main Image Mask */}
                                <div className="absolute inset-0 overflow-hidden rounded-t-full rounded-b-[100px] shadow-2xl z-10 bg-stone-200">
                                    <Image
                                        src={facility.image}
                                        alt={facility.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        unoptimized
                                    />
                                    {/* Subtle overlay */}
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                                </div>

                                {/* Floating Icon Badge */}
                                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-20">
                                    <div className="bg-amber-700 text-white p-4 rounded-full shadow-lg group-hover:bg-gray-900 transition-colors duration-300 ring-4 ring-[#Fdfbf7]">
                                        {facility.icon}
                                    </div>
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="px-4">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">
                                    {facility.subtitle}
                                </span>
                                <h3 className="text-2xl font-serif text-gray-900 mb-4 group-hover:text-amber-700 transition-colors duration-300">
                                    {facility.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
                                    {facility.description}
                                </p>
                            </div>

                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}