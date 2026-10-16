export interface SanggarDetail {
  id: string;
  name: string;
  district: string; // Kecamatan
  village: string; // Desa / Kelurahan
  leader: string; // Pimpinan / Ketua
  foundedYear: number;
  membersCount: number;
  contactPerson: string;
  phone: string;
  address: string;
  specialty: string;
  awards: string[];
  signatureStyle: string;
  repertoire: string[];
  coordinates: { x: number; y: number }; // Relative coordinates on stylized Blora map
}

export const SANGGAR_LIST: SanggarDetail[] = [
  {
    id: 'risang-guntur-wijoyo',
    name: 'Paguyuban Barongan Risang Guntur Wijoyo',
    district: 'Blora Kota',
    village: 'Kelurahan Kunden',
    leader: 'Ki Sukirno S.Pd',
    foundedYear: 1984,
    membersCount: 65,
    contactPerson: 'Bpk. Sukirno / Mas Danu',
    phone: '+62 813-2612-4589',
    address: 'Jl. Kolonel Sunandar No. 42, Kunden, Kec. Blora, Kab. Blora',
    specialty: 'Barongan Klasik Gaya Kratonan & Rampak Masal',
    awards: [
      'Juara 1 Festival Seni Barongan Nusantara Blora (3x berturut-turut)',
      'Penyaji Terbaik Parade Budaya Jawa Tengah di TMII Jakarta',
      'Anugerah Pelestari Warisan Budaya Takbenda Kemendikbudristek'
    ],
    signatureStyle: 'Solah Barongan berwibawa agung dengan iringan kendang batangan tempo cepat dan formasi 12 Kuda Lumping serempak.',
    repertoire: ['Lakon Babak Alas Lodaya', 'Ruwatan Bumi Blora', 'Tari Ksatria Panji Samandiman'],
    coordinates: { x: 52, y: 44 }
  },
  {
    id: 'singo-lodro-ngawen',
    name: 'Sanggar Seni Singo Lodro',
    district: 'Ngawen',
    village: 'Desa Berbak',
    leader: 'Ki Bambang Sumantri',
    foundedYear: 1996,
    membersCount: 48,
    contactPerson: 'Mas Agus Suryanto',
    phone: '+62 852-9011-7723',
    address: 'Dukuh Krajan RT 02/RW 01, Desa Berbak, Kec. Ngawen, Kab. Blora',
    specialty: 'Atraksi Magis Singo Barong & Caplokan Ekstrem',
    awards: [
      'Penyaji Terfavorit Festival Barongan Jawa Tengah',
      'Juara Umum Gelar Seni Tradisi Rakyat Karesidenan Pati'
    ],
    signatureStyle: 'Atraksi mengangkat dadak merak seberat 45 kg dengan gigitan rahang penari tanpa bantuan tangan, dipadu dentuman kentrung ritmis.',
    repertoire: ['Geger Lodaya', 'Kidung Sesaji Tolak Bala', 'Penthul Tembem Guyon Maton'],
    coordinates: { x: 38, y: 38 }
  },
  {
    id: 'singo-mustiko-cepu',
    name: 'Paguyuban Barongan Singo Mustiko',
    district: 'Cepu',
    village: 'Kelurahan Balun',
    leader: 'Ki Hadi Suwarno',
    foundedYear: 2003,
    membersCount: 55,
    contactPerson: 'Kang Hendro',
    phone: '+62 821-3488-9901',
    address: 'Jl. Ronggolawe No. 18, Balun, Kec. Cepu, Kab. Blora',
    specialty: 'Harmonisasi Terompet Selompret & Koreografi Modern',
    awards: [
      'Penampil Eksibisi Seni Perbatasan Jateng-Jatim',
      'Koreografi Tradisi Terbaik Temu Budaya Bengawan Solo'
    ],
    signatureStyle: 'Melodi terompet bernada tinggi yang meliuk-liuk menyayat hati dipadu rampak penari jathilan beludru merah-emas.',
    repertoire: ['Mustika Alas Jati', 'Kridha Prajurit Ronggolawe', 'Rampakan Singo Barong Galak'],
    coordinates: { x: 78, y: 72 }
  },
  {
    id: 'sardulo-anurogo',
    name: 'Sanggar Seni Sardulo Anurogo',
    district: 'Kunduran',
    village: 'Desa Jagong',
    leader: 'Ki Hartono Seno',
    foundedYear: 1991,
    membersCount: 42,
    contactPerson: 'Bpk. Hartono',
    phone: '+62 812-4567-3312',
    address: 'Jl. Raya Kunduran-Todanan Km 3, Jagong, Kec. Kunduran, Kab. Blora',
    specialty: 'Pembinaan Penari Belia & Kriya Pahat Topeng Tradisi',
    awards: [
      'Penghargaan Sanggar Edukasi Generasi Muda Dinas Kebudayaan Blora',
      'Pentas Kehormatan Pekan Seni Mahasiswa Jawa Tengah'
    ],
    signatureStyle: 'Pentas regenerasi penari anak-anak dan remaja berbakat dengan penghayatan solah barongan murni warisan leluhur.',
    repertoire: ['Sardulo Mudha Gumregah', 'Lakon Dewi Sekartaji Memayu', 'Tari Jathil Alus'],
    coordinates: { x: 28, y: 46 }
  },
  {
    id: 'krido-mudo-randublatung',
    name: 'Paguyuban Barongan Krido Mudo',
    district: 'Randublatung',
    village: 'Desa Pilang',
    leader: 'Ki Joko Prayitno',
    foundedYear: 1988,
    membersCount: 50,
    contactPerson: 'Mas Teguh Yuwono',
    phone: '+62 857-1234-8890',
    address: 'Dukuh Wangon, Desa Pilang, Kec. Randublatung, Kab. Blora',
    specialty: 'Barongan Sakral Alas Roban & Kidung Kentrung Kuno',
    awards: [
      'Pelestari Seni Tradisi Hutan Jati Perhutani Randublatung',
      'Penampil Utama Pentas Budaya Sedekah Sendang'
    ],
    signatureStyle: 'Nuansa mistik hutan jati yang kental dengan iringan kentrung tunggal dan vokal waranggono melantunkan kidung keselamatan.',
    repertoire: ['Kidung Rimba Jati Roban', 'Singo Barong Mbeber Swara', 'Bedayan Kuda Kencana'],
    coordinates: { x: 54, y: 76 }
  },
  {
    id: 'cipto-budoyo-jepon',
    name: 'Sanggar Kriya & Seni Cipto Budoyo',
    district: 'Jepon',
    village: 'Desa Turirejo',
    leader: 'Empu Karsono (Pahat Topeng)',
    foundedYear: 1979,
    membersCount: 38,
    contactPerson: 'Empu Karsono / Wahyu',
    phone: '+62 813-9876-5432',
    address: 'Kompleks Pengrajin Kayu Jati, Turirejo, Kec. Jepon, Kab. Blora',
    specialty: 'Pusat Tatah Sungging Topeng Pusaka & Barongan Teater',
    awards: [
      'Master Kriya Kayu Tradisional Pemprov Jawa Tengah',
      'Pameran Museum Nasional Seni Pertunjukan Indonesia'
    ],
    signatureStyle: 'Pentas teatrikal lengkap dengan topeng berbobot kayu jati tua berusia puluhan tahun yang berwibawa legam mengkilap.',
    repertoire: ['Babad Wana Turirejo', 'Kridha Penthul Tembem Sejati', 'Sayembara Putri Dhaha'],
    coordinates: { x: 68, y: 48 }
  },
  {
    id: 'manggala-joyo-todanan',
    name: 'Paguyuban Seni Manggala Joyo',
    district: 'Todanan',
    village: 'Desa Kedungwungu',
    leader: 'Ki Warsito Joyo',
    foundedYear: 2008,
    membersCount: 36,
    contactPerson: 'Bpk. Warsito',
    phone: '+62 822-7711-4409',
    address: 'Dekat Kawasan Wisata Goa Terawang, Kedungwungu, Kec. Todanan, Kab. Blora',
    specialty: 'Barongan Goa Terawang & Upacara Bersih Sendang',
    awards: [
      'Duta Seni Pariwisata Goa Terawang Kabupaten Blora',
      'Pemenang Favorit Festival Budaya Pegunungan Kendeng'
    ],
    signatureStyle: 'Pementasan di ruang terbuka alam dengan gema suara gong yang bergaung mistis di dinding-dinding tebing kapur purba.',
    repertoire: ['Singo Barong Pertapaan Goa', 'Langen Swara Pegunungan Kendeng', 'Tari Buto Cakil'],
    coordinates: { x: 22, y: 24 }
  }
];

export const DISTRICTS = [
  'Semua Kecamatan',
  'Blora Kota',
  'Ngawen',
  'Cepu',
  'Kunduran',
  'Randublatung',
  'Jepon',
  'Todanan'
];
