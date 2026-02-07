import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Archives | Planet Patna Foundation',
  description:
    'The archives at Planet Patna Foundation form the intellectual core of the institution, serving as a vital bridge between the colonial era and the modern age.',
};

export default function ArchivesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Banner Header */}
      <section className="relative w-full h-[40vh] min-h-[280px] md:h-[45vh] md:min-h-[320px] overflow-hidden">
        <Image
          src="/archives/banner.png"
          alt="Archives - Planet Patna Foundation"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <span className="block text-xs font-bold tracking-[0.25em] uppercase text-amber-300/90 mb-2">
              Our Archives
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight">
              Archives
            </h1>
          </div>
        </div>
      </section>

      {/* Our Archives - A Glimpse Through Our Archival Journey: text left, image right */}
      <section className="relative py-16 md:py-24 bg-white overflow-hidden text-gray-900 font-sans">
        <div className="absolute left-0 top-0 h-full w-[1px] bg-gray-100 left-8 md:left-24 lg:left-32 z-0 hidden md:block" />

        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="mb-12">
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
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-6 space-y-10">
              <div className="pb-10 border-b border-gray-200">
                <p className="text-gray-500 font-light leading-relaxed text-base text-justify">
                  The archives at <span className="text-gray-900 font-medium">Planet Patna Foundation</span> form the intellectual core of the institution, serving as a vital bridge between the colonial era and the modern age. Meticulously curated, the collection houses rare twentieth-century documents ranging from private correspondence and institutional records to vintage invitation cards from the Raj period. Together, these materials offer an intimate, behind-the-scenes view of the people, organizations, and pivotal moments that shaped the social, cultural, and administrative life of the region.
                </p>
              </div>
              <div>
                <p className="text-gray-500 font-light leading-relaxed text-base text-justify">
                  More than a repository of paper, the archives are conceived as an immersive historical experience. From tracing the formative years of institutions such as Patna Medical College through centenary records to uncovering the personal histories of the city&apos;s earliest schools, theaters, and societies, the collection animates the lived realities behind official history. Long celebrated as a &ldquo;City of Museums,&rdquo; Patna finds in this archive a space where memory, scholarship, and storytelling converge, inviting researchers and visitors alike to engage deeply with the evolution, resilience, and enduring spirit of the city.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/5] rounded-[1.75rem] overflow-hidden shadow-[0_28px_60px_-18px_rgba(0,0,0,0.18)] ring-1 ring-black/5 group">
                <Image
                  src="/archives/gallery-full-archive.jpg"
                  alt="Gallery Full Archive - Planet Patna Foundation"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Links to sub-pages */}
      <section className="py-12 md:py-16 bg-gray-50/80 border-t border-gray-100">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <Link
              href="/archives/radha-krishna-jalan"
              className="group flex items-center justify-between p-6 border border-gray-200 rounded-xl hover:border-amber-700/50 bg-white transition-colors duration-300"
            >
              <span className="text-lg font-serif text-gray-900 group-hover:text-amber-700 transition-colors">
                Dewan Bahadur Radha Krishna Jalan
              </span>
              <ArrowRight size={20} className="text-gray-400 group-hover:text-amber-700 group-hover:translate-x-1 transition-all" />
            </Link>
            <Link
              href="/archives/collection"
              className="group flex items-center justify-between p-6 border border-gray-200 rounded-xl hover:border-amber-700/50 bg-white transition-colors duration-300"
            >
              <span className="text-lg font-serif text-gray-900 group-hover:text-amber-700 transition-colors">
                Explore Collection
              </span>
              <ArrowRight size={20} className="text-gray-400 group-hover:text-amber-700 group-hover:translate-x-1 transition-all" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
