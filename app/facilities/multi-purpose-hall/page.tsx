'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function MultiPurposeHallPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    eventType: '',
    eventDate: '',
    attendees: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScNKDddgzz6tgKza9XZJmSPjZi9b93du3ZFRYeRbnZEZCO2gQ/formResponse';
    const formDataToSend = new FormData();
    
    try {
      await fetch(googleFormUrl, {
        method: 'POST',
        body: formDataToSend,
        mode: 'no-cors',
      });
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', organization: '', eventType: '', eventDate: '', attendees: '', message: '' });
    } catch {
      setSubmitted(true);
    }
    setIsSubmitting(false);
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="relative w-full h-[40vh] min-h-[280px] md:h-[45vh] md:min-h-[320px] overflow-hidden">
        <Image
          src="/amenities-services/mph.jpg"
          alt="Multi-Purpose Hall - Planet Patna Foundation"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <span className="block text-xs font-bold tracking-[0.25em] uppercase text-amber-300/90 mb-2">
              Facilities
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight">
              Multi-Purpose Hall
            </h1>
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-24 bg-white overflow-hidden text-gray-900 font-sans">
        <div className="absolute left-6 md:left-12 lg:left-24 top-0 h-full w-[1px] bg-gray-100 z-0 hidden md:block" />
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-[1px] bg-amber-500" />
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-stone-400">
                    Facilities
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 tracking-tight">
                  <span className="font-serif italic text-amber-800">
                    Multi-Purpose Hall
                  </span>
                </h2>
              </div>
              <p className="text-gray-500 font-light leading-relaxed text-base text-justify">
                The Multipurpose Hall is a dedicated, flexible venue designed to host a wide range of events and gatherings independent of the museum exhibition spaces. Conceived as a multifunctional environment, the hall accommodates conferences, lectures, workshops, panel discussions, cultural programs, and private events hosted both by the Foundation and external organizations.
              </p>
              <p className="text-gray-500 font-light leading-relaxed text-base text-justify">
                Equipped with adaptable seating, modern audio-visual infrastructure, and a neutral architectural palette, the space can be configured to suit varied formats and audience sizes. Its design allows for seamless transitions between academic, cultural, and professional uses, making it suitable for both formal and informal gatherings. In addition to serving as a core venue for Planet Patna Foundation&apos;s talks, seminars, and community programs, the Multipurpose Hall is available for rental by institutions, corporate bodies, cultural organizations, and private hosts. Through this dual function, the hall supports the Foundation&apos;s mission while also offering a thoughtfully designed space for meaningful public and private events.
              </p>
              <p className="text-gray-600 font-medium text-base">
                Booking Request: Kindly fill out the enquiry form below for any questions or bookings.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_24px_48px_-12px_rgba(0,0,0,0.12)] ring-1 ring-black/5 bg-gray-100">
                <Image
                  src="/explore/mph.jpg"
                  alt="Multi-Purpose Hall - Planet Patna"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="mt-10 p-6 md:p-8 rounded-2xl bg-gray-50 ring-1 ring-black/5 overflow-hidden">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Enquiry / Booking Form</h3>
                <p className="text-sm text-gray-500 mb-6">Fill out the form and we&apos;ll get back to you.</p>
                
                {submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-green-800 mb-1">Request Submitted!</h4>
                    <p className="text-green-600 text-sm">We&apos;ll contact you soon.</p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-3 text-amber-600 hover:text-amber-700 font-medium text-sm"
                    >
                      Submit another request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all bg-white text-sm"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all bg-white text-sm"
                          placeholder="Email"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Phone <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all bg-white text-sm"
                          placeholder="Phone"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Organization / Company
                      </label>
                      <input
                        type="text"
                        id="organization"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all bg-white text-sm"
                        placeholder="Organization name"
                      />
                    </div>
                    <div>
                      <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Event Type <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="eventType"
                        required
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all bg-white text-sm"
                      >
                        <option value="">Select event type</option>
                        <option value="conference">Conference</option>
                        <option value="workshop">Workshop</option>
                        <option value="lecture">Lecture / Seminar</option>
                        <option value="cultural">Cultural Program</option>
                        <option value="corporate">Corporate Event</option>
                        <option value="private">Private Event</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          id="eventDate"
                          value={formData.eventDate}
                          onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all bg-white text-sm"
                        />
                      </div>
                      <div>
                        <label htmlFor="attendees" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Expected Attendees
                        </label>
                        <input
                          type="number"
                          id="attendees"
                          value={formData.attendees}
                          onChange={(e) => setFormData({ ...formData, attendees: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all bg-white text-sm"
                          placeholder="Number"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Additional Details
                      </label>
                      <textarea
                        id="message"
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all bg-white text-sm resize-none"
                        placeholder="Any specific requirements..."
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        'Submit Enquiry'
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-gray-200 text-center">
            <Link
              href="/facilities"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-600 text-white font-medium hover:bg-amber-700 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Facilities
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
