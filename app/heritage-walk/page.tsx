import Image from 'next/image';
import type { Metadata } from 'next';
import BiharMap from '@/components/BiharMap';

export const metadata: Metadata = {
  title: 'Heritage Walks | Planet Patna Foundation',
  description:
    'Dastaan-e-Patna and Gulzaar-e-Patna: immersive heritage walks through Pataliputra, Azimabad, and modern Patna.',
};

export default function HeritageWalkPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Banner Header */}
      <section className="relative w-full h-[40vh] min-h-[280px] md:h-[45vh] md:min-h-[320px] overflow-hidden">
        <Image
          src="/explore/archival.jpg"
          alt="Heritage Walks - Planet Patna Foundation"
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
              Heritage Walks
            </h1>
          </div>
        </div>
      </section>

      {/* Our Heritage Walks - Intro */}
      <section className="relative py-16 md:py-24 bg-white overflow-hidden text-gray-900 font-sans">
        <div className="absolute left-6 md:left-12 lg:left-24 top-0 h-full w-[1px] bg-gray-100 z-0 hidden md:block" />
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-amber-500" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-amber-600">
                Heritage Walks
              </span>
            </div>
          </div>

          <div className="max-w-3xl space-y-6">
            <p className="text-gray-500 font-light leading-relaxed text-base text-justify">
              Patna, one of the world&apos;s oldest continuously inhabited cities, reflects a remarkable continuum of time, tradition, and transformation. To truly understand this continuity, we have carefully curated heritage walks that let people experience Patna through a different lens. Our heritage walks are research-driven and blend architectural exploration, faith traditions, intellectual heritage, and the modern civic life of Patna. Our heritage walks prioritize sustainability through eco-friendly transit, such as e-rickshaws, ensuring a comfortable &amp; environmentally responsible experience that bridges the gap between bygone eras and the present.
            </p>
          </div>
        </div>
      </section>

      {/* Dastaan-e-Patna City */}
      <section className="relative py-16 md:py-24 bg-gray-50/80 overflow-hidden text-gray-900 font-sans">
        <div className="absolute left-6 md:left-12 lg:left-24 top-0 h-full w-[1px] bg-gray-200 z-0 hidden md:block" />
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-amber-500" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">
                Heritage Walk
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 tracking-tight">
              <span className="font-serif italic text-amber-700">Dastaan-e-Patna City</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-6 space-y-6">
              <p className="text-gray-500 font-light leading-relaxed text-base text-justify">
                This route is dedicated to a more spiritually &amp; intellectually oriented odyssey that lets people percolate into the philosophical core of the city. Dastaan highlights the breathing traditions, moulding the route through the sacred sites of Sikh, Hindu, and Islamic devotion. This walk delves into the historical nuances of the city through religious landmarks. This is a narrative-driven experience for the traveler who seeks to understand the folklore, the faith, and the intellectual legacy of Patna.
              </p>
            </div>
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-[1.75rem] overflow-hidden shadow-[0_28px_60px_-18px_rgba(0,0,0,0.18)] ring-1 ring-black/5 group bg-gray-100">
                <Image
                  src="/heritage-walk/dastaan-e-patna.jpg"
                  alt="Dastaan-e-Patna City - Heritage Walk"
                  fill
                  className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gulzaar-e-Patna City */}
      <section className="relative py-16 md:py-24 bg-white overflow-hidden text-gray-900 font-sans">
        <div className="absolute left-6 md:left-12 lg:left-24 top-0 h-full w-[1px] bg-gray-100 z-0 hidden md:block" />
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-amber-500" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">
                Heritage Walk
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 tracking-tight">
              <span className="font-serif italic text-amber-700">Gulzaar-e-Patna City</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-[1.75rem] overflow-hidden shadow-[0_28px_60px_-18px_rgba(0,0,0,0.18)] ring-1 ring-black/5 group bg-gray-100">
                <Image
                  src="/heritage-walk/gulzaar-e-patna.jpg"
                  alt="Gulzaar-e-Patna City - Heritage Walk"
                  fill
                  className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="lg:col-span-6 space-y-6">
              <p className="text-gray-500 font-light leading-relaxed text-base text-justify">
                This walk en route to the vibrant heritage of Patna city, which dates back to the medieval and early modern times. This segment encompasses crucial historical sites in the Gulzarbagh area that encapsulate the essence of the old Patna city, from the remnants of Sher Shah Suri to the essence of Azimabad and the colonial influences. It is a walk designed for those who wish to see how power, commerce, and diverse faiths carved their mark into the city&apos;s physical landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BiharMap />
    </main>
  );
}
