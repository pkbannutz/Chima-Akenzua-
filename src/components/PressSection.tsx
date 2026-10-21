import React, { useEffect, useState } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight, X } from 'lucide-react';
import pressGallery from '../data/pressGallery.json';
import { PRESS_ITEMS, ACTUAL_ABOUT_PORTRAIT, AJK_PHOTO_2 } from '../data/chimaData';

interface PressProps {
  isDarkMode: boolean;
}

export const PressSection: React.FC<PressProps> = ({ isDarkMode }) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const localUrl = (filename: string) => `${import.meta.env.BASE_URL}press/${filename}`;
  const wixUrl = (filename: string) => `https://static.wixstatic.com/media/${filename}`;

  useEffect(() => {
    if (selectedImage === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedImage(null);
      if (event.key === 'ArrowRight') setSelectedImage((i) => i === null ? null : (i + 1) % pressGallery.length);
      if (event.key === 'ArrowLeft') setSelectedImage((i) => i === null ? null : (i + pressGallery.length - 1) % pressGallery.length);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [selectedImage]);

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

          {/* Existing portraits remain. Magazine archive is added alongside press cards. */}
          <div className="md:col-span-5 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className={`border overflow-hidden ${isDarkMode ? 'border-neutral-800' : 'border-neutral-200'}`}>
                <img src={ACTUAL_ABOUT_PORTRAIT} alt="Chima Akenzua Press Portrait" className="w-full aspect-3/4 object-cover grayscale" />
              </div>
              <div className={`border overflow-hidden ${isDarkMode ? 'border-neutral-800' : 'border-neutral-200'}`}>
                <img src={AJK_PHOTO_2} alt="AJK Agency Movement Profile" className="w-full aspect-3/4 object-cover grayscale" />
              </div>
            </div>
            <div>
              <div className="flex items-end justify-between gap-4 border-b border-current/15 pb-3">
                <div>
                  <h3 className="text-base font-mono font-bold tracking-widest uppercase">MAGAZINES</h3>
                  <p className="mt-1 text-[10px] font-mono uppercase tracking-wider opacity-60">Press images, features &amp; archive</p>
                </div>
                <span className="font-mono text-[10px] tracking-wider opacity-60">{pressGallery.length} IMAGES</span>
              </div>
              <div className="mt-4 max-h-[660px] overflow-y-auto overscroll-contain pr-1" aria-label="Magazine and press archive gallery">
                <div className="grid grid-cols-2 gap-3">
                  {pressGallery.map((item, index) => (
                    <button
                      key={item.filename}
                      type="button"
                      onClick={() => setSelectedImage(index)}
                      className={`group min-w-0 border text-left cursor-zoom-in transition-colors ${
                        isDarkMode ? 'border-neutral-800 bg-neutral-950 hover:border-neutral-500' : 'border-neutral-200 bg-neutral-50 hover:border-neutral-400'
                      }`}
                      aria-label={`View image ${index + 1}: ${item.description}`}
                    >
                      <div className={`aspect-4/3 overflow-hidden flex items-center justify-center ${
                        isDarkMode ? 'bg-neutral-900' : 'bg-neutral-100'
                      }`}>
                        <img
                          loading="lazy"
                          decoding="async"
                          src={localUrl(item.filename)}
                          onError={(event) => {
                            const img = event.currentTarget;
                            if (img.src !== wixUrl(item.filename)) img.src = wixUrl(item.filename);
                          }}
                          alt={item.description}
                          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                        />
                      </div>
                      <span className="block px-2.5 py-2 font-mono text-[10px] leading-snug opacity-70 line-clamp-2">{item.description}</span>
                    </button>
                  ))}
                </div>
              </div>
              <p className="mt-3 font-mono text-[10px] opacity-60">Select an image to view its original description and full photograph.</p>
            </div>
          </div>
        </div>

      </div>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 p-4 sm:p-8 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Magazine and press photograph"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-full max-w-5xl max-h-full flex flex-col items-center gap-4"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="w-full flex items-center justify-between text-white font-mono text-xs tracking-wider">
              <span>MAGAZINES · {selectedImage + 1} / {pressGallery.length}</span>
              <button type="button" onClick={() => setSelectedImage(null)} className="p-2 hover:opacity-60 cursor-pointer" aria-label="Close image"><X className="h-6 w-6" /></button>
            </div>
            <div className="flex w-full min-h-0 flex-1 items-center justify-between gap-2 sm:gap-5">
              <button
                type="button"
                className="shrink-0 text-white p-2 hover:opacity-60 cursor-pointer"
                aria-label="Previous image"
                onClick={() => setSelectedImage((selectedImage + pressGallery.length - 1) % pressGallery.length)}
              ><ChevronLeft className="h-6 w-6" /></button>
              <img
                key={pressGallery[selectedImage].filename}
                src={localUrl(pressGallery[selectedImage].filename)}
                onError={(event) => {
                  const img = event.currentTarget;
                  if (img.src !== wixUrl(pressGallery[selectedImage].filename)) img.src = wixUrl(pressGallery[selectedImage].filename);
                }}
                alt={pressGallery[selectedImage].description}
                className="block min-w-0 max-w-full max-h-[65vh] object-contain"
              />
              <button
                type="button"
                className="shrink-0 text-white p-2 hover:opacity-60 cursor-pointer"
                aria-label="Next image"
                onClick={() => setSelectedImage((selectedImage + 1) % pressGallery.length)}
              ><ChevronRight className="h-6 w-6" /></button>
            </div>
            <p className="w-full max-w-3xl text-center text-xs sm:text-sm text-neutral-200 font-mono leading-relaxed">
              {pressGallery[selectedImage].description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
