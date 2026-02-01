import AboutUs from '@/components/AboutUs';
import AboutUsExtended from '@/components/AboutUsExtended';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Planet Patna Foundation',
  description:
    'Established on July 25, 2025, Planet Patna Foundation is a visionary non-profit institution dedicated to preserving, interpreting, and re-presenting cultural heritage.',
};

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-white">
      <AboutUs standalone />
      <AboutUsExtended />
    </main>
  );
}
