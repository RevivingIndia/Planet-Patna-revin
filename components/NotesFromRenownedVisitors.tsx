'use client';

import { useState } from 'react';
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

export default function NotesFromRenownedVisitors() {
  const [enlarged, setEnlarged] = useState<typeof visitors[0] | null>(null);

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {visitors.map((visitor, index) => (
            <motion.div
              key={visitor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <button
                type="button"
                onClick={() => setEnlarged(visitor)}
                className="relative aspect-[3/4] w-full rounded-xl overflow-hidden shadow-[0_20px_40px_-12px_rgba(0,0,0,0.12)] ring-1 ring-black/5 mb-4 block cursor-zoom-in text-left"
                aria-label={`Enlarge ${visitor.name}`}
              >
                <Image
                  src={visitor.image}
                  alt={visitor.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              <p className="text-center text-sm font-medium text-gray-700 tracking-tight">
                {visitor.name}
              </p>
            </motion.div>
          ))}
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
