import { supabase } from "./supabaseClient";
import { useEffect, useRef, useState } from "react";
import "./App.css";

/* =========================================================
   OOHA LOKAM — MUSIC DATABASE
   ========================================================= */

const songs = {
  "1960s": [
    {
      title: "ధనమేరా అన్నిటికీ",
      englishTitle: "Dhanamera Anitiki",
      youtubeId: "ilyE8jAgjSc",
    },
    {
      title: "మధువు వదలరా",
      englishTitle: "Mathu Vadalara",
      youtubeId: "MocqMfD7dnI",
    },
    {
      title: "ఓ దేవదా",
      englishTitle: "O Devada",
      youtubeId: "H32hEUNdQN0",
    },
    {
      title: "కోడె కారు చిన్నవాడా",
      englishTitle: "Kode Kaaru Chinavada",
      youtubeId: "oED08iyW7dI",
    },
    {
      title: "అమ్మ అన్నది కామనిమాట",
      englishTitle: "Amma Annadi Kamani Mata",
      youtubeId: "oEbF_ATX8dA",
    },
    {
      title: "రావోయి చందమామ",
      englishTitle: "Raavoyi Chandhamama",
      youtubeId: "qoMI8OdajYY",
    },
    {
      title: "ఎవరి కోసం",
      englishTitle: "Yevari Kosam",
      youtubeId: "tKefi4DPHyI",
    },
    {
      title: "చిటపట చినుకులు",
      englishTitle: "Chitapata Chinukulu",
      youtubeId: "0doquHeOXjg",
    },
  ],

  "1970s": [],

  "1980s": [
    {
      title: "ఆకాశం ఏనాటిదో",
      englishTitle: "Aakasam Enatido",
      youtubeId: "XriFLCOshQ0",
    },
  ],

  "1990s": [
    {
      title: "Yemi Cheyamanduve",
      movie: "Priyuraalu Pilichindi",
      year: "1990s",
      youtubeId: "aulygJVShnw",
    },
    {
      title: "వెన్నెలవే వెన్నెలవే",
      englishTitle: "Vennalave Vennelave",
      youtubeId: "jB5QfgaU6cU",
    },
    {
      title: "ఏటో వెళ్లిపోయింది మనసు",
      englishTitle: "Yeto Vellipoyindhi Manasu",
      youtubeId: "FvcoRTJK_J8",
    },
    {
      title: "టెలిఫోన్ ధ్వనిలా",
      englishTitle: "Telephone Dhwani La",
      youtubeId: "wkZbXkOAx8s",
    },
    {
      title: "శశివదనే",
      englishTitle: "Sasivadhane",
      youtubeId: "TDNVisXNqyM",
    },
    {
      title: "నా చెల్లి రోజావే",
      englishTitle: "Na Chelli Rojave",
      youtubeId: "VumsdDIOY9A",
    },
    {
      title: "ఓ చెలియా",
      englishTitle: "O Cheliya",
      youtubeId: "_u3QevWcPmI",
    },
    {
      title: "హయిరబ్బా హయిరబ్బా",
      englishTitle: "Hayirabba Hayirabba",
      youtubeId: "pbfVzIRAA-o",
    },
    {
      title: "జాము రాతిరి",
      englishTitle: "Jaamu Ratiri",
      youtubeId: "sia1ctskE-o",
    },
    {
      title: "ప్రేమా ప్రేమా",
      englishTitle: "Prema Prema",
      youtubeId: "rJnVEC5FDOs",
    },
    {
      title: "వయ్యారి భామ",
      englishTitle: "Vayyari Bhama",
      youtubeId: "-KH7IZjCkSk",
    },
    {
      title: "అందమైన ప్రేమ రాణి",
      englishTitle: "Andhamaina Prema Rani",
      youtubeId: "-I8WpNNboaw",
    },
    {
      title: "Pedavi Daatani",
      englishTitle: "Pedavi Daatani",
      youtubeId: "rDaT9ykpFU0",
    },
  ],

  "2000s": [
    {
      title: "Rama Rama Raghurama",
      movie: "Sri Anjaneyam",
      year: "2004",
      youtubeId: "7IYxhmhS0lc",
    },
    {
      title: "Allantha Doorala",
      movie: "Aadavari Matalaku Ardhalu Verule",
      year: "2007",
      youtubeId: "WSdPLmel6zw",
    },
    {
      title: "Gallo Telinattunde",
      movie: "Jalsa",
      year: "2008",
      youtubeId: "NXkM-loOgzQ",
    },
    {
      title: "Dhim Thana",
      movie: "Kick",
      year: "2009",
      youtubeId: "s55Dnk5i6sk",
    },
    {
      title: "చంద్రుల్లో",
      englishTitle: "Chandrullo",
      youtubeId: "RIriENOmOpo",
    },
    {
      title: "ఉప్పెనంత",
      englishTitle: "Uppenantha",
      youtubeId: "TIOZUdc0aL8",
    },
    {
      title: "నిలువద్దం",
      englishTitle: "Nilluvaddham",
      youtubeId: "fdEzDqiSC3U",
    },
    {
      title: "కళ్ళు మూసి యోచిస్తే",
      englishTitle: "Kallu Moosi Yochisthey",
      youtubeId: "-6uqH-0TiDk",
    },
    {
      title: "మల్లీశ్వరివే",
      englishTitle: "Mallieswarivey",
      youtubeId: "5vpzUXWIzAg",
    },
    {
      title: "పచ్చందనమే",
      englishTitle: "Pachandaname",
      youtubeId: "sxn0T94mkJw",
    },
    {
      title: "స్నేహితుడా",
      englishTitle: "Snehithuda",
      youtubeId: "k8szK5-oPUU",
    },
    {
      title: "మనోహర",
      englishTitle: "Manohara",
      youtubeId: "OZTI2Qgf1xE",
    },
    {
      title: "కలై పోయేను",
      englishTitle: "Kalai Poyenu",
      youtubeId: "aTwKS1-9PRI",
    },
    {
      title: "కైలవే చెడుగుడు",
      englishTitle: "Kailove Chedugudu",
      youtubeId: "9dQqmFje6hs",
    },
    {
      title: "నీ ఇల్లు బంగారం కాను",
      englishTitle: "Nee Illu Bangaram Kaanu",
      youtubeId: "fPLzesuwNxg",
    },
    {
      title: "చమ్కా చమ్కా",
      englishTitle: "Chamka Chamka",
      youtubeId: "_wAjBV5hFtc",
    },
    {
      title: "నిదుర పోతున్నా",
      englishTitle: "Nidura Pothuna",
      youtubeId: "kbc_zhP6tzk",
    },
    {
      title: "యమహో యమా",
      englishTitle: "Yamaho Yama",
      youtubeId: "-GG11neCs_8",
    },
    {
      title: "పలికే గోరింక",
      englishTitle: "Palike Gorinka",
      youtubeId: "U0EyR7y-EJM",
    },
    {
      title: "కనులు తెరిచిన",
      englishTitle: "Kanulu Terichina",
      youtubeId: "gOf9Zpt8XYg",
    },
    {
      title: "చినుకు తడికి",
      englishTitle: "Chinuku Thadiki",
      youtubeId: "x7vsIXmzjcY",
    },
    {
      title: "నీ కొప్పులో నా మల్లె తోట",
      englishTitle: "Nee Koppulo Na Malle Thota",
      youtubeId: "SfCx1az2PMM",
    },
    {
      title: "జూన్ పోతే",
      englishTitle: "June Pothe",
      youtubeId: "umbSwoQ94PM",
    },
    {
      title: "తెల్ల తెల్లని చీర",
      englishTitle: "Tella Tellani Cheera",
      youtubeId: "9p73PtEzqHo",
    },
    {
      title: "కంది చేను కాడ",
      englishTitle: "Kandhi Chenu Kada",
      youtubeId: "Pg3oIk420eo",
    },
  ],

  "2010s": [
    {
      title: "ఆరడుగులుంటాడా",
      englishTitle: "Aaraduguluntada",
      youtubeId: "6JGGFYIcrLY",
    },
    {
      title: "మరి అంతగా",
      englishTitle: "Mari Antaga",
      youtubeId: "ZwGPx75hVLk",
    },
    {
      title: "ఇంకా చెప్పలే",
      englishTitle: "Inka Cheppale",
      youtubeId: "5J-8vmMVKjs",
    },
    {
      title: "జత కలిసే",
      englishTitle: "Jatha Kalise",
      youtubeId: "cULVDmIDIzI",
    },
    {
      title: "ఇదేదో బాగుంది",
      englishTitle: "Idedho Bagundi",
      youtubeId: "VQ2-HPwxAZY",
    },
    {
      title: "ఇంకేం ఇంకేం",
      englishTitle: "Inkem Inkem",
      youtubeId: "qFYj1w69OZA",
    },
    {
      title: "ఏంటి ఏంటి",
      englishTitle: "Yenti Yenti",
      youtubeId: "dAUHa5K38t4",
    },
    {
      title: "ఉన్నట్టుంది గుండే",
      englishTitle: "Unnatundi Gundey",
      youtubeId: "-twi5MBq1TQ",
    },
    {
      title: "ఎలా ఎలా నాలో",
      englishTitle: "Ela Ela Naalo",
      youtubeId: "jGugscZJxis",
    },
    {
      title: "ఉండిపోరాదే",
      englishTitle: "Undiporadhey",
      youtubeId: "lewVFlngGCk",
    },
    {
      title: "బయటికొచ్చి చూస్తే",
      englishTitle: "Baitikochi Chustey",
      youtubeId: "lewVFlngGCk",
    },
    {
      title: "హోయినా హోయినా",
      englishTitle: "Hoyna Hoyna",
      youtubeId: "91EzD9VgwGk",
    },
    {
      title: "స్పిరిట్ ఆఫ్ జెర్సీ",
      englishTitle: "Spirit of Jersey",
      youtubeId: "cChZEYVRvIE",
    },
    {
      title: "ఆరంభమే లే",
      englishTitle: "Aarambhame Le",
      youtubeId: "zl1CsDDmN6s",
    },
    {
      title: "కోపం గా కోపం గా",
      englishTitle: "Kopam Ga Kopam Ga",
      youtubeId: "IW9i3bJ8bkU",
    },
    {
      title: "హలో టైటిల్ సాంగ్",
      englishTitle: "Hello Title Song",
      youtubeId: "803l9Wz_XFY",
    },
    {
      title: "అనగనగా",
      englishTitle: "Anaganaga",
      youtubeId: "F3Td3_c96vo",
    },
    {
      title: "ఊసుపోదు",
      englishTitle: "Oosupodu",
      youtubeId: "e4N9al7vhVQ",
    },
    {
      title: "ఇంతలో ఎన్నెన్ని వింతలో",
      englishTitle: "Inthalo Ennenni Vinthalo",
      youtubeId: "k22zWP3p42Y",
    },
    {
      title: "నాన్నకు ప్రేమతో",
      englishTitle: "Nannaku Prematho",
      youtubeId: "7VY191_NiHA",
    },
    {
      title: "నీ ఎదలో నాకు",
      englishTitle: "Nee Yadalo Naaku",
      youtubeId: "VffosKXVZoY",
    },
    {
      title: "నాలోనే పొంగేను నర్మద",
      englishTitle: "Nalone Pongenu Narmadha",
      youtubeId: "7dhKeHT2Bdk",
    },
    {
      title: "రాయే రాయే",
      englishTitle: "Raaye Raaye",
      youtubeId: "vdGpAjvNOew",
    },
    {
      title: "నీలో వలపు",
      englishTitle: "Neelo Valapu",
      youtubeId: "5CttV9rxhic",
    },
    {
      title: "కిలిమంజారో భల",
      englishTitle: "Kilimanjaro Bhala",
      youtubeId: "loKoN6p0j-0",
    },
    {
      title: "ఓ సయనోరా",
      englishTitle: "Oo Sayanora",
      youtubeId: "q5sxzHWvkqk",
    },
    {
      title: "ఏ మాయ చేసావే",
      englishTitle: "Yee Maaya Chesave",
      youtubeId: "zV6d16yukFY",
    },
    {
      title: "అరెరే వానా",
      englishTitle: "Arere Vaanaa",
      youtubeId: "twA4pHMJrFs",
    },
    {
      title: "మందార పూవల్లె",
      englishTitle: "Mandaara Poovalle",
      youtubeId: "cmXLAb-6oeM",
    },
    {
      title: "పిలిచే",
      englishTitle: "Pileche",
      youtubeId: "CZWSdjqHzZc",
    },
    {
      title: "కథకాదే",
      englishTitle: "Kathakaadhey",
      youtubeId: "2k7xkic1aNI",
    },
    {
      title: "గిచి గిచి",
      englishTitle: "Gichi Gichi",
      youtubeId: "umbSwoQ94PM",
    },
    {
      title: "సోనా సోనా",
      englishTitle: "Sona Sona",
      youtubeId: "z3amrmblYDg",
    },
    {
      title: "గెలుపు తలపులే",
      englishTitle: "Gelupu Thalapule",
      youtubeId: "snrYw_nDvCI",
    },
  ],

  "2020s": [
    {
      title: "సింగారి",
      englishTitle: "Singari",
      youtubeId: "Ja7Yz0MPbwI",
    },
    {
      title: "యాలాలో యాలాలో",
      englishTitle: "Yaalalo Yaalalo",
      youtubeId: "WT-wrwlN144",
    },
    {
      title: "బాగుండు పో",
      englishTitle: "Baagundu Poo",
      youtubeId: "L7n_b1LLVAg",
    },
    {
      title: "ఊరమ్ బ్లడ్",
      englishTitle: "Oorum Blood",
      youtubeId: "k9_JbEaRxso",
    },
    {
      title: "బూమ్ బూమ్",
      englishTitle: "Boom Boom",
      youtubeId: "5JoPeWHkKJg",
    },
    {
      title: "నీ గుండెలోనా",
      englishTitle: "Nee gundelona",
      youtubeId: "d3Vnu_tsYPA",
    },
    {
      title: "యేష నాగుల",
      englishTitle: "Yesha nagula",
      youtubeId: "JqFzhcWo3EU",
    },
    {
      title: "నేనో బటర్‌ఫ్లై",
      englishTitle: "Neno butterfly",
      youtubeId: "9dV6Hl2u3vM",
    },
    {
      title: "మల్లెపూల పల్లకి",
      englishTitle: "Mallepoola pallaki",
      youtubeId: "QnQnz9G2LNw",
    },
    {
      title: "ఓ రెండు ప్రేమ మేఘాలిలా",
      englishTitle: "Oo rendu prema meghalila",
      youtubeId: "7BGTwvgxYtU",
    },
    {
      title: "ప్రేమలో",
      englishTitle: "Premalo",
      youtubeId: "IOopJ-PDpac",
    },
    {
      title: "నా మది",
      englishTitle: "Naa madhi",
      youtubeId: "NwMaEv8qpOk",
    },
    {
      title: "శ్రీమతి గారు",
      englishTitle: "Srimathi garu",
      youtubeId: "sTfl_FCMX4g",
    },
    {
      title: "మీసాల పిల్ల",
      englishTitle: "Meesala pilla",
      youtubeId: "A4anPJkdVTY",
    },
  ],
};

