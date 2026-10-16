import React, { useState } from 'react';
import { Volume2, ChevronRight, BookOpen, Compass } from 'lucide-react';
import { soundEngine } from '../services/soundEngine';

interface HeroSectionProps {
  onExploreClick: () => void;
  onOpenLegend: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick, onOpenLegend }) => {
  const [isPlayingTeaser, setIsPlayingTeaser] = useState(false);

  const handleSoundTeaser = () => {
    setIsPlayingTeaser(true);
    soundEngine.playGongAgeng();
    setTimeout(() => soundEngine.playKendangDhadhu(), 180);
    setTimeout(() => soundEngine.playKendangTak(), 380);
    setTimeout(() => soundEngine.playSelompretPhrase(), 550);
    setTimeout(() => soundEngine.playKendangTung(), 850);
    setTimeout(() => setIsPlayingTeaser(false), 2400);
  };

  return (
    <section id="beranda" className="relative w-full min-h-[92vh] flex flex-col justify-between overflow-hidden bg-[#15100B]">
      {/* Background Hero Image with sepia toning & warm antique vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/barongan_blora_hero_1792083038221.jpg"
          alt="Pertunjukan Barongan Blora Gaya Klasik Tempo Dulu"
          className="w-full h-full object-cover object-center vintage-photo"
          referrerPolicy="no-referrer"
        />
        {/* Measured dark antique gradient scrims */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#15100B] via-[#15100B]/80 to-[#15100B]/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#15100B] via-[#15100B]/70 to-transparent" />
      </div>

      {/* Main Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pt-20 pb-16 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl space-y-6">
          {/* Vintage Archival Docket & Stamp */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="vintage-stamp">
              WARISAN LELUHUR WBTb RI · 1928
            </span>
            <span className="text-xs tracking-widest uppercase font-cinzel text-[#C59B48]">
              Kabupaten Blora · Karesidenan Rembang
            </span>
          </div>

          {/* Slogan & Title in Antique Typography */}
          <div className="space-y-4">
            <div className="text-xs uppercase tracking-widest font-cinzel text-[#B39366]">
              Serat Sejarah & Kesenian Tradisional
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-playfair text-[#FBF4E6] leading-[1.14] tracking-wide text-balance">
              Mengeja Keberanian, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D93838] via-[#E2A84B] to-[#F7DF94] italic font-serif">
                Menjaga Tradisi
              </span>
            </h1>
            <p className="text-base sm:text-lg text-[#D6C5AA] font-garamond leading-relaxed max-w-2xl font-normal text-balance">
              Menelusuri jejak sakral Prabu Singo Barong di tengah rimbunnya hutan jati Alas Roban. Simbol daya amarah purba yang diluluhkan budi luhur ksatria Panji, bermahkotakan bentangan bulu merak keemasan dan dentuman kendang tempo doeloe.
            </p>
          </div>

          {/* Action Buttons with Vintage Tactile Design */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={onExploreClick}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs uppercase tracking-wider font-bold font-cinzel text-[#FCE6B7] bg-[#781B1B] hover:bg-[#8F2222] border border-[#C59B48]/60 rounded-sm shadow-lg shadow-black/60 transition-all cursor-pointer group"
            >
              <span>Bedah Karakter & Topeng</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={handleSoundTeaser}
              disabled={isPlayingTeaser}
              className="inline-flex items-center gap-2 px-5 py-3.5 text-xs uppercase tracking-wider font-medium font-cinzel text-[#E8D4A8] bg-[#231A12]/90 hover:bg-[#2C2117] border border-[#C59B48]/40 rounded-sm backdrop-blur-sm transition-all cursor-pointer disabled:opacity-75"
            >
              <Volume2 className={`w-4 h-4 text-[#C59B48] ${isPlayingTeaser ? 'animate-bounce' : ''}`} />
              <span>{isPlayingTeaser ? 'Mengalunkan Tabuhan...' : 'Dengar Dentuman Sakral'}</span>
            </button>

            <button
              onClick={onOpenLegend}
              className="inline-flex items-center gap-2 px-4 py-3.5 text-xs uppercase tracking-wider font-medium font-cinzel text-[#C8B89E] hover:text-[#F3E5C2] transition-colors cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-[#C59B48]" />
              <span>Babad Alas Lodaya</span>
            </button>
          </div>
        </div>
      </div>

      {/* Vintage Accession Register Ribbon */}
      <div className="relative z-10 w-full border-t border-[#C59B48]/35 bg-[#1B130D]/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-[#D8C7AB]">
          <div className="flex flex-col border-l border-[#C59B48]/30 pl-3">
            <span className="text-[10px] uppercase tracking-widest text-[#C59B48] font-cinzel">Status Registrasi</span>
            <span className="text-sm font-semibold text-[#F7EFE1] font-cinzel">WBTb Nasional Kemendikbud</span>
          </div>
          <div className="flex flex-col border-l border-[#C59B48]/30 pl-3">
            <span className="text-[10px] uppercase tracking-widest text-[#C59B48] font-cinzel">Paguyuban Terdata</span>
            <span className="text-sm font-semibold text-[#F7EFE1] tabular-nums font-cinzel">120+ Sanggar Kuno & Aktif</span>
          </div>
          <div className="flex flex-col border-l border-[#C59B48]/30 pl-3">
            <span className="text-[10px] uppercase tracking-widest text-[#C59B48] font-cinzel">Karakter Pakeliran</span>
            <span className="text-sm font-semibold text-[#F7EFE1] font-cinzel">5 Tokoh Utama Berfilosofi</span>
          </div>
          <div className="flex flex-col border-l border-[#C59B48]/30 pl-3">
            <span className="text-[10px] uppercase tracking-widest text-[#C59B48] font-cinzel">Pentas Kolosal</span>
            <span className="text-sm font-semibold text-[#F7EFE1] tabular-nums font-cinzel">1.000+ Barongan Rampak</span>
          </div>
        </div>
      </div>
    </section>
  );
};
