import Image from 'next/image';
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
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-amber-500" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-amber-600">
              Our Courses
            </span>
          </div>
          <div className="max-w-3xl space-y-6">
            <p className="text-gray-500 font-light leading-relaxed text-base text-justify">
              Our program offers an immersive, interdisciplinary journey into the heart of the art and culture sector. By seamlessly integrating the foundational principles of museology with the technical rigors of conservation and specialized linguistic training, we provide a holistic educational experience. This curriculum is designed to empower participants with a deep understanding of how cultural assets are curated, preserved, and communicated across borders, ensuring that the narratives of our past are protected for the future.
            </p>
            <p className="text-gray-500 font-light leading-relaxed text-base text-justify">
              While this course is open to passionate individuals from all professional backgrounds, it is specifically engineered to meet the high standards of the academic and research communities. Whether you are looking to formalize your academic expertise or pivot into the professional heritage sector, our courses offer the essential tools to become a sophisticated guardian of global culture.
            </p>
          </div>
        </div>
      </section>

      {/* b. Workshops */}
      <section className="relative py-16 md:py-24 bg-gray-50/80 overflow-hidden text-gray-900 font-sans">
        <div className="absolute left-6 md:left-12 lg:left-24 top-0 h-full w-[1px] bg-gray-200 z-0 hidden md:block" />
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-amber-500" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-amber-600">
              Workshops
            </span>
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
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-amber-500" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-amber-600">
              Publications
            </span>
          </div>
          <div className="max-w-3xl space-y-6 mb-10">
            <p className="text-gray-500 font-light leading-relaxed text-base text-justify">
              Our publications serve as a comprehensive repository of scholarly research, essays, and archival documentation dedicated to advancing the field of cultural heritage. We invite you to explore these curated resources, which provide deep intellectual insights and professional analysis of the collections and histories within our care.
            </p>
          </div>
          {/* Placeholder for publication photos - replace with real images when available */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-[3/4] rounded-xl bg-gray-100 ring-1 ring-gray-200 flex items-center justify-center text-gray-400 text-sm"
              >
                Publication
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* d. Research Projects */}
      <section className="relative py-16 md:py-24 bg-gray-50/80 overflow-hidden text-gray-900 font-sans">
        <div className="absolute left-6 md:left-12 lg:left-24 top-0 h-full w-[1px] bg-gray-200 z-0 hidden md:block" />
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-amber-500" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-amber-600">
              Research Projects
            </span>
          </div>
          <div className="max-w-3xl">
            <p className="text-gray-500 font-light leading-relaxed text-base text-justify">
              Our research division serves as a center for scholarly inquiry, dedicated to the rigorous documentation and scientific analysis of our collections and their historical contexts. We provide access to primary sources and specialized archives to foster global collaboration and advance the preservation of cultural knowledge.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
