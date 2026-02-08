import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';
import ArchivesThemesCarousel from '@/components/ArchivesThemesCarousel';
import ArchivesThemesContent from '@/components/ArchivesThemesContent';

export const metadata: Metadata = {
  title: 'Collection | Archives | Planet Patna Foundation',
  description:
    'Explore the archival collection at Planet Patna Foundation. Thematic collections, rare documents, and the stories that shaped the region.',
};

export default function ArchivesCollectionPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Compact banner */}
      <section className="relative w-full h-[30vh] min-h-[200px] overflow-hidden">
        <Image
          src="/archives/banner.png"
          alt="Archives Collection - Planet Patna Foundation"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <span className="block text-xs font-bold tracking-[0.25em] uppercase text-amber-300/90 mb-2">
              Our Archives
            </span>
            <h1 className="text-3xl md:text-4xl font-light text-white tracking-tight">
              Collection
            </h1>
          </div>
        </div>
      </section>

      {/* Explore Collection - centred, first content */}
      <ArchivesThemesCarousel />

      {/* Full content for each theme */}
      <ArchivesThemesContent />

      {/* Back to Archives */}
      <section className="py-12 md:py-16 bg-stone-50/50 border-t border-stone-200">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <Link
            href="/archives"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-amber-700 font-medium transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Archives
          </Link>
        </div>
      </section>
    </main>
  );
}
