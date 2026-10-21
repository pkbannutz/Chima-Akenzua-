import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';
import { CreditItem, FILMOGRAPHY } from '../data/chimaData';

interface FilmographyProps {
  isDarkMode: boolean;
  credits?: CreditItem[];
}

export const FilmographySection: React.FC<FilmographyProps> = ({
  isDarkMode,
  credits = FILMOGRAPHY
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const categories = ['ALL', 'FEATURE FILM', 'TELEVISION', 'COMMERCIAL', 'PARKOUR COORDINATOR'];

  const filteredCredits = credits.filter((item) => {
    const catUpper = item.category.toUpperCase();
    const matchesCat =
      selectedCategory === 'ALL' ||
      (selectedCategory === 'FEATURE FILM' && catUpper.includes('FILM')) ||
      (selectedCategory === 'TELEVISION' && catUpper.includes('TELEVISION')) ||
      (selectedCategory === 'COMMERCIAL' && (catUpper.includes('COMMERCIAL') || catUpper.includes('DOUBLE'))) ||
      (selectedCategory === 'PARKOUR COORDINATOR' && catUpper.includes('PARKOUR'));

    const query = searchQuery.toLowerCase().trim();
    const matchesQuery =
      query === '' ||
      item.title.toLowerCase().includes(query) ||
      item.role.toLowerCase().includes(query) ||
      item.production.toLowerCase().includes(query);

    return matchesCat && matchesQuery;
  });

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="credits" className="py-14 sm:py-20 border-t border-current/15">
      <div className="mx-auto max-w-5xl px-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-current/15">
          <div>
            <h2 className="text-xl sm:text-2xl font-mono font-bold uppercase tracking-wider">
              ON SCREEN
            </h2>
            <p className="mt-1 text-xs font-mono opacity-60 uppercase tracking-widest">
              Filmography, Stunt Performance & Parkour Doubling
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="FILTER CREDITS..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full px-3 py-2 text-xs font-mono uppercase tracking-wider border outline-none ${
                isDarkMode
                  ? 'bg-black border-neutral-800 text-white placeholder-neutral-600 focus:border-white'
                  : 'bg-white border-neutral-300 text-black placeholder-neutral-400 focus:border-black'
              }`}
            />
          </div>
        </div>

        {/* Category Filters (Sharp Buttons) */}
        <div className="mt-6 flex flex-wrap items-center gap-2 font-mono text-xs tracking-wider">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 border uppercase transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? (isDarkMode ? 'bg-white text-black border-white font-bold' : 'bg-black text-white border-black font-bold')
                  : (isDarkMode ? 'border-neutral-800 text-neutral-400 hover:text-white' : 'border-neutral-300 text-neutral-600 hover:text-black')
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Credits Table / Clean List */}
        <div className="mt-8 border border-current/15 divide-y divide-current/15">
          {/* Table Header */}
          <div className={`hidden sm:grid grid-cols-12 gap-4 px-4 py-3 font-mono text-xs tracking-widest uppercase opacity-60 ${
            isDarkMode ? 'bg-neutral-950' : 'bg-neutral-100'
          }`}>
            <span className="col-span-2">YEAR</span>
            <span className="col-span-4">PRODUCTION</span>
            <span className="col-span-3">ROLE</span>
            <span className="col-span-3 text-right">STUDIO / CLIENT</span>
          </div>

          {/* Table Rows */}
          {filteredCredits.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <div key={item.id} className="transition-colors hover:bg-current/5">
                <button
                  onClick={() => toggleExpand(item.id)}
                  className="w-full text-left px-4 py-4 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-center cursor-pointer font-mono"
                >
                  <span className="sm:col-span-2 text-xs opacity-60 tabular-nums">
                    {item.year}
                  </span>

                  <span className="sm:col-span-4 text-sm font-bold tracking-tight">
                    {item.title}
                  </span>

                  <span className="sm:col-span-3 text-xs opacity-90">
                    {item.role}
                  </span>

                  <div className="sm:col-span-3 flex items-center justify-between sm:justify-end gap-2 text-xs opacity-60">
                    <span className="truncate">{item.production}</span>
                    {isExpanded ? (
                      <ChevronUp className="h-3.5 w-3.5 shrink-0" />
                    ) : (
                      <ChevronDown className="h-3.5 w-3.5 shrink-0" />
                    )}
                  </div>
                </button>

                {/* Inline Expansion Detail for Row */}
                {isExpanded && (
                  <div className={`px-4 pb-4 pt-3 text-xs border-t border-current/10 font-mono ${
                    isDarkMode ? 'bg-neutral-950/80 text-neutral-300' : 'bg-neutral-50 text-neutral-700'
                  }`}>
                    <div className="flex flex-col sm:flex-row gap-4 items-start">
                      {item.image && (
                        <div className="w-full sm:w-48 aspect-16/9 sm:aspect-4/3 shrink-0 border border-current/20 overflow-hidden bg-black">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover grayscale contrast-115"
                          />
                        </div>
                      )}
                      <div className="space-y-2 flex-1">
                        <p className="leading-relaxed">
                          {item.description}
                        </p>
                        <div className="flex flex-wrap gap-2 text-[11px] opacity-75 pt-1">
                          <span className="font-bold">Disciplines:</span>
                          {item.keySkills.map((skill, sIdx) => (
                            <span key={sIdx} className="underline underline-offset-2">
                              {skill}{sIdx < item.keySkills.length - 1 ? ',' : ''}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filteredCredits.length === 0 && (
          <div className="mt-8 p-8 text-center font-mono text-xs opacity-60 border border-dashed border-current/20">
            No credits found matching filter.
          </div>
        )}

      </div>
    </section>
  );
};
