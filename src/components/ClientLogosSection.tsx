import React from 'react';

// SVG logos available in the repository. Missing logos use clear text wordmarks.
import disneySvg from '../assets/logos/disney.svg';
import bbcSvg from '../assets/logos/bbc.svg';

interface ClientLogosProps {
  isDarkMode: boolean;
}

export const ClientLogosSection: React.FC<ClientLogosProps> = ({ isDarkMode }) => {
  // Display only brands with named projects or productions in this portfolio.
  const brandLogos: { name: string; alt: string; link: string; src?: string }[] = [
    { name: 'Apple', alt: 'Apple', link: 'https://www.apple.com' },
    { name: 'Disney', src: disneySvg, alt: 'Disney', link: 'https://www.disney.com' },
    { name: 'Nike', alt: 'Nike', link: 'https://www.nike.com' },
    { name: 'Red Bull', alt: 'Red Bull', link: 'https://www.redbull.com' },
    { name: 'Coca-Cola', alt: 'Coca-Cola', link: 'https://www.coca-cola.com' },
    { name: 'BBC', src: bbcSvg, alt: 'BBC', link: 'https://www.bbc.com' },
    { name: 'Škoda', alt: 'Škoda', link: 'https://www.skoda-auto.com' },
    { name: 'Pepsi', alt: 'Pepsi', link: 'https://www.pepsi.com' },
    { name: 'National Geographic', alt: 'National Geographic', link: 'https://www.nationalgeographic.com' },
  ];

  return (
    <section id="clients" className="py-10 border-t border-current/15">
      <div className="mx-auto max-w-5xl px-6">
        
        {/* Subtle Mono Label */}
        <div className="text-center">
          <p className="font-mono text-[10px] uppercase tracking-widest opacity-50">
            Selected Studio & Global Brand Collaborations
          </p>
        </div>

        {/* Continuous client marquee: a second copy makes the loop seamless.
            The duplicate is omitted from keyboard navigation and screen readers. */}
        <div className="chima-logos-window mt-6" aria-label="Selected client brands">
          <div className="chima-logos-track">
            {[0, 1].map((copyIndex) => (
              <div
                key={copyIndex}
                className="chima-logos-group"
                aria-hidden={copyIndex === 1 ? true : undefined}
              >
                {brandLogos.map((brand) => (
                  <a
                    key={brand.name}
                    href={brand.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={brand.name}
                    tabIndex={copyIndex === 1 ? -1 : undefined}
                    className="flex items-center justify-center shrink-0 transition-all duration-200 hover:scale-110 cursor-pointer"
                  >
                    {brand.src ? (
                      <img
                        src={brand.src}
                        alt={brand.alt}
                        className={`h-4 sm:h-5 lg:h-10 max-w-[70px] sm:max-w-[80px] lg:max-w-[160px] object-contain transition-opacity duration-200 ${
                          isDarkMode
                            ? 'brightness-0 invert opacity-50 hover:opacity-100'
                            : 'brightness-0 opacity-50 hover:opacity-100'
                        }`}
                      />
                    ) : (
                      <span
                        className="block whitespace-nowrap font-mono text-[11px] sm:text-xs lg:text-2xl font-extrabold uppercase tracking-tighter opacity-60 hover:opacity-100"
                      >
                        {brand.name}
                      </span>
                    )}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
