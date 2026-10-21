import React from 'react';
import { AJK_PHOTO_1, DEFAULT_PROFILE } from '../data/chimaData';

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

          {/* Bio begins flush with the portrait's top edge. */}
          <div className="md:col-span-7 self-start pt-0 md:-mt-1.5">
            <div className="space-y-4 text-sm sm:text-base leading-relaxed opacity-85">
              <p>{DEFAULT_PROFILE.bio}</p>
              {DEFAULT_PROFILE.aboutParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
