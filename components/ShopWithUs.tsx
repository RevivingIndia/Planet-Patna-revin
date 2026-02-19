'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { getFeaturedProducts } from '@/lib/shop-products';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

export default function ShopWithUs() {
    const products = getFeaturedProducts();

    return (
        <section id="shop" className="py-24 bg-stone-50 scroll-mt-20">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-2xl mx-auto mb-16"
                >
                    <span className="text-amber-700 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                        Souvenir Shop
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
                        Shop with Us
                    </h2>
                    <p className="text-stone-600 leading-relaxed">
                        Take a piece of Patna’s story home. Our souvenir shop offers books, postcards, coasters, and more—each inspired by the museum’s collections and the city’s heritage.
                    </p>
                </motion.div>

                {/* Product Grid - only featured (3) */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-40px' }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto"
                >
                    {products.map((product) => (
                        <motion.div
                            key={product.id}
                            variants={itemVariants}
                            transition={{ duration: 0.4 }}
                            className="group relative"
                        >
                            <Link href="/shop" className="block">
                                <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-stone-200 mb-5">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-600 ease-out"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 flex items-end justify-center p-4 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span className="inline-flex items-center gap-2 bg-white text-gray-900 py-3 px-5 rounded-sm font-bold text-xs uppercase tracking-widest">
                                            Know More
                                            <ArrowRight size={14} />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                            <div>
                                <h3 className="text-lg font-serif text-gray-900 mb-1 group-hover:text-amber-700 transition-colors">
                                    {product.name}
                                </h3>
                                <p className="text-sm text-stone-500 leading-relaxed line-clamp-2 mb-3">
                                    {product.description}
                                </p>
                                <Link
                                    href="/shop"
                                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-900 hover:text-amber-700 transition-colors"
                                >
                                    Know More
                                    <ArrowRight size={12} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA - goes to full shop page */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-14"
                >
                    <Link
                        href="/shop"
                        className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-amber-700 hover:text-amber-800 transition-colors border-b-2 border-amber-700 pb-1"
                    >
                        Visit the Souvenir Shop
                        <ArrowRight size={16} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
