import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Multi-Purpose Hall | Planet Patna Foundation',
  description:
    'A dedicated, flexible venue for conferences, lectures, workshops, and events. Available for rental.',
};

export default function MultiPurposeHallPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative w-full h-[40vh] min-h-[280px] md:h-[45vh] md:min-h-[320px] overflow-hidden">
        <Image
          src="/amenities-services/mph.jpg"
          alt="Multi-Purpose Hall - Planet Patna Foundation"
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
              Multi-Purpose Hall
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
                    Multi-Purpose Hall
                  </span>
                </h2>
              </div>
              <p className="text-gray-500 font-light leading-relaxed text-base text-justify">
                The Multipurpose Hall is a dedicated, flexible venue designed to host a wide range of events and gatherings independent of the museum exhibition spaces. Conceived as a multifunctional environment, the hall accommodates conferences, lectures, workshops, panel discussions, cultural programs, and private events hosted both by the Foundation and external organizations.
              </p>
              <p className="text-gray-500 font-light leading-relaxed text-base text-justify">
                Equipped with adaptable seating, modern audio-visual infrastructure, and a neutral architectural palette, the space can be configured to suit varied formats and audience sizes. Its design allows for seamless transitions between academic, cultural, and professional uses, making it suitable for both formal and informal gatherings. In addition to serving as a core venue for Planet Patna Foundation&apos;s talks, seminars, and community programs, the Multipurpose Hall is available for rental by institutions, corporate bodies, cultural organizations, and private hosts. Through this dual function, the hall supports the Foundation&apos;s mission while also offering a thoughtfully designed space for meaningful public and private events.
              </p>
              <p className="text-gray-600 font-medium text-base">
                Booking Request: Kindly fill out the enquiry form below for any questions or bookings.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_24px_48px_-12px_rgba(0,0,0,0.12)] ring-1 ring-black/5 bg-gray-100">
                <Image
                  src="/explore/mph.jpg"
                  alt="Multi-Purpose Hall - Planet Patna"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="mt-10 p-6 md:p-8 rounded-2xl bg-gray-50 ring-1 ring-black/5 overflow-hidden">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Enquiry / Booking Form</h3>
                <p className="text-sm text-gray-500 mb-4">Fill out the form and we&apos;ll get back to you.</p>
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLScNKDddgzz6tgKza9XZJmSPjZi9b93du3ZFRYeRbnZEZCO2gQ/viewform?embedded=true"
                  width="100%"
                  height="600"
                  frameBorder={0}
                  marginHeight={0}
                  marginWidth={0}
                  className="rounded-lg min-h-[500px]"
                  title="Enquiry / Booking Form - Google Form"
                >
                  Loading…
                </iframe>
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
