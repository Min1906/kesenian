import React from 'react';

interface TopBarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const TopBar: React.FC<TopBarProps> = ({ onNavigate, activeSection }) => {
  return (
    <header className="sticky top-0 z-50 bg-[#16100B]/95 backdrop-blur-md border-b border-[#C59B48]/30 transition-colors shadow-lg shadow-black/40">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-6 py-3.5">
        {/* Zone 1: Single text element wordmark with vintage heritage typography */}
        <a
          href="#beranda"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('beranda');
          }}
          className="text-lg md:text-xl font-bold font-cinzel tracking-widest text-[#E8D4A8] hover:text-[#F3E5C2] transition-colors whitespace-nowrap shrink-0"
        >
          BARONGAN BLORA
        </a>

        {/* Zone 2: 4–5 clean single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs tracking-wider uppercase font-cinzel font-medium text-[#C8B89E]">
          <button
            onClick={() => onNavigate('karakter')}
            className={`transition-colors whitespace-nowrap shrink-0 py-1 cursor-pointer ${
              activeSection === 'karakter'
                ? 'text-[#F3D382] font-semibold border-b-2 border-[#8B1E1E]'
                : 'hover:text-[#F1E5CF]'
            }`}
          >
            Tokoh & Filosofi
          </button>
          <button
            onClick={() => onNavigate('gamelan')}
            className={`transition-colors whitespace-nowrap shrink-0 py-1 cursor-pointer ${
              activeSection === 'gamelan'
                ? 'text-[#F3D382] font-semibold border-b-2 border-[#8B1E1E]'
                : 'hover:text-[#F1E5CF]'
            }`}
          >
            Tabuhan Gamelan
          </button>
          <button
            onClick={() => onNavigate('kriya')}
            className={`transition-colors whitespace-nowrap shrink-0 py-1 cursor-pointer ${
              activeSection === 'kriya'
                ? 'text-[#F3D382] font-semibold border-b-2 border-[#8B1E1E]'
                : 'hover:text-[#F1E5CF]'
            }`}
          >
            Kriya Topeng
          </button>
          <button
            onClick={() => onNavigate('sanggar')}
            className={`transition-colors whitespace-nowrap shrink-0 py-1 cursor-pointer ${
              activeSection === 'sanggar'
                ? 'text-[#F3D382] font-semibold border-b-2 border-[#8B1E1E]'
                : 'hover:text-[#F1E5CF]'
            }`}
          >
            Peta Sanggar
          </button>
          <button
            onClick={() => onNavigate('festival')}
            className={`transition-colors whitespace-nowrap shrink-0 py-1 cursor-pointer ${
              activeSection === 'festival'
                ? 'text-[#F3D382] font-semibold border-b-2 border-[#8B1E1E]'
                : 'hover:text-[#F1E5CF]'
            }`}
          >
            Kalender Pentas
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => onNavigate('gamelan')}
            className="px-4 py-2 text-xs font-semibold tracking-wider uppercase font-cinzel text-[#FCE7B8] bg-gradient-to-r from-[#7B1D1D] to-[#922222] hover:from-[#8E2222] hover:to-[#A72727] border border-[#C59B48]/50 rounded-sm shadow-md transition-all cursor-pointer whitespace-nowrap shrink-0"
          >
            Tabuh Gamelan
          </button>
        </div>
      </div>
    </header>
  );
};
