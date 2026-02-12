'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

const visitors = [
  { name: 'Kamini and Kabir Mustafi', image: '/notes-from-renowned-visitors/kamini-kabir-mustafi.jpg' },
  { name: 'Pradip Jain', image: '/notes-from-renowned-visitors/pradip-jain.jpg' },
  { name: 'Sunil Chakraborty', image: '/notes-from-renowned-visitors/sunil-chakraborty.jpg' },
  { name: 'Suresh Rungta', image: '/notes-from-renowned-visitors/suresh-rungta.jpg' },
];

// Carousel items: alternating videos and images, 8 items total (4 per slide)
const carouselItems: Array<
  | { type: 'iframe'; id: string }
  | { type: 'image'; src: string; alt?: string }
> = [
  { type: 'iframe', id: 'DSceMoZDU8m' },
  { type: 'image', src: '/notes-from-renowned-visitors/kamini-kabir-mustafi-2.jpg', alt: 'Kamini and Kabir Mustafi' },
  { type: 'iframe', id: 'DSXGxqJjX0d' },
  { type: 'image', src: '/notes-from-renowned-visitors/pradip-jain-2.jpg', alt: 'Pradip Jain' },
  { type: 'image', src: '/notes-from-renowned-visitors/sunil-chakraborty-2.jpg', alt: 'Sunil Chakraborty' },
  { type: 'iframe', id: 'DR6zDqODabS' },
  { type: 'image', src: '/notes-from-renowned-visitors/suresh-rungta-2.jpg', alt: 'Suresh Rungta' },
  { type: 'iframe', id: 'DNtN1Pj5qdG' },
];

export default function NotesFromRenownedVisitors() {
  const [enlarged, setEnlarged] = useState<typeof visitors[0] | null>(null);
  const [slide, setSlide] = useState(0); // 0 or 1 (two pages)
  const slidesCount = 2; // Two pages of 4 items each from 8 carousel items

  useEffect(() => {
    // Load Instagram embed script once, then process embeds.
    const existing = document.querySelector("script[src*='instagram.com/embed.js']");
    const runProcess = () => {
      // @ts-ignore
      if (window.instgrm && typeof window.instgrm.Embeds !== 'undefined' && window.instgrm.Embeds.process) {
        // @ts-ignore
        window.instgrm.Embeds.process();
      }
    };

    if (existing) {
      runProcess();
      return;
    }

    const s = document.createElement('script');
    s.src = 'https://www.instagram.com/embed.js';
    s.async = true;
    s.defer = true;
    s.onload = runProcess;
    document.body.appendChild(s);
    return () => {
      // keep script to avoid reloading during navigation; do not remove
    };
  }, [slide]);

  return (
    <section className="relative py-16 md:py-24 bg-gray-50/80 overflow-hidden text-gray-900 font-sans">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-amber-500" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">
              Voices
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 tracking-tight">
            Notes from <br />
            <span className="font-serif italic text-amber-700">Renowned Visitors</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <motion.div
              initial={false}
              animate={{ x: `-${slide * (100 / slidesCount)}%` }}
              transition={{ type: 'tween', duration: 0.5 }}
              className="flex w-[200%]"
            >
              {carouselItems.map((item, idx) => (
                <div key={idx} className="flex-shrink-0 w-1/8 p-2">
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (idx % 4) * 0.08 }}
                    className="rounded-lg overflow-hidden bg-black/5 shadow-sm"
                  >
                    {item.type === 'image' ? (
                      <button
                        type="button"
                        onClick={() => setEnlarged({ name: item.alt || 'Photo', image: item.src } as any)}
                        className="relative aspect-square w-full block cursor-zoom-in text-left"
                        aria-label={`Enlarge ${item.alt || 'photo'}`}
                      >
                        <Image src={item.src} alt={item.alt || 'photo'} fill className="object-contain bg-gray-100" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" priority={idx < 2} />
                      </button>
                    ) : (
                      <div className="relative aspect-square w-full overflow-hidden">
                        <blockquote
                          className="instagram-media w-full h-full"
                          data-instgrm-permalink={`https://www.instagram.com/reel/${item.id}/`}
                          data-instgrm-version="14"
                          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                          <a href={`https://www.instagram.com/reel/${item.id}/`}>
                            View Instagram Reel
                          </a>
                        </blockquote>
                      </div>
                    )}
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-3">
            {Array.from({ length: slidesCount }).map((_, i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`w-3 h-3 rounded-full ${i === slide ? 'bg-amber-700' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox: enlarge on click */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {enlarged && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/80"
              onClick={() => setEnlarged(null)}
              role="dialog"
              aria-modal="true"
              aria-label="Enlarged view"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative max-w-4xl w-full max-h-[90vh] aspect-[3/4] rounded-xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={enlarged.image}
                  alt={enlarged.name}
                  fill
                  className="object-contain bg-black/50"
                  sizes="90vw"
                />
                <p className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white font-medium text-center">
                  {enlarged.name}
                </p>
                <button
                  type="button"
                  onClick={() => setEnlarged(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                  aria-label="Close"
                >
                  <X size={24} />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
