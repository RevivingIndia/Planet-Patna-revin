'use client';

import { useState, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { ALL_SHOP_PRODUCTS, type ShopProduct } from '@/lib/shop-products';

function ProductQuickView({
    product,
    onClose,
}: {
    product: ShopProduct;
    onClose: () => void;
}) {
    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) onClose();
    };

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleEscape);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = '';
        };
    }, [onClose]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={handleBackdropClick}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-lg bg-white rounded-lg shadow-2xl overflow-hidden"
            >
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 hover:bg-white shadow-md transition-colors"
                    aria-label="Close"
                >
                    <X size={20} className="text-gray-800" />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    <div className="relative aspect-square bg-stone-100">
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                    <div className="p-6 md:p-8 flex flex-col justify-center">
                        <h2 className="text-xl font-serif text-gray-900 mb-2">
                            {product.name}
                        </h2>
                        <p className="text-stone-600 text-sm leading-relaxed mb-6">
                            {product.description}
                        </p>
                        <button
                            type="button"
                            onClick={onClose}
                            className="w-full py-3 px-4 bg-gray-900 text-white text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-amber-700 transition-colors"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default function ShopPage() {
    const [quickViewProduct, setQuickViewProduct] = useState<ShopProduct | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const openQuickView = useCallback((product: ShopProduct) => {
        setQuickViewProduct(product);
    }, []);

    const closeQuickView = useCallback(() => {
        setQuickViewProduct(null);
    }, []);

    return (
        <>
            <main className="min-h-screen bg-stone-50">
                <div className="container mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-24">
                    <header className="mb-14">
                        <span className="text-amber-700 text-xs font-bold tracking-[0.2em] uppercase mb-3 block">
                            Souvenir Shop
                        </span>
                        <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
                            Visit the Souvenir Shop
                        </h1>
                        <p className="text-stone-600 max-w-2xl">
                            Browse our full range of books, postcards, coasters, and keepsakes—each inspired by the museum and Patna’s heritage.
                        </p>
                    </header>

                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                        {ALL_SHOP_PRODUCTS.map((product) => (
                            <button
                                key={product.id}
                                type="button"
                                className="group cursor-pointer text-left w-full"
                                onClick={() => openQuickView(product)}
                            >
                                <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-stone-200 mb-4">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                    />
                                    <div className="absolute inset-0 pointer-events-none bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-end justify-center p-3 opacity-0 group-hover:opacity-100">
                                        <span className="text-white text-[10px] font-bold uppercase tracking-widest bg-black/60 px-3 py-2 rounded">
                                            Quick View
                                        </span>
                                    </div>
                                </div>
                                <h3 className="text-base font-serif text-gray-900 group-hover:text-amber-700 transition-colors">
                                    {product.name}
                                </h3>
                            </button>
                        ))}
                    </div>
                </div>
            </main>

            {mounted && createPortal(
                <AnimatePresence>
                    {quickViewProduct && (
                        <ProductQuickView
                            key={quickViewProduct.id}
                            product={quickViewProduct}
                            onClose={closeQuickView}
                        />
                    )}
                </AnimatePresence>,
                document.body
            )}
        </>
    );
}
