'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HomeContact() {
    return (
        <section id="home-contact" className="relative py-12 md:py-12 bg-white overflow-hidden text-gray-900 font-sans scroll-mt-20">
            <div className="absolute left-0 top-0 h-full w-[1px] bg-gray-100 left-8 md:left-24 lg:left-32 z-0 hidden md:block" />

            <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* IMAGE COLUMN */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative order-2 lg:order-1"
                    >
                        <div className="relative h-[320px] md:h-[420px] w-full rounded-[2rem] overflow-hidden shadow-2xl group cursor-pointer">
                            <Link href="/contact" className="block h-full w-full">
                                <Image
                                    src="/contact/contact-banner.jpg"
                                    alt="Contact Us - Planet Patna"
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                    priority
                                />
                                <span className="sr-only">Go to Contact Us page</span>
                            </Link>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                        </div>
                    </motion.div>

                    {/* TEXT COLUMN */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="order-1 lg:order-2"
                    >
                        <div className="mb-8">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-8 h-[1px] bg-amber-500" />
                                <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">
                                    Get in Touch
                                </span>
                            </div>
                            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 tracking-tight leading-none mb-6">
                                Contact <br />
                                <span className="font-serif italic text-amber-700">Us</span>
                            </h2>
                        </div>

                        <div className="prose prose-lg text-gray-500 font-light leading-relaxed mb-10">
                            <p className="mb-4">
                                Have questions about visits, collaborations, or programming at{' '}
                                <span className="text-gray-900 font-medium">Planet Patna Foundation</span>? Our team is
                                available to help you plan your experience and respond to enquiries.
                            </p>
                            <p className="text-base">
                                Reach out to us for bookings, institutional partnerships, or to learn more about the
                                museum and its initiatives.
                            </p>
                        </div>

                        <Link
                            href="/contact"
                            className="group inline-flex items-center gap-3 text-xs font-bold tracking-widest uppercase text-gray-900 hover:text-amber-700 transition-colors duration-300"
                        >
                            <span>Contact Us</span>
                            <span className="bg-black text-white p-2 rounded-full group-hover:bg-amber-700 transition-all duration-300 group-hover:translate-x-2">
                                <ArrowRight size={14} />
                            </span>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

