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
          <div className="mt-8 flex flex-wrap items-center gap-3 font-mono text-xs tracking-wider">
            <button
              onClick={onWatchReel}
              className={`flex items-center gap-2 px-5 py-3 font-bold uppercase border transition-all cursor-pointer ${
                isDarkMode
                  ? 'bg-white text-black border-white hover:bg-transparent hover:text-white'
                  : 'bg-black text-white border-black hover:bg-transparent hover:text-black'
              }`}
            >
              <Play className="h-3.5 w-3.5 fill-current" />
              <span>Watch Reels</span>
            </button>

            <button
              onClick={onExploreParkour}
              className={`px-5 py-3 font-semibold uppercase border transition-all cursor-pointer ${
                isDarkMode
                  ? 'border-neutral-700 text-neutral-300 hover:border-white hover:text-white bg-neutral-950'
                  : 'border-neutral-300 text-neutral-700 hover:border-black hover:text-black bg-neutral-50'
              }`}
            >
              Parkour Coordination
            </button>

            <button
              onClick={onExploreCredits}
              className={`px-5 py-3 font-semibold uppercase border transition-all cursor-pointer opacity-80 hover:opacity-100 ${
                isDarkMode
                  ? 'border-neutral-800 text-neutral-400 hover:border-white hover:text-white'
                  : 'border-neutral-300 text-neutral-600 hover:border-black hover:text-black'
              }`}
            >
              On Screen (45+)
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

        {/* Right Sharp Image Column (col-span-5) */}
        <div className="md:col-span-5">
          <div className={`relative border overflow-hidden ${
            isDarkMode ? 'border-neutral-800 bg-neutral-950' : 'border-neutral-200 bg-neutral-50'
          }`}>
            <img
              src={ACTUAL_HERO_PORTRAIT}
              alt="Chima Akenzua - Parkour Coordinator and Stunt Performer"
              className="w-full aspect-4/5 object-cover object-top grayscale contrast-110"
            />
            <div className={`p-3 border-t font-mono text-[11px] tracking-wider uppercase flex justify-between ${
              isDarkMode ? 'border-neutral-800 bg-black text-neutral-400' : 'border-neutral-200 bg-white text-neutral-600'
            }`}>
              <span>Specs: {DEFAULT_PROFILE.specs.height} · {DEFAULT_PROFILE.specs.weight}</span>
              <span>Equity · SAG Eligible</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
