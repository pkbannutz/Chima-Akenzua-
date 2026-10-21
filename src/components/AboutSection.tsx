import React from 'react';
import { AJK_PHOTO_1, ACTUAL_CHIMA_SIGNATURE, DEFAULT_PROFILE, CLIENT_BRANDS } from '../data/chimaData';

interface AboutProps {
  isDarkMode: boolean;
}

export const AboutSection: React.FC<AboutProps> = ({ isDarkMode }) => {
  return (
    <section id="about" className={`py-14 sm:py-20 border-t ${
      isDarkMode ? 'border-neutral-800 bg-[#000000]' : 'border-neutral-200 bg-[#FBFBFB]'
    }`}>
      <div className="mx-auto max-w-5xl px-6">
        
        {/* Section Title */}
        <div className="pb-6 border-b border-current/15">
          <h2 className="text-xl sm:text-2xl font-mono font-bold uppercase tracking-wider">
            ABOUT & SPECIFICATIONS
          </h2>
          <p className="mt-1 text-xs font-mono opacity-60 uppercase tracking-widest">
            Physical Storyteller & SAG Award-Nominated Stunt Performer
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Authentic Portrait & Specs (col-span-5) */}
          <div className="md:col-span-5 space-y-4">
            <div className={`border overflow-hidden ${
              isDarkMode ? 'border-neutral-800 bg-neutral-950' : 'border-neutral-300 bg-neutral-100'
            }`}>
              <img
                src={AJK_PHOTO_1}
                alt="Chima Akenzua Official Portrait"
                className="w-full aspect-4/5 object-cover grayscale contrast-115"
              />
            </div>

            {/* Physical Specs Table */}
            <div className={`border p-4 font-mono text-xs space-y-2 ${
              isDarkMode ? 'border-neutral-800 bg-neutral-950' : 'border-neutral-200 bg-white'
            }`}>
              <div className="flex justify-between border-b border-current/10 pb-1.5 opacity-80">
                <span>HEIGHT</span>
                <span className="font-bold">{DEFAULT_PROFILE.specs.height}</span>
              </div>
              <div className="flex justify-between border-b border-current/10 pb-1.5 opacity-80">
                <span>WEIGHT</span>
                <span className="font-bold">{DEFAULT_PROFILE.specs.weight}</span>
              </div>
              <div className="flex justify-between border-b border-current/10 pb-1.5 opacity-80">
                <span>PLAYING AGE</span>
                <span className="font-bold">{DEFAULT_PROFILE.specs.playingAge}</span>
              </div>
              <div className="flex justify-between border-b border-current/10 pb-1.5 opacity-80">
                <span>HAIR / EYES</span>
                <span className="font-bold">{DEFAULT_PROFILE.specs.hairEyes}</span>
              </div>
              <div className="flex justify-between border-b border-current/10 pb-1.5 opacity-80">
                <span>CITIZENSHIP</span>
                <span className="font-bold">{DEFAULT_PROFILE.specs.passports}</span>
              </div>
              <div className="flex justify-between opacity-80 pt-0.5">
                <span>AFFILIATIONS</span>
                <span className="font-bold">{DEFAULT_PROFILE.specs.unions}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Bio Copy from Website & Brand Credits */}
          <div className="md:col-span-7 space-y-6">
            <div className="space-y-4 text-sm sm:text-base leading-relaxed opacity-85">
              <p>
                {DEFAULT_PROFILE.bio}
              </p>
              {DEFAULT_PROFILE.aboutParagraphs.map((para, idx) => (
                <p key={idx}>
                  {para}
                </p>
              ))}
            </div>

            {/* Client Brand Collaborations from Chima's site */}
            <div className="pt-4 border-t border-current/15">
              <h3 className="font-mono text-xs uppercase tracking-widest font-bold opacity-90">
                COLLABORATING BRANDS & STUDIOS
              </h3>
              <div className="mt-3 flex flex-wrap gap-2 font-mono text-xs">
                {CLIENT_BRANDS.map((brand, idx) => (
                  <span
                    key={idx}
                    className={`border px-3 py-1 uppercase tracking-wider ${
                      isDarkMode ? 'border-neutral-800 bg-neutral-950 text-neutral-300' : 'border-neutral-200 bg-white text-neutral-800'
                    }`}
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>

            {/* Signature Logo from website */}
            <div className="pt-6 border-t border-current/15 flex items-center justify-between">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-widest opacity-60 block">
                  Movement Specialist & Creator
                </span>
                <span className="font-mono text-xs font-bold uppercase tracking-wider">
                  Chima Akenzua
                </span>
              </div>
              <img
                src={ACTUAL_CHIMA_SIGNATURE}
                alt="Chima Akenzua Signature Wordmark"
                className={`h-7 w-auto object-contain ${isDarkMode ? 'invert' : ''} opacity-80`}
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
