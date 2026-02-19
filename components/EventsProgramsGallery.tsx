'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

const EVENT_IMAGES = [
  { src: '/events/img-0649.jpg', alt: 'Events and programs at Planet Patna' },
  { src: '/events/img-0791.jpg', alt: 'Events and programs at Planet Patna' },
  { src: '/events/img-8559.jpg', alt: 'Events and programs at Planet Patna' },
  { src: '/events/img-9452.jpg', alt: 'Events and programs at Planet Patna' },
];

export default function EventsProgramsGallery() {
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
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 max-w-5xl mx-auto">
        {EVENT_IMAGES.map((img) => (
          <div
            key={img.src}
            onClick={() => openModal(img.src)}
            className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_24px_48px_-12px_rgba(0,0,0,0.12)] ring-1 ring-black/5 bg-gray-100 cursor-pointer group"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>

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
              <Image
                src={selectedImage}
                alt="Full screen view"
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
