import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Portfolio } from '../components/Portfolio';
import { FeaturedLooks } from '../components/FeaturedLooks';
import { Testimonials } from '../components/Testimonials';
import { CallToAction } from '../components/CallToAction';
import { InstagramGrid } from '../components/InstagramGrid';
import { Footer } from '../components/Footer';
export function Home() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans text-[#1a1a1a]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <FeaturedLooks />
        <Testimonials />
        <CallToAction />
        <InstagramGrid />
      </main>
      <Footer />
    </div>);

}