/* =========================================================
   OOHA LOKAM — VINTAGE RADIO HELPERS
   ========================================================= */

const radioStations = [
  {
    id: "nati",
    name: "నాటి మధురిమ",
    english: "NAATI MADHURIMA",
    era: "1960s – 1980s",
    eras: ["1960s", "1970s", "1980s"],
    frequency: "88.1",
  },
  {
    id: "raga",
    name: "రాగాల రేయి",
    english: "RAAGAALA REYI",
    era: "1990s",
    eras: ["1990s"],
    frequency: "92.4",
  },
  {
    id: "madhura",
    name: "మధుర తరంగం",
    english: "MADHURA TARANGAM",
    era: "2000s",
    eras: ["2000s"],
    frequency: "96.8",
  },
  {
    id: "swar",
    name: "స్వర సౌరభం",
    english: "SWARA SAURABHAM",
    era: "2010s",
    eras: ["2010s"],
    frequency: "100.6",
  },
  {
    id: "nethi",
    name: "నేటి స్వరాలు",
    english: "NETI SWARAALU",
    era: "2020s",
    eras: ["2020s"],
    frequency: "104.2",
  },
];

function getToday() {
  return new Date().toISOString().slice(0, 10);
}

function formatTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) {
    return "00:00";
  }

  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);

  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(
    2,
    "0"
  )}`;
}

function getStationSongs(station) {
  return station.eras.flatMap((era) =>
    (songs[era] || [])
      .filter((song) => song.youtubeId)
      .map((song) => ({
        ...song,
        era,
      }))
  );
}

const musicQuizDifficulties = {
  Easy: {
    label: "WARM-UP",
    description: "Familiar melodies. Trust your ears.",
    maxClip: 8,
  },
  Medium: {
    label: "TUNING",
    description:
      "Recognisable, but the radio will make you work for it.",
    maxClip: 16,
  },
  Hard: {
    label: "DEEP CUT",
    description:
      "For serious Telugu music lovers. Every second matters.",
    maxClip: 16,
  },
};

/* =========================================================
   MUSIC MYSTERY — UPDATE THIS LIST EVERY 2 DAYS

   The quiz randomly picks up to 5 songs from the selected
   difficulty. The radio archive is separate from this list.
   ========================================================= */

const weeklyMusicQuizSongs = {
  Easy: [
    { title: "Nee gundelona", youtubeId: "d3Vnu_tsYPA" },
    { title: "Yesha nagula", youtubeId: "JqFzhcWo3EU" },
    { title: "Neno butterfly", youtubeId: "9dV6Hl2u3vM" },
    { title: "Mallepoola pallakki", youtubeId: "QnQnz9G2LNw" },
    { title: "Oo sayanora", youtubeId: "q5sxzHWvkqk" },
    { title: "Oo rendu prema meghalila", youtubeId: "7BGTwvgxYtU" },
    { title: "Pileche", youtubeId: "CZWSdjqHzZc" },
    { title: "Premalo", youtubeId: "IOopJ-PDpac" },
    { title: "Naa madhi", youtubeId: "NwMaEv8qpOk" },
    {
      title: "Andhamaina prema rani",
      youtubeId: "-I8WpNNboaw",
    },
  ],

  Medium: [
    {
      title: "Yee Maaya Chesave",
      youtubeId: "zV6d16yukFY",
    },
    {
      title: "Arere Vaanaa",
      youtubeId: "twA4pHMJrFs",
    },
    {
      title: "Chamka Chamka",
      youtubeId: "_wAjBV5hFtc",
    },
    {
      title: "Mandaara Poovalle",
      youtubeId: "cmXLAb-6oeM",
    },
    {
      title: "Pedavi Daatani",
      youtubeId: "rDaT9ykpFU0",
    },
    {
      title: "Nidura Pothuna",
      youtubeId: "kbc_zhP6tzk",
    },
    {
      title: "Yamaho Yama",
      youtubeId: "-GG11neCs_8",
    },
    {
      title: "Srimathi Garu",
      youtubeId: "sTfl_FCMX4g",
    },
    {
      title: "Meesala Pilla",
      youtubeId: "A4anPJkdVTY",
    },
    {
      title: "Kathakaadhey",
      youtubeId: "2k7xkic1aNI",
    },
  ],

  Hard: [
    {
      title: "Palike Gorinka",
      youtubeId: "U0EyR7y-EJM",
    },
    {
      title: "Kanulu Terichina",
      youtubeId: "gOf9Zpt8XYg",
    },
    {
      title: "Chinuku Thadiki",
      youtubeId: "x7vsIXmzjcY",
    },
    {
      title: "Nee Koppulo Na Malle Thota",
      youtubeId: "SfCx1az2PMM",
    },
    {
      title: "Gelupu Thalapule",
      youtubeId: "snrYw_nDvCI",
    },
    {
      title: "Gichi Gichi",
      youtubeId: "umbSwoQ94PM",
    },
    // Same YouTube ID was supplied for both Gichi Gichi and June Pothe.
    {
      title: "June Pothe",
      youtubeId: "umbSwoQ94PM",
    },
    {
      title: "Tella Tellani Cheera",
      youtubeId: "9p73PtEzqHo",
    },
    {
      title: "Sona Sona",
      youtubeId: "z3amrmblYDg",
    },
    {
      title: "Kandhi Chenu Kada",
      youtubeId: "Pg3oIk420eo",
    },
  ],
};

const getMusicQuizPool = (difficulty) => {
  const pool = (weeklyMusicQuizSongs[difficulty] || []).map(
    (song) => ({
      ...song,
    })
  );

  const seen = new Set();

  return pool.filter((song) => {
    const key = `${song.youtubeId}|${song.title}`;

    if (seen.has(key)) {
      return false;
    }

    seen.add(key);
    return true;
  });
};

function shuffleArray(array) {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[j]] = [
      shuffled[j],
      shuffled[i],
    ];
  }

  return shuffled;
}

function App() {
  const [name, setName] = useState(
    localStorage.getItem("oohaName") || ""
  );

  const [entered, setEntered] = useState(
    localStorage.getItem("oohaEntered") === "true"
  );

  const [page, setPage] = useState("home");

  /* =======================================================
     MUSIC MYSTERY QUIZ STATE
     ======================================================= */

  const [musicQuizDifficulty, setMusicQuizDifficulty] =
    useState(null);
  const [musicQuizIndex, setMusicQuizIndex] = useState(0);
  const [musicQuizScore, setMusicQuizScore] = useState(0);
  const [musicQuizCorrect, setMusicQuizCorrect] = useState(0);
  const [musicQuizAttempts, setMusicQuizAttempts] = useState(0);
  const [musicQuizClipLength, setMusicQuizClipLength] =
    useState(1);
  const [musicQuizGuess, setMusicQuizGuess] = useState("");
  const [musicQuizFeedback, setMusicQuizFeedback] =
    useState(null);
  const [musicQuizPlaying, setMusicQuizPlaying] =
    useState(false);
  const [musicQuizFinished, setMusicQuizFinished] =
    useState(false);
  const [musicQuizRound, setMusicQuizRound] = useState([]);
  const [musicQuizBestScore, setMusicQuizBestScore] =
    useState(
      Number(
        localStorage.getItem("oohaMusicQuizBest") || 0
      )
    );

  const musicQuizFrameRef = useRef(null);
  const musicQuizPlayerRef = useRef(null);
  const musicQuizPlayerReady = useRef(false);
  const musicQuizStopTimerRef = useRef(null);

  const [currentStationId, setCurrentStationId] =
    useState(null);

  const [currentSong, setCurrentSong] =
    useState(null);

  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(75);
  const [showVideo, setShowVideo] = useState(false);

  const [shuffle, setShuffle] = useState(false);

  const [listenerCounts, setListenerCounts] = useState({});

  const shuffleHistoryRef = useRef([]);
  const shuffleIndexRef = useRef(-1);

  const radioPresenceRef = useRef(null);
  const presenceKeyRef = useRef(
    `listener-${Date.now()}-${Math.random()
      .toString(36)
      .slice(2)}`
  );
  const liveStationIdRef = useRef(null);
  const livePlayingRef = useRef(false);

  const [streak, setStreak] = useState(
    Number(localStorage.getItem("oohaStreak") || 0)
  );

  const playerRef = useRef(null);
  const playerReady = useRef(false);

  const currentStation = radioStations.find(
    (station) => station.id === currentStationId
  );

  const stationSongs = currentStation
    ? getStationSongs(currentStation)
    : [];

  useEffect(() => {
    liveStationIdRef.current = currentStationId;
    livePlayingRef.current = playing;
  }, [currentStationId, playing]);

  /* =======================================================
     LIVE LISTENERS
     ======================================================= */

  useEffect(() => {
    const channel = supabase.channel(
      "ooha-lokam-live-listeners",
      {
        config: {
          presence: {
            key: presenceKeyRef.current,
          },
        },
      }
    );

    radioPresenceRef.current = channel;

    const updateListenerCounts = () => {
      const presenceState = channel.presenceState();
      const counts = {};

      radioStations.forEach((station) => {
        counts[station.id] = 0;
      });

      Object.values(presenceState).forEach(
        (presences) => {
          presences.forEach((presence) => {
            if (presence.stationId) {
              counts[presence.stationId] =
                (counts[presence.stationId] || 0) + 1;
            }
          });
        }
      );

      setListenerCounts(counts);
    };

    channel
      .on(
        "presence",
        { event: "sync" },
        updateListenerCounts
      )
      .on(
        "presence",
        { event: "join" },
        updateListenerCounts
      )
      .on(
        "presence",
        { event: "leave" },
        updateListenerCounts
      )
      .subscribe((status) => {
        if (status === "SUBSCRIBED") {
          updateListenerCounts();

          if (
            liveStationIdRef.current &&
            livePlayingRef.current
          ) {
            channel.track({
              stationId: liveStationIdRef.current,
              active: true,
            });
          }
        }
      });

    return () => {
      channel.untrack();
      supabase.removeChannel(channel);
      radioPresenceRef.current = null;
    };
  }, []);

  useEffect(() => {
    const channel = radioPresenceRef.current;

    if (!channel) {
      return;
    }

    const updatePresence = async () => {
      try {
        if (
          currentStationId &&
          playing &&
          channel.state === "joined"
        ) {
          await channel.track({
            stationId: currentStationId,
            active: true,
          });
        } else if (channel.state === "joined") {
          await channel.untrack();
        }
      } catch {}
    };

    updatePresence();
  }, [currentStationId, playing]);

  const currentMusicQuizQuestion =
    musicQuizRound[musicQuizIndex];

  useEffect(() => {
    if (
      page !== "quiz" ||
      !currentMusicQuizQuestion?.youtubeId
    ) {
      return;
    }

    let cancelled = false;
    let interval = null;

    const createQuizPlayer = () => {
      if (
        cancelled ||
        !window.YT ||
        !window.YT.Player
      ) {
        return false;
      }

      if (musicQuizPlayerRef.current) {
        try {
          musicQuizPlayerRef.current.loadVideoById(
            currentMusicQuizQuestion.youtubeId
          );
          musicQuizPlayerRef.current.pauseVideo();
          musicQuizPlayerRef.current.seekTo(0, true);
          musicQuizPlayerReady.current = true;
        } catch {}

        return true;
      }

      musicQuizPlayerRef.current =
        new window.YT.Player(
          "music-quiz-youtube-player",
          {
            videoId:
              currentMusicQuizQuestion.youtubeId,
            playerVars: {
              autoplay: 0,
              controls: 0,
              rel: 0,
              modestbranding: 1,
              playsinline: 1,
            },
            events: {
              onReady: (event) => {
                musicQuizPlayerReady.current = true;

                try {
                  event.target.setVolume(volume);
                  event.target.pauseVideo();
                  event.target.seekTo(0, true);
                } catch {}
              },

              onStateChange: (event) => {
                if (!window.YT) return;

                if (
                  event.data ===
                  window.YT.PlayerState.PLAYING
                ) {
                  setMusicQuizPlaying(true);
                }

                if (
                  event.data ===
                    window.YT.PlayerState.PAUSED ||
                  event.data ===
                    window.YT.PlayerState.ENDED
                ) {
                  setMusicQuizPlaying(false);
                }
              },
            },
          }
        );

      return true;
    };

    if (!createQuizPlayer()) {
      interval = setInterval(() => {
        if (
          createQuizPlayer() &&
          interval
        ) {
          clearInterval(interval);
          interval = null;
        }
      }, 100);
    }

    return () => {
      cancelled = true;

      if (interval) {
        clearInterval(interval);
      }

      if (musicQuizStopTimerRef.current) {
        clearTimeout(
          musicQuizStopTimerRef.current
        );
        musicQuizStopTimerRef.current = null;
      }

      if (
        musicQuizPlayerRef.current &&
        musicQuizPlayerReady.current
      ) {
        try {
          musicQuizPlayerRef.current.stopVideo();
        } catch {}
      }

      setMusicQuizPlaying(false);
    };
  }, [page, currentMusicQuizQuestion]);

  useEffect(() => {
    if (
      musicQuizPlayerRef.current &&
      musicQuizPlayerReady.current
    ) {
      try {
        musicQuizPlayerRef.current.setVolume(volume);
      } catch {}
    }
  }, [volume]);

  const getShuffleSong = (playlist, song) => {
    if (playlist.length <= 1) {
      return playlist[0];
    }

    const currentId = song?.youtubeId;

    const availableSongs = playlist.filter(
      (item) => item.youtubeId !== currentId
    );

    return availableSongs[
      Math.floor(
        Math.random() * availableSongs.length
      )
    ];
  };

  /* =======================================================
     YOUTUBE API
     ======================================================= */

  useEffect(() => {
    if (window.YT && window.YT.Player) {
      return;
    }

    if (
      document.getElementById("youtube-api")
    ) {
      return;
    }

    const script = document.createElement("script");

    script.id = "youtube-api";
    script.src =
      "https://www.youtube.com/iframe_api";
    script.async = true;

    document.body.appendChild(script);
  }, []);

  /* =======================================================
     YOUTUBE PLAYER
     ======================================================= */

  useEffect(() => {
    if (!currentSong?.youtubeId) {
      return;
    }

    const createPlayer = () => {
      if (!window.YT || !window.YT.Player) {
        return;
      }

      if (playerRef.current) {
        try {
          playerRef.current.loadVideoById(
            currentSong.youtubeId
          );

          playerRef.current.setVolume(volume);
          playerRef.current.playVideo();

          playerReady.current = true;
        } catch {}

        return;
      }

      playerRef.current =
        new window.YT.Player(
          "persistent-youtube-player",
          {
            videoId: currentSong.youtubeId,

            playerVars: {
              autoplay: 1,
              controls: 0,
              rel: 0,
              modestbranding: 1,
              playsinline: 1,
            },

            events: {
              onReady: (event) => {
                playerReady.current = true;

                event.target.setVolume(volume);
                event.target.playVideo();

                const d =
                  event.target.getDuration();

                if (d) {
                  setDuration(d);
                }
              },

              onStateChange: (event) => {
                if (!window.YT) {
                  return;
                }

                if (
                  event.data ===
                  window.YT.PlayerState.PLAYING
                ) {
                  setPlaying(true);
                  updateListeningStreak();
                }

                if (
                  event.data ===
                  window.YT.PlayerState.PAUSED
                ) {
                  setPlaying(false);
                }

                if (
                  event.data ===
                  window.YT.PlayerState.ENDED
                ) {
                  playNextInStation();
                }
              },
            },
          }
        );
    };

    if (
      window.YT &&
      window.YT.Player
    ) {
      createPlayer();
    } else {
      window.onYouTubeIframeAPIReady =
        createPlayer;
    }
  }, [currentSong]);

  /* =======================================================
     PLAYER TIME
     ======================================================= */

  useEffect(() => {
    if (!currentSong) {
      return;
    }

    const timer = setInterval(() => {
      if (
        playerRef.current &&
        playerReady.current
      ) {
        try {
          const time =
            playerRef.current.getCurrentTime();

          const d =
            playerRef.current.getDuration();

          if (Number.isFinite(time)) {
            setCurrentTime(time);
          }

          if (
            Number.isFinite(d) &&
            d > 0
          ) {
            setDuration(d);
          }
        } catch {}
      }
    }, 500);

    return () => clearInterval(timer);
  }, [currentSong]);

  /* =======================================================
     STREAK
     ======================================================= */

  const updateListeningStreak = () => {
    const today = getToday();

    const previous =
      localStorage.getItem(
        "oohaLastListening"
      );

    if (previous === today) {
      return;
    }

    let newStreak = 1;

    if (previous) {
      const difference = Math.round(
        (new Date(today) -
          new Date(previous)) /
          (1000 * 60 * 60 * 24)
      );

      if (difference === 1) {
        newStreak =
          Number(
            localStorage.getItem(
              "oohaStreak"
            ) || 0
          ) + 1;
      }
    }

    localStorage.setItem(
      "oohaStreak",
      String(newStreak)
    );

    localStorage.setItem(
      "oohaLastListening",
      today
    );

    setStreak(newStreak);
  };

  /* =======================================================
     TUNE STATION
     ======================================================= */

  const tuneStation = (station) => {
    setCurrentStationId(station.id);

    shuffleHistoryRef.current = [];
    shuffleIndexRef.current = -1;

    setShowVideo(false);
    setCurrentTime(0);
    setDuration(0);

    const playlist =
      getStationSongs(station);

    if (playlist.length === 0) {
      setCurrentSong(null);
      setPlaying(false);

      if (playerRef.current) {
        try {
          playerRef.current.stopVideo();
        } catch {}
      }

      return;
    }

    const firstSong = shuffle
      ? getShuffleSong(
          playlist,
          null
        )
      : playlist[0];

    shuffleHistoryRef.current =
      firstSong
        ? [firstSong]
        : [];

    shuffleIndexRef.current =
      firstSong ? 0 : -1;

    setCurrentSong(firstSong);
  };

  /* =======================================================
     NEXT SONG
     ======================================================= */

  const playNextInStation = () => {
    if (
      !currentStation ||
      stationSongs.length === 0
    ) {
      return;
    }

    if (shuffle) {
      if (
        shuffleIndexRef.current <
        shuffleHistoryRef.current.length - 1
      ) {
        shuffleIndexRef.current += 1;

        const nextSong =
          shuffleHistoryRef.current[
            shuffleIndexRef.current
          ];

        setCurrentTime(0);
        setDuration(0);
        setCurrentSong(nextSong);

        return;
      }

      const nextSong =
        getShuffleSong(
          stationSongs,
          currentSong
        );

      if (!nextSong) {
        return;
      }

      shuffleHistoryRef.current.push(
        nextSong
      );

      shuffleIndexRef.current =
        shuffleHistoryRef.current.length - 1;

      setCurrentTime(0);
      setDuration(0);
      setCurrentSong(nextSong);

      return;
    }

    let index =
      stationSongs.findIndex(
        (song) =>
          song.title ===
            currentSong?.title &&
          song.movie ===
            currentSong?.movie
      );

    index =
      index === -1
        ? 0
        : index + 1;

    if (index >= stationSongs.length) {
      index = 0;
    }

    setCurrentTime(0);
    setDuration(0);
    setCurrentSong(
      stationSongs[index]
    );
  };

  /* =======================================================
     PREVIOUS SONG
     ======================================================= */

  const playPreviousInStation = () => {
    if (
      !currentStation ||
      stationSongs.length === 0
    ) {
      return;
    }

    if (shuffle) {
      if (
        shuffleIndexRef.current <= 0
      ) {
        return;
      }

      shuffleIndexRef.current -= 1;

      const previousSong =
        shuffleHistoryRef.current[
          shuffleIndexRef.current
        ];

      setCurrentTime(0);
      setDuration(0);
      setCurrentSong(previousSong);

      return;
    }

    let index =
      stationSongs.findIndex(
        (song) =>
          song.title ===
            currentSong?.title &&
          song.movie ===
            currentSong?.movie
      );

    index =
      index === -1
        ? 0
        : index - 1;

    if (index < 0) {
      index =
        stationSongs.length - 1;
    }

    setCurrentTime(0);
    setDuration(0);
    setCurrentSong(
      stationSongs[index]
    );
  };

  /* =======================================================
     SHUFFLE
     ======================================================= */

  const toggleShuffle = () => {
    setShuffle((prev) => {
      const next = !prev;

      if (next) {
        if (currentSong) {
          shuffleHistoryRef.current = [
            currentSong,
          ];

          shuffleIndexRef.current = 0;
        } else {
          shuffleHistoryRef.current = [];
          shuffleIndexRef.current = -1;
        }
      } else {
        shuffleHistoryRef.current = [];
        shuffleIndexRef.current = -1;
      }

      return next;
    });
  };

  /* =======================================================
     PLAY / PAUSE
     ======================================================= */

  const togglePlay = () => {
    if (
      !playerRef.current ||
      !playerReady.current
    ) {
      return;
    }

    try {
      if (playing) {
        playerRef.current.pauseVideo();
      } else {
        playerRef.current.playVideo();
      }
    } catch {}
  };

  /* =======================================================
     SEEK
     ======================================================= */

  const seekSong = (event) => {
    const value =
      Number(event.target.value);

    setCurrentTime(value);

    if (
      playerRef.current &&
      playerReady.current
    ) {
      try {
        playerRef.current.seekTo(
          value,
          true
        );
      } catch {}
    }
  };

  /* =======================================================
     VOLUME
     ======================================================= */

  const changeVolume = (event) => {
    const value =
      Number(event.target.value);

    setVolume(value);

    if (
      playerRef.current &&
      playerReady.current
    ) {
      try {
        playerRef.current.setVolume(
          value
        );
      } catch {}
    }
  };

  /* =======================================================
     POWER OFF
     ======================================================= */

  const powerOff = () => {
    if (playerRef.current) {
      try {
        playerRef.current.stopVideo();
      } catch {}
    }

    setCurrentSong(null);
    setCurrentStationId(null);
    setPlaying(false);
    setCurrentTime(0);
    setDuration(0);
    setShowVideo(false);
  };

  /* =======================================================
     ENTER ARCHIVE
     ======================================================= */

  const enterArchive = () => {
    if (!name.trim()) {
      alert("Please enter your name.");
      return;
    }

    localStorage.setItem(
      "oohaName",
      name.trim()
    );

    localStorage.setItem(
      "oohaEntered",
      "true"
    );

    setEntered(true);
  };

  /* =======================================================
     MUSIC MYSTERY QUIZ FUNCTIONS
     ======================================================= */

  const resetMusicQuiz = () => {
    setMusicQuizDifficulty(null);
    setMusicQuizIndex(0);
    setMusicQuizScore(0);
    setMusicQuizCorrect(0);
    setMusicQuizAttempts(0);
    setMusicQuizClipLength(1);
    setMusicQuizGuess("");
    setMusicQuizFeedback(null);
    setMusicQuizPlaying(false);
    setMusicQuizFinished(false);
    setMusicQuizRound([]);
  };

  const startMusicQuiz = (difficulty) => {
    const pool =
      getMusicQuizPool(difficulty);

    if (pool.length === 0) {
      return;
    }

    const shuffled =
      shuffleArray(pool);

    const selected =
      shuffled.slice(
        0,
        Math.min(5, shuffled.length)
      );

    setMusicQuizDifficulty(difficulty);
    setMusicQuizRound(selected);
    setMusicQuizIndex(0);
    setMusicQuizScore(0);
    setMusicQuizCorrect(0);
    setMusicQuizAttempts(0);
    setMusicQuizClipLength(1);
    setMusicQuizGuess("");
    setMusicQuizFeedback(null);
    setMusicQuizPlaying(false);
    setMusicQuizFinished(false);
  };

  const playMusicQuizClip = () => {
    if (
      !currentMusicQuizQuestion?.youtubeId
    ) {
      return;
    }

    const player =
      musicQuizPlayerRef.current;

    if (
      !player ||
      !musicQuizPlayerReady.current
    ) {
      return;
    }

    try {
      if (
        musicQuizStopTimerRef.current
      ) {
        clearTimeout(
          musicQuizStopTimerRef.current
        );
      }

      player.seekTo(0, true);
      player.playVideo();
      setMusicQuizPlaying(true);

      musicQuizStopTimerRef.current =
        setTimeout(() => {
          try {
            player.pauseVideo();
            player.seekTo(0, true);
          } catch {}

          setMusicQuizPlaying(false);
        }, musicQuizClipLength * 1000);
    } catch {}
  };

  const stopMusicQuizClip = () => {
    if (
      musicQuizStopTimerRef.current
    ) {
      clearTimeout(
        musicQuizStopTimerRef.current
      );

      musicQuizStopTimerRef.current =
        null;
    }

    const player =
      musicQuizPlayerRef.current;

    if (
      player &&
      musicQuizPlayerReady.current
    ) {
      try {
        player.pauseVideo();
        player.seekTo(0, true);
      } catch {}
    }

    setMusicQuizPlaying(false);
  };

  const skipMusicQuizClip = () => {
    stopMusicQuizClip();

    const nextLength = Math.min(
      musicQuizClipLength * 2,
      musicQuizDifficulties[
        musicQuizDifficulty
      ]?.maxClip || 16
    );

    setMusicQuizClipLength(
      nextLength
    );

    setMusicQuizPlaying(false);
  };

  const submitMusicQuizGuess = (
    value = musicQuizGuess
  ) => {
    const questionLocked =
      musicQuizFeedback?.type ===
        "correct" ||
      musicQuizFeedback?.type ===
        "wrong";

    if (
      !currentMusicQuizQuestion ||
      questionLocked
    ) {
      return;
    }

    const normalizeGuess = (text) =>
      String(text || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(
          /[\u0300-\u036f]/g,
          ""
        )
        .replace(
          /[^a-z0-9]+/g,
          " "
        )
        .trim()
        .replace(
          /\s+/g,
          " "
        );

    const guess =
      normalizeGuess(value);

    if (!guess) {
      return;
    }

    const answer =
      normalizeGuess(
        currentMusicQuizQuestion.title
      );

    const englishTitle =
      normalizeGuess(
        currentMusicQuizQuestion
          .englishTitle || ""
      );

    const correct =
      guess === answer ||
      (englishTitle &&
        guess === englishTitle);

    const nextAttempts =
      musicQuizAttempts + 1;

    setMusicQuizAttempts(
      nextAttempts
    );

    setMusicQuizPlaying(false);

    if (correct) {
      const pointsByClip = {
        1: 100,
        2: 80,
        4: 60,
        8: 40,
        16: 20,
      };

      const attemptBonus =
        Math.max(
          0,
          20 -
            (nextAttempts - 1) * 5
        );

      const points =
        (pointsByClip[
          musicQuizClipLength
        ] || 20) +
        attemptBonus;

      setMusicQuizCorrect(
        (previous) =>
          previous + 1
      );

      setMusicQuizScore(
        (previous) =>
          previous + points
      );

      setMusicQuizFeedback({
        type: "correct",
        points,
        message:
          nextAttempts === 1
            ? "Locked it before the radio could breathe."
            : "You found the melody. Nice recovery.",
      });

      return;
    }

    if (nextAttempts >= 5) {
      setMusicQuizFeedback({
        type: "wrong",
        message:
          "Five guesses. The melody wins this round.",
      });

      return;
    }

    setMusicQuizFeedback({
      type: "retry",
      message: `Not that one. ${
        5 - nextAttempts
      } guesses left.`,
    });

    setMusicQuizGuess("");
  };

  const nextMusicQuizQuestion = () => {
    if (!musicQuizFeedback) {
      return;
    }

    if (
      musicQuizIndex >=
      musicQuizRound.length - 1
    ) {
      const finalScore =
        musicQuizScore;

      setMusicQuizBestScore(
        (previous) => {
          const nextBest =
            Math.max(
              previous,
              finalScore
            );

          localStorage.setItem(
            "oohaMusicQuizBest",
            String(nextBest)
          );

          return nextBest;
        }
      );

      setMusicQuizFinished(true);
      setMusicQuizPlaying(false);

      return;
    }

    setMusicQuizIndex(
      (previous) =>
        previous + 1
    );

    setMusicQuizAttempts(0);
    setMusicQuizClipLength(1);
    setMusicQuizGuess("");
    setMusicQuizFeedback(null);
    setMusicQuizPlaying(false);
  };

  const getMusicQuizTitle = () => {
    if (musicQuizScore >= 500)
      return "RADIO ORACLE";

    if (musicQuizScore >= 400)
      return "MELODY MASTER";

    if (musicQuizScore >= 300)
      return "ARCHIVE HUNTER";

    if (musicQuizScore >= 200)
      return "TUNING PRO";

    if (musicQuizScore >= 100)
      return "SONG SCOUT";

    return "STILL TUNING";
  };

  /* =======================================================
     ENTRANCE
     ======================================================= */

  if (!entered) {
    return (
      <main className="entrance">
        <div className="entrance-content">
          <p className="eyebrow">
            A TELUGU CINEMA & MUSIC ARCHIVE
          </p>

          <h1>ఊహా లోకం</h1>

          <h2>OOHA LOKAM</h2>

          <div className="divider">
            <span>✦</span>
          </div>

          <p className="tagline">
            Dive Into a World of Songs,
            Stories & Memories
          </p>

          <div className="name-box">
            <label htmlFor="name">
              ENTER YOUR NAME
            </label>

            <input
              id="name"
              type="text"
              placeholder="Your name..."
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  enterArchive();
                }
              }}
            />

            <button
              onClick={enterArchive}
            >
              ENTER THE ARCHIVE
            </button>
          </div>

          <p className="footer-text">
            Songs • Cinema • Memories
          </p>
        </div>
      </main>
    );
  }

  /* =======================================================
     MAIN APP
     ======================================================= */

  return (
    <main className="app">
      <div className="persistent-youtube-container">
        <div id="persistent-youtube-player"></div>
      </div>

      {/* ===================================================
          HOME
         =================================================== */}

      {page === "home" && (
        <main className="home-page">
          <header className="home-header">
            <div>
              <p className="small-title">
                TELUGU CINEMA & MUSIC ARCHIVE
              </p>

              <h1>ఊహా లోకం</h1>
            </div>

            <div className="header-user-area">
              <div className="user-name">
                Welcome,{" "}
                <strong>{name}</strong>
              </div>
            </div>
          </header>

          <section className="hero">
            <p className="hero-label">
              WELCOME TO THE ARCHIVE
            </p>

            <h2>
              Where Every Song
              <br />
              Has a Memory.
            </h2>

            <p>
              Tune into timeless Telugu melodies,
              discover cinema memories and keep
              your listening streak alive.
            </p>
          </section>

          <section className="archive-grid">
            <div className="archive-card">
              <span>📻</span>

              <h3>MUSIC RADIO</h3>

              <p>
                Five stations • 1960s to today
              </p>

              <button
                onClick={() =>
                  setPage("music")
                }
              >
                TUNE INTO RADIO
              </button>
            </div>

            <div className="archive-card">
              <span>♫</span>

              <h3>MUSIC MYSTERY</h3>

              <p>
                Guess songs • Chase melodies • Score points
              </p>

              <button
                onClick={() => {
                  resetMusicQuiz();
                  setPage("quiz");
                }}
              >
                PLAY QUIZ
              </button>
            </div>

            <div className="archive-card">
              <span>🏆</span>

              <h3>REWARDS</h3>

              <p>
                Points • Streaks • Daily Rewards
              </p>

              <button
                onClick={() =>
                  setPage("rewards")
                }
              >
                VIEW REWARDS
              </button>
            </div>
          </section>

          <footer>
            <p>ఊహా లోకం</p>

            <span>
              Songs • Cinema • Memories
            </span>
          </footer>
        </main>
      )}

      {/* ===================================================
          VINTAGE RADIO
         =================================================== */}

      {page === "music" && (
        <main className="radio-page">
          <button
            className="back-button"
            onClick={() =>
              setPage("home")
            }
          >
            ← BACK TO ఊహా లోకం
          </button>

          <section className="radio-heading">
            <p>OOHA LOKAM BROADCAST</p>

            <h1>
              📻 ఊహా లోకం రేడియో
            </h1>

            <span>
              Tune in. Close your eyes.
              Let the memories play.
            </span>
          </section>

          <section className="vintage-radio">
            <div className="radio-brand">
              <div>OOHA LOKAM</div>

              <span>
                TELUGU CINEMA RADIO
              </span>
            </div>

            <div className="radio-main">
              <div className="radio-tuning">
                <div className="dial-label">
                  FM / MEMORY
                </div>

                <div className="frequency-dial">
                  <div className="frequency-numbers">
                    <span>88</span>
                    <span>92</span>
                    <span>96</span>
                    <span>100</span>
                    <span>104</span>
                  </div>

                  <div className="dial-line">
                    <div
                      className="dial-pointer"
                      style={{
                        left: currentStation
                          ? `${
                              radioStations.indexOf(
                                currentStation
                              ) * 25
                            }%`
                          : "50%",
                      }}
                    />
                  </div>

                  <div className="dial-glow">
                    {currentStation
                      ? currentStation.frequency
                      : "----"}
                  </div>
                </div>

                <div className="station-display">
                  <small>
                    {currentStation
                      ? "NOW TUNED"
                      : "SELECT A STATION"}
                  </small>

                  <strong>
                    {currentStation
                      ? currentStation.name
                      : "ఊహా లోకం"}
                  </strong>

                  <span>
                    {currentStation
                      ? currentStation.era
                      : "TELUGU CINEMA RADIO"}
                  </span>
                </div>

                <div className="radio-status">
                  <span
                    className={
                      playing
                        ? "status-light on"
                        : "status-light"
                    }
                  />

                  {playing
                    ? "BROADCASTING"
                    : currentStation
                    ? "STATION READY"
                    : "RADIO READY"}
                </div>
              </div>

              <div className="speaker-panel">
                <div className="speaker-label">
                  <span>
                    {currentSong
                      ? "NOW PLAYING"
                      : "OOHA LOKAM"}
                  </span>

                  <strong>
                    {currentSong
                      ? currentSong.title
                      : "Tune into a station"}
                  </strong>

                  <small>
                    {currentSong
                      ? `${currentSong.movie || ""}${
                          currentSong.movie &&
                          currentSong.year
                            ? " • "
                            : ""
                        }${
                          currentSong.year || ""
                        }`
                      : "Five stations • endless memories"}
                  </small>
                </div>

                <div className="speaker-grille">
                  {Array.from({
                    length: 11,
                  }).map((_, index) => (
                    <div
                      key={index}
                      className="speaker-line"
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="radio-controls">
              <button
                className="radio-knob-button"
                onClick={
                  playPreviousInStation
                }
                disabled={
                  !stationSongs.length
                }
              >
                <span>◀</span>
                <small>PREV</small>
              </button>

              <button
                className={
                  shuffle
                    ? "radio-shuffle-button active"
                    : "radio-shuffle-button"
                }
                onClick={toggleShuffle}
                disabled={
                  !stationSongs.length
                }
              >
                <span>⤨</span>

                <small>
                  {shuffle
                    ? "ON"
                    : "SHUFFLE"}
                </small>
              </button>

              <button
                className="radio-play-button"
                onClick={togglePlay}
                disabled={!currentSong}
              >
                {playing
                  ? "❚❚"
                  : "▶"}
              </button>

              <button
                className="radio-knob-button"
                onClick={
                  playNextInStation
                }
                disabled={
                  !stationSongs.length
                }
              >
                <span>▶</span>
                <small>NEXT</small>
              </button>

              <div className="radio-volume">
                <span>VOL</span>

                <input
                  type="range"
                  min="0"
                  max="100"
                  value={volume}
                  onChange={changeVolume}
                />
              </div>
            </div>

            {currentSong && (
              <div className="radio-progress">
                <span>
                  {formatTime(
                    currentTime
                  )}
                </span>

                <input
                  type="range"
                  min="0"
                  max={
                    duration || 100
                  }
                  step="1"
                  value={Math.min(
                    currentTime,
                    duration || 100
                  )}
                  onChange={seekSong}
                  disabled={!duration}
                />

                <span>
                  {formatTime(duration)}
                </span>
              </div>
            )}

            <div className="station-section">
              <div className="station-section-title">
                <span>
                  RADIO PRESETS
                </span>

                <small>
                  SELECT YOUR ERA
                </small>
              </div>

              <div className="station-presets">
                {radioStations.map(
                  (station, index) => {
                    const playable =
                      getStationSongs(
                        station
                      ).length > 0;

                    return (
                      <button
                        key={station.id}
                        className={
                          currentStationId ===
                          station.id
                            ? "station-preset active"
                            : "station-preset"
                        }
                        onClick={() =>
                          tuneStation(
                            station
                          )
                        }
                      >
                        <div className="preset-number">
                          0{index + 1}
                        </div>

                        <div className="preset-info">
                          <strong>
                            {station.name}
                          </strong>

                          <span>
                            {station.english}
                          </span>

                          <small>
                            {station.era}
                          </small>

                          <small
                            style={{
                              display: "block",
                              marginTop: "4px",
                              color:
                                currentStationId ===
                                  station.id &&
                                playing
                                  ? "#ffb84d"
                                  : "#8a6b4d",
                              fontSize: "9px",
                              fontWeight: "bold",
                              letterSpacing: "0.8px",
                            }}
                          >
                            ● LIVE{" "}
                            {listenerCounts[
                              station.id
                            ] || 0}
                          </small>
                        </div>

                        <div className="preset-frequency">
                          {station.frequency}
                        </div>

                        <div className="preset-light">
                          {currentStationId ===
                          station.id
                            ? "●"
                            : playable
                            ? "○"
                            : "—"}
                        </div>
                      </button>
                    );
                  }
                )}
              </div>
            </div>

            {currentStation && (
              <div className="broadcast-info">
                <div>
                  <span>
                    CURRENT STATION
                  </span>

                  <strong>
                    {currentStation.name}
                  </strong>
                </div>

                <div>
                  <span>
                    BROADCAST ERA
                  </span>

                  <strong>
                    {currentStation.era}
                  </strong>
                </div>

                <div>
                  <span>PLAYLIST</span>

                  <strong>
                    {stationSongs.length
                      ? `${stationSongs.length} melodies`
                      : "COMING SOON"}
                  </strong>
                </div>

                <div>
                  <span>
                    LIVE LISTENERS
                  </span>

                  <strong>
                    ●{" "}
                    {listenerCounts[
                      currentStation.id
                    ] || 0}
                  </strong>
                </div>
              </div>
            )}

            {!currentStation && (
              <div className="radio-welcome">
                <div>✦</div>

                <h2>
                  Choose your station
                </h2>

                <p>
                  Five eras. One radio.
                  Countless memories.
                </p>
              </div>
            )}

            {currentStation &&
              stationSongs.length === 0 && (
                <div className="radio-welcome">
                  <div>♫</div>

                  <h2>
                    More melodies coming soon
                  </h2>

                  <p>
                    This station is ready.
                    We're waiting for its songs.
                  </p>
                </div>
              )}

            {currentSong && (
              <div className="radio-extra">
                <button
                  className="radio-video-button"
                  onClick={() =>
                    setShowVideo(
                      !showVideo
                    )
                  }
                >
                  {showVideo
                    ? "▲ HIDE VIDEO"
                    : "📺 WATCH VIDEO"}
                </button>

                <button
                  className="radio-power-button"
                  onClick={powerOff}
                >
                  ⏻ POWER OFF
                </button>
              </div>
            )}

            {showVideo &&
              currentSong?.youtubeId && (
                <div className="radio-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${currentSong.youtubeId}?rel=0`}
                    title={
                      currentSong.title
                    }
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              )}

            <div className="radio-bottom">
              <span>
                ◉ ANALOG MEMORY BROADCAST
              </span>

              <span>
                SONG • CINEMA • MEMORY
              </span>
            </div>
          </section>
        </main>
      )}

      {/* ===================================================
          REWARDS
         =================================================== */}

      {page === "rewards" && (
        <main className="rewards-page">
          <button
            className="back-button"
            onClick={() =>
              setPage("home")
            }
          >
            ← BACK TO ఊహా లోకం
          </button>

          <section className="rewards-header">
            <p>OOHA LOKAM HONOURS</p>

            <h1>
              ✦ Your Cinema Rewards ✦
            </h1>

            <span>
              For those who listened, guessed,
              and somehow survived.
            </span>
          </section>

          <section className="reward-stats">
            <div className="reward-stat">
              <span>STREAK</span>
              <strong>{streak}</strong>

              <small>
                DAY
                {streak === 1 ? "" : "S"} ON AIR
              </small>
            </div>

            <div className="reward-stat">
              <span>RADIO</span>
              <strong>5</strong>
              <small>STATIONS</small>
            </div>

            <div className="reward-stat">
              <span>SCORE</span>
              <strong>
                {streak * 10}
              </strong>
              <small>
                ARCHIVE POINTS
              </small>
            </div>
          </section>

          <section className="daily-streak-card">
            <div className="streak-icon">
              {streak >= 7 ? "✦" : "◉"}
            </div>

            <div className="streak-content">
              <p>
                DAILY LISTENING STREAK
              </p>

              <h2>
                {streak === 0
                  ? "The radio is waiting for you."
                  : streak === 1
                  ? "Day one. The archive knows you now."
                  : streak < 7
                  ? `${streak} days strong. Don't break the transmission.`
                  : `${streak} days. At this point, you practically live here.`}
              </h2>

              <span>
                Listen every day, keep the streak alive,
                and collect your ridiculous little honours.
              </span>

              <div className="streak-days">
                {[
                  1,
                  2,
                  3,
                  4,
                  5,
                  6,
                  7,
                ].map((day) => (
                  <div
                    key={day}
                    className={
                      streak >= day
                        ? "streak-day completed"
                        : "streak-day"
                    }
                  >
                    <span>
                      {streak >= day
                        ? "✓"
                        : day}
                    </span>

                    <small>DAY</small>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="rewards-list">
            <div className="rewards-section-heading">
              <p>
                THE OOHA LOKAM HONOURS
              </p>

              <h2>
                Milestones &amp; Nonsense
              </h2>

              <span>
                Some achievements are prestigious.
                Some are just here for the drama.
              </span>
            </div>

            <div className="milestone-grid">
              {[
                [
                  "01",
                  "First Melody",
                  "Listen to your first song",
                  1,
                  "The radio has officially met you.",
                ],
                [
                  "02",
                  "Radio Tourist",
                  "Reach a 3 day streak",
                  3,
                  "You came for one song. We both know that's a lie.",
                ],
                [
                  "03",
                  "Interval Specialist",
                  "Reach a 7 day streak",
                  7,
                  "Seven days without leaving the archive. Respect.",
                ],
                [
                  "04",
                  "Cinema Addict",
                  "Reach a 14 day streak",
                  14,
                  "At this point, your playlist needs medical attention.",
                ],
                [
                  "05",
                  "Archive Regular",
                  "Reach a 21 day streak",
                  21,
                  "The receptionist probably knows your name now.",
                ],
                [
                  "06",
                  "Cinema Nerd",
                  "Reach a 30 day streak",
                  30,
                  "Congratulations. Normal people stopped asking questions weeks ago.",
                ],
                [
                  "07",
                  "Vintage Soul",
                  "Reach a 50 day streak",
                  50,
                  "Your soul now has permanent radio static.",
                ],
                [
                  "08",
                  "ఊహా లోకం Legend",
                  "Reach a 100 day streak",
                  100,
                  "The archive doesn't have a higher rank. You broke the scale.",
                ],
              ].map((item) => (
                <div
                  key={item[1]}
                  className={
                    streak >= item[3]
                      ? "milestone unlocked"
                      : "milestone"
                  }
                >
                  <div className="milestone-top">
                    <span>{item[0]}</span>

                    <strong>
                      {streak >= item[3]
                        ? "UNLOCKED"
                        : "LOCKED"}
                    </strong>
                  </div>

                  <div className="milestone-seal">
                    {streak >= item[3]
                      ? "✦"
                      : "○"}
                  </div>

                  <h3>{item[1]}</h3>

                  <p>{item[2]}</p>

                  <small>
                    {streak >= item[3]
                      ? item[4]
                      : `Unlock at ${item[3]} day${
                          item[3] === 1
                            ? ""
                            : "s"
                        }`}
                  </small>
                </div>
              ))}
            </div>
          </section>

          <section className="rewards-quote-card">
            <span>“</span>

            <p>
              Rewards are imaginary.
              <br />
              The bragging rights are real.
            </p>

            <small>
              — OOHA LOKAM ARCHIVE DEPARTMENT
            </small>
          </section>

          <section className="rewards-note">
            <span>✦</span>

            <p>
              Your progress is saved on this device automatically.
            </p>
          </section>
        </main>
      )}

      {/* ===================================================
          MUSIC MYSTERY QUIZ
         =================================================== */}

      {page === "quiz" && (
        <main
          className="music-mystery-page"
          style={{
            minHeight: "100vh",
            padding: "28px 18px 90px",
            background:
              "radial-gradient(circle at top, rgba(255,184,77,0.10), transparent 38%), linear-gradient(180deg, #211209 0%, #120a06 100%)",
            color: "#f4e6c7",
          }}
        >
          <button
            className="back-button"
            onClick={() => {
              resetMusicQuiz();
              setPage("home");
            }}
          >
            ← BACK TO ఊహా లోకం
          </button>

          {!musicQuizDifficulty && (
            <section
              style={{
                maxWidth: "1050px",
                margin: "25px auto 0",
              }}
            >
              <div
                style={{
                  border: "2px solid #8a5b2d",
                  background:
                    "linear-gradient(145deg, rgba(90,48,25,0.96), rgba(43,22,12,0.98))",
                  padding: "28px",
                  boxShadow:
                    "0 15px 40px rgba(0,0,0,0.45)",
                }}
              >
                <p
                  className="small-title"
                  style={{
                    color: "#c69750",
                  }}
                >
                  OOHA LOKAM MUSIC ARCHIVE
                </p>

                <h1
                  style={{
                    margin: "8px 0 4px",
                    fontFamily:
                      "Georgia, serif",
                    fontSize:
                      "clamp(32px, 6vw, 62px)",
                    color: "#f5dfb0",
                  }}
                >
                  MUSIC MYSTERY
                </h1>

                <p
                  style={{
                    maxWidth: "700px",
                    color: "#c9af86",
                    fontSize: "16px",
                    lineHeight: 1.7,
                  }}
                >
                  Tune into a mystery melody.
                  Listen carefully and identify
                  the song before your chances run
                  out, trust your ears and lock your
                  guess. Five transmissions. One score.
                </p>

                <div
                  style={{
                    marginTop: "25px",
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fit, minmax(150px, 1fr))",
                    gap: "10px",
                  }}
                >
                  {Object.entries(
                    musicQuizDifficulties
                  ).map(
                    ([
                      difficulty,
                      config,
                    ]) => {
                      const availableSongs =
                        getMusicQuizPool(
                          difficulty
                        ).length > 0;

                      return (
                        <button
                          key={difficulty}
                          onClick={() =>
                            startMusicQuiz(
                              difficulty
                            )
                          }
                          disabled={
                            !availableSongs
                          }
                          style={{
                            padding:
                              "17px 14px",
                            border:
                              "1px solid #8a5b2d",
                            background:
                              availableSongs
                                ? "#281308"
                                : "#1d0d06",
                            color:
                              availableSongs
                                ? "#f4e6c7"
                                : "#765b3f",
                            cursor:
                              availableSongs
                                ? "pointer"
                                : "not-allowed",
                            opacity:
                              availableSongs
                                ? 1
                                : 0.65,
                            textAlign:
                              "left",
                            transition:
                              "transform 0.2s ease, border-color 0.2s ease",
                          }}
                        >
                          <strong
                            style={{
                              display:
                                "block",
                              color:
                                "#ffb84d",
                              letterSpacing:
                                "1px",
                              fontSize:
                                "13px",
                            }}
                          >
                            {difficulty.toUpperCase()}
                          </strong>

                          <span
                            style={{
                              display:
                                "block",
                              marginTop:
                                "7px",
                              color:
                                "#d8c29d",
                              fontSize:
                                "11px",
                              lineHeight:
                                1.4,
                            }}
                          >
                            {
                              config.description
                            }
                          </span>
                        </button>
                      );
                    }
                  )}
                </div>

                <div
                  style={{
                    marginTop: "24px",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "16px",
                    color: "#a88d69",
                    fontSize: "12px",
                    letterSpacing:
                      "0.5px",
                  }}
                >
                  <span>
                    5 TRANSMISSIONS
                  </span>

                  <span>
                    5 GUESSES MAX
                  </span>

                  <span>
                    1s → 2s → 4s → 8s → 16s
                  </span>

                  <span>
                    BEST:{" "}
                    {musicQuizBestScore}
                  </span>
                </div>
              </div>
            </section>
          )}

          {musicQuizDifficulty &&
            !musicQuizFinished &&
            currentMusicQuizQuestion && (
              <section
                style={{
                  maxWidth: "950px",
                  margin: "22px auto 0",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent:
                      "space-between",
                    alignItems: "end",
                    gap: "15px",
                    flexWrap: "wrap",
                    marginBottom:
                      "14px",
                  }}
                >
                  <div>
                    <p
                      className="small-title"
                      style={{
                        color: "#b8893c",
                      }}
                    >
                      {
                        musicQuizDifficulties[
                          musicQuizDifficulty
                        ].label
                      }
                    </p>

                    <h2
                      style={{
                        margin:
                          "4px 0",
                        fontFamily:
                          "Georgia, serif",
                        fontSize:
                          "clamp(28px, 5vw, 46px)",
                        color:
                          "#f4e6c7",
                      }}
                    >
                      TRANSMISSION{" "}
                      {String(
                        musicQuizIndex +
                          1
                      ).padStart(
                        2,
                        "0"
                      )}
                    </h2>
                  </div>

                  <div
                    style={{
                      textAlign:
                        "right",
                      color:
                        "#b99d78",
                      fontSize:
                        "12px",
                    }}
                  >
                    <div>
                      DIFFICULTY:{" "}
                      {musicQuizDifficulty.toUpperCase()}
                    </div>

                    <div>
                      POINTS:{" "}
                      {musicQuizScore}
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "5px",
                    marginBottom:
                      "18px",
                  }}
                >
                  {musicQuizRound.map(
                    (_, index) => (
                      <div
                        key={index}
                        style={{
                          flex: 1,
                          height: "7px",
                          background:
                            index <
                            musicQuizIndex
                              ? "#b8893c"
                              : index ===
                                musicQuizIndex
                              ? "#ffb84d"
                              : "#382417",
                        }}
                      />
                    )
                  )}
                </div>

                <div
                  style={{
                    border:
                      "2px solid #68402a",
                    background:
                      "#160d08",
                    padding: "18px",
                    boxShadow:
                      "0 18px 40px rgba(0,0,0,0.35)",
                  }}
                >
                  <div
                    style={{
                      minHeight:
                        "250px",
                      display:
                        "flex",
                      flexDirection:
                        "column",
                      justifyContent:
                        "center",
                      alignItems:
                        "center",
                      textAlign:
                        "center",
                      border:
                        "1px solid #3c2819",
                      background:
                        "radial-gradient(circle, rgba(255,184,77,0.08), transparent 52%), #211209",
                      position:
                        "relative",
                      overflow:
                        "hidden",
                    }}
                  >
                    <div
                      style={{
                        fontSize:
                          "70px",
                        color:
                          musicQuizPlaying
                            ? "#ffb84d"
                            : "#765b3f",
                        textShadow:
                          musicQuizPlaying
                            ? "0 0 24px rgba(255,184,77,0.55)"
                            : "none",
                        transition:
                          "all 0.2s ease",
                      }}
                    >
                      {musicQuizPlaying
                        ? "◖)))"
                        : "♫"}
                    </div>

                    <strong
                      style={{
                        marginTop:
                          "8px",
                        letterSpacing:
                          "2px",
                        color:
                          "#d8c29d",
                        fontSize:
                          "12px",
                      }}
                    >
                      {musicQuizPlaying
                        ? "ON AIR"
                        : "MYSTERY MELODY"}
                    </strong>

                    <span
                      style={{
                        marginTop:
                          "8px",
                        color:
                          "#8f7558",
                        fontSize:
                          "11px",
                      }}
                    >
                      Clip window:{" "}
                      {
                        musicQuizClipLength
                      }
                      s
                    </span>

                    <div
                      id="music-quiz-youtube-player"
                      ref={
                        musicQuizFrameRef
                      }
                      style={{
                        position:
                          "absolute",
                        width:
                          "1px",
                        height:
                          "1px",
                        opacity: 0,
                        pointerEvents:
                          "none",
                      }}
                    />
                  </div>

                  <div
                    style={{
                      display:
                        "flex",
                      justifyContent:
                        "center",
                      alignItems:
                        "center",
                      gap: "18px",
                      padding:
                        "22px 0 18px",
                      flexWrap:
                        "wrap",
                    }}
                  >
                    <button
                      onClick={
                        musicQuizPlaying
                          ? stopMusicQuizClip
                          : playMusicQuizClip
                      }
                      disabled={
                        musicQuizFeedback?.type ===
                          "correct" ||
                        musicQuizFeedback?.type ===
                          "wrong"
                      }
                      style={{
                        width:
                          "82px",
                        height:
                          "82px",
                        borderRadius:
                          "50%",
                        border:
                          "3px solid #d49a45",
                        background:
                          "#6f431f",
                        color:
                          "#ffe5ac",
                        fontSize:
                          "30px",
                        cursor:
                          "pointer",
                        boxShadow:
                          "0 0 24px rgba(255,184,77,0.18)",
                      }}
                    >
                      {musicQuizPlaying
                        ? "Ⅱ"
                        : "▶"}
                    </button>

                    <div
                      style={{
                        minWidth:
                          "150px",
                        textAlign:
                          "center",
                      }}
                    >
                      <strong
                        style={{
                          display:
                            "block",
                          color:
                            "#ffb84d",
                          fontSize:
                            "25px",
                        }}
                      >
                        {
                          musicQuizClipLength
                        }
                        s
                      </strong>

                      <small
                        style={{
                          color:
                            "#967b5c",
                          letterSpacing:
                            "1px",
                        }}
                      >
                        AUDIO WINDOW
                      </small>
                    </div>

                    <button
                      onClick={
                        skipMusicQuizClip
                      }
                      disabled={
                        Boolean(
                          musicQuizFeedback
                        ) ||
                        musicQuizClipLength >=
                          musicQuizDifficulties[
                            musicQuizDifficulty
                          ].maxClip
                      }
                      style={{
                        padding:
                          "13px 18px",
                        border:
                          "1px solid #8a5b2d",
                        background:
                          "#241208",
                        color:
                          "#d9bd8c",
                        cursor:
                          "pointer",
                        opacity:
                          musicQuizClipLength >=
                          musicQuizDifficulties[
                            musicQuizDifficulty
                          ].maxClip
                            ? 0.45
                            : 1,
                      }}
                    >
                      UNLOCK MORE →
                    </button>
                  </div>

                  <div
                    style={{
                      display:
                        "grid",
                      gridTemplateColumns:
                        "repeat(5, 1fr)",
                      gap: "5px",
                      marginBottom:
                        "20px",
                    }}
                  >
                    {[1, 2, 4, 8, 16].map(
                      (second) => (
                        <div
                          key={second}
                          style={{
                            height:
                              "5px",
                            background:
                              second <=
                              musicQuizClipLength
                                ? "#b8893c"
                                : "#302015",
                          }}
                        />
                      )
                    )}
                  </div>

                  <div
                    style={{
                      display:
                        "flex",
                      justifyContent:
                        "space-between",
                      marginBottom:
                        "8px",
                      color:
                        "#9a7a56",
                      fontSize:
                        "11px",
                      letterSpacing:
                        "1px",
                    }}
                  >
                    <span>
                      GUESSES
                    </span>

                    <strong
                      style={{
                        color:
                          "#ffb84d",
                      }}
                    >
                      {
                        musicQuizAttempts
                      }{" "}
                      / 5
                    </strong>
                  </div>

                  <div
                    style={{
                      display:
                        "flex",
                      gap: "9px",
                      flexWrap:
                        "wrap",
                    }}
                  >
                    <input
                      value={
                        musicQuizGuess
                      }
                      onChange={(
                        event
                      ) =>
                        setMusicQuizGuess(
                          event.target
                            .value
                        )
                      }
                      onKeyDown={(
                        event
                      ) => {
                        if (
                          event.key ===
                          "Enter"
                        ) {
                          submitMusicQuizGuess();
                        }
                      }}
                      placeholder="Type your melody guess..."
                      disabled={
                        musicQuizFeedback?.type ===
                          "correct" ||
                        musicQuizFeedback?.type ===
                          "wrong"
                      }
                      style={{
                        flex:
                          "1 1 300px",
                        padding:
                          "16px",
                        border:
                          "1px solid #5a3a25",
                        background:
                          "#100905",
                        color:
                          "#f4e6c7",
                        outline:
                          "none",
                        fontFamily:
                          "Georgia, serif",
                        fontSize:
                          "15px",
                      }}
                    />

                    <button
                      onClick={() =>
                        submitMusicQuizGuess()
                      }
                      disabled={
                        musicQuizFeedback?.type ===
                          "correct" ||
                        musicQuizFeedback?.type ===
                          "wrong"
                      }
                      style={{
                        padding:
                          "14px 22px",
                        border:
                          "2px solid #b8893c",
                        background:
                          "#5a3019",
                        color:
                          "#ffe5ac",
                        fontWeight:
                          "bold",
                        letterSpacing:
                          "1px",
                        cursor:
                          "pointer",
                      }}
                    >
                      LOCK GUESS
                    </button>
                  </div>

                  {musicQuizFeedback && (
                    <div
                      style={{
                        marginTop:
                          "18px",
                        padding:
                          "17px",
                        border:
                          musicQuizFeedback.type ===
                          "correct"
                            ? "1px solid #a97832"
                            : "1px solid #6b4930",
                        background:
                          "#1d1109",
                      }}
                    >
                      <strong
                        style={{
                          display:
                            "block",
                          color:
                            musicQuizFeedback.type ===
                            "correct"
                              ? "#ffb84d"
                              : "#d5a56b",
                          fontSize:
                            "15px",
                        }}
                      >
                        {musicQuizFeedback.type ===
                        "correct"
                          ? "✓ SIGNAL FOUND"
                          : musicQuizFeedback.type ===
                            "retry"
                          ? "◌ SIGNAL UNCLEAR"
                          : "✕ TRANSMISSION LOST"}
                      </strong>

                      <p
                        style={{
                          margin:
                            "7px 0 0",
                          color:
                            "#c7ae88",
                          lineHeight:
                            1.5,
                        }}
                      >
                        {
                          musicQuizFeedback.message
                        }
                      </p>

                      {musicQuizFeedback.type ===
                        "correct" && (
                        <strong
                          style={{
                            display:
                              "block",
                            marginTop:
                              "8px",
                            color:
                              "#ffcf7a",
                          }}
                        >
                          +
                          {
                            musicQuizFeedback.points
                          }{" "}
                          POINTS
                        </strong>
                      )}

                      {(musicQuizFeedback.type ===
                        "wrong" ||
                        musicQuizFeedback.type ===
                          "correct") && (
                        <p
                          style={{
                            margin:
                              "10px 0 0",
                            color:
                              "#ead7b0",
                          }}
                        >
                          SONG:{" "}
                          {
                            currentMusicQuizQuestion.title
                          }
                        </p>
                      )}
                    </div>
                  )}
                </div>

                {musicQuizFeedback && (
                  <button
                    onClick={
                      nextMusicQuizQuestion
                    }
                    style={{
                      width:
                        "100%",
                      marginTop:
                        "14px",
                      padding:
                        "15px",
                      border:
                        "2px solid #8a5b2d",
                      background:
                        "#2d180b",
                      color:
                        "#f5dfb0",
                      cursor:
                        "pointer",
                      fontWeight:
                        "bold",
                      letterSpacing:
                        "1px",
                    }}
                  >
                    {musicQuizIndex >=
                    musicQuizRound.length - 1
                      ? "SEE YOUR TRANSMISSION REPORT →"
                      : "NEXT MYSTERY →"}
                  </button>
                )}

                <button
                  onClick={() =>
                    resetMusicQuiz()
                  }
                  style={{
                    display:
                      "block",
                    margin:
                      "14px auto 0",
                    border: 0,
                    background:
                      "transparent",
                    color:
                      "#8d7355",
                    cursor:
                      "pointer",
                    fontSize:
                      "11px",
                    letterSpacing:
                      "1px",
                  }}
                >
                  CHANGE DIFFICULTY
                </button>
              </section>
            )}

          {musicQuizDifficulty &&
            musicQuizFinished && (
              <section
                style={{
                  maxWidth: "850px",
                  margin: "40px auto 0",
                  textAlign: "center",
                }}
              >
                <p
                  className="small-title"
                  style={{
                    color: "#b8893c",
                  }}
                >
                  TRANSMISSION COMPLETE
                </p>

                <h2
                  style={{
                    margin:
                      "7px 0",
                    fontFamily:
                      "Georgia, serif",
                    fontSize:
                      "clamp(35px, 7vw, 65px)",
                    color:
                      "#f4e6c7",
                  }}
                >
                  {getMusicQuizTitle()}
                </h2>

                <div
                  style={{
                    border:
                      "2px solid #8a5b2d",
                    background:
                      "#1b0f08",
                    padding:
                      "30px 20px",
                    marginTop:
                      "22px",
                  }}
                >
                  <span
                    style={{
                      display:
                        "block",
                      color:
                        "#9c805f",
                      letterSpacing:
                        "2px",
                      fontSize:
                        "11px",
                    }}
                  >
                    FINAL SCORE
                  </span>

                  <strong
                    style={{
                      display:
                        "block",
                      margin:
                        "5px 0",
                      fontSize:
                        "70px",
                      color:
                        "#ffb84d",
                      fontFamily:
                        "Georgia, serif",
                    }}
                  >
                    {musicQuizScore}
                  </strong>

                  <div
                    style={{
                      display:
                        "grid",
                      gridTemplateColumns:
                        "repeat(3, 1fr)",
                      gap: "10px",
                      marginTop:
                        "18px",
                    }}
                  >
                    <div>
                      <strong
                        style={{
                          display:
                            "block",
                          fontSize:
                            "24px",
                        }}
                      >
                        {
                          musicQuizCorrect
                        }
                      </strong>

                      <small
                        style={{
                          color:
                            "#8f7558",
                        }}
                      >
                        FOUND
                      </small>
                    </div>

                    <div>
                      <strong
                        style={{
                          display:
                            "block",
                          fontSize:
                            "24px",
                        }}
                      >
                        {
                          musicQuizRound.length -
                          musicQuizCorrect
                        }
                      </strong>

                      <small
                        style={{
                          color:
                            "#8f7558",
                        }}
                      >
                        MISSED
                      </small>
                    </div>

                    <div>
                      <strong
                        style={{
                          display:
                            "block",
                          fontSize:
                            "24px",
                        }}
                      >
                        {
                          musicQuizBestScore
                        }
                      </strong>

                      <small
                        style={{
                          color:
                            "#8f7558",
                        }}
                      >
                        BEST
                      </small>
                    </div>
                  </div>

                  <p
                    style={{
                      margin:
                        "25px auto 0",
                      maxWidth:
                        "560px",
                      color:
                        "#c2a982",
                      lineHeight:
                        1.7,
                    }}
                  >
                    {
                      musicQuizRound.length
                    }{" "}
                    melodies entered the
                    archive. You caught{" "}
                    {
                      musicQuizCorrect
                    }
                    . The radio department
                    has filed your performance
                    under “
                    {getMusicQuizTitle()}
                    ”.
                  </p>
                </div>

                <div
                  style={{
                    display:
                      "flex",
                    justifyContent:
                      "center",
                    gap: "10px",
                    flexWrap:
                      "wrap",
                    marginTop:
                      "18px",
                  }}
                >
                  <button
                    onClick={() =>
                      startMusicQuiz(
                        musicQuizDifficulty
                      )
                    }
                    style={{
                      padding:
                        "14px 20px",
                      border:
                        "2px solid #b8893c",
                      background:
                        "#5a3019",
                      color:
                        "#ffe5ac",
                      cursor:
                        "pointer",
                      fontWeight:
                        "bold",
                    }}
                  >
                    PLAY AGAIN
                  </button>

                  <button
                    onClick={() =>
                      resetMusicQuiz()
                    }
                    style={{
                      padding:
                        "14px 20px",
                      border:
                        "1px solid #68402a",
                      background:
                        "#211209",
                      color:
                        "#cbb18a",
                      cursor:
                        "pointer",
                    }}
                  >
                    CHANGE DIFFICULTY
                  </button>

                  <button
                    onClick={() => {
                      resetMusicQuiz();
                      setPage("home");
                    }}
                    style={{
                      padding:
                        "14px 20px",
                      border:
                        "1px solid #68402a",
                      background:
                        "#211209",
                      color:
                        "#cbb18a",
                      cursor:
                        "pointer",
                    }}
                  >
                    BACK TO ARCHIVE
                  </button>
                </div>
              </section>
            )}
        </main>
      )}

      {/* ===================================================
          MINI PLAYER
         =================================================== */}

      {currentSong &&
        page !== "music" && (
          <section className="mini-player">
            <div className="mini-song-info">
              <div className="mini-icon">
                📻
              </div>

              <div>
                <strong>
                  {currentSong.title}
                </strong>

                <span>
                  {currentStation?.name ||
                    "OOHA LOKAM RADIO"}
                </span>
              </div>
            </div>

            <div className="mini-controls">
              <button
                onClick={
                  playPreviousInStation
                }
              >
                ◀
              </button>

              <button
                onClick={togglePlay}
              >
                {playing
                  ? "❚❚"
                  : "▶"}
              </button>

              <button
                onClick={
                  playNextInStation
                }
              >
                ▶
              </button>
            </div>

            <button
              className="mini-open"
              onClick={() =>
                setPage("music")
              }
            >
              📻 RADIO
            </button>

            <button
              className="mini-close"
              onClick={powerOff}
            >
              ✕
            </button>
          </section>
        )}
    </main>
  );
}

export default App;