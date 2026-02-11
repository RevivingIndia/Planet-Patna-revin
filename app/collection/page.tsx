import Link from 'next/link';
import Image from 'next/image';

export default function CollectionPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="relative py-12 md:py-16 bg-gray-50/80 overflow-hidden text-gray-900 font-sans">
        <div className="absolute left-6 md:left-12 lg:left-24 top-0 h-full w-[1px] bg-gray-200 z-0 hidden md:block" />
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="text-center mb-10 md:mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-amber-500" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">
                Our Collection
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 tracking-tight">
              Archival Gallery &amp;{' '}
              <span className="font-serif italic text-amber-700">
                Bal Manohar Jalan Museum
              </span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-gray-500 text-base md:text-lg leading-relaxed">
              Planet Patna Foundation brings together a research-driven Archival Gallery and the
              Bal Manohar Jalan Museum—two complementary spaces that preserve documents,
              images, and artworks tracing Patna&apos;s layered cultural history.
            </p>
          </div>

          {/* Two Pillars of the Collection */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto">
            {/* Archival Gallery */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-[0_20px_40px_-12px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
              <div className="relative h-64 md:h-72 lg:h-80 overflow-hidden">
                <Image
                  src="/explore/archival.jpg"
                  alt="Archival Gallery - Planet Patna Foundation"
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.05]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-5 text-[10px] font-bold tracking-[0.25em] uppercase text-white/90">
                  Archival Gallery
                </span>
              </div>
              <div className="p-8 md:p-9">
                <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-4">
                  Archival Gallery
                </h2>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 text-justify">
                  The Archival Gallery showcases twentieth-century documents, photographs, invitations,
                  institutional records, and ephemera that trace the social, cultural, and civic evolution of
                  Patna. Designed as an immersive research space, it invites visitors to encounter the
                  city&apos;s history through original papers and curated narratives.
                </p>
                <Link
                  href="/archives"
                  className="group inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-gray-900 hover:text-amber-700 transition-colors"
                >
                  <span>Explore Archival Gallery</span>
                  <span className="bg-black text-white p-2 rounded-full group-hover:bg-amber-700 transition-all duration-300 group-hover:translate-x-1.5">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>

            {/* Bal Manohar Jalan Museum */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-[0_20px_40px_-12px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
              <div className="relative h-64 md:h-72 lg:h-80 overflow-hidden">
                <Image
                  src="/explore/museum.jpg"
                  alt="Bal Manohar Jalan Museum - Planet Patna Foundation"
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.05]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-5 text-[10px] font-bold tracking-[0.25em] uppercase text-white/90">
                  Bal Manohar Jalan Museum
                </span>
              </div>
              <div className="p-8 md:p-9">
                <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-4">
                  Bal Manohar Jalan Museum
                </h2>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 text-justify">
                  The Bal Manohar Jalan Museum presents Patna Qalam (Company School) paintings,
                  regional schools from Murshidabad to Tanjore, and select antiquities from the Jalan family
                  collection. It is conceived as a contemporary museum where visitors experience art, objects,
                  and archival stories within a unified curatorial narrative.
                </p>
                <Link
                  href="/museum"
                  className="group inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-gray-900 hover:text-amber-700 transition-colors"
                >
                  <span>Visit Museum</span>
                  <span className="bg-black text-white p-2 rounded-full group-hover:bg-amber-700 transition-all duration-300 group-hover:translate-x-1.5">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

