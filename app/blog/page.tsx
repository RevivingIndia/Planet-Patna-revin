import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Blog | Planet Patna Foundation',
  description:
    'From the Cradle of Civilization to a Digital City: The Journey of Patna. Stories and insights from Planet Patna Foundation.',
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Article header with banner image */}
      <section className="relative min-h-[280px] md:min-h-[320px] overflow-hidden font-sans">
        <div className="absolute inset-0 z-0">
          <Image
            src="/blog/blog-banner.jpeg"
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-24 flex flex-col justify-center items-center text-center min-h-[280px] md:min-h-[320px] py-16 md:py-24">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-amber-400" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-amber-300">Engage & Learn</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight drop-shadow-md mb-3">
            Blog
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-light max-w-xl">
            Stories and insights from Planet Patna Foundation
          </p>
        </div>
      </section>

      {/* Article body */}
      <section className="relative py-12 md:py-16 bg-white overflow-hidden text-gray-900 font-sans">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <article className="max-w-3xl mx-auto space-y-6">
            <div className="mb-8 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="w-8 h-[1px] bg-amber-400" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-amber-500">Article</span>
                <span className="w-8 h-[1px] bg-amber-400" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 tracking-tight leading-tight">
                From the Cradle of Civilization to a Digital City: The Journey of Patna
              </h2>
            </div>
            <p className="text-gray-500 font-light leading-relaxed text-base text-justify">
              Have you ever wondered how the modern, digitalized city of Patna, as we see it today, has witnessed almost the entire journey of human civilization? Situated in the Central Ganga Plains, Patna stands on a land that has seen continuous human settlement from prehistoric times to the present day.
            </p>
            <p className="text-gray-500 font-light leading-relaxed text-base text-justify">
              Archaeological evidence suggests that the earliest traces of human life in this region date back to the Mesolithic and Neolithic periods. Sites such as the Mesolithic settlements of Munger and Nawada, and the Neolithic site of Chirand in the Saran district, reveal early human adaptation, tool-making practices, and the beginnings of settled life. These discoveries place Bihar among the earliest centers of human civilization in the Indian subcontinent.
            </p>
            <p className="text-gray-500 font-light leading-relaxed text-base text-justify">
              The region gained major historical importance with the rise of the Magadha Janapada, which later emerged as a powerful political and cultural hub of ancient India. Under Magadha, great empires such as the Mauryan Empire and the Shunga Empire flourished, shaping the political and administrative foundations of the subcontinent. This land also became the birthplace and center of major philosophical and religious traditions, most notably Buddhism and Jainism, which spread their messages of peace and ethics across Asia.
            </p>
            <p className="text-gray-500 font-light leading-relaxed text-base text-justify">
              Bihar was also a global center of learning. Renowned institutions such as Nalanda and Vikramshila Universities attracted scholars from distant lands, making the region a beacon of knowledge and intellectual exchange. Saints and scholars such as Sant Ravidas and Vidyapati enriched the cultural and spiritual life of the region through their teachings, literature, and devotion.
            </p>
            <p className="text-gray-500 font-light leading-relaxed text-base text-justify">
              With the arrival of the Delhi Sultanate and later the Mughal rulers, the region witnessed new cultural influences. Their architectural legacy—mosques, forts, and urban layouts—still survives in the lanes and landscapes of Patna, reminding us of its medieval past.
            </p>
            <p className="text-gray-500 font-light leading-relaxed text-base text-justify">
              The colonial period marked another important phase in Bihar&apos;s history. Patna emerged as a center of political awareness and nationalist movements. Eminent personalities such as Dr. Sachidananda Sinha, Dr. Rajendra Prasad, Lady Imam, Kunwar Singh, and Jayaprakash Narayan played crucial roles in India&apos;s freedom struggle and social reform movements, leaving a lasting impact on the nation&apos;s history.
            </p>
            <p className="text-gray-500 font-light leading-relaxed text-base text-justify">
              In the field of art and culture, Bihar has made remarkable contributions. Traditional art forms such as Patna Kalam and Madhubani painting offer rare visual insights into the region&apos;s social life, beliefs, and historical narratives. These art traditions continue to reflect the creativity and cultural depth of the land.
            </p>
            <p className="text-gray-500 font-light leading-relaxed text-base text-justify">
              Despite being one of the most significant cultural and historical regions of India, a large section of Bihar&apos;s population today remains unaware of this rich heritage. While the glory of Bihar stands tall in history, its legacy often remains unrecognized in everyday life of today&apos;s population. Through awareness, education, and preservation, it is essential to reconnect people with their past, ensuring that this remarkable heritage is understood, valued, and carried forward into the future.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
