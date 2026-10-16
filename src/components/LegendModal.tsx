import React from 'react';
import { X, Flame, Sparkles } from 'lucide-react';

interface LegendModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LegendModal: React.FC<LegendModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl my-8 bg-[#1A120B] border border-[#C59B48]/60 rounded-sm shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header with Vintage Antique Title Bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-[#23180F] border-b border-[#C59B48]/35">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rotate-45 bg-[#C59B48] inline-block shrink-0" />
            <h3 className="text-base font-bold font-playfair text-[#FDF0D5]">
              Serat Babad Alas Lodaya & Legenda Barongan Blora
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-none text-[#C8B89E] hover:text-[#FAF3E5] hover:bg-[#2F2014] transition-colors cursor-pointer border border-[#C59B48]/20"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Narrative Scrollable Body in Vintage Book Typography */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto font-garamond text-[#D6C5AA] text-base leading-relaxed">
          {/* Opening Heroic Deck */}
          <div className="border-b border-[#C59B48]/30 pb-5">
            <span className="text-[11px] uppercase tracking-widest font-cinzel text-[#C59B48] font-bold block mb-1">
              Wiracarita Tanah Jawa · Serat Pusaka Kuna
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-playfair text-[#FAF3E5]">
              Kala Singa Mengaum di Rimba Jati: Pertemuan Dua Kekuatan Agung
            </h2>
            <p className="mt-2 text-[#A69379] text-xs italic">
              Disalin saking pitutur luhur para sesepuh pinisepuh seniman Barongan Blora lintas generasi.
            </p>
          </div>

          {/* Section 1 */}
          <div className="space-y-2">
            <h4 className="text-lg font-bold font-playfair text-[#F4D38B] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rotate-45 bg-[#781B1B] border border-[#C59B48] inline-block shrink-0" />
              1. Sayembara Dewi Sekartaji & Penguasa Rimba Lodaya
            </h4>
            <p className="vintage-drop-cap">
              Pada masa kejayaan kerajaan-kerajaan Jawa Kuno, tersebutlah putri jelita dari Kediri, Dewi Sekartaji (Putri Songgolangit). Kecantikan dan keluhuran budinya termasyhur hingga ke seantero jagat, memikat para raja dan pangeran dari berbagai penjuru tanah tumpah darah. Sang Dewi mengajukan sayembara yang mustahil: barang siapa yang hendak mempersuntingnya harus mampu mempersembahkan pertunjukan kesenian yang belum pernah ada di muka bumi—sebuah arak-arakan megah dengan barisan kavaleri berkuda, diiringi binatang buas berkepala singa yang bermahkotakan ratusan bulu merak indah.
            </p>
            <p>
              Di belantara angker Alas Lodaya, berkuasalah raja raksasa sakti mandraguna bernama <strong>Prabu Singo Barong</strong>. Wajahnya laksana singa buas berambut ijuk lebat, taringnya mencuat tajam menusuk langit, dan sorot matanya mampu meruntuhkan nyali siapa pun yang lancang melintasi perbatasannya. Didorong oleh kobaran asmara dan amarah harga diri, Prabu Singo Barong bertekad merebut sang putri dengan segala kekuatan kanuragannya.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-2">
            <h4 className="text-lg font-bold font-playfair text-[#F4D38B] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rotate-45 bg-[#781B1B] border border-[#C59B48] inline-block shrink-0" />
              2. Benturan Sakral di Hutan Jati: Lecutan Pecut Samandiman
            </h4>
            <p>
              Dari arah barat, beraraklah rombongan ksatria luhur <strong>Raden Panji Inu Kertapati (Joko Lodra)</strong> beserta laskar prajurit berkuda lumping (jaran kepang) dan abdi setia Penthul serta Tembem. Rombongan ini dihadang oleh bala tentara siluman Alas Lodaya yang dipimpin oleh Gendruwon bertubuh raksasa. Pertempuran sengit tak terelakkan. Kendang bertalu-talu cepat, selompret menjerit membelah angkasa, dan debu hutan kapur berterbangan disapu derak kaki prajurit.
            </p>
            <p>
              Saat Prabu Singo Barong melompat menerjang dengan rahang caplokan berderak keras hendak menelan laskar Panji, sang ksatria mencabut pusaka bertuah <strong>Pecut Samandiman</strong>. Dengan ketenangan jiwa yang teguh, cemeti pusaka dilecutkan ke udara. Suaranya menggelegar membelah jagat, memancarkan kilat cahaya keemasan. Begitu ujung pecut menyentuh mahkota Singo Barong, amarah liarnya seketika luluh. Kepala singa yang garang itu tertunduk takluk, bersujud di hadapan kemurnian budi pekerti sang ksatria.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-2">
            <h4 className="text-lg font-bold font-playfair text-[#F4D38B] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rotate-45 bg-[#781B1B] border border-[#C59B48] inline-block shrink-0" />
              3. Transformasi Amarah Menjadi Pelindung Abadi
            </h4>
            <p>
              Alih-alih membinasakan sang raja hutan, Raden Panji merangkul Singo Barong. Kekuatan liar dan kedigdayaan singa itu diangkat menjadi barisan garda terdepan untuk mengawal keselamatan rakyat jelata dan mengamankan bumi Blora dari mara bahaya. Ratusan bulu burung merak yang semula menjadi hiasan kecongkakan hutan Lodaya, disematkan di atas kepala singa sebagai lambang <em>Dadak Merak</em>—keindahan alam yang menaungi keberanian sejati.
            </p>
          </div>

          {/* Section 4: Ritual & Sacred Dimensions */}
          <div className="p-4 rounded-none bg-[#241910] border border-[#C59B48]/40 space-y-2 text-xs font-garamond">
            <div className="text-[#E5B865] uppercase tracking-wider font-cinzel font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#C59B48]" />
              <span>Etika & Tata Krama Sakral Pra-Pementasan</span>
            </div>
            <p className="text-[#D3C2A7] text-sm leading-relaxed italic">
              Hingga hari ini, setiap pementasan Barongan Blora selalu diawali dengan upacara doa permohonan keselamatan (nyenyuwun slamet), pembakaran dupa wangi ratus kemenyan, dan sesaji kembang setaman. Penari Singo Barong wajib berpuasa dan menyucikan batin agar terhindar dari kesurupan liar dan mampu mengendalikan energi transendental topeng di hadapan khalayak ramai.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#23180F] border-t border-[#C59B48]/35 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-cinzel font-bold uppercase tracking-wider text-[#FDE6B4] bg-[#781B1B] hover:bg-[#922222] border border-[#C59B48]/50 rounded-sm cursor-pointer transition-colors"
          >
            Tutup Naskah Serat
          </button>
        </div>
      </div>
    </div>
  );
};
