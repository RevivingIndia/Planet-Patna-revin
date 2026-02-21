'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, X } from 'lucide-react';
import ArchivesThemesCarousel from '@/components/ArchivesThemesCarousel';
import ArchivesThemesContent from '@/components/ArchivesThemesContent';

export default function ArchivesCollectionPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (src: string) => {
    setSelectedImage(src);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Compact banner */}
      <section className="relative w-full h-[30vh] min-h-[200px] overflow-hidden">
        <div
          onClick={() => openModal('/archives/banner.png')}
          className="absolute inset-0 cursor-pointer"
        >
          <Image
            src="/archives/banner.png"
            alt="Archives Collection - Planet Patna Foundation"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center px-4">
            <span className="block text-xs font-bold tracking-[0.25em] uppercase text-amber-300/90 mb-2">
              Our Archives
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight">
              Collection
            </h1>
          </div>
        </div>
      </section>

      {/* Explore Collection - centred, first content */}
      <ArchivesThemesCarousel onImageClick={openModal} />

      {/* Full content for each theme */}
      <ArchivesThemesContent onImageClick={openModal} />

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

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 transition-opacity duration-300"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-50 p-2"
          >
            <X size={32} />
            <span className="sr-only">Close</span>
          </button>

          <div
            className="relative w-full h-full max-w-5xl max-h-[90vh] flex items-center justify-center p-4 md:p-8 md:p-12"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selectedImage}
                alt="Full screen view"
                className="object-contain max-w-full max-h-full"
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
