import React, { useState } from 'react';
import { Mail, Phone, MapPin, Check } from 'lucide-react';
import { DEFAULT_PROFILE } from '../data/chimaData';

interface ContactProps {
  isDarkMode: boolean;
}

export const ContactSection: React.FC<ContactProps> = ({ isDarkMode }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const agency = DEFAULT_PROFILE.agency;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const mailtoLink = `mailto:${agency.agencyEmail}?subject=${encodeURIComponent(
    `Production Inquiry from ${name}`
  )}&body=${encodeURIComponent(
    `Hello AJK Agency,\n\nInquiry from: ${name} (${email})\n\nMessage:\n${message}\n\nBest regards,\n${name}`
  )}`;

  return (
    <section id="contact" className="py-14 sm:py-20 border-t border-current/15">
      <div className="mx-auto max-w-5xl px-6">
        
        {/* Header */}
        <div className="pb-6 border-b border-current/15">
          <h2 className="text-xl sm:text-2xl font-mono font-bold uppercase tracking-wider">
            REPRESENTATION & BOOKING
          </h2>
          <p className="mt-1 text-xs font-mono opacity-60 uppercase tracking-widest">
            London Theatrical Agency & Direct Production Contact
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-10 items-start font-mono">
          
          {/* Left Column: Official Agency Representation (col-span-5) */}
          <div className="md:col-span-5 space-y-6">
            <div className={`border p-6 space-y-4 ${
              isDarkMode ? 'border-neutral-800 bg-neutral-950' : 'border-neutral-200 bg-neutral-50'
            }`}>
              <div>
                <span className="text-[11px] opacity-60 uppercase tracking-widest block">
                  EXCLUSIVE REPRESENTATION
                </span>
                <h3 className="text-lg font-bold uppercase mt-1 tracking-tight">
                  {agency.name}
                </h3>
                <p className="text-xs opacity-75 mt-0.5">
                  {agency.department}
                </p>
              </div>

              <div className="pt-4 border-t border-current/10 space-y-3 text-xs">
                <div>
                  <span className="opacity-60 block">AGENT CONTACT EMAIL:</span>
                  <a
                    href={`mailto:${agency.agencyEmail}`}
                    className="font-bold underline underline-offset-4 hover:opacity-75"
                  >
                    {agency.agencyEmail}
                  </a>
                </div>

                <div>
                  <span className="opacity-60 block">LONDON OFFICE:</span>
                  <span className="opacity-80 block">{agency.address}</span>
                </div>

                <div>
                  <span className="opacity-60 block">PHONE:</span>
                  <span className="opacity-80 block">{agency.phone}</span>
                </div>
              </div>
            </div>

            <p className="text-xs opacity-60 leading-relaxed">
              For direct availability queries regarding film, TV, commercial doubling, or international movement direction, please contact AJK Agency London or use the direct dispatch form.
            </p>
          </div>

          {/* Right Column: Direct Fast Inquiry Form (col-span-7) */}
          <div className="md:col-span-7">
            <div className={`border p-6 sm:p-8 ${
              isDarkMode ? 'border-neutral-800 bg-neutral-950' : 'border-neutral-200 bg-neutral-50'
            }`}>
              {!sent ? (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block uppercase tracking-wider opacity-75 mb-1.5">
                      Your Name / Production Company *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Universal Pictures / Casting Team"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={`w-full px-3 py-2.5 border outline-none ${
                        isDarkMode
                          ? 'bg-black border-neutral-800 text-white focus:border-white'
                          : 'bg-white border-neutral-300 text-black focus:border-black'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block uppercase tracking-wider opacity-75 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="producer@domain.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`w-full px-3 py-2.5 border outline-none ${
                        isDarkMode
                          ? 'bg-black border-neutral-800 text-white focus:border-white'
                          : 'bg-white border-neutral-300 text-black focus:border-black'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block uppercase tracking-wider opacity-75 mb-1.5">
                      Project Details & Shooting Dates *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Project name, role needed (stunt/actor/movement), dates, and location..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className={`w-full px-3 py-2.5 border outline-none ${
                        isDarkMode
                          ? 'bg-black border-neutral-800 text-white focus:border-white'
                          : 'bg-white border-neutral-300 text-black focus:border-black'
                      }`}
                    />
                  </div>

                  <button
                    type="submit"
                    className={`w-full py-3 font-semibold uppercase tracking-wider border transition-all cursor-pointer ${
                      isDarkMode
                        ? 'bg-white text-black border-white hover:bg-transparent hover:text-white'
                        : 'bg-black text-white border-black hover:bg-transparent hover:text-black'
                    }`}
                  >
                    SEND INQUIRY
                  </button>
                </form>
              ) : (
                <div className="py-6 space-y-4 text-center">
                  <div className="text-sm font-bold uppercase tracking-wider">
                    Inquiry Formatted
                  </div>
                  <p className="text-xs opacity-75 leading-relaxed max-w-sm mx-auto">
                    Your inquiry has been prepared for AJK Agency London.
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={mailtoLink}
                      className={`px-5 py-2.5 border font-semibold uppercase tracking-wider text-xs ${
                        isDarkMode
                          ? 'bg-white text-black border-white hover:bg-transparent hover:text-white'
                          : 'bg-black text-white border-black hover:bg-transparent hover:text-black'
                      }`}
                    >
                      Open Email to AJK Agency
                    </a>

                    <button
                      onClick={() => setSent(false)}
                      className="px-4 py-2 text-xs opacity-70 hover:opacity-100 uppercase underline"
                    >
                      Send Another
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
