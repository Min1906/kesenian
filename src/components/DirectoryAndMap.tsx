import React, { useState } from 'react';
import { SANGGAR_LIST, DISTRICTS } from '../data/sanggar';
import { MapPin, Award, Phone, Search, Check, Compass } from 'lucide-react';

export const DirectoryAndMap: React.FC = () => {
  const [selectedDistrict, setSelectedDistrict] = useState<string>('Semua Kecamatan');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeSanggarId, setActiveSanggarId] = useState<string>(SANGGAR_LIST[0].id);
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);

  const filteredSanggars = SANGGAR_LIST.filter((sanggar) => {
    const matchesDistrict =
      selectedDistrict === 'Semua Kecamatan' || sanggar.district === selectedDistrict;
    const matchesSearch =
      sanggar.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sanggar.leader.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sanggar.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sanggar.village.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDistrict && matchesSearch;
  });

  const activeSanggar = SANGGAR_LIST.find((s) => s.id === activeSanggarId) || filteredSanggars[0] || SANGGAR_LIST[0];

  const handleCopyPhone = (phone: string) => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(phone);
    setTimeout(() => setCopiedPhone(null), 2000);
  };

  return (
    <section id="sanggar" className="relative w-full py-24 bg-[#140E0A] border-t border-[#C59B48]/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-cinzel text-[#C59B48] font-bold mb-2">
            <span>Babak IV</span>
            <span aria-hidden="true" className="text-[#8C7A65]">·</span>
            <span>Peta Kartografi & Sebaran Wilayah</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-playfair text-[#FAF3E5] tracking-wide text-balance">
            Direktori Paguyuban & Peta Sebaran Sanggar
          </h2>
          <div className="w-24 h-0.5 bg-[#C59B48]/60 my-3" />
          <p className="text-[#D3C2A7] font-garamond text-base sm:text-lg leading-relaxed">
            Menelusuri jejak paguyuban seni Barongan yang mengakar di 16 distrik kecamatan Kabupaten Blora, mulai dari perkotaan hingga desa-desa rimba jati Alas Roban.
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center mb-8">
          {/* District Buttons (Segmented Filter Bar) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {DISTRICTS.map((dist) => (
              <button
                key={dist}
                onClick={() => setSelectedDistrict(dist)}
                className={`px-3 py-1.5 text-xs font-cinzel font-semibold rounded-sm transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedDistrict === dist
                    ? 'bg-[#781B1B] text-[#FDE6B4] border border-[#C59B48] shadow-sm'
                    : 'bg-[#1C140D] text-[#C0B096] hover:text-[#F3E5C2] hover:bg-[#251B12] border border-[#C59B48]/25'
                }`}
              >
                {dist}
              </button>
            ))}
          </div>

          {/* Vintage Search Box */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-[#A69379] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Cari paguyuban, pimpinan, ciri..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#1C140D] border border-[#C59B48]/35 rounded-sm pl-9 pr-4 py-2 text-xs font-garamond text-[#F1E5CF] placeholder-[#8C7A65] focus:outline-none focus:border-[#C59B48] transition-colors"
            />
          </div>
        </div>

        {/* 2-Column Responsive Layout: Antique Cartography Map & Detailed Dossier */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left Column: Stylized Antique Map of Blora Regency (5 cols) */}
          <div className="lg:col-span-5 bg-[#1E160F] border border-[#C59B48]/40 rounded-sm p-5 space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-[#C59B48]/25 pb-3">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-cinzel text-[#C59B48] font-bold block">
                  Peta Kuno Wilayah Kesenian
                </span>
                <span className="text-xs font-playfair text-[#FAF3E5] font-bold">
                  Kabupaten Blora, Karesidenan Rembang
                </span>
              </div>
              <Compass className="w-4 h-4 text-[#C59B48]" />
            </div>

            {/* Stylized Antique Map SVG with Sepia Parchment Palette */}
            <div className="relative aspect-square w-full rounded-sm bg-[#120C07] border border-[#C59B48]/30 overflow-hidden flex items-center justify-center p-4">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full filter drop-shadow-md"
                style={{ shapeRendering: 'geometricPrecision' }}
              >
                {/* Vintage Map Compass Rose in background */}
                <circle cx="85" cy="18" r="10" fill="none" stroke="#C59B48" strokeWidth="0.3" strokeDasharray="1,1" />
                <path d="M 85 10 L 87 18 L 85 26 L 83 18 Z" fill="#C59B48" fillOpacity="0.4" />
                <text x="85" y="8" fill="#C59B48" fontSize="2.8" textAnchor="middle" fontFamily="serif">U</text>

                {/* Stylized Blora Regency Contour in aged sepia fill */}
                <path
                  d="M 20 20 L 45 15 L 75 25 L 85 45 L 88 75 L 70 85 L 45 88 L 25 78 L 15 50 Z"
                  fill="#2B1E14"
                  stroke="#C59B48"
                  strokeWidth="0.8"
                />

                {/* River Bengawan Solo boundary line */}
                <path
                  d="M 60 20 Q 75 50 85 75"
                  fill="none"
                  stroke="#781B1B"
                  strokeWidth="0.9"
                  strokeDasharray="2,2"
                />
                <text x="68" y="32" fill="#C59B48" fontSize="2.8" fontFamily="serif" fontStyle="italic">
                  Bengawan Solo
                </text>

                {/* District zones */}
                <circle cx="52" cy="44" r="8" fill="#781B1B" fillOpacity="0.18" />
                <text x="46" y="47" fill="#E5C378" fontSize="3" fontWeight="bold" fontFamily="serif">
                  Blora
                </text>

                {/* Sanggar Pins in Vintage Gilded Brass & Antique Wax Red */}
                {SANGGAR_LIST.map((sanggar) => {
                  const isPinActive = sanggar.id === activeSanggar.id;
                  return (
                    <g
                      key={sanggar.id}
                      onClick={() => setActiveSanggarId(sanggar.id)}
                      className="cursor-pointer transition-transform hover:scale-125"
                    >
                      {isPinActive && (
                        <circle
                          cx={sanggar.coordinates.x}
                          cy={sanggar.coordinates.y}
                          r="5"
                          fill="#C59B48"
                          fillOpacity="0.3"
                          className="animate-ping"
                        />
                      )}
                      <circle
                        cx={sanggar.coordinates.x}
                        cy={sanggar.coordinates.y}
                        r={isPinActive ? '3.5' : '2.2'}
                        fill={isPinActive ? '#9E1C1C' : '#C59B48'}
                        stroke="#FDF0D5"
                        strokeWidth={isPinActive ? '1' : '0.5'}
                      />
                      <text
                        x={sanggar.coordinates.x}
                        y={sanggar.coordinates.y - 4}
                        fill={isPinActive ? '#FCE8B3' : '#D6C5AA'}
                        fontSize="2.8"
                        textAnchor="middle"
                        fontFamily="serif"
                        fontWeight={isPinActive ? 'bold' : 'normal'}
                      >
                        {sanggar.district}
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Antique Legend */}
              <div className="absolute bottom-3 left-3 bg-[#19110B]/95 border border-[#C59B48]/40 rounded-none px-2.5 py-1.5 text-[10px] space-y-1 font-cinzel">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#9E1C1C]" />
                  <span className="text-[#EFE2CE]">Paguyuban Terpilih</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#C59B48]" />
                  <span className="text-[#C8B89E]">Titik Sanggar Aktif</span>
                </div>
              </div>
            </div>

            <div className="text-xs text-[#B8A78D] font-garamond italic leading-relaxed">
              Kabupaten Blora diapit oleh gugusan hutan jati pegunungan kapur utara (Pegunungan Kendeng) dan aliran legendaris Bengawan Solo.
            </div>
          </div>

          {/* Right Column: Active Sanggar Dossier (7 cols) */}
          <div className="lg:col-span-7 bg-[#201710] border border-[#C59B48]/40 rounded-sm p-6 space-y-5 shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#C59B48]/30 pb-4">
              <div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-cinzel text-[#C59B48] font-bold">
                  <span>Kecamatan {activeSanggar.district}</span>
                  <span aria-hidden="true" className="text-[#8C7A65]">·</span>
                  <span>{activeSanggar.village}</span>
                </div>
                <h3 className="text-2xl font-bold font-playfair text-[#FAF3E5] mt-1">
                  {activeSanggar.name}
                </h3>
              </div>

              {/* Action: Copy Contact Phone */}
              <button
                onClick={() => handleCopyPhone(activeSanggar.phone)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#17100B] hover:bg-[#261B12] text-[#FCE6B7] border border-[#C59B48]/50 rounded-sm text-xs font-cinzel cursor-pointer transition-colors shrink-0"
              >
                {copiedPhone === activeSanggar.phone ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Phone className="w-3.5 h-3.5 text-[#C59B48]" />
                    <span>Salin Kontak</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick stats grid in vintage ledger style */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 rounded-none bg-[#160F0A] border border-[#C59B48]/25">
                <span className="text-[10px] uppercase font-cinzel text-[#9E8B72] block">Pimpinan</span>
                <span className="text-xs font-semibold text-[#EFE2CE] truncate block mt-0.5 font-garamond">
                  {activeSanggar.leader}
                </span>
              </div>
              <div className="p-3 rounded-none bg-[#160F0A] border border-[#C59B48]/25">
                <span className="text-[10px] uppercase font-cinzel text-[#9E8B72] block">Tahun Berdiri</span>
                <span className="text-xs font-semibold text-[#E5B865] font-mono tabular-nums block mt-0.5">
                  Tahun {activeSanggar.foundedYear}
                </span>
              </div>
              <div className="p-3 rounded-none bg-[#160F0A] border border-[#C59B48]/25">
                <span className="text-[10px] uppercase font-cinzel text-[#9E8B72] block">Jumlah Anggota</span>
                <span className="text-xs font-semibold text-[#EFE2CE] tabular-nums block mt-0.5 font-garamond">
                  {activeSanggar.membersCount} Seniman
                </span>
              </div>
              <div className="p-3 rounded-none bg-[#160F0A] border border-[#C59B48]/25">
                <span className="text-[10px] uppercase font-cinzel text-[#9E8B72] block">Narahubung</span>
                <span className="text-xs font-semibold text-[#EFE2CE] truncate block mt-0.5 font-garamond">
                  {activeSanggar.contactPerson}
                </span>
              </div>
            </div>

            {/* Specialty & Signature Style */}
            <div className="space-y-3 font-garamond">
              <div>
                <span className="text-xs uppercase tracking-wider font-cinzel text-[#C8B89E] font-bold block">
                  Kekhasan & Ciri Khas Pementasan
                </span>
                <p className="mt-1 text-sm text-[#D6C5AA] leading-relaxed">
                  {activeSanggar.signatureStyle}
                </p>
              </div>

              {/* Repertoire Pills */}
              <div>
                <span className="text-[11px] uppercase tracking-wider font-cinzel text-[#C8B89E] font-bold block mb-1.5">
                  Lakon / Repertoar Pakeliran
                </span>
                <div className="flex flex-wrap gap-2 text-xs">
                  {activeSanggar.repertoire.map((rep) => (
                    <span
                      key={rep}
                      className="px-2.5 py-1 bg-[#160F0A] border border-[#C59B48]/35 text-[#FCE8B3]"
                    >
                      {rep}
                    </span>
                  ))}
                </div>
              </div>

              {/* Awards List */}
              <div>
                <span className="text-[11px] uppercase tracking-wider font-cinzel text-[#C8B89E] font-bold block mb-1.5">
                  Rekam Jejak Prestasi & Piagam
                </span>
                <ul className="space-y-1.5 text-xs text-[#D3C2A7]">
                  {activeSanggar.awards.map((aw, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Award className="w-3.5 h-3.5 text-[#C59B48] shrink-0 mt-0.5" />
                      <span>{aw}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Full Address */}
              <div className="pt-2 text-xs text-[#A69379] flex items-start gap-2 font-garamond italic">
                <MapPin className="w-4 h-4 text-[#8B1E1E] shrink-0 mt-0.5" />
                <span>{activeSanggar.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sanggar List Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-[#C59B48]/25 pb-2">
            <h3 className="text-base font-bold font-playfair text-[#FAF3E5]">
              Daftar Paguyuban Terdaftar ({filteredSanggars.length} Sanggar)
            </h3>
            <span className="text-xs font-garamond italic text-[#B8A78D]">
              Buku Registrasi Kesenian Blora
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSanggars.map((sanggar) => {
              const isSelected = sanggar.id === activeSanggar.id;
              return (
                <div
                  key={sanggar.id}
                  onClick={() => setActiveSanggarId(sanggar.id)}
                  className={`p-5 rounded-sm border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#281C13] border-[#C59B48] shadow-lg ring-1 ring-[#C59B48]/50'
                      : 'bg-[#1A130C] border-[#C59B48]/20 hover:border-[#C59B48]/50 hover:bg-[#201710]'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-cinzel">
                      <span className="text-[#C59B48] uppercase tracking-wider font-bold">
                        Kec. {sanggar.district}
                      </span>
                      <span className="text-[#8C7A65] font-mono tabular-nums">
                        Est. {sanggar.foundedYear}
                      </span>
                    </div>

                    <h4 className="text-base font-bold font-playfair text-[#F9F3E5]">
                      {sanggar.name}
                    </h4>

                    <p className="text-xs text-[#B8A78D] font-garamond line-clamp-2">
                      {sanggar.specialty}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#C59B48]/20 flex items-center justify-between text-xs font-garamond">
                    <span className="text-[#A69379] italic">{sanggar.leader}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCopyPhone(sanggar.phone);
                      }}
                      className="text-[#E5B865] hover:text-[#FDE6B4] font-semibold flex items-center gap-1 cursor-pointer"
                    >
                      <Phone className="w-3 h-3" />
                      <span>{sanggar.phone}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
