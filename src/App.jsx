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
      englishTitle: "Vennalave Vennalave",
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
  ],

  "2020s": [
    {
      title: "నీ గుండె లోనా",
      englishTitle: "Nee Gunde Lona",
      youtubeId: "d3Vnu_tsYPA",
    },
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
  ],
};

/* =========================================================
   OOHA LOKAM — VINTAGE RADIO
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

  return `${String(mins).padStart(2, "0")}:${String(
    secs
  ).padStart(2, "0")}`;
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

function App() {
  const [authMode, setAuthMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authLoading, setAuthLoading] = useState(false);
  const [authMessage, setAuthMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [name, setName] = useState(
    localStorage.getItem("oohaName") || ""
  );

  const [entered, setEntered] = useState(
    localStorage.getItem("oohaEntered") === "true"
  );

  const [page, setPage] = useState("home");

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

  const shuffleHistoryRef = useRef([]);
  const shuffleIndexRef = useRef(-1);

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

  const getShuffleSong = (playlist, song) => {
    if (playlist.length <= 1) {
      return playlist[0];
    }

    const currentId = song?.youtubeId;

    const availableSongs = playlist.filter(
      (item) => item.youtubeId !== currentId
    );

    return availableSongs[
      Math.floor(Math.random() * availableSongs.length)
    ];
  };

  /* =======================================================
     AUTH SESSION
     ======================================================= */

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();

      if (data.session) {
        setIsLoggedIn(true);
      }
    };

    checkSession();
  }, []);

  /* =======================================================
     AUTH
     ======================================================= */

  const handleAuth = async (e) => {
    e.preventDefault();
    setAuthMessage("");

    if (!email.trim() || !password.trim()) {
      setAuthMessage("Please enter your email and password.");
      return;
    }

    setAuthLoading(true);

    try {
      if (authMode === "login") {
        const { error } =
          await supabase.auth.signInWithPassword({
            email: email.trim(),
            password,
          });

        if (error) {
          setAuthMessage(error.message);
          return;
        }

        setIsLoggedIn(true);
      } else {
        const { error } = await supabase.auth.signUp({
          email: email.trim(),
          password,
        });

        if (error) {
          setAuthMessage(error.message);
          return;
        }

        setAuthMessage(
          "Account created! Check your email to verify your account."
        );
      }
    } catch {
      setAuthMessage(
        "Something went wrong. Please try again."
      );
    } finally {
      setAuthLoading(false);
    }
  };

  const continueAsGuest = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsLoggedIn(false);
    setEntered(false);
    setPage("home");
  };

  /* =======================================================
     YOUTUBE API
     ======================================================= */

  useEffect(() => {
    if (window.YT && window.YT.Player) return;
    if (document.getElementById("youtube-api")) return;

    const script = document.createElement("script");

    script.id = "youtube-api";
    script.src = "https://www.youtube.com/iframe_api";
    script.async = true;

    document.body.appendChild(script);
  }, []);

  /* =======================================================
     YOUTUBE PLAYER
     ======================================================= */

  useEffect(() => {
    if (!currentSong?.youtubeId) return;

    const createPlayer = () => {
      if (!window.YT || !window.YT.Player) return;

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

      playerRef.current = new window.YT.Player(
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

              const d = event.target.getDuration();

              if (d) {
                setDuration(d);
              }
            },

            onStateChange: (event) => {
              if (!window.YT) return;

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

    if (window.YT && window.YT.Player) {
      createPlayer();
    } else {
      window.onYouTubeIframeAPIReady = createPlayer;
    }
  }, [currentSong]);

  /* =======================================================
     PLAYER TIME
     ======================================================= */

  useEffect(() => {
    if (!currentSong) return;

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

          if (Number.isFinite(d) && d > 0) {
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
      localStorage.getItem("oohaLastListening");

    if (previous === today) return;

    let newStreak = 1;

    if (previous) {
      const difference = Math.round(
        (new Date(today) - new Date(previous)) /
          (1000 * 60 * 60 * 24)
      );

      if (difference === 1) {
        newStreak =
          Number(
            localStorage.getItem("oohaStreak") || 0
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

    const playlist = getStationSongs(station);

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
      ? getShuffleSong(playlist, null)
      : playlist[0];

    shuffleHistoryRef.current = firstSong
      ? [firstSong]
      : [];

    shuffleIndexRef.current = firstSong ? 0 : -1;

    setCurrentSong(firstSong);
  };

  /* =======================================================
     NEXT SONG — SAME STATION
     ======================================================= */

  const playNextInStation = () => {
    if (!currentStation || stationSongs.length === 0) {
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

      const nextSong = getShuffleSong(
        stationSongs,
        currentSong
      );

      if (!nextSong) {
        return;
      }

      shuffleHistoryRef.current.push(nextSong);

      shuffleIndexRef.current =
        shuffleHistoryRef.current.length - 1;

      setCurrentTime(0);
      setDuration(0);
      setCurrentSong(nextSong);

      return;
    }

    let index = stationSongs.findIndex(
      (song) =>
        song.title === currentSong?.title &&
        song.movie === currentSong?.movie
    );

    index = index === -1 ? 0 : index + 1;

    if (index >= stationSongs.length) {
      index = 0;
    }

    setCurrentTime(0);
    setDuration(0);
    setCurrentSong(stationSongs[index]);
  };

  /* =======================================================
     PREVIOUS SONG — SAME STATION
     ======================================================= */

  const playPreviousInStation = () => {
    if (!currentStation || stationSongs.length === 0) {
      return;
    }

    if (shuffle) {
      if (shuffleIndexRef.current <= 0) {
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

    let index = stationSongs.findIndex(
      (song) =>
        song.title === currentSong?.title &&
        song.movie === currentSong?.movie
    );

    index = index === -1 ? 0 : index - 1;

    if (index < 0) {
      index = stationSongs.length - 1;
    }

    setCurrentTime(0);
    setDuration(0);
    setCurrentSong(stationSongs[index]);
  };

  /* =======================================================
     SHUFFLE
     ======================================================= */

  const toggleShuffle = () => {
    setShuffle((prev) => {
      const next = !prev;

      if (next) {
        if (currentSong) {
          shuffleHistoryRef.current = [currentSong];
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
    if (!playerRef.current || !playerReady.current) {
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
    const value = Number(event.target.value);

    setCurrentTime(value);

    if (
      playerRef.current &&
      playerReady.current
    ) {
      try {
        playerRef.current.seekTo(value, true);
      } catch {}
    }
  };

  /* =======================================================
     VOLUME
     ======================================================= */

  const changeVolume = (event) => {
    const value = Number(event.target.value);

    setVolume(value);

    if (
      playerRef.current &&
      playerReady.current
    ) {
      try {
        playerRef.current.setVolume(value);
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
     AUTH ENTRANCE
     ======================================================= */

  if (!isLoggedIn) {
    return (
      <main className="auth-page">
        <div className="auth-card">
          <div className="auth-brand">
            <div className="auth-radio-icon">📻</div>

            <p className="eyebrow">
              A TELUGU MUSIC ARCHIVE
            </p>

            <h1>ఊహా లోకం</h1>

            <span>OOHA LOKAM</span>
          </div>

          <div className="auth-divider">
            <span>✦</span>
          </div>

          <div className="auth-heading">
            <h2>
              {authMode === "login"
                ? "Welcome Back"
                : "Join Ooha Lokam"}
            </h2>

            <p>
              {authMode === "login"
                ? "Your memories are waiting."
                : "Create your archive account."}
            </p>
          </div>

          <div className="auth-tabs">
            <button
              className={
                authMode === "login"
                  ? "auth-tab active"
                  : "auth-tab"
              }
              onClick={() => {
                setAuthMode("login");
                setAuthMessage("");
              }}
            >
              LOGIN
            </button>

            <button
              className={
                authMode === "signup"
                  ? "auth-tab active"
                  : "auth-tab"
              }
              onClick={() => {
                setAuthMode("signup");
                setAuthMessage("");
              }}
            >
              SIGN UP
            </button>
          </div>

          <form
            className="auth-form"
            onSubmit={handleAuth}
          >
            <label htmlFor="email">
              EMAIL ADDRESS
            </label>

            <input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              autoComplete="email"
            />

            <label htmlFor="password">
              PASSWORD
            </label>

            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              autoComplete={
                authMode === "login"
                  ? "current-password"
                  : "new-password"
              }
            />

            {authMode === "login" && (
              <div className="auth-options">
                <label className="remember-option">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>

                <button
                  type="button"
                  className="forgot-button"
                  onClick={() =>
                    setAuthMessage(
                      "Password reset will be added next."
                    )
                  }
                >
                  Forgot password?
                </button>
              </div>
            )}

            {authMessage && (
              <div className="auth-message">
                {authMessage}
              </div>
            )}

            <button
              type="submit"
              className="auth-submit"
              disabled={authLoading}
            >
              {authLoading
                ? "PLEASE WAIT..."
                : authMode === "login"
                ? "ENTER OOHA LOKAM"
                : "CREATE MY ACCOUNT"}
            </button>
          </form>

          <div className="auth-or">
            <span>OR</span>
          </div>

          <button
            className="guest-button"
            onClick={continueAsGuest}
          >
            CONTINUE AS GUEST
          </button>

          <p className="auth-footer">
            Songs • Cinema • Memories
          </p>
        </div>
      </main>
    );
  }

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

            <button onClick={enterArchive}>
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

      {/* HOME */}

      {page === "home" && (
        <main className="home-page">

          <header className="home-header">

            <div>
              <p className="small-title">
                TELUGU CINEMA & MUSIC ARCHIVE
              </p>

              <h1>ఊహా లోకం</h1>
            </div>

            <div className="user-name">
              Welcome, <strong>{name}</strong>
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
                onClick={() => setPage("music")}
              >
                TUNE INTO RADIO
              </button>

            </div>

            <div className="archive-card">

              <span>🎮</span>

              <h3>QUIZZES</h3>

              <p>
                Songs • Dialogues • BGMs
              </p>

              <button
                onClick={() => setPage("quiz")}
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
                onClick={() => setPage("rewards")}
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
            onClick={() => setPage("home")}
          >
            ← BACK TO ఊహా లోకం
          </button>

          <section className="radio-heading">

            <p>
              OOHA LOKAM BROADCAST
            </p>

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
              <div>
                OOHA LOKAM
              </div>

              <span>
                TELUGU CINEMA RADIO
              </span>
            </div>

            <div className="radio-main">

              {/* TUNING SIDE */}

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

              {/* SPEAKER */}

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
                        }${currentSong.year || ""}`
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

            {/* RADIO CONTROLS */}

            <div className="radio-controls">

              <button
                className="radio-knob-button"
                onClick={playPreviousInStation}
                disabled={!stationSongs.length}
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
                disabled={!stationSongs.length}
              >
                <span>⤨</span>
                <small>
                  {shuffle ? "ON" : "SHUFFLE"}
                </small>
              </button>

              <button
                className="radio-play-button"
                onClick={togglePlay}
                disabled={!currentSong}
              >
                {playing ? "❚❚" : "▶️"}
              </button>

              <button
                className="radio-knob-button"
                onClick={playNextInStation}
                disabled={!stationSongs.length}
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

            {/* PROGRESS */}

            {currentSong && (
              <div className="radio-progress">

                <span>
                  {formatTime(currentTime)}
                </span>

                <input
                  type="range"
                  min="0"
                  max={duration || 100}
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

            {/* STATION PRESETS */}

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
                          tuneStation(station)
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

            {/* CURRENT BROADCAST */}

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

                  <span>
                    PLAYLIST
                  </span>

                  <strong>
                    {stationSongs.length
                      ? `${stationSongs.length} melodies`
                      : "COMING SOON"}
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

            {/* VIDEO */}

            {currentSong && (
              <div className="radio-extra">

                <button
                  className="radio-video-button"
                  onClick={() =>
                    setShowVideo(!showVideo)
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
                    title={currentSong.title}
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
            onClick={() => setPage("home")}
          >
            ← BACK TO ఊహా లోకం
          </button>

          <section className="rewards-header">

            <p>
              OOHA LOKAM REWARDS
            </p>

            <h1>
              🏆 Your Rewards
            </h1>

            <span>
              Keep listening. Keep discovering.
              Keep the streak alive.
            </span>

          </section>

          <section className="reward-stats">

            <div className="reward-stat">
              <span>🔥</span>
              <strong>{streak}</strong>
              <small>DAY STREAK</small>
            </div>

            <div className="reward-stat">
              <span>📻</span>
              <strong>5</strong>
              <small>RADIO STATIONS</small>
            </div>

            <div className="reward-stat">
              <span>⭐</span>
              <strong>{streak * 10}</strong>
              <small>POINTS</small>
            </div>

          </section>

          <section className="daily-streak-card">

            <div className="streak-icon">
              🔥
            </div>

            <div className="streak-content">

              <p>
                DAILY LISTENING STREAK
              </p>

              <h2>
                {streak === 0
                  ? "Start your journey"
                  : `${streak} day${
                      streak === 1 ? "" : "s"
                    } strong!`}
              </h2>

              <span>
                Listen to a song every day
                to keep your Ooha Lokam
                streak alive.
              </span>

              <div className="streak-days">

                {[1, 2, 3, 4, 5, 6, 7].map(
                  (day) => (
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
                  )
                )}

              </div>

            </div>

          </section>

          <section className="rewards-list">

            <h2>Milestones</h2>

            <div className="milestone-grid">

              {[
                [
                  "🌱",
                  "First Melody",
                  "Listen for 1 day",
                  1,
                ],
                [
                  "🎶",
                  "Melody Seeker",
                  "Reach a 3 day streak",
                  3,
                ],
                [
                  "🔥",
                  "Week Warrior",
                  "Reach a 7 day streak",
                  7,
                ],
                [
                  "👑",
                  "Ooha Legend",
                  "Reach a 30 day streak",
                  30,
                ],
              ].map(
                (item) => (
                  <div
                    key={item[1]}
                    className={
                      streak >= item[3]
                        ? "milestone unlocked"
                        : "milestone"
                    }
                  >

                    <span>
                      {item[0]}
                    </span>

                    <h3>
                      {item[1]}
                    </h3>

                    <p>
                      {item[2]}
                    </p>

                    <strong>
                      {streak >= item[3]
                        ? "UNLOCKED"
                        : "LOCKED"}
                    </strong>

                  </div>
                )
              )}

            </div>

          </section>

          <section className="rewards-note">

            <span>✦</span>

            <p>
              Your progress is saved on this
              device automatically.
            </p>

          </section>

        </main>
      )}

      {/* ===================================================
          QUIZ
         =================================================== */}

      {page === "quiz" && (
        <main className="quiz-page">

          <button
            className="back-button"
            onClick={() => setPage("home")}
          >
            ← BACK TO ఊహా లోకం
          </button>

          <section className="quiz-header">

            <p>
              OOHA LOKAM QUIZ
            </p>

            <h1>
              🎮 Coming Soon
            </h1>

            <span>
              Songs • Dialogues • BGMs
            </span>

          </section>

          <div className="coming-soon-box">

            <div>🎬</div>

            <h2>
              Quiz section is under construction.
            </h2>

            <p>
              The music radio comes first.
              Quiz features will be added next.
            </p>

          </div>

        </main>
      )}

      {/* ===================================================
          MINI PLAYER ON OTHER PAGES
         =================================================== */}

      {currentSong && page !== "music" && (
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
              onClick={playPreviousInStation}
            >
              ◀️
            </button>

            <button onClick={togglePlay}>
              {playing ? "❚❚" : "▶️"}
            </button>

            <button
              onClick={playNextInStation}
            >
              ▶️
            </button>

          </div>

          <button
            className="mini-open"
            onClick={() => setPage("music")}
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