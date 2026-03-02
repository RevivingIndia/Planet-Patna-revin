import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Learning and Research | Planet Patna Foundation',
  description:
    'Courses, workshops, publications, and research projects in museology, conservation, and cultural heritage.',
};

export default function LearningResearchPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Banner Header */}
      <section className="relative w-full h-[40vh] min-h-[280px] md:h-[45vh] md:min-h-[320px] overflow-hidden">
        <Image
          src="/explore/museum.jpg"
          alt="Learning and Research - Planet Patna Foundation"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <span className="block text-xs font-bold tracking-[0.25em] uppercase text-amber-300/90 mb-2">
              Planet Patna
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight">
              Learning and Research
            </h1>
          </div>
        </div>
      </section>

      {/* a. Our Program / Courses */}
      <section className="relative py-16 md:py-24 bg-white overflow-hidden text-gray-900 font-sans">
        <div className="absolute left-6 md:left-12 lg:left-24 top-0 h-full w-[1px] bg-gray-100 z-0 hidden md:block" />
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-amber-500" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">
                Our Courses
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 tracking-tight">
              Programs & <span className="font-serif italic text-amber-700">Courses</span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-6 space-y-6">
              <p className="text-gray-500 font-light leading-relaxed text-base text-justify">
                Our program offers an immersive, interdisciplinary journey into the heart of the art and culture sector. By seamlessly integrating the foundational principles of museology with the technical rigors of conservation and specialized linguistic training, we provide a holistic educational experience. This curriculum is designed to empower participants with a deep understanding of how cultural assets are curated, preserved, and communicated across borders, ensuring that the narratives of our past are protected for the future.
              </p>
              <p className="text-gray-500 font-light leading-relaxed text-base text-justify">
                While this course is open to passionate individuals from all professional backgrounds, it is specifically engineered to meet the high standards of the academic and research communities. Whether you are looking to formalize your academic expertise or pivot into the professional heritage sector, our courses offer the essential tools to become a sophisticated guardian of global culture.
              </p>
            </div>
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/5] rounded-[1.75rem] overflow-hidden shadow-[0_28px_60px_-18px_rgba(0,0,0,0.18)] ring-1 ring-black/5 group">
                <Image
                  src="/learning-research/quila-house-book.png"
                  alt="Quila House Book - Planet Patna Foundation"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* b. Workshops */}
      <section className="relative py-16 md:py-24 bg-gray-50/80 overflow-hidden text-gray-900 font-sans">
        <div className="absolute left-6 md:left-12 lg:left-24 top-0 h-full w-[1px] bg-gray-200 z-0 hidden md:block" />
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-amber-500" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">
                Workshops
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 tracking-tight">
              Hands-on <span className="font-serif italic text-amber-700">Workshops</span>
            </h2>
          </div>
          <div className="max-w-3xl">
            <p className="text-gray-500 font-light leading-relaxed text-base text-justify">
              Our foundation conducts workshops pertaining to arts, crafts and several other aspects of conservation museology. Our workshop helps you explore a world beyond books where you get to have hands-on experience and explore a wide range of activities that cater to your curiosity and cultural interest.
            </p>
          </div>
        </div>
      </section>

      {/* c. Publications */}
      <section className="relative py-16 md:py-24 bg-white overflow-hidden text-gray-900 font-sans">
        <div className="absolute left-6 md:left-12 lg:left-24 top-0 h-full w-[1px] bg-gray-100 z-0 hidden md:block" />
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-amber-500" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">
                Publications
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 tracking-tight">
              Scholarly <span className="font-serif italic text-amber-700">Publications</span>
            </h2>
          </div>
          <div className="max-w-3xl space-y-6 mb-10">
            <p className="text-gray-500 font-light leading-relaxed text-base text-justify">
              Our publications serve as a comprehensive repository of scholarly research, essays, and archival documentation dedicated to advancing the field of cultural heritage. We invite you to explore these curated resources, which provide deep intellectual insights and professional analysis of the collections and histories within our care.
            </p>
          </div>
          {/* Publication photos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl">
            {/* First publication with actual image */}
            <div className="aspect-[3/4] rounded-xl overflow-hidden ring-1 ring-gray-200 relative group">
              <Image
                src="/learning-research/quila-house-book.png"
                alt="Quila House Book - Planet Patna Foundation Publication"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            {/* Coming Soon placeholders */}
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="aspect-[3/4] rounded-xl bg-gradient-to-br from-amber-50 via-gray-100 to-amber-100 ring-1 ring-amber-200/50 flex flex-col items-center justify-center gap-2"
              >
                <div className="w-10 h-10 rounded-full bg-amber-200/60 flex items-center justify-center">
                  <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <span className="text-amber-700/70 text-xs font-medium tracking-wide">Coming Soon</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* d. Research Projects */}
      <section className="relative py-16 md:py-24 bg-gray-50/80 overflow-hidden text-gray-900 font-sans">
        <div className="absolute left-6 md:left-12 lg:left-24 top-0 h-full w-[1px] bg-gray-200 z-0 hidden md:block" />
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-amber-500" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">
                Research Projects
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 tracking-tight">
              Research <span className="font-serif italic text-amber-700">Projects</span>
            </h2>
          </div>
          <div className="max-w-3xl">
            <p className="text-gray-500 font-light leading-relaxed text-base text-justify">
              Our research division serves as a center for scholarly inquiry, dedicated to the rigorous documentation and scientific analysis of our collections and their historical contexts. We provide access to primary sources and specialized archives to foster global collaboration and advance the preservation of cultural knowledge.
            </p>
          </div>
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
