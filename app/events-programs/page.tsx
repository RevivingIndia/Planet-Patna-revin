import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import EventsProgramsGallery from '@/components/EventsProgramsGallery';

export const metadata: Metadata = {
  title: 'Events & Programs | Planet Patna Foundation',
  description:
    'Expert-led symposia, artist talks, interactive community festivals, and a diverse calendar of activities for all ages.',
};

export default function EventsProgramsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Banner Header */}
      <section className="relative w-full h-[40vh] min-h-[280px] md:h-[45vh] md:min-h-[320px] overflow-hidden">
        <Image
          src="/events/img-0649.jpg"
          alt="Events & Programs - Planet Patna Foundation"
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
              Events & Programs
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="relative py-16 md:py-24 bg-white overflow-hidden text-gray-900 font-sans">
        <div className="absolute left-6 md:left-12 lg:left-24 top-0 h-full w-[1px] bg-gray-100 z-0 hidden md:block" />
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-amber-500" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">
                Our Events & Programs
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 tracking-tight">
              Culture and History <br />
              <span className="font-serif italic text-amber-700">in Motion</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6 mb-14">
            <p className="text-gray-500 font-light leading-relaxed text-base text-justify">
              Our events and programs are conducted through dynamic public engagement, ranging from expert-led symposia and artist talks to interactive community festivals. We offer a diverse calendar of activities that cater to all ages and interests, providing unique opportunities to experience culture and history in motion.
            </p>
            <p className="text-gray-500 font-light leading-relaxed text-base text-justify">
              Whether you are attending a scholarly lecture or a hands-on creative workshop, our programming fosters a vibrant space for dialogue, discovery, and lifelong learning.
            </p>
          </div>

          <EventsProgramsGallery />
          <div className="mt-16 pt-8 border-t border-gray-200 text-center">
            <Link
              href="/engage-learn"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-600 text-white font-medium hover:bg-amber-700 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Engage &amp; Learn
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
