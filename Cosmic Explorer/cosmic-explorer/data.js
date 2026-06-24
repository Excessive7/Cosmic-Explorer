// ============================================
// COSMIC EXPLORER - Data Module
// ============================================

export const PLANETS = [
  {
    id: 'mercury',
    name: 'Merkür',
    englishName: 'Mercury',
    color: '#b5b5b5',
    glowColor: '#8a8a8a',
    size: 0.38,
    orbitRadius: 28,
    orbitSpeed: 0.024,
    rotationSpeed: 0.005,
    textureGradient: ['#8c8c8c', '#b5b5b5', '#d4d4d4'],
    description: 'Güneş\'e en yakın gezegen. Aşırı sıcaklık farkları yaşanır.',
    details: {
      diameter: '4,879 km',
      temperature: '-173°C / 427°C',
      moons: '0',
      gravity: '3.7 m/s²',
      distanceFromSun: '57.9 milyon km',
      dayLength: '58.6 Dünya günü',
      yearLength: '88 Dünya günü',
      atmosphere: 'Yok (çok ince ekzosfer)',
      mass: '3.285 × 10²³ kg',
      type: 'Kayaç gezegen'
    },
    funFact: 'Merkür\'ün bir günü, bir yılından daha uzundur!'
  },
  {
    id: 'venus',
    name: 'Venüs',
    englishName: 'Venus',
    color: '#e8cda0',
    glowColor: '#d4a853',
    size: 0.95,
    orbitRadius: 40,
    orbitSpeed: 0.018,
    rotationSpeed: 0.003,
    textureGradient: ['#c4956a', '#e8cda0', '#f0d8b0'],
    description: 'Güneş Sistemi\'nin en sıcak gezegeni. Yoğun atmosferi vardır.',
    details: {
      diameter: '12,104 km',
      temperature: '462°C',
      moons: '0',
      gravity: '8.87 m/s²',
      distanceFromSun: '108.2 milyon km',
      dayLength: '243 Dünya günü',
      yearLength: '225 Dünya günü',
      atmosphere: 'CO₂ (%96.5), N₂ (%3.5)',
      mass: '4.867 × 10²⁴ kg',
      type: 'Kayaç gezegen'
    },
    funFact: 'Venüs ters yönde döner - güneş batıdan doğar!'
  },
  {
    id: 'earth',
    name: 'Dünya',
    englishName: 'Earth',
    color: '#4da6ff',
    glowColor: '#2979ff',
    size: 1.0,
    orbitRadius: 55,
    orbitSpeed: 0.015,
    rotationSpeed: 0.01,
    textureGradient: ['#1a5276', '#2e86c1', '#4da6ff', '#27ae60'],
    description: 'Bizim evimiz. Bilinen tek yaşam barındıran gezegen.',
    details: {
      diameter: '12,742 km',
      temperature: '-88°C / 58°C',
      moons: '1',
      gravity: '9.81 m/s²',
      distanceFromSun: '149.6 milyon km',
      dayLength: '24 saat',
      yearLength: '365.25 gün',
      atmosphere: 'N₂ (%78), O₂ (%21)',
      mass: '5.972 × 10²⁴ kg',
      type: 'Kayaç gezegen'
    },
    funFact: 'Dünya\'nın %71\'i suyla kaplıdır!'
  },
  {
    id: 'mars',
    name: 'Mars',
    englishName: 'Mars',
    color: '#e74c3c',
    glowColor: '#c0392b',
    size: 0.53,
    orbitRadius: 72,
    orbitSpeed: 0.012,
    rotationSpeed: 0.009,
    textureGradient: ['#922b21', '#c0392b', '#e74c3c', '#d4775c'],
    description: 'Kızıl Gezegen. İnsanlığın kolonileştirmeyi planladığı ilk gezegen.',
    details: {
      diameter: '6,779 km',
      temperature: '-87°C / -5°C',
      moons: '2 (Phobos, Deimos)',
      gravity: '3.72 m/s²',
      distanceFromSun: '227.9 milyon km',
      dayLength: '24 saat 37 dk',
      yearLength: '687 Dünya günü',
      atmosphere: 'CO₂ (%95.3), N₂ (%2.7)',
      mass: '6.39 × 10²³ kg',
      type: 'Kayaç gezegen'
    },
    funFact: 'Mars\'taki Olympus Mons, Güneş Sistemi\'nin en yüksek dağıdır (21.9 km)!'
  },
  {
    id: 'jupiter',
    name: 'Jüpiter',
    englishName: 'Jupiter',
    color: '#d4a574',
    glowColor: '#c68c53',
    size: 2.2,
    orbitRadius: 100,
    orbitSpeed: 0.008,
    rotationSpeed: 0.02,
    textureGradient: ['#8B6914', '#c68c53', '#d4a574', '#e8c9a0', '#b87333'],
    description: 'Güneş Sistemi\'nin en büyük gezegeni. Devasa gaz devi.',
    details: {
      diameter: '139,820 km',
      temperature: '-145°C',
      moons: '95',
      gravity: '24.79 m/s²',
      distanceFromSun: '778.5 milyon km',
      dayLength: '9 saat 55 dk',
      yearLength: '11.86 Dünya yılı',
      atmosphere: 'H₂ (%89.8), He (%10.2)',
      mass: '1.898 × 10²⁷ kg',
      type: 'Gaz devi'
    },
    funFact: 'Jüpiter\'in Büyük Kırmızı Lekesi 350 yıldan uzun süredir fırtına halindedir!'
  },
  {
    id: 'saturn',
    name: 'Satürn',
    englishName: 'Saturn',
    color: '#f0d68a',
    glowColor: '#d4b856',
    size: 1.8,
    orbitRadius: 130,
    orbitSpeed: 0.006,
    rotationSpeed: 0.018,
    textureGradient: ['#c4a35a', '#d4b856', '#f0d68a', '#f5e6b8'],
    description: 'Muhteşem halkaları ile ünlü gaz devi.',
    details: {
      diameter: '116,460 km',
      temperature: '-178°C',
      moons: '146',
      gravity: '10.44 m/s²',
      distanceFromSun: '1.43 milyar km',
      dayLength: '10 saat 42 dk',
      yearLength: '29.46 Dünya yılı',
      atmosphere: 'H₂ (%96.3), He (%3.25)',
      mass: '5.683 × 10²⁶ kg',
      type: 'Gaz devi'
    },
    funFact: 'Satürn o kadar hafiftir ki suya bırakılsa yüzer!'
  },
  {
    id: 'uranus',
    name: 'Uranüs',
    englishName: 'Uranus',
    color: '#73c6d4',
    glowColor: '#4db8c9',
    size: 1.4,
    orbitRadius: 160,
    orbitSpeed: 0.004,
    rotationSpeed: 0.012,
    textureGradient: ['#2c8c99', '#4db8c9', '#73c6d4', '#a3dde6'],
    description: 'Yan yatmış dönen buz devi.',
    details: {
      diameter: '50,724 km',
      temperature: '-224°C',
      moons: '28',
      gravity: '8.87 m/s²',
      distanceFromSun: '2.87 milyar km',
      dayLength: '17 saat 14 dk',
      yearLength: '84 Dünya yılı',
      atmosphere: 'H₂ (%82.5), He (%15.2), CH₄ (%2.3)',
      mass: '8.681 × 10²⁵ kg',
      type: 'Buz devi'
    },
    funFact: 'Uranüs neredeyse tamamen yatay olarak döner (98° eğim)!'
  },
  {
    id: 'neptune',
    name: 'Neptün',
    englishName: 'Neptune',
    color: '#3498db',
    glowColor: '#2471a3',
    size: 1.3,
    orbitRadius: 190,
    orbitSpeed: 0.003,
    rotationSpeed: 0.014,
    textureGradient: ['#1a5276', '#2471a3', '#3498db', '#5dade2'],
    description: 'Güneş Sistemi\'nin en uzak gezegeni. En güçlü rüzgarlara sahiptir.',
    details: {
      diameter: '49,244 km',
      temperature: '-214°C',
      moons: '16',
      gravity: '11.15 m/s²',
      distanceFromSun: '4.50 milyar km',
      dayLength: '16 saat 6 dk',
      yearLength: '164.8 Dünya yılı',
      atmosphere: 'H₂ (%80), He (%19), CH₄ (%1)',
      mass: '1.024 × 10²⁶ kg',
      type: 'Buz devi'
    },
    funFact: 'Neptün\'deki rüzgarlar saatte 2,100 km hıza ulaşır!'
  }
];

