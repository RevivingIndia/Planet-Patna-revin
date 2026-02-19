import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Café | Planet Patna Foundation',
  description:
    'A sophisticated culinary retreat with premium coffee and artisanal fare. Space for productivity and relaxation.',
};

export default function CafePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative w-full h-[40vh] min-h-[280px] md:h-[45vh] md:min-h-[320px] overflow-hidden">
        <Image
          src="/explore/cafe.jpg"
          alt="Café - Planet Patna Foundation"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <span className="block text-xs font-bold tracking-[0.25em] uppercase text-amber-300/90 mb-2">
              Facilities
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight">
              Café
            </h1>
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-24 bg-white overflow-hidden text-gray-900 font-sans">
        <div className="absolute left-6 md:left-12 lg:left-24 top-0 h-full w-[1px] bg-gray-100 z-0 hidden md:block" />
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-[1px] bg-amber-500" />
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-stone-400">
                    Facilities
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 tracking-tight">
                  <span className="font-serif italic text-amber-800">
                    Café
                  </span>
                </h2>
              </div>
              <p className="text-gray-500 font-light leading-relaxed text-base text-justify">
                The Café at Planet Patna serves as a sophisticated culinary retreat designed to meet the diverse needs of our discerning visitors and members. This refined space functions as a versatile social hub, offering a curated menu of premium coffee and artisanal fare within a tranquil, modern atmosphere. Whether facilitating high-level professional consultations, providing a quiet enclave for intellectual reflection, or acting as a vibrant venue for community engagement, our Café exemplifies our commitment to exceptional hospitality. It is a space where the pursuit of leisure meets the spark of meaningful dialogue, making it an essential destination for both productivity and relaxation.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_24px_48px_-12px_rgba(0,0,0,0.12)] ring-1 ring-black/5 bg-gray-100">
                <Image
                  src="/amenities-services/cafe-dining.jpg"
                  alt="Café & Dining - Planet Patna"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-gray-200 text-center">
            <Link
              href="/facilities"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-600 text-white font-medium hover:bg-amber-700 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Facilities
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
