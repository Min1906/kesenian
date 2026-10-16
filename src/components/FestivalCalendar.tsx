import React, { useState } from 'react';
import { FESTIVAL_EVENTS, FestivalEvent } from '../data/festivals';
import { Calendar, MapPin, Clock, Users, Download, Sparkles, Check, Bookmark } from 'lucide-react';

export const FestivalCalendar: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua Kategori');
  const [downloadedEventId, setDownloadedEventId] = useState<string | null>(null);

  const categories = ['Semua Kategori', 'Festival Akbar', 'Sedekah Bumi', 'Workshop Kriya', 'Pentas Ruwatan'];

  const filteredEvents = FESTIVAL_EVENTS.filter(
    (ev) => selectedCategory === 'Semua Kategori' || ev.category === selectedCategory
  );

  const handleDownloadICS = (ev: FestivalEvent) => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Barongan Blora//Cultural Festival Vintage Edition//ID',
      'BEGIN:VEVENT',
      `SUMMARY:${ev.title}`,
      `DESCRIPTION:${ev.description.replace(/\n/g, ' ')}`,
      `LOCATION:${ev.location}`,
      `DTSTART:20260812T070000Z`,
      `DTEND:20260814T160000Z`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${ev.id}-agenda-blora.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadedEventId(ev.id);
    setTimeout(() => setDownloadedEventId(null), 2500);
  };

  return (
    <section id="festival" className="relative w-full py-24 bg-[#18120C] border-t border-[#C59B48]/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-cinzel text-[#C59B48] font-bold mb-2">
              <span>Babak V</span>
              <span aria-hidden="true" className="text-[#8C7A65]">·</span>
              <span>Maklumat Agenda & Pawai Akbar</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-playfair text-[#FAF3E5] tracking-wide text-balance">
              Kalender Festival & Pementasan Budaya
            </h2>
            <div className="w-24 h-0.5 bg-[#C59B48]/60 my-3" />
            <p className="text-[#D3C2A7] font-garamond text-base sm:text-lg leading-relaxed">
              Jadwal resmi perhelatan akbar tahunan, upacara ruwatan sedekah sendang, dan lokakarya tatah sungging kriya topeng di seantero Kabupaten Blora.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-cinzel font-semibold rounded-sm transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#781B1B] text-[#FDE6B4] border border-[#C59B48] shadow-sm'
                    : 'bg-[#1C140D] text-[#C0B096] hover:text-[#F3E5C2] hover:bg-[#251B12] border border-[#C59B48]/25'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Proclamation Banner in Vintage Woodcut Frame */}
        {filteredEvents.length > 0 && (
          <div className="relative rounded-sm overflow-hidden border border-[#C59B48]/60 bg-gradient-to-r from-[#3D1414] via-[#241710] to-[#1C130D] p-6 sm:p-8 mb-10 shadow-2xl">
            <div className="max-w-3xl space-y-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-cinzel text-[#E5B865] font-bold">
                <Bookmark className="w-4 h-4 text-[#C59B48]" />
                <span>Maklumat Pentas Akbar Utama</span>
                <span aria-hidden="true" className="text-[#8C7A65]">·</span>
                <span>{filteredEvents[0].category}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-playfair text-[#FAF3E5]">
                {filteredEvents[0].title}
              </h3>

              <p className="text-[#D6C5AA] text-sm sm:text-base font-garamond leading-relaxed">
                {filteredEvents[0].description}
              </p>

              {/* Highlights & Meta Grid in Vintage Ledger Style */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-garamond text-[#EFE2CE]">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#C59B48] shrink-0" />
                  <span className="font-semibold">{filteredEvents[0].date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#C59B48] shrink-0" />
                  <span>{filteredEvents[0].time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#C59B48] shrink-0" />
                  <span>{filteredEvents[0].participantCount}</span>
                </div>
              </div>

              <div className="flex items-start gap-2 text-xs text-[#B8A78D] pt-1 font-garamond italic">
                <MapPin className="w-4 h-4 text-[#8B1E1E] shrink-0 mt-0.5" />
                <span>{filteredEvents[0].location}</span>
              </div>

              {/* Action */}
              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => handleDownloadICS(filteredEvents[0])}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#C59B48] hover:bg-[#D4AC59] text-[#1A120B] font-bold font-cinzel text-xs uppercase tracking-wider rounded-sm transition-colors cursor-pointer shadow-md"
                >
                  {downloadedEventId === filteredEvents[0].id ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-950" />
                      <span>Tersimpan di Kalender!</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      <span>Simpan ke Kalender (.ics)</span>
                    </>
                  )}
                </button>
                <span className="text-xs font-garamond italic text-[#F3D382]">
                  {filteredEvents[0].admission}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Regular Events List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredEvents.slice(1).map((ev) => (
            <div
              key={ev.id}
              className="p-6 rounded-sm bg-[#201710] border border-[#C59B48]/30 space-y-4 hover:border-[#C59B48]/60 transition-colors flex flex-col justify-between shadow-xl"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-cinzel">
                  <span className="text-[#C59B48] uppercase tracking-wider font-bold">
                    {ev.category}
                  </span>
                  <span className="text-[#C8B89E] tabular-nums">{ev.date}</span>
                </div>

                <h4 className="text-lg font-bold font-playfair text-[#FAF3E5] hover:text-[#FDE6B4] transition-colors">
                  {ev.title}
                </h4>

                <p className="text-xs sm:text-sm text-[#D3C2A7] font-garamond leading-relaxed">
                  {ev.description}
                </p>

                <div className="p-3 rounded-none bg-[#160F0A] border border-[#C59B48]/25 text-xs font-garamond space-y-1.5">
                  <div className="flex items-start gap-2 text-[#EFE2CE]">
                    <MapPin className="w-3.5 h-3.5 text-[#C59B48] shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{ev.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#B8A78D]">
                    <Clock className="w-3.5 h-3.5 text-[#C59B48] shrink-0" />
                    <span>{ev.time}</span>
                  </div>
                  <div className="text-[#E5B865] text-xs font-medium italic pt-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rotate-45 bg-[#C59B48] inline-block shrink-0" />
                    <span>Sorotan: {ev.highlight}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-[#C59B48]/20 text-xs font-garamond">
                <span className="text-[#A69379] italic">{ev.participantCount}</span>
                <button
                  onClick={() => handleDownloadICS(ev)}
                  className="inline-flex items-center gap-1.5 text-[#E5B865] hover:text-[#FDE6B4] font-semibold font-cinzel text-[11px] transition-colors cursor-pointer uppercase"
                >
                  {downloadedEventId === ev.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Tersimpan!</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-3.5 h-3.5" />
                      <span>Tambah Jadwal</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
