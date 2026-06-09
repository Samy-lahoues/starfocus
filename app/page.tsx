"use client";

import NavBar from '@/components/sections/NavBar';
import HeroSection from '@/components/sections/HeroSection';
import FilmStrip from '@/components/sections/FilmStrip';
import AboutSection from '@/components/sections/AboutSection';
import PodcastSection from '@/components/sections/PodcastSection';
import MysterySection from '@/components/sections/MysterySection';
import EventsSection from '@/components/sections/EventsSection';
import ConnectSection from '@/components/sections/ConnectSection';
import Footer from '@/components/sections/Footer';

export default function App() {
  return (
    <div className="bg-cinema-black min-h-screen">
      <div className="noise-overlay" />
      <NavBar />
      <HeroSection />
      <FilmStrip />
      <AboutSection />
      <PodcastSection />
      <MysterySection />
      <FilmStrip />
      <EventsSection />
      <ConnectSection />
      <Footer />
    </div>
  );
}
