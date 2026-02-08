import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Planet Patna Foundation',
  description: 'Blog and stories from Planet Patna Foundation. Coming soon.',
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center py-24 px-6">
      <div className="text-center max-w-md">
        <span className="text-amber-700 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
          Engage & Learn
        </span>
        <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
          Blog
        </h1>
        <p className="text-2xl font-light text-stone-500">
          Coming Soon
        </p>
        <p className="text-stone-400 text-sm mt-6">
          We are preparing stories, updates, and insights from the museum and Patna’s heritage. Check back later.
        </p>
      </div>
    </main>
  );
}
