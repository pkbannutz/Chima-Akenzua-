import React from 'react';

// Actual Official Vector SVGs downloaded directly
import appleSvg from '../assets/logos/apple.svg';
import nikeSvg from '../assets/logos/nike.svg';
import disneySvg from '../assets/logos/disney.svg';
import redbullSvg from '../assets/logos/redbull.svg';
import cocacolaSvg from '../assets/logos/cocacola.svg';
import bbcSvg from '../assets/logos/bbc.svg';
import amazonSvg from '../assets/logos/amazon.svg';
import sonySvg from '../assets/logos/sony.svg';
import skodaSvg from '../assets/logos/skoda.svg';
import pumaSvg from '../assets/logos/puma.svg';

interface ClientLogosProps {
  isDarkMode: boolean;
}

export const ClientLogosSection: React.FC<ClientLogosProps> = ({ isDarkMode }) => {
  const brandLogos = [
    { name: 'Apple', src: appleSvg, alt: 'Apple', link: 'https://www.apple.com' },
    { name: 'Disney', src: disneySvg, alt: 'Disney', link: 'https://www.disney.com' },
    { name: 'Nike', src: nikeSvg, alt: 'Nike', link: 'https://www.nike.com' },
    { name: 'Red Bull', src: redbullSvg, alt: 'Red Bull', link: 'https://www.redbull.com' },
    { name: 'Coca-Cola', src: cocacolaSvg, alt: 'Coca-Cola', link: 'https://www.coca-cola.com' },
    { name: 'BBC', src: bbcSvg, alt: 'BBC', link: 'https://www.bbc.com' },
    { name: 'Amazon', src: amazonSvg, alt: 'Amazon', link: 'https://www.amazon.com' },
    { name: 'Sony', src: sonySvg, alt: 'Sony', link: 'https://www.sony.com' },
    { name: 'Škoda', src: skodaSvg, alt: 'Škoda', link: 'https://www.skoda-auto.com' },
    { name: 'Puma', src: pumaSvg, alt: 'Puma', link: 'https://www.puma.com' },
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
              <img
                src={brand.src}
                alt={brand.alt}
                className={`h-4 sm:h-5 max-w-[70px] sm:max-w-[80px] object-contain transition-opacity duration-200 ${
                  isDarkMode 
                    ? 'brightness-0 invert opacity-40 hover:opacity-100' 
                    : 'brightness-0 opacity-40 hover:opacity-100'
                }`}
              />
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
