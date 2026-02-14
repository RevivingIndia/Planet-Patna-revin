import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Club | Planet Patna Foundation',
  description:
    'An exclusive urban sanctuary for social excellence and intellectual growth. Membership benefits and facilities.',
};

export default function ClubPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative w-full h-[40vh] min-h-[280px] md:h-[45vh] md:min-h-[320px] overflow-hidden">
        <Image
          src="/explore/club.jpg"
          alt="Club - Planet Patna Foundation"
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
              Club
            </h1>
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-24 bg-gray-50/80 overflow-hidden text-gray-900 font-sans">
        <div className="absolute left-6 md:left-12 lg:left-24 top-0 h-full w-[1px] bg-gray-200 z-0 hidden md:block" />
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
                    Club
                  </span>
                </h2>
              </div>
              <p className="text-gray-500 font-light leading-relaxed text-base text-justify">
                The Club at Planet Patna serves as an exclusive urban sanctuary, thoughtfully designed to foster social excellence and intellectual growth within the heart of the city. More than just a recreational space, it acts as a vibrant centre where local heritage meets modern lifestyle. Members enjoy a curated atmosphere that balances high-energy professional engagement with serene relaxation, making it the premier destination for Patna&apos;s residents to connect, collaborate, and unwind.
              </p>
              <p className="text-gray-500 font-light leading-relaxed text-base text-justify">
                By choosing the Club of Planet Patna, you are joining an elite circle of individuals committed to fostering both personal relationships and the city&apos;s burgeoning cultural landscape, a true gateway to the best of Patna&apos;s social life.
              </p>
              <div className="pt-2">
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 block mb-3">
                  Club Membership Benefits & Facilities
                </span>
                <p className="text-gray-500 font-light leading-relaxed text-base text-justify">
                  Membership at the Club of Planet Patna provides an elite environment for both focus and connection. Members enjoy a peaceful Library and Reading Room perfect for deep work, reading, or strategy games, alongside priority access to exclusive cultural events and private previews. It is a premier social hub designed to bring the city&apos;s most distinguished individuals together in a sophisticated, curated setting.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_24px_48px_-12px_rgba(0,0,0,0.12)] ring-1 ring-black/5 bg-gray-100">
                <Image
                  src="/explore/club.jpg"
                  alt="Club - Planet Patna"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="mt-10 p-6 md:p-8 rounded-2xl bg-white ring-1 ring-black/5 overflow-hidden">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Club Form</h3>
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSf0yOTBTX-P98Cxvx4iDDDk_gFVhl-sOVsevBC0NGchQYLiXw/viewform?embedded=true"
                  width="100%"
                  height="600"
                  frameBorder={0}
                  marginHeight={0}
                  marginWidth={0}
                  className="rounded-lg min-h-[500px]"
                  title="Club - Google Form"
                >
                  Loading…
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
