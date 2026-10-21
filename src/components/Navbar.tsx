import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
  onScrollTo: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isDarkMode,
  onToggleTheme,
  onScrollTo
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { label: 'PARKOUR COORDINATOR', id: 'parkour-coordinator' },
    { label: 'ON SCREEN', id: 'credits' },
    { label: 'PRESS', id: 'press' },
    { label: 'REELS', id: 'showreels' },
    { label: 'ABOUT', id: 'about' },
    { label: 'CONTACT', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    onScrollTo(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 w-full border-b transition-colors duration-200 ${
      isDarkMode 
        ? 'bg-black/95 border-neutral-800 text-white' 
        : 'bg-white/95 border-neutral-200 text-black'
    } backdrop-blur-md`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Brand */}
        <button
          onClick={() => onScrollTo('hero')}
          className="text-left font-mono tracking-widest text-sm sm:text-base font-bold uppercase transition-opacity hover:opacity-70 cursor-pointer shrink-0"
        >
          CHIMA AKENZUA
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-6 text-xs font-mono tracking-wider">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`transition-colors hover:opacity-60 cursor-pointer whitespace-nowrap ${
                link.id === 'parkour-coordinator' ? 'font-bold' : ''
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right Actions: Theme Toggle & Book CTA */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onToggleTheme}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono tracking-wider border transition-colors cursor-pointer ${
              isDarkMode
                ? 'border-neutral-700 text-neutral-300 hover:text-white hover:border-white'
                : 'border-neutral-300 text-neutral-700 hover:text-black hover:border-black'
            }`}
            title="Toggle Light / Dark mode"
          >
            {isDarkMode ? (
              <>
                <Sun className="h-3.5 w-3.5" />
                <span>LIGHT</span>
              </>
            ) : (
              <>
                <Moon className="h-3.5 w-3.5" />
                <span>DARK</span>
              </>
            )}
          </button>

          <button
            onClick={() => onScrollTo('contact')}
            className={`hidden sm:inline-block px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider font-semibold border transition-all cursor-pointer ${
              isDarkMode
                ? 'bg-white text-black border-white hover:bg-transparent hover:text-white'
                : 'bg-black text-white border-black hover:bg-transparent hover:text-black'
            }`}
          >
            BOOKING
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 text-current hover:opacity-70 cursor-pointer"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`lg:hidden border-t px-6 py-4 flex flex-col gap-3 font-mono text-xs tracking-widest ${
          isDarkMode ? 'bg-black border-neutral-800' : 'bg-white border-neutral-200'
        }`}>
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className="text-left py-2 border-b border-neutral-800/20 hover:opacity-60"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleLinkClick('contact')}
            className={`w-full py-2.5 text-center font-bold uppercase border mt-2 ${
              isDarkMode ? 'bg-white text-black border-white' : 'bg-black text-white border-black'
            }`}
          >
            BOOKING & CONTACT
          </button>
        </div>
      )}
    </header>
  );
};
