import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ParkourCoordinatorSection } from './components/ParkourCoordinatorSection';
import { FilmographySection } from './components/FilmographySection';
import { PressSection } from './components/PressSection';
import { ShowreelTheater } from './components/ShowreelTheater';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { ClientLogosSection } from './components/ClientLogosSection';
import { Footer } from './components/Footer';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('ca_theme');
    return saved !== 'light'; // Default to dark mode
  });

  useEffect(() => {
    localStorage.setItem('ca_theme', isDarkMode ? 'dark' : 'light');
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#000000';
      document.body.style.color = '#FFFFFF';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#FFFFFF';
      document.body.style.color = '#000000';
    }
  }, [isDarkMode]);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      isDarkMode ? 'bg-[#000000] text-white' : 'bg-[#FFFFFF] text-black'
    }`}>
      {/* Top Bar Navigation with Light/Dark Toggle */}
      <Navbar
        isDarkMode={isDarkMode}
        onToggleTheme={() => setIsDarkMode(!isDarkMode)}
        onScrollTo={handleScrollTo}
      />

      {/* Main Sections */}
      <main>
        {/* Uncluttered Sharp Hero */}
        <Hero
          isDarkMode={isDarkMode}
          onWatchReel={() => handleScrollTo('showreels')}
          onExploreParkour={() => handleScrollTo('parkour-coordinator')}
          onExploreCredits={() => handleScrollTo('credits')}
        />

        {/* Dedicated Parkour Coordinator Section (Specialist Focus) */}
        <ParkourCoordinatorSection
          isDarkMode={isDarkMode}
          onBookInquiry={() => handleScrollTo('contact')}
        />

        {/* ON SCREEN: All Filmography & Verified Credits (20+ from Site, IMDb & AJK) */}
        <FilmographySection isDarkMode={isDarkMode} />

        {/* PRESS: Editorial Features & Interviews (GQ, Der Spiegel, BBC) */}
        <PressSection isDarkMode={isDarkMode} />

        {/* SHOWREELS: Positioned right after Press with 3 prominent centered buttons */}
        <ShowreelTheater isDarkMode={isDarkMode} />

        {/* About, Specifications & Disciplines */}
        <AboutSection isDarkMode={isDarkMode} />

        {/* Representation & Contact */}
        <ContactSection isDarkMode={isDarkMode} />

        {/* Real Client Logos: Placed LAST after contact form in a single sleek line */}
        <ClientLogosSection isDarkMode={isDarkMode} />
      </main>

      {/* Minimal Footer */}
      <Footer
        isDarkMode={isDarkMode}
        onScrollToTop={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />
    </div>
  );
}
