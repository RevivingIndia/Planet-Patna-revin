import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Facilities | Planet Patna Foundation',
  description:
    'Multi-purpose Hall, Club, and Café at Planet Patna—venues for events, membership, and hospitality.',
};

const FACILITIES = [
  {
    slug: 'multi-purpose-hall',
    title: 'Multi-purpose Hall',
    description: 'A dedicated, flexible venue for conferences, lectures, workshops, and events. Available for rental.',
    image: '/explore/mph.jpg',
    href: '/facilities/multi-purpose-hall',
  },
  {
    slug: 'club',
    title: 'Club',
    description: 'An exclusive urban sanctuary for social excellence and intellectual growth.',
    image: '/explore/club.jpg',
    href: '/facilities/club',
  },
  {
    slug: 'cafe',
    title: 'Café',
    description: 'A sophisticated culinary retreat with premium coffee and artisanal fare.',
    image: '/explore/cafe.jpg',
    href: '/facilities/cafe',
  },
];

export default function FacilitiesPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative w-full h-[40vh] min-h-[280px] md:h-[45vh] md:min-h-[320px] overflow-hidden">
        <Image
          src="/explore/mph.jpg"
          alt="Facilities - Planet Patna Foundation"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <span className="block text-xs font-bold tracking-[0.25em] uppercase text-amber-300/90 mb-2">
              Planet Patna
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight">
              Facilities
            </h1>
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-24 bg-white overflow-hidden text-gray-900 font-sans">
        <div className="absolute left-6 md:left-12 lg:left-24 top-0 h-full w-[1px] bg-gray-100 z-0 hidden md:block" />
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="flex items-center gap-3 mb-12">
            <span className="w-8 h-[1px] bg-amber-500" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">
              Our Facilities
            </span>
          </div>
          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {FACILITIES.map((facility) => (
              <Link
                key={facility.slug}
                href={facility.href}
                className="group block rounded-2xl overflow-hidden shadow-[0_24px_48px_-12px_rgba(0,0,0,0.12)] ring-1 ring-black/5 bg-gray-50 hover:ring-amber-500/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-lg font-serif text-gray-900 mb-2 group-hover:text-amber-700 transition-colors">
                    {facility.title}
                  </h2>
                  <p className="text-gray-500 font-light text-sm leading-relaxed">
                    {facility.description}
                  </p>
                  <span className="inline-flex items-center gap-1 mt-4 text-amber-600 text-sm font-medium group-hover:gap-2 transition-all">
                    Learn more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
