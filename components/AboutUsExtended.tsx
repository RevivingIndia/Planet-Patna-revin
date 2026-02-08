'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const GALLERY = [
  { src: '/about-us-page/gallery-1.jpg', alt: 'Planet Patna Foundation', label: 'Archival' },
  { src: '/about-us-page/gallery-2.jpg', alt: 'Planet Patna Foundation', label: 'Museum' },
  { src: '/about-us-page/gallery-3.jpg', alt: 'Planet Patna Foundation', label: 'Spaces' },
];

export default function AboutUsExtended() {
  return (
    <section className="relative py-16 md:py-24 bg-gray-50/80 overflow-hidden text-gray-900 font-sans">
      {/* Vertical accent - matches AboutUs */}
      <div className="absolute left-0 top-0 h-full w-[1px] bg-gray-200 left-8 md:left-24 lg:left-32 z-0 hidden md:block" />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-amber-500" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">
              The Foundation
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 tracking-tight">
            Spaces & <span className="font-serif italic text-amber-700">Mission</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Text block - two clear sections with justified text */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-6 space-y-10"
          >
            {/* Section 1 */}
            <div className="pb-10 border-b border-gray-200">
              <h3 className="text-sm font-bold tracking-[0.15em] uppercase text-amber-600 mb-4">
                The Foundation & its ecosystem
              </h3>
              <p className="text-gray-500 font-light leading-relaxed text-base text-justify">
                The Foundation encompasses an <span className="text-gray-900 font-medium">Archival Gallery</span>, inaugurated by Shri Dinesh K. Himatsingka, Founder of Himatsingka, and <span className="text-gray-900 font-medium">Bal Manohar Jalan Museum</span>, inaugurated by Shree Maharaj Tejendra Prasad Pandeji, Acharya of Narayan Dev Gadi. Complementing its scholarly core is a broader cultural ecosystem that includes a Multipurpose Hall, an exclusive Elite Member Club, and a Café designed as a contemplative social space. Together, these elements create an intellectually engaging yet accessible destination, one that invites visitors to encounter history within an atmosphere of quiet refinement and dialogue.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h3 className="text-sm font-bold tracking-[0.15em] uppercase text-amber-600 mb-4">
                Experience at Planet Patna
              </h3>
              <p className="text-gray-500 font-light leading-relaxed text-base text-justify">
                At Planet Patna, visitors journey through time within the Curated Museum, which presents immersive exhibitions, rare colonial-era archives, and expert-led heritage programs that animate the city&apos;s layered past. The Café offers a space for reflection and conversation, while the Multipurpose Hall functions as a flexible venue for lectures, workshops, conferences, and cultural gatherings. The Elite Member Club provides a private forum for thinkers, patrons, and cultural leaders to engage through curated events, screenings, and discussions, extending the Foundation&apos;s mission beyond exhibition into sustained intellectual community-building.
              </p>
            </div>
          </motion.div>

          {/* Image gallery - editorial layout: featured + stacked */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
              {/* Featured image - larger, left */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="md:col-span-7 relative aspect-[4/5] md:aspect-[3/4] rounded-[1.75rem] overflow-hidden group"
              >
                <div className="absolute inset-0 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] rounded-[1.75rem] ring-1 ring-black/5 z-10 pointer-events-none" />
                <Image
                  src={GALLERY[0].src}
                  alt={GALLERY[0].alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 45vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute bottom-4 left-4 text-[10px] font-bold tracking-[0.2em] uppercase text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {GALLERY[0].label}
                </span>
              </motion.div>

              {/* Stacked pair - right, with slight overlap */}
              <div className="md:col-span-5 flex flex-col gap-4 md:gap-5 md:-ml-2">
                {GALLERY.slice(1, 3).map((img, i) => (
                  <motion.div
                    key={img.src}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className="relative aspect-[4/3] md:aspect-[5/4] rounded-[1.5rem] overflow-hidden group flex-shrink-0"
                  >
                    <div className="absolute inset-0 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.12)] rounded-[1.5rem] ring-1 ring-black/5 z-10 pointer-events-none" />
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="absolute bottom-3 left-3 text-[10px] font-bold tracking-[0.2em] uppercase text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {img.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Optional: highlight strip for key spaces - matches theme density */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 pt-12 border-t border-gray-200"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { heading: 'Heritage', subHeading: 'Archival Gallery' },
              { heading: 'Curated Museum', subHeading: 'Bal Manohar Jalan Museum' },
              { heading: 'Venue', subHeading: 'Multi Purpose Hall' },
              { heading: 'Community', subHeading: 'Elite Member Club' },
            ].map((item) => (
              <div key={item.heading + item.subHeading} className="border-l-2 border-amber-500/40 pl-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-amber-600/90 mb-1">{item.heading}</p>
                <p className="text-sm font-medium text-gray-900">{item.subHeading}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
