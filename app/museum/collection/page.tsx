'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, X } from 'lucide-react';

const SECTIONS = [
  {
    id: 'murshidabad',
    number: 1,
    title: 'Murshidabad Qalam',
    image: '/museum/murshidabad.jpg',
    imageAlt: 'Murshidabad Qalam - Company School',
    content: [
      'The Murshidabad collection at the Bal Manohar Jalan Museum serves as a vital bridge between Provincial Mughal traditions and Western influences. Distinguished by its use of imported paper, the collection allowed artists to introduce soft watercolor washes and linear perspective into Indian art. Unlike the court-centric Mughal style, these works act as a 19th-century visual encyclopedia, meticulously recording the technical processes of local trades, such as brass smithing, iron smelting, and spice grinding, with scientific precision. These paintings remain primary historical sources, offering an authentic record of Bengal\'s extinct crafts and changing social fabric during the transitional eighteenth and nineteenth centuries.',
    ],
  },
  {
    id: 'patna',
    number: 2,
    title: 'Patna Qalam',
    image: '/museum/patna.jpg',
    imageAlt: 'Patna Qalam - Company School',
    content: [
      'Following the decline of Murshidabad in the mid-eighteenth century, artists migrated to Patna, establishing a new creative centre in neighborhoods like Lodi Katra and Diwan Mohalla. This migration gave birth to Patna Qalam, a style that transitioned from idealized Mughal court art to a realistic Company approach.',
      'The collection preserves extensive Firka sets depicting nineteenth-century professions like blacksmiths, kite-makers, merchants, and artisans created as visual records for travelers and colonial elites. Mastery of the Kajli Siyahi technique is central to this tradition, with artists painting directly onto paper or mica without preliminary sketches. Works by early masters such as Sewak Ram and Shiva Lal, concluding with Ishwari Prasad, trace the full lineage of the movement, positioning Patna Qalam as a foundational chapter in India\'s socio-economic visual history.',
    ],
  },
  {
    id: 'awadh',
    number: 3,
    title: 'Awadh Qalam',
    image: '/museum/awadh.jpg',
    imageAlt: 'Awadh Qalam - Company School',
    content: [
      'The Awadh School reflects an aristocratic evolution of Company painting, emerging from artist migrations to the refined courts of Lucknow and Faizabad. These works produced by masters such as Mir Chand and Nevasi Lal blend Mughal refinement with European romanticism. This section is particularly notable for introducing atmospheric landscapes, where subjects are posed against receding horizons and lush greenery.',
      'What distinguishes the Awadh School is the meticulous focus on the materiality of power. These paintings capture the intricate textures of velvet, brocade, and jewels with Persian-influenced precision. Influenced by European painters like Tilly Kettle and Johann Zoffany, artists in this collection adapted western techniques of shading and three-dimensional modeling, giving their subjects a lifelike, monumental presence.',
      'Characterized by vibrant, saturated colors and fine calligraphic lines, the collection reflects the sophisticated tastes of the Lucknow Nawabs. By merging traditional Indian portraits with European picturesque backgrounds, these works demonstrate unique technical versatility. The result is a sophisticated hybrid style that exemplifies eighteenth and nineteenth-century artistic exchange.',
    ],
  },
  {
    id: 'benaras',
    number: 4,
    title: 'Benaras Qalam',
    image: '/museum/benaras.jpg',
    imageAlt: 'Benaras Qalam - Company School',
    content: [
      'The Benaras School extends the Patna Qalam tradition into a distinct regional expression, offering a detailed visual ethnography of urban leisure, ritual, and performance. Particularly notable are paintings documenting the Nautch tradition, capturing Kathak\'s transition from temple spaces to elite courtyards and highlighting the translucent elegance of Peshwaz costumes. They also provide a unique record of the Khansama illustrating eighteenth-century culinary traditions which were central to the region\'s social fabric.',
      'The section further moves toward Human-Animal Coexistence where animals are portrayed as status symbols and companions. Together, these works reflect the cultural symbiosis between riverine environments, urban society, and artistic expression during a period of significant social transformation.',
    ],
  },
  {
    id: 'tanjore',
    number: 5,
    title: 'Tanjore Qalam',
    image: '/museum/tanjore.jpg',
    imageAlt: 'Tanjore Qalam - Company School',
    content: [
      'The Tanjore school emerged as a pivotal centre for Indo-British art following the migration of Telugu-speaking Raju and Naidu artists who fled the political instability of the Deccan. This fusion transformed traditional techniques into a distinctive Company Style that prioritized ethnographic documentation over religious iconography. While traditional Tanjore art is famous for its heavy gesso work and gold foil on wooden planks, the Company variant adapted to European preferences by utilizing portable mediums like paper, mica and ivory.',
      'A hallmark of the Tanjore School displayed in our museum is the "Caste Album" tradition, which meticulously depicts the daily lives of local inhabitants. These paintings typically featured figures in pairs, such as a trader or farmer accompanied by his wife, precisely rendered to showcase regional attire and caste markers. By placing these figures within hybrid architectural frames, often a mix of Indian temple arches and simplified colonial styles, the artists successfully bridged two worlds. This era represents a unique historical moment where the divine gave way to the documentary, providing an invaluable visual record of the eighteenth-century southern Indian social landscape.',
    ],
  },
  {
    id: 'trichinopoly',
    number: 6,
    title: 'Trichinopoly Qalam',
    image: '/museum/trichi.jpg',
    imageAlt: 'Trichinopoly Qalam - Company School',
    content: [
      'As the artistic journey moved further south from Tanjore to Trichinopoly (modern-day Tiruchirappalli), a distinct and vibrant variant of Company Painting emerged. By the mid-nineteenth century, artists trained in the Tanjore tradition began experimenting with muscovite mica, a transparent mineral abundant in the region. These Talc Drawings were not only visually striking but also durable and lightweight, making them the perfect export for British patrons.',
      'To cater to the global curiosity of the Victorian era, artists moved away from purely courtly themes to capture a broad ethnographic spectrum, including local deities, tradespeople, elaborate processions, and military uniforms. While these works traded traditional subtlety for visual impact, they remain a vital record of how Indian artisans adapted their ancient skills to the demands of international commerce and the evolving landscape of a changing India.',
    ],
  },
];

