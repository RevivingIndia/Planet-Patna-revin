import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Engage & Learn | Planet Patna Foundation',
  description:
    'Events & Programs, Learning & Research, Beyond Gallery, Get Involved, and Blog—discover ways to connect with heritage and culture.',
};

const ENGAGE_ITEMS = [
  {
    slug: 'events-programs',
    title: 'Events & Program',
    description: 'Talks, workshops, screenings, and cultural programs that bring the collection and heritage to life.',
    image: '/beyond-the-walls/events-programs-banner.jpg',
    href: '/events-programs',
    comingSoon: false,
  },
  {
    slug: 'learning-research',
    title: 'Learning & Research',
    description: 'Our courses, workshops, publications, and research projects in museology, conservation, and cultural heritage.',
    image: '/beyond-the-walls/learning-research.jpg',
    href: '/learning-research',
    comingSoon: false,
  },
  {
    slug: 'beyond-gallery',
    title: 'Beyond Gallery',
    description: 'Extending the museum experience into the city with pop-up displays and digital heritage trails.',
    image: '/beyond-the-walls/beyond-gallery.jpg',
    href: '/beyond-gallery',
    comingSoon: false,
  },
  {
    slug: 'get-involved',
    title: 'Get Involved',
    description: 'Become a patron of the arts. Enjoy exclusive access to previews, curator talks, and private viewings.',
    image: '/beyond-the-walls/get-involved.jpg',
    href: '/get-involved',
    comingSoon: false,
  },
  {
    slug: 'blog',
    title: 'Blog',
    description: 'Stories, updates, and insights from the museum and Patna’s heritage.',
    image: '/beyond-the-walls/blog.jpg',
    href: '/blog',
    comingSoon: false,
  },
];

export default function EngageLearnPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative w-full h-[40vh] min-h-[280px] md:h-[45vh] md:min-h-[320px] overflow-hidden">
        <Image
          src="/beyond-the-walls/events-programs-banner.jpg"
          alt="Engage & Learn - Planet Patna Foundation"
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
              Engage & Learn
            </h1>
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-24 bg-white overflow-hidden text-gray-900 font-sans">
        <div className="absolute left-6 md:left-12 lg:left-24 top-0 h-full w-[1px] bg-gray-100 z-0 hidden md:block" />
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-amber-500" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-stone-400">
                Our Programs
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 tracking-tight">
              <span className="font-serif italic text-amber-800">
                Engage &amp; Learn
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {ENGAGE_ITEMS.map((item) =>
              item.href ? (
                <Link
                  key={item.slug}
                  href={item.href}
                  className="group block rounded-2xl overflow-hidden shadow-[0_24px_48px_-12px_rgba(0,0,0,0.12)] ring-1 ring-black/5 bg-gray-50 hover:ring-amber-500/50 hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors">
                      {item.title}
                    </h2>
                    <p className="text-gray-500 font-light text-sm leading-relaxed">
                      {item.description}
                    </p>
                    <span className="inline-flex items-center gap-1 mt-4 text-amber-600 text-sm font-medium group-hover:gap-2 transition-all">
                      Learn more
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ) : (
                <div
                  key={item.slug}
                  className="block rounded-2xl overflow-hidden shadow-[0_24px_48px_-12px_rgba(0,0,0,0.12)] ring-1 ring-black/5 bg-gray-50 opacity-90"
                >
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-2">
                      {item.title}
                    </h2>
                    <p className="text-gray-500 font-light text-sm leading-relaxed">
                      {item.description}
                    </p>
                    <span className="inline-flex items-center gap-1 mt-4 text-gray-400 text-sm font-medium">
                      Coming Soon
                    </span>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
