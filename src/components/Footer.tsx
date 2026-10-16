import React from 'react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenLegend: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenLegend }) => {
  return (
    <footer className="w-full bg-[#100B07] border-t border-[#C59B48]/35 text-[#C8B89E] text-xs">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand & Cultural Mission (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <span className="text-xl font-bold font-cinzel text-[#FDF0D5] tracking-widest block">
              BARONGAN BLORA
            </span>
            <p className="text-[#B8A78D] font-garamond text-sm leading-relaxed max-w-sm">
              Arsip resmi preservasi dan dokumentasi kebudayaan Seni Tradisi Barongan Blora. Menghormati daya mistik purba, keprajuritan luhur, dan kearifan para empu pemahat kayu jati di Kabupaten Blora, Jawa Tengah.
            </p>
            <div className="text-[11px] text-[#8C7A65] font-cinzel space-y-1">
              <div>Dicatat sebagai Warisan Budaya Takbenda (WBTb) Indonesia</div>
              <div>Direktorat Pelindungan Kebudayaan · Kemendikbudristek RI</div>
            </div>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-3 font-cinzel">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C59B48] block">
              Lembar Navigasi
            </span>
            <ul className="space-y-2 text-[#C0B096]">
              <li>
                <button
                  onClick={() => onNavigate('karakter')}
                  className="hover:text-[#F3E5C2] transition-colors cursor-pointer"
                >
                  Galeri Tokoh & Topeng
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gamelan')}
                  className="hover:text-[#F3E5C2] transition-colors cursor-pointer"
                >
                  Tabuhan Akustik Gamelan
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('kriya')}
                  className="hover:text-[#F3E5C2] transition-colors cursor-pointer"
                >
                  Dapur Kriya Ukir Jati
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('sanggar')}
                  className="hover:text-[#F3E5C2] transition-colors cursor-pointer"
                >
                  Peta Paguyuban Blora
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('festival')}
                  className="hover:text-[#F3E5C2] transition-colors cursor-pointer"
                >
                  Maklumat Pentas Akbar
                </button>
              </li>
            </ul>
          </div>

          {/* Curatorial Lore & Regency Office (4 cols) */}
          <div className="md:col-span-4 space-y-3 font-garamond">
            <span className="text-xs font-bold uppercase tracking-wider font-cinzel text-[#C59B48] block">
              Pusat Pelestarian & Pustaka
            </span>
            <p className="text-[#B8A78D] leading-relaxed text-sm">
              Dinas Kepemudaan, Olahraga, Kebudayaan, dan Pariwisata (Dinporabudpar) Kabupaten Blora bekerjasama dengan Paguyuban Seni Barongan Kabupaten Blora.
            </p>
            <div className="pt-1">
              <button
                onClick={onOpenLegend}
                className="inline-flex items-center gap-1.5 text-xs font-cinzel font-semibold text-[#E5B865] hover:text-[#FDE6B4] cursor-pointer"
              >
                <span>Buka Naskah Babad Alas Lodaya</span>
                <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Quiet copyright */}
        <div className="mt-12 pt-8 border-t border-[#C59B48]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-cinzel text-[#786754]">
          <div>
            &copy; {new Date().getFullYear()} Seni Tradisi Barongan Blora · Mengeja Keberanian, Menjaga Tradisi.
          </div>
          <div className="flex items-center gap-1">
            <span>Didedikasikan untuk para empu, pengrawit, dan penari Blora</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
