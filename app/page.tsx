import Hero from '@/components/Hero';
import StackCarousel from '@/components/StackCarousel';
import BiharMap from '@/components/BiharMap';
import AboutUs from '@/components/AboutUs';
import ArchivalJourney from '@/components/ArchivalJourney';
import ThreeCards from '@/components/ThreeCards';
import EducationCards from '@/components/EducationCards';
import PlanetPatna from '@/components/PlanetPatna';
import OurFacilities from '@/components/OurFacilities';
import VisualChronicle from "@/components/Visual";

export default function Home() {
  return (
    <main>
      <Hero />

      <StackCarousel />
      <AboutUs />
      <BiharMap />
      <ArchivalJourney />
      <ThreeCards />
      <EducationCards />
      <PlanetPatna />
      <VisualChronicle />
      <OurFacilities />
    </main>
  );
}
