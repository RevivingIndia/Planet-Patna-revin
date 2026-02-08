import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dewan Bahadur Radha Krishna Jalan | Archives | Planet Patna Foundation',
  description:
    'Radha Krishna Jalan (1882–1954) was a distinguished industrialist, philanthropist, and visionary art collector whose cultural influence shaped Patna. His legacy lives on through Planet Patna Museum and Archives.',
};

export default function RadhaKrishnaJalanPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Banner Header */}
      <section className="relative w-full h-[40vh] min-h-[280px] md:h-[45vh] md:min-h-[320px] overflow-hidden">
        <Image
          src="/archives/banner.png"
          alt="Dewan Bahadur Radha Krishna Jalan - Planet Patna Foundation"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <span className="block text-xs font-bold tracking-[0.25em] uppercase text-amber-300/90 mb-2">
              Archives · Legacy
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight">
              Dewan Bahadur <br />
              <span className="font-serif italic text-amber-200">Radha Krishna Jalan</span>
            </h1>
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

      {/* Back to Archives */}
      <section className="py-12 md:py-16 bg-white border-t border-gray-100">
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
