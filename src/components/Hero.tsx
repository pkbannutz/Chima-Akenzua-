import React from 'react';
import { Play, ArrowRight } from 'lucide-react';
import { ACTUAL_HERO_PORTRAIT, DEFAULT_PROFILE } from '../data/chimaData';

interface HeroProps {
  isDarkMode: boolean;
  onWatchReel: () => void;
  onExploreParkour: () => void;
  onExploreCredits: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  isDarkMode,
  onWatchReel,
  onExploreParkour,
  onExploreCredits
}) => {
  return (
    <section id="hero" className="mx-auto max-w-6xl px-6 py-12 sm:py-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Left Typographic Column (col-span-7) */}
        <div className="md:col-span-7 flex flex-col justify-center">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono uppercase tracking-widest opacity-70">
            <span>Parkour Coordinator</span>
            <span>·</span>
            <span>Stunt Performer</span>
            <span>·</span>
            <span>London, UK</span>
          </div>

          <h1 className="mt-3 text-4xl sm:text-6xl font-black tracking-tighter uppercase font-mono leading-none">
            CHIMA AKENZUA
          </h1>

          <p className="mt-4 text-xs sm:text-sm font-mono tracking-widest uppercase font-bold text-current">
            PARKOUR COORDINATOR · STUNT PERFORMER · MOVEMENT DIRECTOR
          </p>

          <p className="mt-5 text-sm sm:text-base leading-relaxed opacity-80 max-w-xl">
            Over 23 years of specialized parkour mastery, movement design, and screen performance. Partnering with film directors, stunt coordinators, and commercial productions to engineer safe, kinetic, and visually unforgettable action sequences.
          </p>

          {/* Simple Clean Actions */}
          <div className="mt-8 grid grid-cols-[0.7fr_1.8fr_1fr] gap-1.5 font-mono tracking-wider sm:flex sm:flex-wrap sm:items-center sm:gap-3 sm:text-xs">
            <button
              onClick={onWatchReel}
              className={`flex w-full min-w-0 items-center justify-center gap-2 whitespace-nowrap px-1 py-2.5 text-[9px] font-bold uppercase border transition-all cursor-pointer sm:w-auto sm:px-5 sm:py-3 sm:text-xs ${
                isDarkMode
                  ? 'bg-white text-black border-white hover:bg-transparent hover:text-white'
                  : 'bg-black text-white border-black hover:bg-transparent hover:text-black'
              }`}
            >
              <Play className="hidden h-3.5 w-3.5 fill-current sm:block" />
              <span className="sm:hidden">REELS</span>
              <span className="hidden sm:inline">Watch Reels</span>
            </button>

            <button
              onClick={onExploreParkour}
              className={`w-full min-w-0 whitespace-nowrap px-1 py-2.5 text-[10px] font-bold uppercase border transition-all cursor-pointer sm:w-auto sm:px-5 sm:py-3 sm:text-xs sm:font-semibold ${
                isDarkMode
                  ? 'border-neutral-700 text-neutral-300 hover:border-white hover:text-white bg-neutral-950'
                  : 'border-neutral-300 text-neutral-700 hover:border-black hover:text-black bg-neutral-50'
              }`}
            >
              <span className="sm:hidden">PARKOUR COORDINATION</span>
              <span className="hidden sm:inline">Parkour Coordination</span>
            </button>

            <button
              onClick={onExploreCredits}
              className={`w-full min-w-0 whitespace-nowrap px-1 py-2.5 text-[9px] font-semibold uppercase border transition-all cursor-pointer opacity-80 hover:opacity-100 sm:w-auto sm:px-5 sm:py-3 sm:text-xs ${
                isDarkMode
                  ? 'border-neutral-800 text-neutral-400 hover:border-white hover:text-white'
                  : 'border-neutral-300 text-neutral-600 hover:border-black hover:text-black'
              }`}
            >
              <span className="sm:hidden">ON SCREEN</span>
              <span className="hidden sm:inline">On Screen (45+)</span>
            </button>
          </div>

          {/* Key Accolades Text Line */}
          <div className="mt-10 pt-6 border-t font-mono text-xs tracking-wider opacity-60 flex flex-wrap gap-4 border-current/15">
            <span>SAG Award Nominee</span>
            <span>·</span>
            <span>2x World Parkour Silver</span>
            <span>·</span>
            <span>Disney · Apple · Nike · Red Bull</span>
          </div>
        </div>

        {/* Hero portrait and compact specs card */}
        <div className="md:col-span-5 space-y-4">
          <div className={`relative border overflow-hidden ${
            isDarkMode ? 'border-neutral-800 bg-neutral-950' : 'border-neutral-200 bg-neutral-50'
          }`}>
            <img
              src={ACTUAL_HERO_PORTRAIT}
              alt="Chima Akenzua - Parkour Coordinator and Stunt Performer"
              className="w-full aspect-4/5 object-cover object-top grayscale contrast-110"
            />
          </div>

          {/* Compact two-column measurements and professional credentials,
              matching the About section's specs table. */}
          <div className={`border p-4 font-mono text-xs ${
            isDarkMode ? 'border-neutral-800 bg-neutral-950' : 'border-neutral-200 bg-white'
          }`}>
            <div className="grid grid-cols-2 gap-3 border-b border-current/10 pb-3">
              <div className="min-w-0">
                <span className="block opacity-75">HEIGHT</span>
                <span className="block mt-1 font-bold">{DEFAULT_PROFILE.specs.height}</span>
              </div>
              <div className="min-w-0">
                <span className="block opacity-75">WEIGHT</span>
                <span className="block mt-1 font-bold">{DEFAULT_PROFILE.specs.weight}</span>
              </div>
            </div>
            <div className="flex items-start justify-between gap-4 border-b border-current/10 py-3">
              <span className="shrink-0 opacity-75">CITIZENSHIP</span>
              <span className="font-bold text-right">{DEFAULT_PROFILE.specs.passports}</span>
            </div>
            <div className="flex items-start justify-between gap-4 pt-3">
              <span className="shrink-0 opacity-75">AFFILIATIONS</span>
              <span className="font-bold text-right">{DEFAULT_PROFILE.specs.unions}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
