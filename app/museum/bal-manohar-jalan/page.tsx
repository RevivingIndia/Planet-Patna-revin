import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Bal Manohar Jalan | Planet Patna Foundation',
  description:
    'Bal Manohar Jalan, grandson of Dewan Bahadur Radha Krishna Jalan, is a key figure whose lifelong passion for preservation laid the groundwork for the Planet Patna Foundation.',
};

export default function BalManoharJalanPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Banner Header - same as Museum page */}
      <section className="relative w-full h-[40vh] min-h-[280px] md:h-[45vh] md:min-h-[320px] overflow-hidden">
        <Image
          src="/museum/banner.jpg"
          alt="Bal Manohar Jalan - Planet Patna Foundation"
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
              Bal Manohar Jalan
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="relative py-16 md:py-24 bg-white overflow-hidden text-gray-900 font-sans">
        <div className="absolute left-0 top-0 h-full w-[1px] bg-gray-100 left-8 md:left-24 lg:left-32 z-0 hidden md:block" />

        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="mb-4">
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">
                  Legacy
                </span>
              </div>
              <p className="text-gray-500 font-light leading-relaxed text-base text-justify">
                <span className="text-gray-900 font-medium">Bal Manohar Jalan</span>, grandson of Dewan Bahadur Radha Krishna Jalan, is a key figure whose lifelong passion for preservation laid the groundwork for the Planet Patna Foundation. Raised in the historic Quila House of Patna City, he grew up surrounded by antiques, artworks, and historical objects that shaped his early intellectual curiosity.
              </p>
              <p className="text-gray-500 font-light leading-relaxed text-base text-justify">
                His collecting journey began modestly with colonial-era postal stamps and markings, later expanding to include Pala period sculptures—specially the Kalyan-Sundar sculpture. He has also collected terracottas, glass, silver objects and a few Bidri ware.
              </p>
              <p className="text-gray-500 font-light leading-relaxed text-base text-justify">
                A defining moment came when he discovered a record detailing coins from his grandfather&apos;s collection that had entered the National Museum, an encounter that sparked a dedicated pursuit to collect rare coins. Over time, he made the decisive choice to exchange his East India Company stamp collection for an extraordinary variety of Company School Paintings on paper and mica, particularly from the eighteenth and nineteenth century.
              </p>
              <p className="text-gray-500 font-light leading-relaxed text-base text-justify">
                The extraordinary art of Patna Qalam and other regional styles from his collection can be witnessed in our museum at Planet Patna.
              </p>
            </div>

            {/* Image from public/ - plain img to avoid Next.js processing (large file) */}
            <div className="lg:col-span-5">
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_24px_48px_-12px_rgba(0,0,0,0.15)] ring-1 ring-black/5 bg-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/museum/bal-manohar-jalan.jpg"
                  alt="Bal Manohar Jalan"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Museum */}
      <section className="py-12 md:py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <Link
            href="/museum"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-amber-700 font-medium transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Museum
          </Link>
        </div>
      </section>
    </main>
  );
}
