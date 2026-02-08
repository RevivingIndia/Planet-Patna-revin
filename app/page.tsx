import Hero from '@/components/Hero';
import ShopWithUs from '@/components/ShopWithUs';
import StackCarousel from '@/components/StackCarousel';
import AboutUs from '@/components/AboutUs';
import ArchivalJourney from '@/components/ArchivalJourney';
import MuseumJourney from '@/components/MuseumJourney';
import ThreeCards from '@/components/ThreeCards';
import EducationCards from '@/components/EducationCards';
import NotesFromRenownedVisitors from '@/components/NotesFromRenownedVisitors';
import OurFacilities from '@/components/OurFacilities';
import VisualChronicle from "@/components/Visual";

export default function Home() {
  return (
    <main>
      <Hero />

      <StackCarousel />
      <AboutUs />
      <ArchivalJourney />
      <MuseumJourney />
      <OurFacilities />
      <EducationCards />
      <NotesFromRenownedVisitors />
      <VisualChronicle />
      <ThreeCards />
      <ShopWithUs />
    </main>
  );
}