export const EXPLORE_CATEGORIES = [
  {
    id: 'blackholes',
    name: 'Kara Delikler',
    englishName: 'Black Holes',
    icon: '🕳️',
    color: '#6c3483',
    gradient: 'linear-gradient(135deg, #1a0533, #6c3483, #1a0533)',
    description: 'Evrenin en gizemli ve güçlü nesneleri',
    facts: [
      'Bir kara deliğin merkezinde tekilluk noktası bulunur',
      'Işık bile kara delikten kaçamaz',
      'Samanyolu\'nun merkezinde devasa bir kara delik var: Sagittarius A*',
      'Kara delikler zamanı büker ve yavaşlatır',
      'En büyük bilinen kara delik TON 618, güneşin 66 milyar katı kütleye sahip'
    ],
    stats: { discovered: '1.000+', largest: 'TON 618', nearest: '1.560 ışık yılı' }
  },
  {
    id: 'supernovas',
    name: 'Süpernovalar',
    englishName: 'Supernovas',
    icon: '💥',
    color: '#e74c3c',
    gradient: 'linear-gradient(135deg, #4a0e0e, #e74c3c, #f39c12)',
    description: 'Yıldızların muhteşem son patlamaları',
    facts: [
      'Bir süpernova tüm galaksiden daha parlak olabilir',
      'Vücudumuzdaki ağır elementler süpernovalardan gelir',
      'Ortalama her 50 yılda bir galakside bir süpernova olur',
      'Son gözlenen yakın süpernova 1987\'de LMC\'de gerçekleşti',
      'Süpernovalar nötron yıldızları ve kara delikler oluşturur'
    ],
    stats: { perYear: '~50/galaksi/yüzyıl', brightness: '10 milyar güneş', duration: '~birkaç hafta' }
  },
  {
    id: 'galaxies',
    name: 'Galaksiler',
    englishName: 'Galaxies',
    icon: '🌌',
    color: '#8e44ad',
    gradient: 'linear-gradient(135deg, #1a0533, #8e44ad, #3498db)',
    description: 'Milyarlarca yıldızın kozmik dansı',
    facts: [
      'Gözlemlenebilir evrende 2 trilyon galaksi var',
      'Samanyolu 200-400 milyar yıldız içerir',
      'Andromeda galaksisi 4.5 milyar yıl sonra bizimle birleşecek',
      'En büyük bilinen galaksi IC 1101, 6 milyon ışık yılı çapında',
      'Galaksiler eliptik, spiral ve düzensiz olabilir'
    ],
    stats: { inUniverse: '2+ trilyon', starCount: '200-400 milyar', age: '13.6 milyar yıl' }
  },
  {
    id: 'exoplanets',
    name: 'Exoplanetler',
    englishName: 'Exoplanets',
    icon: '🪐',
    color: '#27ae60',
    gradient: 'linear-gradient(135deg, #0d3320, #27ae60, #2ecc71)',
    description: 'Güneş Sistemi dışındaki dünyalar',
    facts: [
      '5.000\'den fazla exoplanet keşfedildi',
      'TRAPPIST-1 sistemi 7 Dünya boyutunda gezegen içerir',
      'Bazı exoplanetlerde elmas yağmuru yağıyor olabilir',
      'En yakın exoplanet Proxima Centauri b, 4.24 ışık yılı uzakta',
      'Kepler teleskobu tek başına 2.600+ exoplanet keşfetti'
    ],
    stats: { discovered: '5.500+', habitable: '~60', nearest: '4.24 ışık yılı' }
  },
  {
    id: 'constellations',
    name: 'Takımyıldızlar',
    englishName: 'Constellations',
    icon: '⭐',
    color: '#f1c40f',
    gradient: 'linear-gradient(135deg, #4a3f00, #f1c40f, #f39c12)',
    description: 'Gökyüzündeki antik desenler ve hikayeleri',
    facts: [
      'IAU tarafından 88 resmi takımyıldız tanınır',
      'Takımyıldızlar binlerce yıldır navigasyonda kullanılır',
      'Zodiac kuşağında 12 takımyıldız vardır (artı Ophiuchus)',
      'En bilinen takımyıldız Büyük Ayı (Ursa Major)',
      'Takımyıldızlardaki yıldızlar aslında birbirine yakın olmayabilir'
    ],
    stats: { official: '88', zodiac: '13', oldest: 'M.Ö. 3000+' }
  }
];

