'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShoppingBag, Star, ArrowRight } from 'lucide-react';

const products = [
    {
        id: 1,
        name: 'The Didarganj Yakshi Replica',
        category: 'Sculpture',
        price: '₹2,499',
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=600&h=750&fit=crop&q=80',
        tag: 'Best Seller'
    },
    {
        id: 2,
        name: 'Madhubani Art Silk Scarf',
        category: 'Textiles',
        price: '₹1,299',
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=750&fit=crop&q=80',
        tag: 'New Arrival'
    },
    {
        id: 3,
        name: 'History of Pataliputra (Hardcover)',
        category: 'Books',
        price: '₹899',
        rating: 5.0,
        image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&h=750&fit=crop&q=80',
        tag: null
    },
    {
        id: 4,
        name: 'Museum Canvas Tote',
        category: 'Accessories',
        price: '₹499',
        rating: 4.7,
        image: 'https://images.unsplash.com/photo-1597484662317-c92534dd2727?w=600&h=750&fit=crop&q=80',
        tag: 'Eco-Friendly'
    },
];

export default function MuseumShop() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                    <div>
            <span className="text-amber-700 text-xs font-bold tracking-[0.2em] uppercase mb-3 block">
              Curated Collection
            </span>
                        <h2 className="text-3xl md:text-5xl font-serif text-gray-900">
                            The Museum <span className="italic text-stone-500">Boutique</span>
                        </h2>
                    </div>

                    <a href="#" className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-900 hover:text-amber-700 transition-colors">
                        View All Products
                        <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="group relative"
                        >

                            {/* Image Container */}
                            <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-stone-100 mb-6 cursor-pointer">

                                {/* Product Image */}
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                />

                                {/* Tags (New / Best Seller) */}
                                {product.tag && (
                                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-gray-900 rounded-sm">
                                        {product.tag}
                                    </div>
                                )}

                                {/* Quick Add Overlay (Appears on Hover) */}
                                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-gradient-to-t from-black/60 to-transparent">
                                    <button className="w-full bg-white text-gray-900 py-3 rounded-sm font-bold text-xs uppercase tracking-widest hover:bg-amber-700 hover:text-white transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg">
                                        <ShoppingBag size={14} />
                                        Add to Cart
                                    </button>
                                </div>
                            </div>

                            {/* Product Details */}
                            <div>
                                <div className="flex justify-between items-start mb-1">
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                    {product.category}
                  </span>
                                    <div className="flex items-center gap-1">
                                        <Star size={10} className="fill-amber-500 text-amber-500" />
                                        <span className="text-xs font-medium text-gray-500">{product.rating}</span>
                                    </div>
                                </div>

                                <h3 className="text-lg font-serif text-gray-900 mb-1 group-hover:text-amber-700 transition-colors cursor-pointer">
                                    {product.name}
                                </h3>

                                <span className="text-sm font-bold text-stone-600">
                  {product.price}
                </span>
                            </div>

                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}