import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Beyond Gallery | Planet Patna Foundation',
  description:
    'Outreach activities and public engagement: exhibitions, lecture series, and heritage walks bringing history and heritage closer to the public.',
};

const GALLERY_IMAGES = [
  { src: '/beyond-gallery/beyond-gallery-1.jpg', alt: 'Beyond Gallery - Planet Patna Foundation' },
  { src: '/beyond-gallery/beyond-gallery-2.jpg', alt: 'Beyond Gallery outreach - Planet Patna Foundation' },
  { src: '/beyond-gallery/beyond-gallery-3.jpg', alt: 'Beyond Gallery exhibition - Planet Patna Foundation' },
  { src: '/beyond-gallery/beyond-gallery-4.jpg', alt: 'Beyond Gallery heritage - Planet Patna Foundation' },
  { src: '/beyond-gallery/beyond-gallery-5.jpg', alt: 'Beyond Gallery engagement - Planet Patna Foundation' },
  { src: '/beyond-gallery/beyond-gallery-6.jpg', alt: 'Beyond Gallery activities - Planet Patna Foundation' },
];

export default function BeyondGalleryPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Banner */}
      <section className="relative w-full h-[40vh] min-h-[280px] md:h-[45vh] md:min-h-[320px] overflow-hidden">
        <Image
          src="/beyond-the-walls/beyond-gallery.jpg"
          alt="Beyond Gallery - Planet Patna Foundation"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <span className="block text-xs font-bold tracking-[0.25em] uppercase text-amber-300/90 mb-2">
              Engage & Learn
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight">
              Beyond Gallery
            </h1>
            <p className="text-lg md:text-xl text-white/90 mt-2">Outreach Activities and Public Engagement</p>
          </div>
        </div>
      </section>

      {/* Intro: text left, photo right */}
      <section className="relative py-16 md:py-24 bg-white overflow-hidden text-gray-900 font-sans">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-[1px] bg-amber-500" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-amber-600">Our Initiative</span>
              </div>
              <p className="text-gray-500 font-light leading-relaxed text-base text-justify">
                Beyond Gallery, an initiative of <span className="text-gray-900 font-medium">Planet Patna Foundation</span>, actively works to bring history and heritage closer to the public through exhibitions, lectures, and heritage walks. These outreach activities aim to create awareness, encourage dialogue, and promote the preservation of Patna&apos;s rich historical legacy.
              </p>
            </div>
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
                <Image
                  src={GALLERY_IMAGES[0].src}
                  alt={GALLERY_IMAGES[0].alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outreach Exhibitions: photo left, text right */}
      <section className="relative py-16 md:py-24 bg-gray-50/80 overflow-hidden text-gray-900 font-sans">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-6 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[1px] bg-amber-500" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-amber-600">Outreach Exhibitions</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 tracking-tight mb-6">
                Exhibitions that showcase rare archival materials
              </h2>
              <div className="space-y-4">
                <p className="text-gray-500 font-light leading-relaxed text-base text-justify">
                  Planet Patna Foundation has organized several outreach exhibitions to showcase rare archival materials and untold histories.
                </p>
                <p className="text-gray-500 font-light leading-relaxed text-base text-justify">
                  One such exhibition was organized in Danapur on the occasion of seminar-cum-exhibition titled &ldquo;The Military Heritage and Culture of Bihar and Chota Nagpur.&rdquo; This exhibition displayed archived letters, posters, and flyers related to World War I and World War II, highlighting the significant role played by Patna and the region of Bihar during these global conflicts.
                </p>
                <p className="text-gray-500 font-light leading-relaxed text-base text-justify">
                  Another important exhibition was organized on the eve of the Centenary Celebrations of Patna Medical College and Hospital (PMCH), featuring rare archival documents and highlighting the contribution of <span className="text-gray-900 font-medium">Rai Bahadur Radha Krishna Jalan</span>, who donated penicillin to PMCH.
                </p>
              </div>
            </div>
            <div className="lg:col-span-6 lg:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                <div className="relative aspect-[4/5] rounded-[1.5rem] overflow-hidden shadow-[0_20px_40px_-12px_rgba(0,0,0,0.12)] ring-1 ring-black/5 group">
                  <Image
                    src="/beyond-gallery/outreach-exhibitions-1.jpg"
                    alt="Outreach Exhibitions - Planet Patna"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="absolute bottom-4 left-4 text-[10px] font-bold tracking-[0.2em] uppercase text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Exhibition
                  </span>
                </div>
                <div className="relative aspect-[4/5] rounded-[1.5rem] overflow-hidden shadow-[0_20px_40px_-12px_rgba(0,0,0,0.12)] ring-1 ring-black/5 group sm:mt-8">
                  <Image
                    src="/beyond-gallery/outreach-exhibitions-2.jpg"
                    alt="Outreach Exhibitions - Planet Patna"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="absolute bottom-4 left-4 text-[10px] font-bold tracking-[0.2em] uppercase text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Outreach
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lecture Series: text left, photo right */}
      <section className="relative py-16 md:py-24 bg-white overflow-hidden text-gray-900 font-sans">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-[1px] bg-amber-500" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-amber-600">Lecture Series</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 tracking-tight">
                Knowledge sharing and public learning
              </h2>
              <p className="text-gray-500 font-light leading-relaxed text-base text-justify">
                In addition to exhibitions, Planet Patna Foundation regularly conducts lecture series by renowned scholars, historians, researchers, and experts. These lectures cover diverse subjects such as history, heritage, culture, medicine, education, and social development. The lecture series provides a platform for knowledge sharing and public learning, encouraging meaningful engagement with Bihar&apos;s past and present.
              </p>
            </div>
            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                <div className="relative aspect-[4/5] rounded-[1.5rem] overflow-hidden shadow-[0_20px_40px_-12px_rgba(0,0,0,0.12)] ring-1 ring-black/5 group">
                  <Image
                    src="/beyond-gallery/lecture-series-1.jpg"
                    alt="Lecture Series - Planet Patna"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="absolute bottom-4 left-4 text-[10px] font-bold tracking-[0.2em] uppercase text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Lecture
                  </span>
                </div>
                <div className="relative aspect-[4/5] rounded-[1.5rem] overflow-hidden shadow-[0_20px_40px_-12px_rgba(0,0,0,0.12)] ring-1 ring-black/5 group sm:mt-8">
                  <Image
                    src="/beyond-gallery/lecture-series-2.jpg"
                    alt="Lecture Series - Planet Patna"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="absolute bottom-4 left-4 text-[10px] font-bold tracking-[0.2em] uppercase text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Series
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Walks: photo left, text right */}
      <section className="relative py-16 md:py-24 bg-gray-50/80 overflow-hidden text-gray-900 font-sans">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                <div className="relative aspect-[4/5] rounded-[1.5rem] overflow-hidden shadow-[0_20px_40px_-12px_rgba(0,0,0,0.12)] ring-1 ring-black/5 group">
                  <Image
                    src="/beyond-gallery/heritage-walk-1.jpg"
                    alt="Heritage Walk - Planet Patna"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="absolute bottom-4 left-4 text-[10px] font-bold tracking-[0.2em] uppercase text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Heritage
                  </span>
                </div>
                <div className="relative aspect-[4/5] rounded-[1.5rem] overflow-hidden shadow-[0_20px_40px_-12px_rgba(0,0,0,0.12)] ring-1 ring-black/5 group sm:mt-8">
                  <Image
                    src="/beyond-gallery/heritage-walk-2.jpg"
                    alt="Heritage Walk - Planet Patna"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="absolute bottom-4 left-4 text-[10px] font-bold tracking-[0.2em] uppercase text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Walk
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-[1px] bg-amber-500" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-amber-600">Heritage Walks in Patna</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 tracking-tight">
                Experiencing and living the history of the city
              </h2>
              <p className="text-gray-500 font-light leading-relaxed text-base text-justify">
                Planet Patna Foundation is among the first non-profit organizations to organize heritage walks in Patna city. These walks explore a wide range of ancient, medieval, and colonial sites and architecture, allowing participants to experience and live the history of the city.
              </p>
              <p className="text-gray-500 font-light leading-relaxed text-base text-justify">
                The main objective of these heritage walks is to create awareness among people about their own heritage, weave a sense of pride and responsibility, and encourage the protection and preservation of historical sites for future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing section */}
      <section className="relative py-16 md:py-24 overflow-hidden text-gray-900 font-sans bg-gray-50/80">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <p className="text-center text-gray-500 font-light text-sm md:text-base max-w-2xl mx-auto">
            Beyond Gallery brings history and heritage closer to the public—join our exhibitions, lectures, and heritage walks.
          </p>
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
