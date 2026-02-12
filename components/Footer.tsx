'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100 py-16 md:py-20 relative overflow-hidden font-sans">
        {/* Decorative line */}
        <div className="absolute left-6 md:left-12 lg:left-24 top-0 h-full w-[1px] bg-gradient-to-b from-amber-500/50 to-transparent z-0 hidden md:block" />

        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          {/* Top section with branding and intro */}
          <div className="mb-16 pb-16 border-b border-gray-700/50">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[1px] bg-amber-500" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-amber-400">
                  Planet Patna Foundation
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight mb-4">
                Bridging Heritage with Progress
              </h2>
              <p className="text-gray-400 font-light leading-relaxed max-w-xl">
                Preserving and promoting the rich cultural and historical legacy of Patna for future generations through archives, museums, and community engagement.
              </p>
            </div>
          </div>

          {/* Main footer content grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* About */}
            <div>
              <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-amber-400 mb-5">About</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about-us" className="text-gray-400 hover:text-amber-400 font-light transition-colors text-sm">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/heritage-walk" className="text-gray-400 hover:text-amber-400 font-light transition-colors text-sm">
                    Heritage Walk
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-amber-400 font-light transition-colors text-sm">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Explore */}
            <div>
              <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-amber-400 mb-5">Explore</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/museum" className="text-gray-400 hover:text-amber-400 font-light transition-colors text-sm">
                    Museum
                  </Link>
                </li>
                <li>
                  <Link href="/archives" className="text-gray-400 hover:text-amber-400 font-light transition-colors text-sm">
                    Archives
                  </Link>
                </li>
                <li>
                  <Link href="/collection" className="text-gray-400 hover:text-amber-400 font-light transition-colors text-sm">
                    Collection
                  </Link>
                </li>
              </ul>
            </div>

            {/* Engage & Learn */}
            <div>
              <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-amber-400 mb-5">Engage & Learn</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/engage-learn" className="text-gray-400 hover:text-amber-400 font-light transition-colors text-sm">
                    Engage & Learn
                  </Link>
                </li>
                <li>
                  <Link href="/events-programs" className="text-gray-400 hover:text-amber-400 font-light transition-colors text-sm">
                    Events & Programs
                  </Link>
                </li>
                <li>
                  <Link href="/get-involved" className="text-gray-400 hover:text-amber-400 font-light transition-colors text-sm">
                    Get Involved
                  </Link>
                </li>
              </ul>
            </div>

            {/* Facilities & Contact */}
            <div>
              <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-amber-400 mb-5">Facilities</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/facilities" className="text-gray-400 hover:text-amber-400 font-light transition-colors text-sm">
                    Our Facilities
                  </Link>
                </li>
                <li>
                  <Link href="/shop" className="text-gray-400 hover:text-amber-400 font-light transition-colors text-sm">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-amber-400 font-light transition-colors text-sm">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter & Social */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 pb-12 border-b border-gray-700/50">
            {/* Newsletter */}
            <div>
              <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-amber-400 mb-4">Stay Updated</h3>
              <p className="text-gray-400 font-light text-sm mb-4">
                Subscribe to our newsletter for events and updates
              </p>
              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2.5 bg-gray-800 text-white text-sm border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent placeholder-gray-500"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-amber-600 hover:bg-amber-700 text-white text-sm font-medium rounded-lg transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-amber-400 mb-4">Connect With Us</h3>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-amber-600 text-gray-300 hover:text-white rounded-full flex items-center justify-center transition-all duration-300" aria-label="Facebook">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-amber-600 text-gray-300 hover:text-white rounded-full flex items-center justify-center transition-all duration-300" aria-label="Instagram">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-amber-600 text-gray-300 hover:text-white rounded-full flex items-center justify-center transition-all duration-300" aria-label="Twitter">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 002.856-3.215 9.954 9.954 0 01-2.8.856 4.958 4.958 0 0021.6-2.414c-.78 1.396-2.08 2.755-3.708 3.7a9.862 9.862 0 01-1.07.4 4.92 4.92 0 0089.2 4.13 4.822 4.822 0 01-2.716 1.385 9.88 9.88 0 01-1.141-.161 19.047 19.047 0 01-1.005-.2 4.555 4.555 0 002.707 2.905 9.933 9.933 0 01-2.746.27c1.602 1.032 3.536 1.621 5.704 1.621 8.446 0 13.057-7 13.057-13.056 0-.199-.004-.398-.013-.595a9.305 9.305 0 002.275-2.371z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-amber-600 text-gray-300 hover:text-white rounded-full flex items-center justify-center transition-all duration-300" aria-label="YouTube">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom info */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-gray-400 text-xs font-light">
            <div>
              <p>© 2025 Planet Patna Foundation. All rights reserved.</p>
              <p className="mt-1">Preserving the heritage, inspiring the future</p>
            </div>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-amber-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-amber-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-amber-400 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 bg-amber-600 hover:bg-amber-700 text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl z-50"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </>
  );
}

