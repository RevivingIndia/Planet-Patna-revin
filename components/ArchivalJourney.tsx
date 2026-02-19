'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ArchivalJourney() {
  return (
    <section id="archives" className="relative py-16 md:py-24 bg-white overflow-hidden text-gray-900 font-sans scroll-mt-20">
      <div className="absolute left-0 top-0 h-full w-[1px] bg-gray-100 left-8 md:left-24 lg:left-32 z-0 hidden md:block" />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-amber-500" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">
              Our Archives
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 tracking-tight">
            A Glimpse Through Our <br />
            <span className="font-serif italic text-amber-700">Archival Journey of the Past</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Text - two sections, justified */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-6 space-y-10"
          >
            <div className="pb-10 border-b border-gray-200">
              <p className="text-gray-500 font-light leading-relaxed text-base text-justify">
                The archives at <span className="text-gray-900 font-medium">Planet Patna Foundation</span> form the intellectual core of the institution, serving as a vital bridge between the colonial era and the modern age. Meticulously curated, the collection houses rare twentieth-century documents ranging from private correspondence and institutional records to vintage invitation cards from the Raj period. Together, these materials offer an intimate, behind-the-scenes view of the people, organizations, and pivotal moments that shaped the social, cultural, and administrative life of the region.
              </p>
            </div>
            <div>
              <p className="text-gray-500 font-light leading-relaxed text-base text-justify mb-10">
                More than a repository of paper, the archives are conceived as an immersive historical experience. From tracing the formative years of institutions such as Patna Medical College through centenary records to uncovering the personal histories of the city&apos;s earliest schools, theaters, and societies, the collection animates the lived realities behind official history. Long celebrated as a &ldquo;City of Museums,&rdquo; Patna finds in this archive a space where memory, scholarship, and storytelling converge, inviting researchers and visitors alike to engage deeply with the evolution, resilience, and enduring spirit of the city.
              </p>
              <Link
                href="/archives"
                className="group inline-flex items-center gap-3 text-xs font-bold tracking-widest uppercase text-gray-900 hover:text-amber-700 transition-colors duration-300"
              >
                <span>Read more</span>
                <span className="bg-black text-white p-2 rounded-full group-hover:bg-amber-700 transition-all duration-300 group-hover:translate-x-2">
                  <ArrowRight size={14} />
                </span>
              </Link>
            </div>
          </motion.div>

          {/* Two images - editorial style */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
              <div className="relative aspect-[4/5] rounded-[1.5rem] overflow-hidden shadow-[0_20px_40px_-12px_rgba(0,0,0,0.12)] ring-1 ring-black/5 group">
                <Image
                  src="/archives/education.jpg"
                  alt="Archival theme - Education"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute bottom-4 left-4 text-[10px] font-bold tracking-[0.2em] uppercase text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Education
                </span>
              </div>
              <div className="relative aspect-[4/5] rounded-[1.5rem] overflow-hidden shadow-[0_20px_40px_-12px_rgba(0,0,0,0.12)] ring-1 ring-black/5 group sm:mt-8">
                <Image
                  src="/archives/sports-footprints.jpg"
                  alt="Archival theme - Sports and famous Footprints"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute bottom-4 left-4 text-[10px] font-bold tracking-[0.2em] uppercase text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Sports &amp; Footprints
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
