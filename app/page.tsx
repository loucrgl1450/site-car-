import Hero from '@/components/Hero';
import About from '@/components/About';
import ServicesGrid from '@/components/ServicesGrid';
import OptionsGrid from '@/components/OptionsGrid';
import Booking from '@/components/Booking';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import MapSection from '@/components/MapSection';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ServicesGrid />
      <OptionsGrid />
      <Booking />
      <BeforeAfterSlider />
      <MapSection />
    </>
  );
}
