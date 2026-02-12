'use client';

export default function ClubMembershipForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Form submission can be wired to an API or contact endpoint later
  }

  return (
    <div className="mt-10 p-6 md:p-8 rounded-2xl bg-gray-50 ring-1 ring-black/5">
      <h3 className="text-xl font-semibold text-gray-900 mb-1">Club Membership Inquiry</h3>
      <p className="text-sm text-gray-500 mb-6">Submit your details and we&apos;ll get back to you with membership information.</p>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="club-name" className="block text-sm font-medium text-gray-700 mb-1">
            Your Name
          </label>
          <input
            type="text"
            id="club-name"
            name="name"
            required
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-gray-900"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label htmlFor="club-email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="club-email"
            name="email"
            required
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-gray-900"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label htmlFor="club-phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone
          </label>
          <input
            type="tel"
            id="club-phone"
            name="phone"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-gray-900"
            placeholder="Enter your phone number"
          />
        </div>
        <div>
          <label htmlFor="club-message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="club-message"
            name="message"
            rows={4}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-gray-900"
            placeholder="Tell us why you&apos;d like to join or any questions"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
        >
          Submit Inquiry
        </button>
      </form>
    </div>
  );
}