export const SPACE_NEWS = [
  {
    id: 1,
    title: 'James Webb Teleskobu Yeni Galaksi Kümesi Keşfetti',
    summary: 'JWST, evrenin erken dönemlerine ait daha önce görülmemiş bir galaksi kümesi tespit etti.',
    date: '2026-05-10',
    category: 'Keşif',
    image: 'nebula'
  },
  {
    id: 2,
    title: 'SpaceX Starship Mars Simülasyonunu Başarıyla Tamamladı',
    summary: 'Mars\'a ilk insanlı misyon için kritik test uçuşu başarıyla gerçekleştirildi.',
    date: '2026-05-09',
    category: 'Misyon',
    image: 'rocket'
  },
  {
    id: 3,
    title: 'Yeni Süper-Dünya Exoplanet Yaşanabilir Bölgede Bulundu',
    summary: 'Bilim insanları, ana yıldızının yaşanabilir bölgesinde yeni bir kayaç gezegen keşfetti.',
    date: '2026-05-08',
    category: 'Exoplanet',
    image: 'planet'
  },
  {
    id: 4,
    title: 'NASA Asteroid Savunma Sistemi Geliştirildi',
    summary: 'DART misyonunun başarısının ardından yeni nesil asteroid savunma teknolojisi duyuruldu.',
    date: '2026-05-07',
    category: 'Teknoloji',
    image: 'asteroid'
  },
  {
    id: 5,
    title: 'Uluslararası Uzay İstasyonu Genişletme Projesi Onaylandı',
    summary: 'ISS\'e yeni modüller eklenerek kapasite iki katına çıkarılacak.',
    date: '2026-05-06',
    category: 'İstasyon',
    image: 'station'
  }
];

