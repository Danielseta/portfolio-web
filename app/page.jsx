// componets 
import About from '@/components/About';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Work from '@/components/Work';
import Reviews from '@/components/Reviews';
import Cta from '@/components/Cta';
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
  <main>
    <Hero />
    <About />
    <Services />
    <Work />
    <Reviews />
    <Cta />
    <SpeedInsights/>
  </main>
  );
};