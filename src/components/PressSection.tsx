import React from 'react';
import { ExternalLink } from 'lucide-react';
import { PRESS_ITEMS, ACTUAL_ABOUT_PORTRAIT, AJK_PHOTO_2 } from '../data/chimaData';

interface PressProps {
  isDarkMode: boolean;
}

export const PressSection: React.FC<PressProps> = ({ isDarkMode }) => {
  return (
    <section id="press" className="py-16 sm:py-24 border-t border-current/15">
      <div className="mx-auto max-w-5xl px-6">
        
        {/* Header */}
        <div className="pb-8 border-b border-current/15">
          <h2 className="text-xl sm:text-2xl font-mono font-bold uppercase tracking-wider">
            PRESS COVERAGE & INTERVIEWS
          </h2>
          <p className="mt-1 text-xs font-mono opacity-60 uppercase tracking-widest">
            Editorial Features, Profiles & Broadcast Commentary
          </p>
        </div>

        {/* 2-Column Layout: Editorial Quotes Left + Image Stills Right */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-start font-mono">
          
          {/* Left Column: Press Articles (col-span-7) */}
          <div className="md:col-span-7 space-y-6">
            {PRESS_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className={`border p-6 transition-colors ${
                  isDarkMode ? 'border-neutral-800 bg-neutral-950' : 'border-neutral-200 bg-neutral-50'
                }`}
              >
                <div className="flex items-center justify-between text-xs opacity-60 uppercase tracking-wider pb-3 border-b border-current/10">
                  <span className="font-bold text-current">{item.publication}</span>
                  <span className="text-[11px]">{item.tag}</span>
                </div>

                <h3 className="mt-3 text-base font-bold uppercase tracking-tight">
                  {item.headline}
                </h3>

                <blockquote className="mt-3 text-xs sm:text-sm italic opacity-80 border-l-2 border-current pl-3.5 leading-relaxed">
                  "{item.quote}"
                </blockquote>

                {item.url && (
                  <div className="mt-4 pt-3 border-t border-current/10">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs underline underline-offset-4 opacity-75 hover:opacity-100"
                    >
                      <span>Read Feature Profile</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Column: Authentic Press & Gallery Images (col-span-5) */}
          <div className="md:col-span-5 space-y-4">

            <div className="grid grid-cols-2 gap-4">
              <div className={`border overflow-hidden ${isDarkMode ? 'border-neutral-800' : 'border-neutral-200'}`}>
                <img
                  src={ACTUAL_ABOUT_PORTRAIT}
                  alt="Chima Akenzua Press Portrait"
                  className="w-full aspect-3/4 object-cover grayscale"
                />
              </div>
              <div className={`border overflow-hidden ${isDarkMode ? 'border-neutral-800' : 'border-neutral-200'}`}>
                <img
                  src={AJK_PHOTO_2}
                  alt="AJK Agency Movement Profile"
                  className="w-full aspect-3/4 object-cover grayscale"
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
