import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Bal Manohar Jalan Museum | Planet Patna Foundation',
  description:
    'The Bal Manohar Jalan Museum is the flagship museum initiative of the Planet Patna Foundation, featuring Patna Qalam (Company School) paintings, antiquities, and the R.K. Jalan Archives.',
};

const GALLERY_IMAGES = [
  { src: '/museum/dsc-5104.jpg', alt: 'Bal Manohar Jalan Museum - Gallery view' },
  { src: '/museum/dsc-5111.jpg', alt: 'Bal Manohar Jalan Museum - Collection' },
  { src: '/museum/dsc-5137.jpg', alt: 'Bal Manohar Jalan Museum - Exhibition' },
];

export default function MuseumPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Banner Header - same style as Archives */}
      <section className="relative w-full h-[40vh] min-h-[280px] md:h-[45vh] md:min-h-[320px] overflow-hidden">
        <Image
          src="/museum/banner.jpg"
          alt="Bal Manohar Jalan Museum - Planet Patna Foundation"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <span className="block text-xs font-bold tracking-[0.25em] uppercase text-amber-300/90 mb-2">
              Our Museum
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight">
              Bal Manohar Jalan Museum
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="relative py-16 md:py-24 bg-white overflow-hidden text-gray-900 font-sans">
        <div className="absolute left-0 top-0 h-full w-[1px] bg-gray-100 left-8 md:left-24 lg:left-32 z-0 hidden md:block" />

        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-amber-500" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">
                Bal Manohar Jalan Museum
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 tracking-tight">
              A Contemporary Cultural Institution <br />
              <span className="font-serif italic text-amber-700">Dedicated to Heritage</span>
            </h2>
          </div>

          {/* Text left, wall-painting right */}
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-16 md:mb-20">
            <div className="lg:col-span-6 space-y-6">
              <p className="text-gray-500 font-light leading-relaxed text-base text-justify">
                The <span className="text-gray-900 font-medium">Bal Manohar Jalan Museum</span> is the flagship museum initiative of the Planet Patna Foundation, conceived as a contemporary cultural institution dedicated to safeguarding the region&apos;s pre-independence and early modern legacy.
              </p>
              <p className="text-gray-500 font-light leading-relaxed text-base text-justify">
                The museum&apos;s world-class collection is headlined by the <span className="text-gray-900 font-medium">Patna Qalam (Company School)</span> paintings, a rare fusion of Mughal and European styles that documents the daily lives of eighteenth- and nineteenth-century Indians. These works are complemented by a carefully curated selection of antiquities, including Patna glass and metal objects, each reflecting the sophisticated material culture of the period.
              </p>
            </div>
            <div className="lg:col-span-6 relative w-full aspect-[3/2] rounded-2xl overflow-hidden bg-gray-50/90 ring-1 ring-black/5 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.08)]">
              <Image
                src="/museum/wall-painting.jpg"
                alt="Bal Manohar Jalan Museum - Wall painting and heritage art"
                fill
                className="object-contain object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Gallery: 3 images in a clean grid */}
          <div className="mb-4">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">
              Museum Gallery
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-8">
            {GALLERY_IMAGES.map((img) => (
              <div
                key={img.src}
                className="relative aspect-[4/5] rounded-2xl overflow-hidden group shadow-[0_24px_48px_-12px_rgba(0,0,0,0.15)] ring-1 ring-black/5"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Links to sub-pages */}
      <section className="py-12 md:py-16 bg-gray-50/80 border-t border-gray-100">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <Link
              href="/museum/bal-manohar-jalan"
              className="group flex items-center justify-between p-6 border border-gray-200 rounded-xl hover:border-amber-700/50 bg-white transition-colors duration-300"
            >
              <span className="text-lg font-serif text-gray-900 group-hover:text-amber-700 transition-colors">
                Bal Manohar Jalan
              </span>
              <ArrowRight size={20} className="text-gray-400 group-hover:text-amber-700 group-hover:translate-x-1 transition-all" />
            </Link>
            <Link
              href="/museum/collection"
              className="group flex items-center justify-between p-6 border border-gray-200 rounded-xl hover:border-amber-700/50 bg-white transition-colors duration-300"
            >
              <span className="text-lg font-serif text-gray-900 group-hover:text-amber-700 transition-colors">
                Collection
              </span>
              <ArrowRight size={20} className="text-gray-400 group-hover:text-amber-700 group-hover:translate-x-1 transition-all" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
