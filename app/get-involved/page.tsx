import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get Involved | Planet Patna Foundation',
  description:
    'Connect with history: join lecture series, heritage walks, specialized courses, postcard writing, donate archives, membership, and research engagement.',
};

export default function GetInvolvedPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Banner */}
      <section className="relative w-full h-[40vh] min-h-[280px] md:h-[45vh] md:min-h-[320px] overflow-hidden">
        <Image
          src="/beyond-the-walls/get-involved.jpg"
          alt="Get Involved - Planet Patna Foundation"
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
              Get Involved
            </h1>
            <p className="text-lg md:text-xl text-white/90 mt-2">Connect with the History</p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="relative py-16 md:py-24 bg-white overflow-hidden text-gray-900 font-sans">
        <div className="absolute left-6 md:left-12 lg:left-24 top-0 h-full w-[1px] bg-gray-100 z-0 hidden md:block" />
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="max-w-3xl">
            <p className="text-gray-500 font-light leading-relaxed text-base text-justify">
              <span className="text-gray-900 font-medium">Planet Patna Foundation</span> invites individuals, scholars, and enthusiasts to actively engage with our initiatives and become a part of our journey to preserve and promote the rich heritage of Patna and Bihar. By getting involved, you contribute to learning, memory-making, and heritage conservation.
            </p>
          </div>
        </div>
      </section>

      {/* Join Our Lecture Series and Heritage Walks */}
      <section className="relative py-12 md:py-16 bg-gray-50/80 overflow-hidden text-gray-900 font-sans">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-amber-500" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-amber-600">Programs</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 tracking-tight mb-8">
            Join Our Lecture Series and Heritage Walks
          </h2>
          <div className="max-w-3xl">
            <p className="text-gray-500 font-light leading-relaxed text-base text-justify">
              We welcome the public to participate in our lecture series and heritage walks, regularly organized by Planet Patna Foundation. These outreach activities help participants widen their knowledge and gain a deeper understanding of the rich historical, cultural, and architectural heritage of Patna and Bihar. Our programs are designed for students, researchers, and the general public who wish to connect with history beyond textbooks.
            </p>
          </div>
        </div>
      </section>

      {/* Specialized Courses */}
      <section className="relative py-12 md:py-16 bg-white overflow-hidden text-gray-900 font-sans">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-amber-500" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-amber-600">Learning</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 tracking-tight mb-8">
            Specialized Courses and Professional Learning
          </h2>
          <div className="max-w-3xl">
            <p className="text-gray-500 font-light leading-relaxed text-base text-justify">
              Planet Patna Foundation also conducts specialized courses in museology, art appreciation, heritage conservation, and preservation. These courses are carefully designed and taught by experienced professionals from their respective fields. The curriculum aims to guide students and scholars in building a strong foundation for their academic and professional careers.
            </p>
          </div>
        </div>
      </section>

      {/* Postcard Writing Initiative */}
      <section className="relative py-12 md:py-16 bg-gray-50/80 overflow-hidden text-gray-900 font-sans">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-amber-500" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-amber-600">Initiatives</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 tracking-tight mb-8">
            Postcard Writing Initiative
          </h2>
          <div className="max-w-3xl">
            <p className="text-gray-500 font-light leading-relaxed text-base text-justify">
              One of the unique initiatives of our foundation is the postcard writing experience. Visitors are encouraged to write postcards to their friends and family, which Planet Patna Foundation posts on their behalf. The main aim of this initiative is to create and preserve memories, move beyond the digital medium, and revive the joy of sharing personal messages through traditional communication.
            </p>
          </div>
        </div>
      </section>

      {/* Donate Archives */}
      <section className="relative py-12 md:py-16 bg-white overflow-hidden text-gray-900 font-sans">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-amber-500" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-amber-600">Contribute</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 tracking-tight mb-8">
            Donate Archives and Be a Part of Our Collection
          </h2>
          <div className="max-w-3xl">
            <p className="text-gray-500 font-light leading-relaxed text-base text-justify">
              We welcome art and heritage enthusiasts to donate archival documents, photographs, letters, or materials that align with our collection. By contributing to our archives, donors become a meaningful part of Planet Patna Foundation&apos;s mission to preserve history for future generations.
            </p>
          </div>
        </div>
      </section>

      {/* Membership */}
      <section className="relative py-12 md:py-16 bg-gray-50/80 overflow-hidden text-gray-900 font-sans">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-amber-500" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-amber-600">Membership</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 tracking-tight mb-8">
            Membership and Exclusive Benefits
          </h2>
          <div className="max-w-3xl space-y-4">
            <p className="text-gray-500 font-light leading-relaxed text-base text-justify">
              Individuals can also subscribe to our club membership and enjoy exclusive services and programs offered to our members. Membership provides a closer association with the foundation and an opportunity to actively support and participate in our activities.
            </p>
            <Link
              href="/facilities/club"
              className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-800 font-medium text-sm transition-colors"
            >
              Learn more about Club membership
              <span className="text-amber-600">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Research and Academic Engagement */}
      <section className="relative py-12 md:py-16 bg-white overflow-hidden text-gray-900 font-sans">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-amber-500" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-amber-600">Research</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 tracking-tight mb-8">
            Research and Academic Engagement
          </h2>
          <div className="max-w-3xl">
            <p className="text-gray-500 font-light leading-relaxed text-base text-justify">
              Planet Patna Foundation serves as a hub for research and academic studies. We encourage scholars, researchers, and students to collaborate with us and undertake research projects using our collections, archives, and resources.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
