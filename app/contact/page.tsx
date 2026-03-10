'use client';

import Image from 'next/image';

// Embedded Google Form - responder URL with embedded=true for iframe
const GOOGLE_FORM_EMBED =
  'https://docs.google.com/forms/d/e/1FAIpQLScez7YjivsWVMMGJ-aD37FFHb2vl-b1BbrrJmaSQyNR7MXUiw/viewform?embedded=true';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Banner Header */}
      <section className="relative w-full h-[40vh] min-h-[280px] md:h-[45vh] md:min-h-[320px] overflow-hidden">
        <a
          href="/contact/contact-banner.jpg"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full h-full cursor-pointer"
        >
          <Image
            src="/contact/contact-banner.jpg"
            alt="Contact Us - Planet Patna Foundation"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <span className="sr-only">Open contact header image in a new tab</span>
        </a>
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <span className="block text-xs font-bold tracking-[0.25em] uppercase text-amber-300/90 mb-2">
              Planet Patna
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-white/90 mt-2">Get in touch with Planet Patna Museum</p>
          </div>
        </div>
      </section>

      {/* Form + Get in Touch */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-stone-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Embedded Google Form */}
              <div className="relative">
                <div className="absolute -top-1 -left-1 w-24 h-24 border-l-2 border-t-2 border-amber-600/30 rounded-tl-xl" aria-hidden />
                <div className="bg-white rounded-2xl shadow-xl shadow-stone-200/50 border border-stone-100 overflow-hidden">
                  <iframe
                    src={GOOGLE_FORM_EMBED}
                    title="Contact Us - Planet Patna"
                    className="w-full min-h-[800px] border-0"
                    allowFullScreen
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-24 h-24 border-r-2 border-b-2 border-amber-600/30 rounded-br-xl" aria-hidden />
              </div>

              {/* Get in Touch */}
              <div className="lg:sticky lg:top-24">
                <div className="mb-8">
                  <span className="text-xs font-semibold tracking-widest uppercase text-amber-700/80">Visit Us</span>
                  <h2 className="text-2xl md:text-3xl font-light text-stone-800 mt-2 tracking-tight">
                    Get in Touch
                  </h2>
                  <p className="text-stone-500 mt-2 text-sm leading-relaxed">
                    Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/60 border border-stone-100 hover:border-amber-200/50 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-800 mb-1">Address</h3>
                      <p className="text-stone-600 text-sm">1st Floor, Dumraon Place, Fraser Road, Patna (Bihar) - 800001</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/60 border border-stone-100 hover:border-amber-200/50 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-800 mb-1">Phone</h3>
                      <p className="text-stone-600 text-sm">
                        <a href="tel:+919708155555" className="hover:text-amber-600 transition-colors">+91 97081 55555</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/60 border border-stone-100 hover:border-amber-200/50 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-800 mb-1">Email</h3>
                      <p className="text-stone-600 text-sm">contact@planetpatna.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/60 border border-stone-100 hover:border-amber-200/50 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-800 mb-1">Opening Hours</h3>
                      <p className="text-stone-600 text-sm">1:00 PM to 8:00 PM daily</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
