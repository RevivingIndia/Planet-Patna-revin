'use client';

import Image from 'next/image';

const SECTIONS = [
  {
    id: 'education',
    title: 'Education',
    img: '/archives/education.jpg',
    content: [
      'The Education archive documents the intellectual and institutional evolution of the city from the late nineteenth century onward. This section preserves rare records from foundational institutions such as Patna City School, Bankipore Girls\' High School, Patna College, Patna Law College, and landmark libraries including the Bihar Hitaishi Library and the Khuda Bakhsh Library.',
      'From early twentieth century school records and historical pamphlets to documents reflecting the transformation of specialized medical schools, the collection provides a unique look at how education and social welfare shaped modern Bihar. By preserving these records, the Foundation offers researchers and history enthusiasts an intimate glimpse into the formative moments that established Patna as a premier center of learning in eastern India.',
    ],
  },
  {
    id: 'society',
    title: 'Society',
    img: '/archives/society.jpg',
    content: [
      'A portion of our collection serves as a repository for the institutional history of Bihar\'s intellectual and social awakening. Central to this section are records from scholarly bodies such as the Asiatic Society of Bengal and the Bihar Research Society, founded in 1915, which became a cornerstone of historical, archaeological, and linguistic research in the region.',
      'Complementing these are documents from organizations such as the Bihar Sanskrit Sanjivan Samaj, the Vedic Research Society, reflecting sustained efforts to revive ancient languages and cultivate a regional literary identity.',
      'Beyond academia, this category highlights the diversification of civic interests and social ethics in the early 20th century. The archives include detailed records from the Bihar Horticulture Society, illustrating the region\'s botanical and agricultural heritage, alongside the Bihar and Orissa Society for the Prevention of Cruelty to Animals, which marks the beginning of formal animal welfare activism in the state. Collectively, these documents reveal a vibrant ecosystem of philanthropy and public service, showcasing how private citizens and scholars collaborated to build the foundational institutions of modern Bihar.',
    ],
  },
  {
    id: 'art-music-theatre',
    title: 'Art, Music and Theatre',
    img: '/archives/music-arts.jpg',
    content: [
      'Our collection of archival documents reconstructs the city\'s 20th-century cultural zenith. This section brings to life a golden age where the Wheeler Senate Hall hosted legendary musical performances by Pt. Omkar Nath Thakur and K.L. Saigal, while the Elphinstone Picture Palace hosted historic Bharatanatyam recitals by Rukmini Devi Arundale. The archives further track the evolution of regional media, preserving the history of Bihar\'s first film studios and iconic venues like the Regent Cinema and Dinapore\'s Diana Cinema, which serve as milestones in the transition from colonial administration to a vibrant modern identity.',
      'The collection also captures the grassroots intellectual vigor of Patna, highlighting the city\'s deep-seated love for literature and local theater. By safeguarding the records of active dramatic societies like the Mahabir and Adalatganj Dramatic Clubs, the archive preserves the legacy of performances such as Satya Harishchandra and Sat-bhai Champa.',
    ],
  },
  {
    id: 'health-medicine',
    title: 'Health and Medicine',
    img: '/archives/health-medicine.jpg',
    content: [
      'This archival section offers a focused insight at the region\'s leadership in medical science. The collection features rare administrative and historical documents from foundational institutions such as the Prince of Wales Medical College (now PMCH), the Indian Institute of Medical Research, and the Bihar Nurses Registration Council. A particularly rare highlight is the rare documentation of the Civil Defence Hospital Train, a mobile emergency unit from the World War II era that underscores Patna\'s strategic role in colonial healthcare logistics and emergency response.',
      'These documents, ranging from public health notices during plague outbreaks to the professionalization records, provide a comprehensive narrative of the transition to modern clinical medicine. By preserving these papers, the collection serves as a vital historical resource, tracing the evolution of Bihar\'s healthcare infrastructure from its early twentieth century roots to its current state.',
    ],
  },
  {
    id: 'sports-games',
    title: 'Sports and Games',
    img: '/archives/sports.jpg',
    content: [
      'The Sports section traces the intersection of European athletic traditions and local sporting practices. This collection highlights sports such as wrestling, hockey, cricket, football, and Lawn Tennis through rare tournament records and correspondence from the Bihar and Odisha Olympic Association, detailing the region\'s early integration into the global Olympic movement. By preserving these documents, the collection illustrates how sports functioned as a vital social bridge between colonial administration and the local population, shaping Patna\'s modern competitive identity.',
    ],
  },
  {
    id: 'famous-footprints',
    title: 'Famous Footprints',
    img: '/archives/famous-footprints.jpg',
    content: [
      'This collection features rare personal correspondence and signed documents linking the Jalan family to iconic figures like Mahatma Gandhi, Jawaharlal Nehru, Sachidanand Sinha, Rabindranath Tagore and many more. These records reveal the intellectual and political networks that connected Patna\'s elite with the leadership of the Indian independence movement.',
      'By documenting personal invitations, letters, and social exchanges, the collection moves beyond conventional political history to reveal the human relationships that shaped national narratives. Together, these materials form a biographical tapestry that situates Patna within the broader story of India\'s journey toward self-governance and modern statehood.',
    ],
  },
  {
    id: 'religion-faith',
    title: 'Religion and faith',
    img: '/archives/faith-festivity.jpg',
    content: [
      'Moving beyond abstract concepts of faith, the archive preserves multi-lingual invitation cards and community records that reveal how festivals like Holi, Diwali, Durga Puja, and many more were celebrated as collective social events. These records highlight the prime notations of communal syncretism. By housing these rare prints, Planet Patna provides an authentic, documented lens into the secular spirit and cultural resilience that defined the city\'s identity across the twentieth century.',
    ],
  },
  {
    id: 'patnas-past',
    title: "Patna's past",
    img: '/archives/patnas-past.jpg',
    content: [
      'This section chronicles the city\'s transformation into a modern administrative and cultural hub. Rare documents, including 1940s invitation cards, trace the political transition of Bankipore Maidan into Gandhi Maidan, while institutional records from the Bihar Council Chamber, Patna High Court, and New Patna Railway Junction capture the region\'s infrastructural evolution since 1912.',
      'Beyond governance, the archive preserves the social history of iconic public spaces like Hardinge Park (Shaheed Veer Kunwar Singh Azadi Park), including rare documentation of the 1921 garden party for the Prince of Wales. Through blueprints, case records, and social notices from sites ranging from Mangal Talab to colonial gardens, the collection narrates the lived experiences of the architects and citizens who built contemporary Patna.',
    ],
  },
  {
    id: 'beyond-patna',
    title: 'Beyond Patna',
    img: '/archives/beyond-patna.jpg',
    content: [
      'Expanding beyond regional history, this section situates Patna within the broader national narrative. This collection highlights how residents of Patna engaged with the broader social and historical fabric of India during the twentieth century. It showcases rare archival materials, including colonial-era postcards and official correspondence related to national landmarks such as the Taj Mahal and India Gate, providing a unique perspective on these iconic symbols of Indian heritage.',
      'Beyond architectural history, this section documents significant national events and state visits, often captured through the Jalan family\'s personal network. It is enriched by rare brochures and private letters that discuss the national political shifts and state exhibitions occurring in cities like Delhi and Agra. By presenting these primary sources, Planet Patna highlights the interconnectedness of local intelligentsia and national identity formation.',
    ],
  },
];

