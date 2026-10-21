import React from 'react';
import { Compass, CheckCircle2, Award, Clapperboard, MapPin, Users } from 'lucide-react';
import { PARKOUR_COORDINATOR_PROJECTS, ACTUAL_PARKOUR_LEAP, AJK_PHOTO_3, DEFAULT_PROFILE } from '../data/chimaData';

interface ParkourCoordinatorProps {
  isDarkMode: boolean;
  onBookInquiry: () => void;
}

export const ParkourCoordinatorSection: React.FC<ParkourCoordinatorProps> = ({
  isDarkMode,
  onBookInquiry
}) => {
  return (
    <section id="parkour-coordinator" className={`py-16 sm:py-24 border-t ${
      isDarkMode ? 'border-neutral-800 bg-[#000000]' : 'border-neutral-200 bg-[#FBFBFB]'
    }`}>
      <div className="mx-auto max-w-5xl px-6">
        
        {/* Prominent Section Header */}
        <div className="pb-8 border-b border-current/15">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest opacity-70">
            <span className="h-2 w-2 bg-current" />
            <span>SPECIALIST DISCIPLINE FOCUS</span>
          </div>

          <h2 className="mt-2 text-3xl sm:text-5xl font-mono font-black uppercase tracking-tight">
            PARKOUR COORDINATOR
          </h2>
          
          <p className="mt-2 text-xs sm:text-sm font-mono tracking-widest uppercase opacity-80">
            Specialist Movement • Creative Direction • Choreography • Performance Coaching
          </p>

          <p className="mt-5 text-sm sm:text-base leading-relaxed opacity-85 max-w-3xl">
            Chima Akenzua brings over 23 years of specialized experience across film, television, commercials, and live productions. Working closely with directors, producers, stunt coordinators, and camera teams, he helps develop and coordinate dynamic, visually compelling movement sequences from concept through to filming.
          </p>
        </div>

        {/* 4 Core Pillars of Parkour Coordination */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
          <div className={`border p-4 ${isDarkMode ? 'border-neutral-800 bg-neutral-950' : 'border-neutral-200 bg-white'}`}>
            <span className="font-bold uppercase tracking-wider block">01 / CHOREOGRAPHY</span>
            <p className="mt-2 opacity-70 leading-relaxed">
              Custom kinetic sequences, obstacle pacing, and timing engineered to fit the film's narrative tone.
            </p>
          </div>

          <div className={`border p-4 ${isDarkMode ? 'border-neutral-800 bg-neutral-950' : 'border-neutral-200 bg-white'}`}>
            <span className="font-bold uppercase tracking-wider block">02 / TALENT CASTING</span>
            <p className="mt-2 opacity-70 leading-relaxed">
              Sourcing and assembling elite parkour teams, athlete doubles, and stunt performers with certified skills.
            </p>
          </div>

          <div className={`border p-4 ${isDarkMode ? 'border-neutral-800 bg-neutral-950' : 'border-neutral-200 bg-white'}`}>
            <span className="font-bold uppercase tracking-wider block">03 / LOCATION RECCES</span>
            <p className="mt-2 opacity-70 leading-relaxed">
              Evaluating architectural surfaces, impact tolerances, fall zones, and kinetic camera lines beforehand.
            </p>
          </div>

          <div className={`border p-4 ${isDarkMode ? 'border-neutral-800 bg-neutral-950' : 'border-neutral-200 bg-white'}`}>
            <span className="font-bold uppercase tracking-wider block">04 / ACTOR COACHING</span>
            <p className="mt-2 opacity-70 leading-relaxed">
              Preparing A-list talent and presenters for physical stunts with absolute on-set safety and screen posture.
            </p>
          </div>
        </div>

        {/* Highlighted Parkour Projects Grid from chimaakenzua.com */}
        <div className="mt-14">
          <h3 className="font-mono text-xs font-bold uppercase tracking-widest opacity-80 mb-6">
            FEATURED COORDINATION & MOVEMENT PROJECTS
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PARKOUR_COORDINATOR_PROJECTS.map((proj, idx) => (
              <div
                key={idx}
                className={`border p-6 flex flex-col justify-between font-mono transition-colors ${
                  isDarkMode ? 'border-neutral-800 bg-neutral-950 hover:border-neutral-600' : 'border-neutral-200 bg-white hover:border-neutral-400'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs opacity-60 uppercase tracking-widest pb-3 border-b border-current/10">
                    <span>{proj.client}</span>
                    <span className="text-[11px]">SPECIALIST</span>
                  </div>

                  <h4 className="mt-3 text-base font-bold uppercase tracking-tight">
                    {proj.title}
                  </h4>

                  <p className="mt-1 text-xs font-semibold opacity-90">
                    Role: {proj.role}
                  </p>

                  <p className="mt-3 text-xs leading-relaxed opacity-75">
                    {proj.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-current/10">
                  <div className="flex flex-wrap gap-2 text-[11px] opacity-70">
                    {proj.keyAspects.map((aspect, aIdx) => (
                      <span key={aIdx} className="border border-current/20 px-2 py-0.5">
                        {aspect}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Bar */}
        <div className={`mt-10 border p-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs ${
          isDarkMode ? 'border-neutral-800 bg-neutral-950' : 'border-neutral-200 bg-white'
        }`}>
          <div>
            <span className="font-bold uppercase tracking-wider block">PLANNING A PARKOUR OR ACTION SEQUENCE?</span>
            <span className="opacity-60 block mt-0.5">Available for early-stage creative consultation, script breakdown, and on-set coordination.</span>
          </div>
          <button
            onClick={onBookInquiry}
            className={`px-5 py-2.5 font-bold uppercase tracking-wider border cursor-pointer shrink-0 ${
              isDarkMode
                ? 'bg-white text-black border-white hover:bg-transparent hover:text-white'
                : 'bg-black text-white border-black hover:bg-transparent hover:text-black'
            }`}
          >
            INQUIRE AS PARKOUR COORDINATOR
          </button>
        </div>

      </div>
    </section>
  );
};
