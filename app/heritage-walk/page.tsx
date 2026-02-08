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

      {/* Our Heritage Walks - Dastaan-e-Patna & Gulzaar-e-Patna */}
      <section className="relative py-16 md:py-24 bg-white overflow-hidden text-gray-900 font-sans">
        <div className="absolute left-6 md:left-12 lg:left-24 top-0 h-full w-[1px] bg-gray-100 z-0 hidden md:block" />
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-amber-500" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-amber-600">
                Our Heritage Walks
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 tracking-tight">
              <span className="font-serif italic text-amber-700">Dastaan-e-Patna</span>
              <span className="text-gray-400 mx-2"> & </span>
              <span className="font-serif italic text-amber-700">Gulzaar-e-Patna</span>
            </h2>
          </div>

          <div className="max-w-3xl space-y-6">
            <p className="text-gray-500 font-light leading-relaxed text-base text-justify">
              Our Heritage Walks titled as, &apos;Dastaan-e-Patna&apos; and &apos;Gulzaar-e-Patna&apos; offer an immersive journey through the layered history of one of the world&apos;s oldest continuously inhabited cities, tracing the architectural and cultural evolution of Pataliputra, Azimabad, and modern Patna. Led by expert researchers, these curated tours transcend traditional sightseeing by integrating rigorous historical learning with engaging narratives.
            </p>
            <p className="text-gray-500 font-light leading-relaxed text-base text-justify">
              Participants explore a diverse tapestry of legacies, ranging from Mughal and Sikh heritage to colonial-era milestones, while gaining exclusive access to hidden gems, including historic libraries and ancient pilgrimage sites.
            </p>
            <p className="text-gray-500 font-light leading-relaxed text-base text-justify">
              Designed for the conscious traveler, our walks prioritize both accessibility and sustainability through the use of eco-friendly transit, such as e-rickshaws, to ensure a comfortable and environmentally responsible experience. By bridging the gap between historical era and the contemporary urban landscape, we provide a sophisticated platform for connecting with the narratives and citizens that have shaped Patna&apos;s enduring cultural identity.
            </p>
          </div>
        </div>
      </section>

      <BiharMap />
    </main>
  );
}
