import React from 'react';

// SVG logos available in the repository. Missing logos use clear text wordmarks.
import disneySvg from '../assets/logos/disney.svg';
import bbcSvg from '../assets/logos/bbc.svg';
import amazonSvg from '../assets/logos/amazon.svg';

interface ClientLogosProps {
  isDarkMode: boolean;
}

export const ClientLogosSection: React.FC<ClientLogosProps> = ({ isDarkMode }) => {
  const brandLogos: { name: string; alt: string; link: string; src?: string }[] = [
    { name: 'Apple', alt: 'Apple', link: 'https://www.apple.com' },
    { name: 'Disney', src: disneySvg, alt: 'Disney', link: 'https://www.disney.com' },
    { name: 'Nike', alt: 'Nike', link: 'https://www.nike.com' },
    { name: 'Red Bull', alt: 'Red Bull', link: 'https://www.redbull.com' },
    { name: 'Coca-Cola', alt: 'Coca-Cola', link: 'https://www.coca-cola.com' },
    { name: 'BBC', src: bbcSvg, alt: 'BBC', link: 'https://www.bbc.com' },
    { name: 'Amazon', src: amazonSvg, alt: 'Amazon', link: 'https://www.amazon.com' },
    { name: 'Sony', alt: 'Sony', link: 'https://www.sony.com' },
    { name: 'Škoda', alt: 'Škoda', link: 'https://www.skoda-auto.com' },
    { name: 'Puma', alt: 'Puma', link: 'https://www.puma.com' },
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

        {/* Single Small Line of Real Vector Logos */}
        <div className="mt-6 flex items-center justify-between gap-6 sm:gap-8 overflow-x-auto pb-2 scrollbar-none">
          {brandLogos.map((brand) => (
            <a
              key={brand.name}
              href={brand.link}
              target="_blank"
              rel="noopener noreferrer"
              title={brand.name}
              className="flex items-center justify-center shrink-0 transition-all duration-200 hover:scale-110 cursor-pointer"
            >
              {brand.src ? (
                <img
                  src={brand.src}
                  alt={brand.alt}
                  className={`h-4 sm:h-5 max-w-[70px] sm:max-w-[80px] object-contain transition-opacity duration-200 ${
                    isDarkMode 
                      ? 'brightness-0 invert opacity-40 hover:opacity-100' 
                      : 'brightness-0 opacity-40 hover:opacity-100'
                  }`}
                />
              ) : (
                <span
                  className="block whitespace-nowrap font-mono text-[11px] sm:text-xs font-extrabold uppercase tracking-tighter opacity-50 hover:opacity-100"
                >
                  {brand.name}
                </span>
              )}
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
