import { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Testimonials } from '../components/Testimonials';
import { Portfolio } from '../components/Portfolio';
import { SmoothSection } from '../components/SmoothSection';
import { ScrollExpandMedia } from '../components/ScrollExpandMedia';
import { InstagramGrid } from '../components/InstagramGrid';
import { CallToAction } from '../components/CallToAction';
import { Footer } from '../components/Footer';
import { initMobileScrollHover } from '../utils/mobileScrollHover';

export function Home() {
  useEffect(() => {
    const cleanup = initMobileScrollHover();
    return cleanup;
  }, []);

  return (

    <div className="min-h-screen bg-[#f4f4f4] text-[#0a0a0a] selection:bg-[#5790e6] selection:text-white">
      <Navbar />
      <div className="max-w-[1800px] mx-auto p-2 sm:p-3 space-y-2 sm:space-y-3">
        <Hero />
        <About />
        <Testimonials />
        <Portfolio />
        <SmoothSection />
        <ScrollExpandMedia />
        <InstagramGrid />
        <CallToAction />
        <Footer />
      </div>
    </div>
  );
}
