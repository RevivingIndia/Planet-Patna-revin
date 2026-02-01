import Image from 'next/image';
import type { Metadata } from 'next';
import ArchivesThemesCarousel from '@/components/ArchivesThemesCarousel';
import ArchivesThemesContent from '@/components/ArchivesThemesContent';

export const metadata: Metadata = {
  title: 'Archives | Planet Patna Foundation',
  description:
    'The archives at Planet Patna Foundation form the intellectual core of the institution, serving as a vital bridge between the colonial era and the modern age.',
};

const GALLERY = [
  { src: '/archives/education.jpg', alt: 'Archival theme - Education', label: 'Education' },
  { src: '/archives/gallery-full-archive.jpg', alt: 'Gallery Full Archive', label: 'Archive' },
  { src: '/archives/music-health.jpg', alt: 'Archival theme - Music and Health', label: 'Music & Health' },
  { src: '/archives/sports-footprints.jpg', alt: 'Archival theme - Sports and famous Footprints', label: 'Sports & Footprints' },
];

export default function ArchivesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Banner Header */}
      <section className="relative w-full h-[40vh] min-h-[280px] md:h-[45vh] md:min-h-[320px] overflow-hidden">
        <Image
          src="/archives/banner.png"
          alt="Archives - Planet Patna Foundation"
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight">
              Archives
            </h1>
          </div>
        </div>
      </section>

      {/* Content: A Glimpse Through Our Archival Journey of the Past */}
      <section className="relative py-16 md:py-24 bg-white overflow-hidden text-gray-900 font-sans">
        <div className="absolute left-0 top-0 h-full w-[1px] bg-gray-100 left-8 md:left-24 lg:left-32 z-0 hidden md:block" />

        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-amber-500" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">
                Our Archives
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 tracking-tight">
              A Glimpse Through Our <br />
              <span className="font-serif italic text-amber-700">Archival Journey of the Past</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Text - two paragraphs, justified */}
            <div className="lg:col-span-6 space-y-10">
              <div className="pb-10 border-b border-gray-200">
                <p className="text-gray-500 font-light leading-relaxed text-base text-justify">
                  The archives at <span className="text-gray-900 font-medium">Planet Patna Foundation</span> form the intellectual core of the institution, serving as a vital bridge between the colonial era and the modern age. Meticulously curated, the collection houses rare twentieth-century documents ranging from private correspondence and institutional records to vintage invitation cards from the Raj period. Together, these materials offer an intimate, behind-the-scenes view of the people, organizations, and pivotal moments that shaped the social, cultural, and administrative life of the region.
                </p>
              </div>
              <div>
                <p className="text-gray-500 font-light leading-relaxed text-base text-justify">
                  More than a repository of paper, the archives are conceived as an immersive historical experience. From tracing the formative years of institutions such as Patna Medical College through centenary records to uncovering the personal histories of the city&apos;s earliest schools, theaters, and societies, the collection animates the lived realities behind official history. Long celebrated as a &ldquo;City of Museums,&rdquo; Patna finds in this archive a space where memory, scholarship, and storytelling converge, inviting researchers and visitors alike to engage deeply with the evolution, resilience, and enduring spirit of the city.
                </p>
              </div>
            </div>

            {/* Four images - editorial layout: featured + trio */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
                {/* Featured: Gallery Full Archive - dominant */}
                <div className="md:col-span-7 relative aspect-[4/5] md:aspect-[3/4] rounded-[1.75rem] overflow-hidden group">
                  <div className="absolute inset-0 shadow-[0_28px_60px_-18px_rgba(0,0,0,0.18)] rounded-[1.75rem] ring-1 ring-black/5 z-10 pointer-events-none" />
                  <Image
                    src={GALLERY[1].src}
                    alt={GALLERY[1].alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 45vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 text-[10px] font-bold tracking-[0.25em] uppercase text-white drop-shadow-sm">
                    {GALLERY[1].label}
                  </span>
                </div>
                {/* Right column: three stacked */}
                <div className="md:col-span-5 flex flex-col gap-4 md:gap-5">
                  {[GALLERY[0], GALLERY[2], GALLERY[3]].map((img, i) => (
                    <div
                      key={img.src}
                      className={`relative aspect-[5/3] md:aspect-[4/3] rounded-[1.25rem] overflow-hidden group flex-shrink-0 ${i === 1 ? 'md:ml-4' : ''}`}
                    >
                      <div className="absolute inset-0 shadow-[0_16px_36px_-12px_rgba(0,0,0,0.12)] rounded-[1.25rem] ring-1 ring-black/5 z-10 pointer-events-none" />
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                        sizes="(max-width: 768px) 100vw, 22vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                      <span className="absolute bottom-2.5 left-2.5 text-[9px] font-bold tracking-[0.2em] uppercase text-white/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-sm">
                        {img.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Dewan Bahadur Radha Krishna Jalan */}
      <section className="relative py-16 md:py-24 bg-gray-50/80 overflow-hidden text-gray-900 font-sans">
        <div className="absolute left-0 top-0 h-full w-[1px] bg-gray-200 left-8 md:left-24 lg:left-32 z-0 hidden md:block" />

        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-amber-500" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">
                Legacy
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 tracking-tight">
              Dewan Bahadur <br />
              <span className="font-serif italic text-amber-700">Radha Krishna Jalan</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Text - two paragraphs, justified */}
            <div className="lg:col-span-6 space-y-10">
              <div className="pb-10 border-b border-gray-200">
                <p className="text-gray-500 font-light leading-relaxed text-base text-justify">
                  <span className="text-gray-900 font-medium">Radha Krishna Jalan</span> (1882–1954) was a distinguished industrialist, philanthropist, and visionary art collector whose cultural influence shaped Patna during the late nineteenth and early twentieth centuries. A committed patron of learning, he was actively associated with leading intellectual institutions, including the Bihar Research Society, the Royal Asiatic Society, and the Calcutta Literary Society. His social and professional circle included kings, nawabs, governors, politicians, scholars, and educators, reflecting his deep engagement with both civic leadership and cultural life.
                </p>
              </div>
              <div>
                <p className="text-gray-500 font-light leading-relaxed text-base text-justify">
                  As the founding President of the Bihar Chamber of Commerce and a respected member of the Patna Museum&apos;s purchasing committee, he played a pivotal role in safeguarding invaluable works of Indian and global heritage. His lifelong commitment to preservation laid the foundation for what would later evolve into the Planet Patna Museum and Archives. Established by his great-grandson, Aditya Jalan, Planet Patna serves as a contemporary extension of this legacy, transforming a once-private collection into an accessible cultural institution. Through twentieth-century archival records, Company School paintings, and curated exhibitions, the Foundation ensures that Dewan Bahadur Radha Krishna Jalan&apos;s pursuit of &ldquo;preserving the past&rdquo; remains a living force within the cultural identity of the present.
                </p>
              </div>
            </div>

            {/* Two images */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                <div className="relative aspect-[4/5] rounded-[1.5rem] overflow-hidden shadow-[0_20px_40px_-12px_rgba(0,0,0,0.12)] ring-1 ring-black/5 group">
                  <Image
                    src="/archives/dbrkj.jpg"
                    alt="Dewan Bahadur Radha Krishna Jalan"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="relative aspect-[4/5] rounded-[1.5rem] overflow-hidden shadow-[0_20px_40px_-12px_rgba(0,0,0,0.12)] ring-1 ring-black/5 group sm:mt-8">
                  <Image
                    src="/archives/rk-jalan.jpg"
                    alt="Radha Krishna Jalan"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Collection - Archival Themes (cards link to sections below) */}
      <ArchivesThemesCarousel />

      {/* Full content for each theme – linked from Explore Collection "View Story" */}
      <ArchivesThemesContent />
    </main>
  );
}
