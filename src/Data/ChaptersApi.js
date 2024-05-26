const Chapters = [
  {
    chapter_number: 1,
    name: "Al-Fatiha",
    arabic_name: "الفاتحة",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/1",
  },
  {
    chapter_number: 2,
    name: "Al-Baqarah",
    arabic_name: "البقرة",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/2",
  },
  {
    chapter_number: 3,
    name: "Al-Imran",
    arabic_name: "آل عمران",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/3",
  },
  {
    chapter_number: 4,
    name: "An-Nisa",
    arabic_name: "النساء",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/4",
  },
  {
    chapter_number: 5,
    name: "Al-Maidah",
    arabic_name: "المائدة",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/5",
  },
  {
    chapter_number: 6,
    name: "Al-An'am",
    arabic_name: "الأنعام",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/6",
  },
  {
    chapter_number: 7,
    name: "Al-A'raf",
    arabic_name: "الأعراف",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/7",
  },
  {
    chapter_number: 8,
    name: "Al-Anfal",
    arabic_name: "الأنفال",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/8",
  },
  {
    chapter_number: 9,
    name: "At-Tawbah",
    arabic_name: "التوبة",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/9",
  },
  {
    chapter_number: 10,
    name: "Yunus",
    arabic_name: "يونس",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/10",
  },
  {
    chapter_number: 11,
    name: "Hud",
    arabic_name: "هود",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/11",
  },
  {
    chapter_number: 12,
    name: "Yusuf",
    arabic_name: "يوسف",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/12",
  },
  {
    chapter_number: 13,
    name: "Ar-Ra'd",
    arabic_name: "الرعد",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/13",
  },
  {
    chapter_number: 14,
    name: "Ibrahim",
    arabic_name: "إبراهيم",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/14",
  },
  {
    chapter_number: 15,
    name: "Al-Hijr",
    arabic_name: "الحجر",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/15",
  },
  {
    chapter_number: 16,
    name: "An-Nahl",
    arabic_name: "النحل",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/16",
  },
  {
    chapter_number: 17,
    name: "Al-Isra",
    arabic_name: "الإسراء",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/17",
  },
  {
    chapter_number: 18,
    name: "Al-Kahf",
    arabic_name: "الكهف",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/18",
  },
  {
    chapter_number: 19,
    name: "Maryam",
    arabic_name: "مريم",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/19",
  },
  {
    chapter_number: 20,
    name: "Ta-Ha",
    arabic_name: "طه",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/20",
  },
  {
    chapter_number: 21,
    name: "Al-Anbiya",
    arabic_name: "الأنبياء",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/21",
  },
  {
    chapter_number: 22,
    name: "Al-Hajj",
    arabic_name: "الحج",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/22",
  },
  {
    chapter_number: 23,
    name: "Al-Mu'minun",
    arabic_name: "المؤمنون",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/23",
  },
  {
    chapter_number: 24,
    name: "An-Nur",
    arabic_name: "النور",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/24",
  },
  {
    chapter_number: 25,
    name: "Al-Furqan",
    arabic_name: "الفرقان",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/25",
  },
  {
    chapter_number: 26,
    name: "Ash-Shu'ara",
    arabic_name: "الشعراء",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/26",
  },
  {
    chapter_number: 27,
    name: "An-Naml",
    arabic_name: "النمل",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/27",
  },
  {
    chapter_number: 28,
    name: "Al-Qasas",
    arabic_name: "القصص",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/28",
  },
  {
    chapter_number: 29,
    name: "Al-Ankabut",
    arabic_name: "العنكبوت",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/29",
  },
  {
    chapter_number: 30,
    name: "Ar-Rum",
    arabic_name: "الروم",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/30",
  },
  {
    chapter_number: 31,
    name: "Luqman",
    arabic_name: "لقمان",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/31",
  },
  {
    chapter_number: 32,
    name: "As-Sajda",
    arabic_name: "السجدة",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/32",
  },
  {
    chapter_number: 33,
    name: "Al-Ahzab",
    arabic_name: "الأحزاب",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/33",
  },
  {
    chapter_number: 34,
    name: "Saba",
    arabic_name: "سبأ",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/34",
  },
  {
    chapter_number: 35,
    name: "Fatir",
    arabic_name: "فاطر",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/35",
  },
  {
    chapter_number: 36,
    name: "Ya-Sin",
    arabic_name: "يس",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/36",
  },
  {
    chapter_number: 37,
    name: "As-Saffat",
    arabic_name: "الصافات",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/37",
  },
  {
    chapter_number: 38,
    name: "Sad",
    arabic_name: "ص",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/38",
  },
  {
    chapter_number: 39,
    name: "Az-Zumar",
    arabic_name: "الزمر",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/39",
  },
  {
    chapter_number: 40,
    name: "Ghafir",
    arabic_name: "غافر",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/40",
  },
  {
    chapter_number: 41,
    name: "Fussilat",
    arabic_name: "فصلت",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/41",
  },
  {
    chapter_number: 42,
    name: "Ash-Shura",
    arabic_name: "الشورى",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/42",
  },
  {
    chapter_number: 43,
    name: "Az-Zukhruf",
    arabic_name: "الزخرف",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/43",
  },
  {
    chapter_number: 44,
    name: "Ad-Dukhan",
    arabic_name: "الدخان",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/44",
  },
  {
    chapter_number: 45,
    name: "Al-Jathiyah",
    arabic_name: "الجاثية",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/45",
  },
  {
    chapter_number: 46,
    name: "Al-Ahqaf",
    arabic_name: "الأحقاف",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/46",
  },
  {
    chapter_number: 47,
    name: "Muhammad",
    arabic_name: "محمد",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/47",
  },
  {
    chapter_number: 48,
    name: "Al-Fath",
    arabic_name: "الفتح",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/48",
  },
  {
    chapter_number: 49,
    name: "Al-Hujurat",
    arabic_name: "الحجرات",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/49",
  },
  {
    chapter_number: 50,
    name: "Qaf",
    arabic_name: "ق",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/50",
  },
  {
    chapter_number: 51,
    name: "Adh-Dhariyat",
    arabic_name: "الذاريات",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/51",
  },
  {
    chapter_number: 52,
    name: "At-Tur",
    arabic_name: "الطور",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/52",
  },
  {
    chapter_number: 53,
    name: "An-Najm",
    arabic_name: "النجم",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/53",
  },
  {
    chapter_number: 54,
    name: "Al-Qamar",
    arabic_name: "القمر",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/54",
  },
  {
    chapter_number: 55,
    name: "Ar-Rahman",
    arabic_name: "الرحمن",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/55",
  },
  {
    chapter_number: 56,
    name: "Al-Waqi'a",
    arabic_name: "الواقعة",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/56",
  },
  {
    chapter_number: 57,
    name: "Al-Hadid",
    arabic_name: "الحديد",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/57",
  },
  {
    chapter_number: 58,
    name: "Al-Mujadila",
    arabic_name: "المجادلة",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/58",
  },
  {
    chapter_number: 59,
    name: "Al-Hashr",
    arabic_name: "الحشر",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/59",
  },
  {
    chapter_number: 60,
    name: "Al-Mumtahina",
    arabic_name: "الممتحنة",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/60",
  },
  {
    chapter_number: 61,
    name: "As-Saff",
    arabic_name: "الصف",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/61",
  },
  {
    chapter_number: 62,
    name: "Al-Jumu'ah",
    arabic_name: "الجمعة",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/62",
  },
  {
    chapter_number: 63,
    name: "Al-Munafiqun",
    arabic_name: "المنافقون",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/63",
  },
  {
    chapter_number: 64,
    name: "At-Taghabun",
    arabic_name: "التغابن",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/64",
  },
  {
    chapter_number: 65,
    name: "At-Talaq",
    arabic_name: "الطلاق",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/65",
  },
  {
    chapter_number: 66,
    name: "At-Tahrim",
    arabic_name: "التحريم",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/66",
  },
  {
    chapter_number: 67,
    name: "Al-Mulk",
    arabic_name: "الملك",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/67",
  },
  {
    chapter_number: 68,
    name: "Al-Qalam",
    arabic_name: "القلم",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/68",
  },
  {
    chapter_number: 69,
    name: "Al-Haqqah",
    arabic_name: "الحاقة",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/69",
  },
  {
    chapter_number: 70,
    name: "Al-Ma'arij",
    arabic_name: "المعارج",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/70",
  },
  {
    chapter_number: 71,
    name: "Nuh",
    arabic_name: "نوح",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/71",
  },
  {
    chapter_number: 72,
    name: "Al-Jinn",
    arabic_name: "الجن",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/72",
  },
  {
    chapter_number: 73,
    name: "Al-Muzzammil",
    arabic_name: "المزمل",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/73",
  },
  {
    chapter_number: 74,
    name: "Al-Muddathir",
    arabic_name: "المدثر",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/74",
  },
  {
    chapter_number: 75,
    name: "Al-Qiyamah",
    arabic_name: "القيامة",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/75",
  },
  {
    chapter_number: 76,
    name: "Al-Insan",
    arabic_name: "الإنسان",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/76",
  },
  {
    chapter_number: 77,
    name: "Al-Mursalat",
    arabic_name: "المرسلات",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/77",
  },
  {
    chapter_number: 78,
    name: "An-Naba",
    arabic_name: "النبأ",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/78",
  },
  {
    chapter_number: 79,
    name: "An-Nazi'at",
    arabic_name: "النازعات",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/79",
  },
  {
    chapter_number: 80,
    name: "'Abasa",
    arabic_name: "عبس",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/80",
  },
  {
    chapter_number: 81,
    name: "At-Takwir",
    arabic_name: "التكوير",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/81",
  },
  {
    chapter_number: 82,
    name: "Al-Infitar",
    arabic_name: "الإنفطار",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/82",
  },
  {
    chapter_number: 83,
    name: "Al-Mutaffifin",
    arabic_name: "المطففين",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/83",
  },
  {
    chapter_number: 84,
    name: "Al-Inshiqaq",
    arabic_name: "الإنشقاق",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/84",
  },
  {
    chapter_number: 85,
    name: "Al-Buruj",
    arabic_name: "البروج",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/85",
  },
  {
    chapter_number: 86,
    name: "At-Tariq",
    arabic_name: "الطارق",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/86",
  },
  {
    chapter_number: 87,
    name: "Al-A'la",
    arabic_name: "الأعلى",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/87",
  },
  {
    chapter_number: 88,
    name: "Al-Ghashiyah",
    arabic_name: "الغاشية",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/88",
  },
  {
    chapter_number: 89,
    name: "Al-Fajr",
    arabic_name: "الفجر",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/89",
  },
  {
    chapter_number: 90,
    name: "Al-Balad",
    arabic_name: "البلد",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/90",
  },
  {
    chapter_number: 91,
    name: "Ash-Shams",
    arabic_name: "الشمس",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/91",
  },
  {
    chapter_number: 92,
    name: "Al-Layl",
    arabic_name: "الليل",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/92",
  },
  {
    chapter_number: 93,
    name: "Ad-Duhaa",
    arabic_name: "الضحى",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/93",
  },
  {
    chapter_number: 94,
    name: "Ash-Sharh",
    arabic_name: "الشرح",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/94",
  },
  {
    chapter_number: 95,
    name: "At-Tin",
    arabic_name: "التين",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/95",
  },
  {
    chapter_number: 96,
    name: "Al-'Alaq",
    arabic_name: "العلق",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/96",
  },
  {
    chapter_number: 97,
    name: "Al-Qadr",
    arabic_name: "القدر",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/97",
  },
  {
    chapter_number: 98,
    name: "Al-Bayyinah",
    arabic_name: "البينة",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/98",
  },
  {
    chapter_number: 99,
    name: "Az-Zalzalah",
    arabic_name: "الزلزلة",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/99",
  },
  {
    chapter_number: 100,
    name: "Al-'Adiyat",
    arabic_name: "العاديات",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/100",
  },
  {
    chapter_number: 101,
    name: "Al-Qari'ah",
    arabic_name: "القارعة",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/101",
  },
  {
    chapter_number: 102,
    name: "At-Takathur",
    arabic_name: "التكاثر",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/102",
  },
  {
    chapter_number: 103,
    name: "Al-'Asr",
    arabic_name: "العصر",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/103",
  },
  {
    chapter_number: 104,
    name: "Al-Humazah",
    arabic_name: "الهمزة",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/104",
  },
  {
    chapter_number: 105,
    name: "Al-Fil",
    arabic_name: "الفيل",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/105",
  },
  {
    chapter_number: 106,
    name: "Quraish",
    arabic_name: "قريش",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/106",
  },
  {
    chapter_number: 107,
    name: "Al-Ma'un",
    arabic_name: "الماعون",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/107",
  },
  {
    chapter_number: 108,
    name: "Al-Kawthar",
    arabic_name: "الكوثر",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/108",
  },
  {
    chapter_number: 109,
    name: "Al-Kafirun",
    arabic_name: "الكافرون",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/109",
  },
  {
    chapter_number: 110,
    name: "An-Nasr",
    arabic_name: "النصر",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/110",
  },
  {
    chapter_number: 111,
    name: "Al-Masad",
    arabic_name: "المسد",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/111",
  },
  {
    chapter_number: 112,
    name: "Al-Ikhlas",
    arabic_name: "الإخلاص",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/112",
  },
  {
    chapter_number: 113,
    name: "Al-Falaq",
    arabic_name: "الفلق",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/113",
  },
  {
    chapter_number: 114,
    name: "An-Nas",
    arabic_name: "الناس",
    translation_api:
      "https://quranenc.com/api/v1/translation/sura/urdu_junaghi/114",
  },
];
export default Chapters;