export default function ArchivesThemesContent({
  onImageClick,
}: {
  onImageClick?: (src: string) => void;
}) {
  return (
    <section className="relative py-16 md:py-24 bg-stone-50/50 overflow-hidden text-gray-900 font-sans">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        {SECTIONS.map((section, index) => {
          const imageLeft = index % 2 === 0;
          return (
            <article
              key={section.id}
              id={section.id}
              className="scroll-mt-28 py-12 md:py-20 border-b border-stone-200/80 last:border-b-0"
            >
              <div
                className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${!imageLeft ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Image column - order switches on alternate sections */}
                <div
                  className={`relative lg:col-span-5 ${!imageLeft ? 'lg:order-2' : ''}`}
                >
                  <div
                    onClick={() => onImageClick?.(section.img)}
                    className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_24px_48px_-12px_rgba(0,0,0,0.15)] ring-1 ring-black/5 group cursor-pointer"
                  >
                    <Image
                      src={section.img}
                      alt={section.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 480px"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 bg-gradient-to-t from-black/70 to-transparent">
                      <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-amber-200/90">
                        Archival Themes
                      </span>
                      <p className="text-white font-serif text-lg md:text-xl mt-1">
                        {section.title}
                      </p>
                    </div>
                    {/* Corner accent */}
                    <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-amber-400/60 rounded-tl-lg pointer-events-none" />
                  </div>
                </div>

                {/* Text column */}
                <div className={`lg:col-span-7 ${!imageLeft ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="w-8 h-[1px] bg-amber-500" />
                    <span className="text-xs font-bold tracking-[0.2em] uppercase text-stone-400">
                      Archival Themes
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 tracking-tight mb-6 md:mb-8">
                    <span className="font-serif italic text-amber-800">
                      {section.title}
                    </span>
                  </h2>
                  <div className="space-y-5 max-w-2xl">
                    {section.content.map((paragraph, i) => (
                      <p
                        key={i}
                        className="text-stone-600 font-light leading-relaxed text-base text-justify"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
