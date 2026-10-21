import React from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  isDarkMode: boolean;
  onScrollToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ isDarkMode, onScrollToTop }) => {
  return (
    <footer className="border-t border-current/15 py-10 font-mono text-xs">
      <div className="mx-auto max-w-5xl px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <span className="font-bold uppercase tracking-widest">CHIMA AKENZUA</span>
          <span className="opacity-60 block mt-1">SAG Nominee · Stunt Performer · Actor</span>
        </div>

        <div className="flex flex-wrap items-center gap-6 opacity-75">
          <a
            href="https://www.imdb.com/name/nm4623133/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:opacity-100"
          >
            IMDB
          </a>
          <a
            href="https://www.ajkagency.com/artist/chima-akenzua"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:opacity-100"
          >
            AJK AGENCY
          </a>
          <a
            href="https://www.instagram.com/chimaakenzua/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:opacity-100"
          >
            INSTAGRAM
          </a>
        </div>

        <button
          onClick={onScrollToTop}
          className="flex items-center gap-1.5 opacity-60 hover:opacity-100 cursor-pointer uppercase"
        >
          <span>TOP</span>
          <ArrowUp className="h-3 w-3" />
        </button>
      </div>
    </footer>
  );
};
