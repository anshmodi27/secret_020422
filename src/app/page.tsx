
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { JourneyTimeline } from '@/components/JourneyTimeline';
import { PhotoGallery } from '@/components/PhotoGallery';
import { LoveLetter } from '@/components/LoveLetter';
import { Footer } from '@/components/Footer';
import { CelestialBackground } from '@/components/CelestialBackground';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <CelestialBackground />
      <Navbar />
      <Hero />
      <JourneyTimeline />
      <PhotoGallery />
      <LoveLetter />
      <Footer />
    </main>
  );
}