export default function MuseumCollectionPage() {
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
      {/* Banner Header - same as Museum page */}
      <section className="relative w-full h-[40vh] min-h-[280px] md:h-[45vh] md:min-h-[320px] overflow-hidden">
        <div
          onClick={() => openModal('/museum/banner.jpg')}
          className="block w-full h-full cursor-pointer"
        >
          <Image
            src="/museum/banner.jpg"
            alt="Collection - Planet Patna Foundation"
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
              Our Museum
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight">
              Collection
            </h1>
          </div>
        </div>
      </section>

      {/* Intro: Company School Paintings */}
      <section className="relative py-16 md:py-24 bg-white overflow-hidden text-gray-900 font-sans">
        <div className="absolute left-6 md:left-12 lg:left-24 top-0 h-full w-[1px] bg-gray-100 z-0 hidden md:block" />

        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-amber-500" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">
                Company School Paintings
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 tracking-tight">
              A Visual Record of <br />
              <span className="font-serif italic text-amber-700">Eighteenth & Nineteenth Century India</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-12 space-y-6 max-w-4xl">
              <p className="text-gray-500 font-light leading-relaxed text-base text-justify">
                The Company School collection at the Bal Manohar Jalan Museum represents one of the most significant visual records of eighteenth and nineteenth century India. Centered on the Patna Qalam tradition, this body of work is widely regarded as the first independent art movement to shift focus from royal patronage to the everyday lives of ordinary people. Descendants of Mughal court painters adapted their skills to new patrons, producing images that documented professions, customs, and social environments with remarkable observational precision.
              </p>
              <p className="text-gray-500 font-light leading-relaxed text-base text-justify">
                A defining feature of this collection is the Kajli Siyahi technique, in which artists painted directly onto paper or mica without preparatory sketches. The resulting works function as vivid ethnographic records, often referred to as Firkas, capturing the rhythms of colonial-era society through a uniquely Indo-European aesthetic. Together, these paintings form an invaluable historical archive that blends technical mastery with documentary realism.
              </p>
              <p className="text-gray-600 font-medium text-base">
                Our collection showcases 6 major Company School of Paintings and their artworks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Six schools - each with content and matching image */}
      {SECTIONS.map((section, index) => (
        <section
          key={section.id}
          className={`relative py-16 md:py-24 overflow-hidden text-gray-900 font-sans ${index % 2 === 1 ? 'bg-gray-50/80' : 'bg-white'}`}
        >
          <div className="absolute left-6 md:left-12 lg:left-24 top-0 h-full w-[1px] bg-gray-200 z-0 hidden md:block" />

          <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              {/* Text */}
              <div className="lg:col-span-7 space-y-6">
                <div className="mb-2">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-[1px] bg-amber-500" />
                    <span className="text-xs font-bold tracking-[0.2em] uppercase text-amber-600">
                      {section.number.toString().padStart(2, '0')}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 tracking-tight">
                    {section.title}
                  </h2>
                </div>
                {section.content.map((paragraph, i) => (
                  <p key={i} className="text-gray-500 font-light leading-relaxed text-base text-justify">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Image - plain img so all section images (incl. Awadh) load reliably */}
              <div className="lg:col-span-5">
                <div
                  onClick={() => openModal(section.image)}
                  className="relative block w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_24px_48px_-12px_rgba(0,0,0,0.12)] ring-1 ring-black/5 bg-gray-100 cursor-pointer hover:opacity-95 transition-opacity"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={section.image}
                    alt={section.imageAlt}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Back to Museum */}
      <section className="py-12 md:py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <Link
            href="/museum"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-amber-700 font-medium transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Museum
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
