'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Coffee, ShoppingBag, Users } from 'lucide-react'; // Make sure to install lucide-react

const facilities = [
    {
        title: 'Guided Tours',
        subtitle: 'Expert Narratives',
        icon: <Users size={24} />,
        description: 'Explore the museum with expert-led tours that offer in-depth knowledge and fascinating stories about Patna\'s heritage.',
        image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&h=800&fit=crop&q=80',
    },
    {
        title: 'Cafe & Dining',
        subtitle: 'Taste of Bihar',
        icon: <Coffee size={24} />,
        description: 'Enjoy refreshments and snacks at our on-site café, perfect for taking a break between exhibits in a relaxing environment.',
        image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=800&fit=crop&q=80',
    },
    {
        title: 'Museum Shop',
        subtitle: 'Curated Souvenirs',
        icon: <ShoppingBag size={24} />,
        description: 'Take home a piece of the museum with exclusive souvenirs, books, and locally crafted items that reflect the spirit of Patna.',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=800&fit=crop&q=80',
    },
];

export default function OurFacilities() {
    return (
        <section className="py-24 bg-[#Fdfbf7] relative overflow-hidden">

            {/* Background Decor: A faint architectural sketch or line */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-700/20 to-transparent" />

            <div className="container mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="text-center mb-20">
          <span className="text-amber-700 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
            Plan Your Visit
          </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-gray-900">
                        Amenities & Services
                    </h2>
                </div>

                {/* The Arched Grid */}
                <div className="grid md:grid-cols-3 gap-12">
                    {facilities.map((facility, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="group text-center"
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
                    ))}
                </div>
            </div>
        </section>
    );
}