export const METEOR_SHOWERS = [
  { name: 'Eta Aquariids', date: '5-6 Mayıs 2026', intensity: 'Orta', perHour: 50, source: 'Halley Kuyruklu Yıldızı' },
  { name: 'Delta Aquariids', date: '28-29 Temmuz 2026', intensity: 'Orta', perHour: 25, source: '96P/Machholz' },
  { name: 'Perseids', date: '12-13 Ağustos 2026', intensity: 'Yüksek', perHour: 100, source: '109P/Swift-Tuttle' },
  { name: 'Orionids', date: '20-21 Ekim 2026', intensity: 'Orta', perHour: 20, source: 'Halley Kuyruklu Yıldızı' },
  { name: 'Leonids', date: '17-18 Kasım 2026', intensity: 'Değişken', perHour: 15, source: '55P/Tempel-Tuttle' },
  { name: 'Geminids', date: '13-14 Aralık 2026', intensity: 'Çok Yüksek', perHour: 150, source: '3200 Phaethon' }
];

export const APOD_DATA = {
  title: 'NGC 1300 - Çubuklu Spiral Galaksi',
  description: 'Hubble Uzay Teleskobu tarafından görüntülenen NGC 1300, Eridanus takımyıldızında yer alan muhteşem bir çubuklu spiral galaksidir. Yaklaşık 61 milyon ışık yılı uzaklıktadır ve çapı 110.000 ışık yılıdır.',
  date: '12 Mayıs 2026',
  credit: 'NASA, ESA, Hubble Heritage Team'
};

