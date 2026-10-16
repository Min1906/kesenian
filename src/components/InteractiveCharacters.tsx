import React, { useState } from 'react';
import { CHARACTERS } from '../data/characters';
import { soundEngine } from '../services/soundEngine';
import { Volume2, Info, Eye, Shield, Scroll } from 'lucide-react';

export const InteractiveCharacters: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('singo-barong');
  const [activePartIndex, setActivePartIndex] = useState<number>(0);

  const currentCharacter = CHARACTERS.find((c) => c.id === selectedId) || CHARACTERS[0];

  const handleSoundEffect = (id: string) => {
    if (id === 'singo-barong') {
      soundEngine.playGongAgeng();
      setTimeout(() => soundEngine.playKendangDhadhu(), 200);
      setTimeout(() => soundEngine.playKendangTak(), 400);
    } else if (id === 'joko-lodra') {
      soundEngine.playPecutCrack();
      setTimeout(() => soundEngine.playBonang(3), 300);
    } else if (id === 'gendruwon') {
      soundEngine.playKendangDhadhu();
      setTimeout(() => soundEngine.playKempul(), 250);
    } else if (id === 'kuda-lumping') {
      soundEngine.playPecutCrack();
      soundEngine.playKentrung();
      setTimeout(() => soundEngine.playKendangTak(), 150);
    } else if (id === 'penthul-tembem') {
      soundEngine.playKendangTak();
      setTimeout(() => soundEngine.playKendangTung(), 180);
      setTimeout(() => soundEngine.playBonang(5), 360);
    }
  };

  return (
    <section id="karakter" className="relative w-full py-24 bg-[#18120C] border-t border-[#C59B48]/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header with Vintage Broadsheet Heading */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-cinzel text-[#C59B48] font-bold mb-2">
            <span>Babak I</span>
            <span aria-hidden="true" className="text-[#8C7A65]">·</span>
            <span>Serat Panyandra & Ikonografi Klasik</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-playfair text-[#F9F3E5] tracking-wide text-balance">
            Galeri Tokoh & Anatomi Topeng Barongan
          </h2>
          <div className="w-24 h-0.5 bg-[#C59B48]/60 my-3" />
          <p className="text-[#D3C2A7] font-garamond text-base sm:text-lg leading-relaxed">
            Menyingkap tabir mitologis dan makna simbolik di balik setiap pahatan kayu, lecutan pecut, dan gerak langkah pakeliran para tokoh agung pementasan Barongan Blora tempo doeloe.
          </p>
        </div>

        {/* Vintage Character Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none border-b border-[#C59B48]/25">
          {CHARACTERS.map((char) => {
            const isSelected = char.id === selectedId;
            return (
              <button
                key={char.id}
                onClick={() => {
                  setSelectedId(char.id);
                  setActivePartIndex(0);
                  handleSoundEffect(char.id);
                }}
                className={`px-4 py-2.5 text-xs font-semibold tracking-wider uppercase font-cinzel rounded-sm transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  isSelected
                    ? 'bg-[#781B1B] text-[#FDEABF] border border-[#C59B48] shadow-md'
                    : 'bg-[#221911] text-[#B8A78D] hover:text-[#F3E5C2] hover:bg-[#2B2016] border border-[#C59B48]/20'
                }`}
              >
                {char.name}
              </button>
            );
          })}
        </div>

        {/* Museum Accession Detail Pattern: 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Visual Artifact Presentation (7 cols) */}
          <div className="lg:col-span-7 bg-[#201710] border border-[#C59B48]/35 rounded-sm p-6 space-y-6 shadow-xl">
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-black/70 border border-[#C59B48]/30">
              {currentCharacter.image ? (
                <img
                  src={currentCharacter.image}
                  alt={currentCharacter.name}
                  className="w-full h-full object-cover object-center vintage-photo"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-[#2B1F16] to-[#1B130D]">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mb-4 border border-[#C59B48]/60 bg-[#781B1B]/30">
                    <Shield className="w-10 h-10 text-[#C59B48]" />
                  </div>
                  <h4 className="text-xl font-cinzel text-[#F7EFE1] font-bold">{currentCharacter.javaneseName}</h4>
                  <p className="text-xs text-[#C8B89E] font-garamond max-w-sm mt-2">{currentCharacter.tagline}</p>
                </div>
              )}

              {/* Vintage Document Pill-less Badge */}
              <div className="absolute top-4 left-4 bg-[#17100B]/90 backdrop-blur-md px-3 py-1.5 rounded-sm border border-[#C59B48]/50 text-xs font-cinzel font-semibold text-[#F7DF94]">
                {currentCharacter.role}
              </div>

              {/* Sound trigger button */}
              <button
                onClick={() => handleSoundEffect(currentCharacter.id)}
                className="absolute bottom-4 right-4 flex items-center gap-1.5 px-3 py-1.5 bg-[#781B1B]/95 hover:bg-[#922222] text-[#FCE6B7] border border-[#C59B48]/50 rounded-sm text-xs font-cinzel font-semibold cursor-pointer transition-colors shadow-md backdrop-blur-sm"
              >
                <Volume2 className="w-3.5 h-3.5 text-[#C59B48]" />
                <span>Bunyikan Solah</span>
              </button>
            </div>

            {/* Anatomical Hotspot Selector */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase tracking-wider font-cinzel text-[#C59B48] font-bold">
                  Detail Anatomi & Ragam Pahat Tradisi
                </span>
                <span className="text-xs font-garamond italic text-[#B8A78D]">
                  Lembar {activePartIndex + 1} dari {currentCharacter.anatomicalParts.length}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {currentCharacter.anatomicalParts.map((part, idx) => (
                  <button
                    key={part.name}
                    onClick={() => setActivePartIndex(idx)}
                    className={`p-2.5 text-left rounded-sm border transition-all text-xs cursor-pointer font-garamond ${
                      activePartIndex === idx
                        ? 'bg-[#332215] border-[#C59B48] text-[#FDE6B4]'
                        : 'bg-[#1C140D] border-[#C59B48]/20 text-[#C0B096] hover:text-[#F3E5C2] hover:bg-[#261B12]'
                    }`}
                  >
                    <div className="font-bold truncate font-cinzel text-[11px]">{part.name.split('(')[0]}</div>
                    <div className="text-[11px] text-[#A69379] truncate mt-0.5">{part.material}</div>
                  </button>
                ))}
              </div>

              {/* Active Part Inspector Detail */}
              {currentCharacter.anatomicalParts[activePartIndex] && (
                <div className="mt-4 p-4 rounded-sm bg-[#1A130C] border border-[#C59B48]/35 space-y-2 text-xs">
                  <div className="font-playfair text-sm font-bold text-[#F4D38B] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rotate-45 bg-[#C59B48] inline-block shrink-0" />
                    <span>{currentCharacter.anatomicalParts[activePartIndex].name}</span>
                  </div>
                  <p className="text-[#D3C2A7] font-garamond text-sm leading-relaxed">
                    {currentCharacter.anatomicalParts[activePartIndex].description}
                  </p>
                  <div className="pt-2 border-t border-[#C59B48]/20 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-garamond">
                    <div>
                      <span className="text-[#9E8B72] block font-cinzel text-[10px] uppercase">Material Otentik:</span>
                      <span className="text-[#EFE2CE] font-medium">
                        {currentCharacter.anatomicalParts[activePartIndex].material}
                      </span>
                    </div>
                    <div>
                      <span className="text-[#9E8B72] block font-cinzel text-[10px] uppercase">Makna Simbolik:</span>
                      <span className="text-[#E5B865] font-semibold italic">
                        {currentCharacter.anatomicalParts[activePartIndex].meaning}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Deep Curatorial Analysis (5 cols) */}
          <div className="lg:col-span-5 space-y-5 bg-[#201710] border border-[#C59B48]/35 rounded-sm p-6 shadow-xl">
            {/* Title & Archival Identity */}
            <div className="border-b border-[#C59B48]/30 pb-4">
              <span className="text-[11px] uppercase tracking-widest font-cinzel text-[#C59B48] font-bold block">
                {currentCharacter.archetype}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-playfair text-[#FAF3E5] mt-1">
                {currentCharacter.name}
              </h3>
              <div className="text-xs font-garamond italic text-[#D8B468] mt-1">
                Lakon Pakeliran: {currentCharacter.javaneseName}
              </div>
            </div>

            {/* Narrative description with drop cap */}
            <div className="space-y-2">
              <h4 className="text-xs uppercase tracking-wider font-cinzel text-[#C8B89E] font-bold">
                Karakteristik & Riwayat Kisah
              </h4>
              <p className="text-[#D6C5AA] text-sm sm:text-base leading-relaxed font-garamond vintage-drop-cap">
                {currentCharacter.description}
              </p>
            </div>

            {/* Philosophy Box with antique parchment tone */}
            <div className="p-4 rounded-sm bg-[#17100B] border border-[#C59B48]/30 space-y-1.5">
              <div className="text-xs uppercase tracking-wider font-cinzel text-[#D9A74A] font-bold flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-[#C59B48]" />
                <span>Makna Filosofis Serat Jawa</span>
              </div>
              <p className="text-xs sm:text-sm text-[#C8B89E] leading-relaxed font-garamond italic">
                {currentCharacter.philosophy}
              </p>
            </div>

            {/* Solah Gerak Tari */}
            <div className="p-4 rounded-sm bg-[#17100B] border border-[#C59B48]/30 space-y-1.5">
              <div className="text-xs uppercase tracking-wider font-cinzel text-[#E05252] font-bold flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5 text-[#C59B48]" />
                <span>Karakter Gerak Tari (Solah)</span>
              </div>
              <p className="text-xs sm:text-sm text-[#C8B89E] leading-relaxed font-garamond">
                {currentCharacter.movementStyle}
              </p>
            </div>

            {/* Javanese Dialogue Quote */}
            <div className="p-4 rounded-sm bg-[#2B1F16] border border-[#C59B48]/40 text-[#E7D6BD] space-y-1.5">
              <p className="text-sm font-garamond italic text-[#FDF0D5] leading-relaxed">
                &ldquo;{currentCharacter.dialogueQuote}&rdquo;
              </p>
              <span className="text-[10px] text-[#A69379] block uppercase tracking-wider font-cinzel">
                — {currentCharacter.quoteSpeaker}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
