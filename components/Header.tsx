'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [museumOpen, setMuseumOpen] = useState(false);
  const [facilitiesOpen, setFacilitiesOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-6">
          {/* Logo */}
          <Link href="/" className="text-2xl md:text-3xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
            Planet Patna
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-800 hover:text-blue-600 font-normal text-base transition-colors">
              Home
            </Link>
            <Link href="/about-us" className="text-gray-800 hover:text-blue-600 font-normal text-base transition-colors">
              About Us
            </Link>
            <Link href="/archives" className="text-gray-800 hover:text-blue-600 font-normal text-base transition-colors">
              Archives
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setMuseumOpen(true)}
              onMouseLeave={() => setMuseumOpen(false)}
            >
              <Link
                href="/museum"
                className="text-gray-800 hover:text-blue-600 font-normal text-base transition-colors inline-flex items-center gap-1"
              >
                Museum
                <svg className={`w-4 h-4 transition-transform ${museumOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              {museumOpen && (
                <div className="absolute top-full left-0 pt-1">
                  <div className="bg-white rounded-md shadow-lg ring-1 ring-black/5 py-1 min-w-[200px]">
                    <Link
                      href="/museum/bal-manohar-jalan"
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                    >
                      Bal Manohar Jalan
                    </Link>
                    <Link
                      href="/museum/collection"
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                    >
                      Collection
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <div
              className="relative"
              onMouseEnter={() => setFacilitiesOpen(true)}
              onMouseLeave={() => setFacilitiesOpen(false)}
            >
              <span className="text-gray-800 font-normal text-base inline-flex items-center gap-1 cursor-default">
                Facilities
                <svg className={`w-4 h-4 transition-transform ${facilitiesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
              {facilitiesOpen && (
                <div className="absolute top-full left-0 pt-1">
                  <div className="bg-white rounded-md shadow-lg ring-1 ring-black/5 py-1 min-w-[220px]">
                    <Link
                      href="/facilities/multi-purpose-hall"
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                    >
                      Multi-purpose Hall
                    </Link>
                    <Link
                      href="/facilities/club"
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                    >
                      Club
                    </Link>
                    <Link
                      href="/facilities/cafe"
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                    >
                      Café
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link href="/events-programs" className="text-gray-800 hover:text-blue-600 font-normal text-base transition-colors">
              Events & Programs
            </Link>
            <Link href="/learning-research" className="text-gray-800 hover:text-blue-600 font-normal text-base transition-colors">
              Learning and Research
            </Link>
            <Link href="/heritage-walk" className="text-gray-800 hover:text-blue-600 font-normal text-base transition-colors">
              Heritage Walks
            </Link>
            <Link href="/contact" className="text-gray-800 hover:text-blue-600 font-normal text-base transition-colors">
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link
              href="/"
              className="block py-2 text-gray-800 hover:text-blue-600 font-normal transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="block py-2 text-gray-800 hover:text-blue-600 font-normal transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/archives"
              className="block py-2 text-gray-800 hover:text-blue-600 font-normal transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Archives
            </Link>
            <div className="py-2">
              <span className="block py-1 text-xs font-bold tracking-wider uppercase text-gray-400">
                Museum
              </span>
              <Link
                href="/museum/bal-manohar-jalan"
                className="block py-1.5 pl-3 text-gray-800 hover:text-blue-600 font-normal transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Bal Manohar Jalan
              </Link>
              <Link
                href="/museum/collection"
                className="block py-1.5 pl-3 text-gray-800 hover:text-blue-600 font-normal transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Collection
              </Link>
            </div>
            <div className="py-2">
              <span className="block py-1 text-xs font-bold tracking-wider uppercase text-gray-400">
                Facilities
              </span>
              <Link
                href="/facilities/multi-purpose-hall"
                className="block py-1.5 pl-3 text-gray-800 hover:text-blue-600 font-normal transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Multi-purpose Hall
              </Link>
              <Link
                href="/facilities/club"
                className="block py-1.5 pl-3 text-gray-800 hover:text-blue-600 font-normal transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Club
              </Link>
              <Link
                href="/facilities/cafe"
                className="block py-1.5 pl-3 text-gray-800 hover:text-blue-600 font-normal transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Café
              </Link>
            </div>
            <Link
              href="/events-programs"
              className="block py-2 text-gray-800 hover:text-blue-600 font-normal transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Events & Programs
            </Link>
            <Link
              href="/learning-research"
              className="block py-2 text-gray-800 hover:text-blue-600 font-normal transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Learning and Research
            </Link>
            <Link
              href="/heritage-walk"
              className="block py-2 text-gray-800 hover:text-blue-600 font-normal transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Heritage Walks
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-gray-800 hover:text-blue-600 font-normal transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

