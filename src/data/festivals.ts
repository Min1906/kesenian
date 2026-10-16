export interface FestivalEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: 'Festival Akbar' | 'Sedekah Bumi' | 'Workshop Kriya' | 'Pentas Ruwatan';
  description: string;
  highlight: string;
  participantCount: string;
  admission: string;
  isUpcoming: boolean;
}

export const FESTIVAL_EVENTS: FestivalEvent[] = [
  {
    id: 'festival-barongan-nusantara',
    title: 'Festival Seni Barongan Nusantara Blora (Pentas Barongan Massal)',
    date: '12 - 14 Agustus 2026',
    time: '14:00 - 23:00 WIB',
    location: 'Sepanjang Jalan Pemuda hingga Alun-Alun Kabupaten Blora',
    category: 'Festival Akbar',
    description: 'Parade akbar tahunan yang memobilisasi lebih dari 1.000 kepala Barongan Blora dalam satu hentakan rampak. Dihadiri sanggar seni perwakilan dari seluruh nusantara untuk merayakan keagungan seni tradisi rakyat tertua di Jawa Tengah.',
    highlight: 'Rampak 1.000 Barongan serempak dengan kibasan dadak merak menyapu langit malam dan dentuman ratusan kendang bersamaan.',
    participantCount: '1.200+ Penari & Pengrawit',
    admission: 'Gratis untuk Seluruh Masyarakat',
    isUpcoming: true
  },
  {
    id: 'parade-hari-jadi-blora',
    title: 'Pawai Budaya & Karnaval Barongan Hari Jadi Kabupaten Blora ke-277',
    date: '11 Desember 2026',
    time: '08:30 - 17:00 WIB',
    location: 'Rute Pendopo Rumah Dinas Bupati - Stadion Kridosono Blora',
    category: 'Festival Akbar',
    description: 'Perayaan puncak hari berdirinya Kabupaten Blora yang menampilkan iring-iringan kereta kencana bupati dikawal oleh barisan Singo Barong, prajurit Jathilan berkuda kepang, dan parade topeng kriya.',
    highlight: 'Prosesi penghormatan Singo Barong kepada para sesepuh pinisepuh Blora dan atraksi memecah kelapa muda dengan caplokan.',
    participantCount: '800+ Peserta Sanggar',
    admission: 'Terbuka untuk Umum',
    isUpcoming: true
  },
  {
    id: 'sedekah-bumi-sendang-duwur',
    title: 'Upacara Tradisi Sedekah Bumi & Pentas Barongan Sakral Sendang',
    date: '28 Juni 2026',
    time: '09:00 - 16:00 WIB',
    location: 'Kawasan Mata Air Sendang Duwur, Desa Kedungwungu, Blora',
    category: 'Sedekah Bumi',
    description: 'Upacara syukur atas limpahan air dan kesuburan panen padi. Barongan diarak mengelilingi sumber mata air suci untuk memanjatkan doa keselamatan tolak bala (nyenyuwun slamet) diiringi kidung kentrung kuno.',
    highlight: 'Ritual pembersihan topeng pusaka dengan air kembang tujuh rupa dan makan bersama tumpeng megono di bawah pohon beringin kembar.',
    participantCount: '300 Warga & Seniman',
    admission: 'Tradisi Adat Gotong Royong',
    isUpcoming: true
  },
  {
    id: 'workshop-kriya-tatah-topeng',
    title: 'Lokakarya Nasional Tatah Sungging Topeng Barongan Blora',
    date: '18 - 20 September 2026',
    time: '09:00 - 15:30 WIB',
    location: 'Pusat Kreatif Kriya Kayu Jati, Turirejo, Jepon, Blora',
    category: 'Workshop Kriya',
    description: 'Pelatihan intensif 3 hari bersama empu pemahat senior Blora. Peserta mempelajari teknik pemilihan kayu dadap/cangkring, geometri ukiran singa garang, penyepuhan cat merah cabai alami, dan teknik anyam dadak merak.',
    highlight: 'Bimbingan 1-on-1 langsung dengan Empu Karsono serta membawa pulang topeng mini Barongan pahatan sendiri.',
    participantCount: 'Terbatas 40 Peserta',
    admission: 'Registrasi Pelatihan (Termasuk Alat & Bahan)',
    isUpcoming: true
  },
  {
    id: 'malam-tirakatan-sura',
    title: 'Gelar Ruwatan Budaya Malam 1 Sura Barongan Blora',
    date: '18 Juli 2026',
    time: '20:00 - Subuh',
    location: 'Halaman Balai Budaya Samin Surosentiko, Ploso Kediren, Randublatung',
    category: 'Pentas Ruwatan',
    description: 'Malam hening perenungan spiritual pergantian tahun Jawa. Pementasan Barongan gaya pakeliran wayang beber yang membawakan lakon ruwatan alas Lodaya untuk memohon kedamaian nusantara.',
    highlight: 'Kidung sesaji semalam suntuk diiringi gamelan berlaras slendro manyura dan pameran 50 topeng antik berusia di atas 70 tahun.',
    participantCount: '500+ Penonton Apresiatif',
    admission: 'Gratis & Khidmat',
    isUpcoming: true
  }
];
