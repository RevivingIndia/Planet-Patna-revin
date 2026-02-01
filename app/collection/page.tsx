import Link from 'next/link';
import Image from 'next/image';

export default function CollectionPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Title Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Collection</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Introduction */}
            <div className="text-center mb-12">
              <p className="text-gray-700 text-base leading-relaxed">
                Our collection brings together an exceptional range of historical materials that illuminates the rich and varied history of Bihar, with special focus on Patna during the colonial and early post-colonial periods. The collection is divided into two major categories: Archives and Paintings.
              </p>
            </div>

            {/* Archives and Paintings Cards */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Archives Card */}
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-64">
                  <Image
                    src="https://images.unsplash.com/photo-1568667256549-094345857637?w=600&h=400&fit=crop"
                    alt="Archives"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">Archives</h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Our archival collection features rare documents, letters, and official records from the twentieth century.
                  </p>
                  <Link
                    href="/archives"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
                  >
                    Read More
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Paintings Card */}
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-64">
                  <Image
                    src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&h=400&fit=crop"
                    alt="Paintings"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">Paintings</h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Our collection highlights Company School paintings—a distinctive art style that emerged under the patronage of the European East India Companies
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
                  >
                    Read More
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