export const AI_RESPONSES = {
  greetings: [
    "Merhaba, uzay kaşifi! 🚀 Kozmik yolculuğunuzda size nasıl yardımcı olabilirim?",
    "Hoş geldiniz! Evrenin sırlarını birlikte keşfedelim. 🌌",
    "Kozmik Asistan hazır! Uzayla ilgili merakınızı giderebilirim. ⭐"
  ],
  responses: {
    'kara delik': 'Kara delikler, kütle çekimi o kadar güçlü olan bölgelerdir ki, ışık bile kaçamaz! Bir kara deliğin olaylar ufkunun ötesinde ne olduğunu bilmiyoruz - bu fizikten bildiğimiz yasaların çöktüğü yerdir. 🕳️',
    'mars': 'Mars, 4. gezegenimiz ve insanlığın gelecek evi olarak planlanıyor! Kızıl rengi demir oksit (pas) yüzündendir. NASA\'nın Perseverance rover\'ı şu an Mars\'ta yaşam izleri arıyor. 🔴',
    'jüpiter': 'Jüpiter, Güneş Sistemi\'nin devi! O kadar büyüktür ki, diğer tüm gezegenleri içine sığdırabilir. Büyük Kırmızı Lekesi 350+ yıldır devam eden dev bir fırtınadır. ⭕',
    'dünya': 'Evimiz Dünya, bilinen tek yaşam barındıran gezegendir! Mavi görünümü okyanuslardan, %71\'i suyla kaplıdır. Manyetik alanı bizi güneş rüzgarlarından korur. 🌍',
    'güneş': 'Güneş, 4.6 milyar yaşında bir sarı cüce yıldızdır. Her saniye 600 milyon ton hidrojeni helyuma dönüştürür. Dünya\'dan 109 kat daha büyüktür! ☀️',
    'uzay': 'Uzay, Dünya\'nın atmosferinin bittiği yerde başlar - yaklaşık 100 km yükseklikte (Kármán çizgisi). Gözlemlenebilir evren 93 milyar ışık yılı çapındadır! 🌌',
    'yıldız': 'Yıldızlar, hidrojen gazının kütleçekimi altında sıkışıp füzyon reaksiyonu başlatmasıyla oluşur. Samanyolu\'nda 200-400 milyar yıldız vardır! ✨',
    'ay': 'Ay, Dünya\'nın tek doğal uydusudur ve muhtemelen 4.5 milyar yıl önce dev bir çarpışmayla oluşmuştur (Theia hipotezi). Gel-git olaylarının ana sebebidir. 🌙',
    'nasa': 'NASA (National Aeronautics and Space Administration) 1958\'de kurulmuştur. Apollo programı ile insanı Ay\'a gönderen, Mars rover\'ları ve James Webb gibi projelere imza atan ABD uzay ajansıdır. 🚀',
    'iss': 'Uluslararası Uzay İstasyonu (ISS), yerden 408 km yükseklikte Dünya\'nın yörüngesinde döner. Futbol sahası büyüklüğündedir ve sürekli en az 6 astronot barındırır. 🛰️',
    'galaksi': 'Galaksiler, milyarlarca yıldız, gezegen, gaz ve tozun kütle çekimiyle bir arada tutulduğu devasa yapılardır. Bizim galaksimiz Samanyolu bir spiral galaksidir. Evrende 2 trilyon+ galaksi var! 🌌',
    default: 'Harika bir soru! Evren sonsuz gizemlerle dolu. Daha spesifik bir konu hakkında bilgi vermemi ister misiniz? Örneğin gezegenler, yıldızlar, kara delikler veya uzay misyonları hakkında sorabilirsiniz! 🌟'
  }
};
