import React, { useState } from 'react';
import { Hammer, Sparkles, Compass } from 'lucide-react';

export const CraftsmanshipSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      step: 'I',
      title: 'Pemilihan Kayu Ringan & Berdaya Mistik',
      material: 'Kayu Dadap Cangkring / Randu Alas',
      duration: 'Pengeringan 40–60 Hari',
      description:
        'Topeng Singo Barong dipegang dengan gigitan gigi penari selama berjam-jam saat pentas, sehingga kayu harus sangat ringan namun liat dan tidak mudah retak. Kayu dadap cangkring atau randu alas dari lereng perbukitan kapur Blora dipotong pada hari baik penanggalan Jawa lalu diasapi perlahan agar terbebas dari rayap.',
      keyFact: 'Bobot topeng kayu mentah ditekan hingga di bawah 3,5 kg sebelum dipasangi mahkota.'
    },
    {
      step: 'II',
      title: 'Tatah Sungging & Pahat Karakter Garang',
      material: 'Pahat Tatah Kuku, Kol, & Pengot',
      duration: 'Proses Pahat 7–14 Hari',
      description:
        'Empu pemahat memulai dengan mencoret sketsa mata melotot dan lengkung taring. Dengan ketukan palu kayu (gandhen) yang teliti, ekspresi amarah suci Prabu Singo Barong dimunculkan. Garis lekuk pipi dan rongga mulut dibuat proporsional agar suara gemeletuk caplokan rahang berdentum nyaring saat dikatupkan.',
      keyFact: 'Rahang bawah dibuat terpisah dengan engsel kayu lentur yang dihubungkan ke pegangan gigit.'
    },
    {
      step: 'III',
      title: 'Pewarnaan Pigmen Merah Menyala & Prada Emas',
      material: 'Cat Enamel Pigmen Merah Darah & Sepuhan Prada',
      duration: 'Pengecatan & Pengeringan 3–5 Hari',
      description:
        'Warna merah cabai khas Blora diaplikasikan berlapis-lapis untuk menghasilkan kilau yang menyala di bawah cahaya obor dan sorot lampu panggung. Mahkota ukiran (makutha) dilapisi cat kuning emas berprada mengkilap, sementara taring diwarnai putih gading gajah dengan efek gradasi halus.',
      keyFact: 'Mata belo sering dipasangi pecahan kaca cermin cembung kuno agar memantulkan sinar api.'
    },
    {
      step: 'IV',
      title: 'Konstruksi Dadak Merak & Anyaman Bambu',
      material: 'Bulu Merak Jantan Alami & Bambu Petung',
      duration: 'Perakitan & Keseimbangan 5 Hari',
      description:
        'Bentangan kipas merak (dadak merak) dirangkai di atas kerangka bambu petung yang dianyam kokoh namun seimbang. Ratusan helai bulu merak jantan ditata bertingkat menyerupai ekor merak yang sedang mengembang sempurna, dihiasi cermin-cermin kecil berukir emas di sekelilingnya.',
      keyFact: 'Total bentangan dadak merak dapat mencapai tinggi 2,2 meter dengan lebar 1,8 meter.'
    }
  ];

  return (
    <section id="kriya" className="relative w-full py-24 bg-[#18120C] border-t border-[#C59B48]/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-cinzel text-[#C59B48] font-bold mb-2">
            <span>Babak III</span>
            <span aria-hidden="true" className="text-[#8C7A65]">·</span>
            <span>Kriya Ukir & Mahakarya Empu</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-playfair text-[#FAF3E5] tracking-wide text-balance">
            Dapur Kriya Topeng: Dari Jantung Hutan Jati Blora
          </h2>
          <div className="w-24 h-0.5 bg-[#C59B48]/60 my-3" />
          <p className="text-[#D3C2A7] font-garamond text-base sm:text-lg leading-relaxed">
            Menelusuri ketekunan para empu pemahat Blora yang mewariskan kepiawaian menatah kayu cangkring dan merangkai dadak merak secara turun-temurun lintas generasi sejak abad lampau.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Workshop Atmosphere Photo (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-[#C59B48]/40 bg-black/60 shadow-2xl">
              <img
                src="/src/assets/images/pengrajin_topeng_blora_1792083041338.jpg"
                alt="Empu Pahat Topeng Barongan Tradisional Blora"
                className="w-full h-full object-cover object-center vintage-photo"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#15100B]/90 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-xs font-garamond text-[#EFE4D2]">
                <span className="font-bold text-[#F3D382] block font-cinzel text-sm">
                  Empu Karsono di Bengkel Kriya Turirejo, Jepon
                </span>
                <span className="text-xs text-[#C8B89E]">
                  Mengukir taring Singo Barong dengan teknik tatah sungging kuno warisan kakek buyut.
                </span>
              </div>
            </div>

            {/* Vintage Curatorial Parchment Box */}
            <div className="p-5 rounded-sm bg-[#221810] border border-[#C59B48]/35 space-y-2 shadow-lg">
              <div className="flex items-center justify-between border-b border-[#C59B48]/25 pb-2">
                <span className="text-[11px] uppercase tracking-wider font-cinzel text-[#C59B48] font-bold">
                  Serat Pitutur Sang Empu Pahat
                </span>
                <span className="text-[10px] font-mono text-[#8C7A65]">ANNO 1928</span>
              </div>
              <p className="text-sm text-[#D6C5AA] font-garamond italic leading-relaxed pt-1">
                &ldquo;Natah topeng Barongan iku dudu mung ngronce kayu dadi rai singa, nanging nglebokake rasa wani lan welas asih. Kayu kudu ditata kanthi ati wening supaya penarine ora kabotan lan ora gampang pegel nalika ngangkat dadak merak.&rdquo;
              </p>
              <span className="text-[11px] text-[#A69379] block uppercase tracking-wider font-cinzel pt-1">
                — Catatan Dokumen Kriya Topeng Blora
              </span>
            </div>
          </div>

          {/* Right Column: 4 Step Interactive Folios (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-3">
            {steps.map((st, idx) => {
              const isSelected = activeStep === idx;
              return (
                <div
                  key={st.step}
                  onClick={() => setActiveStep(idx)}
                  className={`p-5 rounded-sm border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#251B12] border-[#C59B48] shadow-lg'
                      : 'bg-[#1C140D] border-[#C59B48]/20 hover:border-[#C59B48]/50 hover:bg-[#201710]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="text-base font-bold font-cinzel text-[#C59B48]">{st.step}.</span>
                      <h3 className="text-base sm:text-lg font-bold font-playfair text-[#FAF3E5]">{st.title}</h3>
                    </div>
                    <span className="text-xs font-garamond italic text-[#B8A78D] whitespace-nowrap shrink-0">
                      {st.duration}
                    </span>
                  </div>

                  <p className="mt-2.5 text-sm text-[#D3C2A7] font-garamond leading-relaxed">
                    {st.description}
                  </p>

                  <div className="mt-3 pt-2.5 border-t border-[#C59B48]/20 flex flex-wrap items-center justify-between gap-2 text-xs font-garamond">
                    <div className="flex items-center gap-1.5 text-[#B8A78D]">
                      <Hammer className="w-3.5 h-3.5 text-[#C59B48]" />
                      <span>{st.material}</span>
                    </div>
                    <div className="text-[#E5B865] font-semibold italic flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rotate-45 bg-[#C59B48] inline-block shrink-0" />
                      <span>{st.keyFact}</span>
                    </div>
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
