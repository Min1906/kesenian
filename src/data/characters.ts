export interface CharacterDetail {
  id: string;
  name: string;
  javaneseName: string;
  role: string;
  archetype: string;
  tagline: string;
  description: string;
  philosophy: string;
  movementStyle: string;
  maskColor: string;
  accentColor: string;
  image?: string;
  anatomicalParts: {
    name: string;
    description: string;
    material: string;
    meaning: string;
  }[];
  dialogueQuote: string;
  quoteSpeaker: string;
}

export const CHARACTERS: CharacterDetail[] = [
  {
    id: 'singo-barong',
    name: 'Singo Barong',
    javaneseName: 'Prabu Singo Barong',
    role: 'Karakter Utama & Penguasa Lodaya',
    archetype: 'Daya Magis, Amarah Suci & Pelindung Desa',
    tagline: 'Singa buas bermahkota merak emas, simbol keberanian mutlak yang ditundukkan budi luhur.',
    description: 'Singo Barong adalah manifestasi puncak dari seni Barongan Blora. Berwujud kepala singa raksasa berwarna merah menyala dengan taring runcing, di atasnya bertengger mahkota ukiran emas (makutha) serta bentangan bulu merak (dadak merak) yang mengembang megah. Karakter ini menggambarkan penguasa hutan rimba Lodaya yang perkasa, sakti mandraguna, dan tak kenal rasa takut.',
    philosophy: 'Dalam filsafat Jawa, Singo Barong melambangkan nafsu amarah dan angkara murka manusia. Ketika nafsu liar itu dijinakkan oleh ksatria berbudi luhur (Joko Lodra), kekuatannya bertransformasi menjadi tameng pelindung keselamatan rakyat dari mara bahaya, pagebluk, dan bala bencana.',
    movementStyle: 'Solah Barongan: gerakan mengibaskan kepala singa dengan hentakan leher yang cepat, mencaplokkan rahang kayu (ngelak/caplokan) dengan suara gemeletuk keras membahana, serta langkah kaki mengangkang kokoh menandakan kekuasaan teritorial.',
    maskColor: '#B91C1C',
    accentColor: '#F59E0B',
    image: '/src/assets/images/singo_barong_mask_1792083040376.jpg',
    anatomicalParts: [
      {
        name: 'Makutha Emas (Mahkota Raja)',
        description: 'Ukiran kayu jati berprada emas dengan motif ceplok dan naga melingkar.',
        material: 'Kayu jati Blora pilihan bersepuh emas murni.',
        meaning: 'Derajat keningratan tertinggi serta kemuliaan akal budi.'
      },
      {
        name: 'Dadak Merak (Kipas Bulu Merak)',
        description: 'Hamparan puluhan helai bulu merak jantan asli yang dipasang pada kerangka bambu melengkung.',
        material: 'Bulu merak hijau-biru alami & bilah bambu petung.',
        meaning: 'Keindahan alam semesta sekaligus kewibawaan yang memesona setiap mata.'
      },
      {
        name: 'Taring Gading & Rahang Caplokan',
        description: 'Empat taring melengkung putih gading pada rahang kayu atas dan bawah yang bisa dikatupkan berdentum.',
        material: 'Kayu dadap atau pule kering yang dipahat presisi.',
        meaning: 'Ketajaman prinsip, kekuatan pemusnah kejahatan, dan suara ketegasan nurani.'
      },
      {
        name: 'Rambut Ijuk Aren Hitam',
        description: 'Juntaian serat ijuk pohon aren tua yang disisir rapi menutupi seluruh tubuh sang penari.',
        material: 'Serat ijuk aren Blora pegunungan kapur.',
        meaning: 'Ketebalan hutan purba, keteguhan menahan hawa dingin malam, dan aura mistik sakral.'
      },
      {
        name: 'Netra Mengintai (Mata Belo Kaca)',
        description: 'Sepasang mata melotot bercat putih dengan manik hitam tajam, sering dipasangi kaca cermin.',
        material: 'Kayu berglazur dengan pantulan kaca cermin.',
        meaning: 'Kewaspadaan mata batin yang tak pernah terpejam mengawasi batas desa dari marabahaya.'
      }
    ],
    dialogueQuote: 'Ora ana kang bisa ngungkuli panguwasaku ing tlatah Lodaya, kajaba sejatine kasunyatan budi pekerti!',
    quoteSpeaker: 'Panyandra Singo Barong ing Babak Alas Lodaya'
  },
  {
    id: 'joko-lodra',
    name: 'Joko Lodra / Raden Panji',
    javaneseName: 'Raden Panji Asmarabangun',
    role: 'Ksatria Utama Penakluk',
    archetype: 'Ksatria Luhur, Kebijaksanaan & Keteguhan Jiwa',
    tagline: 'Ksatria berjiwa suci pembawa Pecut Samandiman yang menundukkan keliaran dengan kelembutan budi.',
    description: 'Joko Lodra atau Raden Panji adalah ksatria gagah berani yang ditugaskan membuka jalan dan meminang putri pujaan. Dalam perjalanannya melintasi hutan belantara Lodaya, ia dihadang oleh Prabu Singo Barong. Berbekal pusaka Pecut Samandiman dan kedalaman ilmu kanuragan, ia bertarung bukan untuk membunuh, melainkan untuk menaklukkan keganasan menjadi pengabdi kebaikan.',
    philosophy: 'Melambangkan akal budi dan kesadaran spiritual yang memimpin nafsu hewani. Ksatria sejati menang tanpa ngasorake (menang tanpa merendahkan lawan), mengajarkan bahwa kekuatan terhebat di dunia bukanlah taring atau amarah, melainkan ketulusan kasih dan pengorbanan.',
    movementStyle: 'Tari Ksatrian: gerak tari klasik Jawa gagah yang anggun, sabetan pecut lentur di udara menghasilkan suara lecutan menggelegar, putaran tubuh tangkas, dan tatapan mata fokus tajam menatap lawan.',
    maskColor: '#1E293B',
    accentColor: '#38BDF8',
    anatomicalParts: [
      {
        name: 'Pecut Samandiman',
        description: 'Cemeti pusaka terbuat dari jalinan kulit lembu pilihan berujung benang sutra emas.',
        material: 'Kulit sapi tembaga jalinan dan tangkai kayu sono.',
        meaning: 'Daya sabda pendeta dan ksatria yang mampu meluluhkan ego angkara murka.'
      },
      {
        name: 'Jamang Ksatria',
        description: 'Hiasan kepala bermahkota sayap garuda mungkur berlapis emas berkilau.',
        material: 'Kulit kerbau tatah sungging halus.',
        meaning: 'Kemurnian cita-cita dan ketinggian martabat moral.'
      },
      {
        name: 'Sampur Abang (Selendang Merah)',
        description: 'Kain selendang sutra merah menyala yang diikatkan di pinggang dan dimainkan saat menari.',
        material: 'Kain sutra tenun tradisional.',
        meaning: 'Darah keberanian yang senantiasa mengalir di bawah kendali budi luhur.'
      }
    ],
    dialogueQuote: 'Ingsun rawuh ora saperlu ngrusak tlatahira, nanging ngajak padha memayu hayuning bawana.',
    quoteSpeaker: 'Raden Panji nalika ngadhepi Prabu Singo Barong'
  },
  {
    id: 'gendruwon',
    name: 'Gendruwon (Buto)',
    javaneseName: 'Kala Gendruwo / Denawa',
    role: 'Prajurit Gaib Raksasa',
    archetype: 'Kekuatan Alam Liar, Penguji Nyali & Humor Merakyat',
    tagline: 'Raksasa bertampang sangar berhati jenaka yang gemar menguji nyali penonton di pinggir arena.',
    description: 'Gendruwon adalah sosok makhluk raksasa (buto) bertubuh besar berambut gimbal gimbal acak-acakan dengan topeng seram bermata besar melotot dan gigi bertaring panjang. Kendati tampak mengerikan, penampilannya selalu diselingi aksi jenaka, melompat ke arah kerumunan anak-anak, lalu menari goyang pinggul yang memancing tawa riuh seluruh penonton.',
    philosophy: 'Mengingatkan masyarakat desa agar tidak mudah menilai sesuatu semata-mata dari rupa luarnya. Keberadaan Gendruwon mencerminkan bahwa alam gaib dan alam manusia hidup berdampingan secara selaras dalam falsafah kosmos pedesaan Jawa.',
    movementStyle: 'Gerak Butoan: langkah kaki lebar dan berat mengguncang tanah, gerakan tangan menggapai-gapai liar, kepala bergoyang menggeleng, diselingi loncatan jenaka ke arah penonton.',
    maskColor: '#451A03',
    accentColor: '#EA580C',
    anatomicalParts: [
      {
        name: 'Topeng Kayu Randu Alas',
        description: 'Pahatan wajah raksasa dengan hidung besar, pipi montok, dan mata melotot merah darah.',
        material: 'Kayu randu alas atau waru yang ringan saat dipakai lincah.',
        meaning: 'Wajah alam bawah sadar yang penuh gairah purba.'
      },
      {
        name: 'Taring Sungsang',
        description: 'Sepasang taring bawah yang menjulang ke atas menembus bibir.',
        material: 'Kayu ukir putih gading dilapisi pernis bening.',
        meaning: 'Daya survival primitif manusia purba.'
      },
      {
        name: 'Rambut Sabut Kelapa',
        description: 'Rambut pirang kecokelatan tebal dari sabut kelapa tua yang diurai alami.',
        material: 'Sabut kelapa Blora yang direndam dan disikat.',
        meaning: 'Keterikatan erat dengan bumi pertiwi dan kesederhanaan tanah desa.'
      }
    ],
    dialogueQuote: 'Hahaha! Sapa wani liwat alas kene tanpa sega gurih lan donga kaslametan?!',
    quoteSpeaker: 'Tembang Gurau Gendruwon ing Gapura Desa'
  },
  {
    id: 'kuda-lumping',
    name: 'Kuda Lumping (Jathilan)',
    javaneseName: 'Prajurit Jaran Kepang',
    role: 'Pasukan Kavaleri Tangkas',
    archetype: 'Kedisiplinan, Kecepatan & Ketahanan Jiwa',
    tagline: 'Prajurit berkuda anyaman bambu dengan hentakan ritmis yang menyulut gelora semangat pantang menyerah.',
    description: 'Diperankan oleh para pemuda gagah yang menunggangi replika kuda anyaman bambu (jaran kepang) berwarna-warni. Mengenakan kostum beludru bersulam benang keemasan, mereka menari serempak dalam formasi baris-berbaris lincah dengan iringan ketipung yang makin lama makin cepat hingga mencapai puncak ekstase pertunjukan.',
    philosophy: 'Simbol laskar rakyat dan kavaleri tempur yang gigih. Gerakan dinamis Kuda Lumping menyuntikkan energi optimisme kepada masyarakat petani desa setelah berminggu-minggu bekerja keras mengolah tanah persawahan.',
    movementStyle: 'Tari Jathilan: loncatan kaki teratur mengikuti ketukan kendang ciblon, ayunan jaran kepang ke kanan dan ke kiri, formasi lingkaran dinamis, dan kibasan cemeti kecil.',
    maskColor: '#D97706',
    accentColor: '#EF4444',
    image: '/src/assets/images/penari_kuda_lumping_1792083040518.jpg',
    anatomicalParts: [
      {
        name: 'Jaran Kepang Anyaman',
        description: 'Anyaman bambu apus yang disayat halus lalu dilukis motif kuda putih berhias pelana emas.',
        material: 'Bambu apus Blora pilihan yang telah diawetkan.',
        meaning: 'Ketangkasan wahana juang membela kehormatan tanah leluhur.'
      },
      {
        name: 'Klintingan Kuningan Kaki',
        description: 'Giring-giring kuningan yang dipasang melingkar pada pergelangan kaki penari.',
        material: 'Logam kuningan tuang tradisional.',
        meaning: 'Irama langkah yang selaras dengan denyut nadi ibu pertiwi.'
      },
      {
        name: 'Iket Blangkon & Bulu Unggas',
        description: 'Tutup kepala batik motif modang berhiaskan bulu unggas tegak di pelipis.',
        material: 'Kain batik cap Bloran & bulu ayam jantan.',
        meaning: 'Keberanian ksatria muda yang siap sedia menyongsong tantangan.'
      }
    ],
    dialogueQuote: 'Rampak baris gumuruh swarane, maju terus pantang mundur mbela tanah wutah getih!',
    quoteSpeaker: 'Sesanti Prajurit Jaran Kepang Blora'
  },
  {
    id: 'penthul-tembem',
    name: 'Penthul & Tembem',
    javaneseName: 'Noyontoko & Potrojoyo',
    role: 'Punakawan Abdi Dalem',
    archetype: 'Kebijaksanaan Rakyat Jelata, Satir & Kejujuran',
    tagline: 'Dua sejoli bertopeng putih dan hitam, penasihat bijak berbalut lelucon yang merekatkan persaudaraan.',
    description: 'Penthul (bertopeng putih dengan hidung runcing panjang) dan Tembem (bertopeng hitam dengan pipi gembul dan senyum jenaka) adalah tokoh punakawan pengiring setia. Mereka berperan mencairkan suasana di sela-sela adegan tegang, menyanyikan parikan (pantun Jawa) cerdas, serta menyampaikan nasihat moral bagi para pemimpin dan masyarakat.',
    philosophy: 'Merepresentasikan dwitunggal hitam-putih kehidupan dunia (ruwat rohani). Putih melambangkan kejujuran batin dan keluguan, sedangkan hitam melambangkan keteguhan rasa dan penerimaan takdir secara ikhlas (nrimo ing pandum).',
    movementStyle: 'Tari Punakawan: gerak bebas mengalir jenaka, goyangan bahu serentak, gestur silat parodi, serta interaksi dialogis spontan dengan para penonton.',
    maskColor: '#F8FAFC',
    accentColor: '#10B981',
    anatomicalParts: [
      {
        name: 'Topeng Penthul (Putih Hidung Mancung)',
        description: 'Topeng kayu bercat putih kapur dengan hidung panjang melengkung ke depan dan mata sipit tersenyum.',
        material: 'Kayu pule ringan diukir halus.',
        meaning: 'Pikiran jernih, kepolosan niat, dan keterbukaan menerima kritik.'
      },
      {
        name: 'Topeng Tembem (Hitam Pipi Bulat)',
        description: 'Topeng hitam legam dengan kontur pipi bulat montok dan bibir merekah tertawa lebar.',
        material: 'Kayu randu disepuh jelaga minyak kelapa tradisi.',
        meaning: 'Ketabahan menghadapi penderitaan dengan senyum penuh keikhlasan.'
      },
      {
        name: 'Busana Lurik Tradisi Blora',
        description: 'Baju surjan tenun lurik garis-garis tanah dipadu celana panji gombor.',
        material: 'Kain tenun katun lurik pedesaan.',
        meaning: 'Kesahajaan hidup dan kedekatan abadi dengan denyut nadi rakyat jelata.'
      }
    ],
    dialogueQuote: 'Urip iku urup, Den! Aja mung ngoyak drajat pangkat yen lali marang sedulur cilik!',
    quoteSpeaker: 'Parikan Penthul marang para penonton'
  }
];
