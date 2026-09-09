import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";

/* =========================================================
   OOHA LOKAM — MUSIC DATABASE
   ========================================================= */

const songs = {
  "1960s": [
    {
      title: "Oohalu Gusagusalade",
      movie: "Bandipotu",
      year: "1963",
      youtubeId: "hlrhFTJBep8",
    },
  ],

  "1970s": [],

  "1980s": [],

  "1990s": [
    {
      title: "Yemi Cheyamanduve",
      movie: "Priyuraalu Pilichindi",
      year: "1990s",
      youtubeId: "aulygJVShnw",
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
  ],

  "2010s": [
    {
      title: "Dhivara",
      movie: "Baahubali: The Beginning",
      year: "2015",
      youtubeId: "",
    },
    {
      title: "Adiga Adiga",
      movie: "Ninnu Kori",
      year: "2017",
      youtubeId: "",
    },
    {
      title: "Inkem Inkem Inkem Kaavaale",
      movie: "Geetha Govindam",
      year: "2018",
      youtubeId: "",
    },
    {
      title: "Super Machi",
      movie: "Son Of Satyamurthy",
      year: "2015",
      youtubeId: "",
    },
    {
      title: "Jatha Kalise",
      movie: "Srimanthudu",
      year: "2015",
      youtubeId: "",
    },
    {
      title: "Idhedho Bagundhe",
      movie: "Mirchi",
      year: "2013",
      youtubeId: "",
    },
    {
      title: "Oh Oh Oh My Friend",
      movie: "Oh My Friend",
      year: "2011",
      youtubeId: "",
    },
    {
      title: "Charuseela",
      movie: "Srimanthudu",
      year: "2015",
      youtubeId: "",
    },
    {
      title: "Ee Hridayam",
      movie: "Ye Maaya Chesave",
      year: "2010",
      youtubeId: "",
    },
    {
      title: "Dhooram Dhooram",
      movie: "100% Love",
      year: "2011",
      youtubeId: "",
    },
    {
      title: "Yentha Sakkagunnave",
      movie: "Rangasthalam",
      year: "2018",
      youtubeId: "",
    },
    {
      title: "Kanulanu Thaake",
      movie: "Manam",
      year: "2014",
      youtubeId: "",
    },
    {
      title: "Nenu Nuvvantu",
      movie: "Orange",
      year: "2010",
      youtubeId: "",
    },
    {
      title: "Sada Nannu",
      movie: "Mahanati",
      year: "2018",
      youtubeId: "",
    },
    {
      title: "Chali Chaliga",
      movie: "Mr. Perfect",
      year: "2011",
      youtubeId: "",
    },
    {
      title: "O Madhu",
      movie: "Julayi",
      year: "2012",
      youtubeId: "",
    },
    {
      title: "Maate Vinadhuga",
      movie: "Taxiwaala",
      year: "2018",
      youtubeId: "",
    },
    {
      title: "Konchem Konchem",
      movie: "Eega",
      year: "2012",
      youtubeId: "",
    },
    {
      title: "Vellipomaake",
      movie: "Saahasam Swaasaga Saagipo",
      year: "2016",
      youtubeId: "",
    },
    {
      title: "Vintunnavaa",
      movie: "Ye Maaya Chesave",
      year: "2010",
      youtubeId: "",
    },
    {
      title: "Meghaalu Lekunna",
      movie: "Kumari 21F",
      year: "2015",
      youtubeId: "",
    },
    {
      title: "Rangamma Mangamma",
      movie: "Rangasthalam",
      year: "2018",
      youtubeId: "",
    },
    {
      title: "Evare",
      movie: "Premam",
      year: "2016",
      youtubeId: "",
    },
    {
      title: "Guruvaram",
      movie: "Dookudu",
      year: "2011",
      youtubeId: "",
    },
    {
      title: "Ninnila",
      movie: "Tholi Prema",
      year: "2018",
      youtubeId: "",
    },
    {
      title: "Cinema Choopistha Mama",
      movie: "Race Gurram",
      year: "2014",
      youtubeId: "",
    },
    {
      title: "Anaganaganaga",
      movie: "Aravindha Sametha",
      year: "2018",
      youtubeId: "",
    },
    {
      title: "Madhuram",
      movie: "Arjun Reddy",
      year: "2017",
      youtubeId: "",
    },
    {
      title: "Vachinde",
      movie: "Fidaa",
      year: "2017",
      youtubeId: "",
    },
    {
      title: "Nenante Naaku",
      movie: "Oosaravelli",
      year: "2011",
      youtubeId: "",
    },
    {
      title: "Neeve",
      movie: "Darling",
      year: "2010",
      youtubeId: "",
    },
    {
      title: "Unnatundi Gundey",
      movie: "Ninnu Kori",
      year: "2017",
      youtubeId: "",
    },
    {
      title: "Mooga Manasulu",
      movie: "Mahanati",
      year: "2018",
      youtubeId: "",
    },
    {
      title: "Vachindamma",
      movie: "Geetha Govindam",
      year: "2018",
      youtubeId: "",
    },
    {
      title: "Top Lesi Poddi",
      movie: "Iddarammayilatho",
      year: "2013",
      youtubeId: "",
    },
    {
      title: "Nuvve Nuvve",
      movie: "Kick 2",
      year: "2015",
      youtubeId: "",
    },
    {
      title: "Dekho Dekho Gabbar Singh",
      movie: "Gabbar Singh",
      year: "2012",
      youtubeId: "",
    },
    {
      title: "Sir Osthara",
      movie: "Businessman",
      year: "2012",
      youtubeId: "",
    },
    {
      title: "Oh Priya Priya",
      movie: "Ishq",
      year: "2012",
      youtubeId: "",
    },
    {
      title: "Nee Jathaga",
      movie: "Yevadu",
      year: "2014",
      youtubeId: "",
    },
    {
      title: "Violin Song",
      movie: "Iddarammayilatho",
      year: "2013",
      youtubeId: "",
    },
    {
      title: "Pileche",
      movie: "Khaleja",
      year: "2010",
      youtubeId: "",
    },
    {
      title: "Gaali Vaaluga",
      movie: "Agnyaathavaasi",
      year: "2018",
      youtubeId: "",
    },
    {
      title: "Ninnu Chudagaane",
      movie: "Attarintiki Daredi",
      year: "2013",
      youtubeId: "",
    },
    {
      title: "Priyathama Priyathama",
      movie: "Majili",
      year: "2019",
      youtubeId: "",
    },
    {
      title: "Dimaak Kharaab",
      movie: "iSmart Shankar",
      year: "2019",
      youtubeId: "",
    },
    {
      title: "Chinni Chinni Aasalu",
      movie: "Manam",
      year: "2014",
      youtubeId: "",
    },
    {
      title: "Yenti Yenti",
      movie: "Geetha Govindam",
      year: "2018",
      youtubeId: "",
    },
    {
      title: "Pillaa Raa",
      movie: "RX 100",
      year: "2018",
      youtubeId: "",
    },
    {
      title: "Aagi Aagi",
      movie: "Ee Nagaraniki Emaindi",
      year: "2018",
      youtubeId: "",
    },
    {
      title: "Manohari",
      movie: "Baahubali: The Beginning",
      year: "2015",
      youtubeId: "",
    },
  ],

  "2020s": [],
};

/* =========================================================
   HELPERS
   ========================================================= */

const allSongs = Object.entries(songs).flatMap(
  ([era, songList]) =>
    songList.map((song) => ({
      ...song,
      era,
    }))
);

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

function getToday() {
  return new Date().toISOString().slice(0, 10);
}

/* =========================================================
   APP
   ========================================================= */

function App() {
  const [name, setName] = useState(
    localStorage.getItem("oohaName") || ""
  );

  const [entered, setEntered] = useState(
    localStorage.getItem("oohaEntered") === "true"
  );

  const [page, setPage] = useState("home");
  const [decade, setDecade] = useState("");

  const [currentSong, setCurrentSong] = useState(null);
  const [playing, setPlaying] = useState(false);

  const [showFullPlayer, setShowFullPlayer] =
    useState(false);

  const [showVideo, setShowVideo] = useState(false);

  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(75);

  const [streak, setStreak] = useState(
    Number(localStorage.getItem("oohaStreak") || 0)
  );

  const [lastListeningDate, setLastListeningDate] =
    useState(
      localStorage.getItem("oohaLastListening") || ""
    );

  const playerRef = useRef(null);
  const playerReady = useRef(false);

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
          playerReady.current = true;
          return;
        } catch {}
      }

      playerRef.current = new window.YT.Player(
        "persistent-youtube-player",
        {
          videoId: currentSong.youtubeId,

          playerVars: {
            autoplay: 0,
            controls: 0,
            rel: 0,
            modestbranding: 1,
            playsinline: 1,
          },

          events: {
            onReady: (event) => {
              playerReady.current = true;
              event.target.setVolume(volume);

              const d = event.target.getDuration();

              if (d) setDuration(d);
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
                setPlaying(false);
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
     UPDATE TIME
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
    const previous = localStorage.getItem(
      "oohaLastListening"
    );

    if (previous === today) return;

    let newStreak = 1;

    if (previous) {
      const previousDate = new Date(previous);
      const todayDate = new Date(today);

      const difference =
        Math.round(
          (todayDate - previousDate) /
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
    setLastListeningDate(today);
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
     OPEN SONG
     ======================================================= */

  const openSong = (song) => {
    setCurrentSong(song);
    setShowFullPlayer(true);
    setShowVideo(false);
    setCurrentTime(0);
    setDuration(0);

    if (!song.youtubeId) {
      setPlaying(false);
      return;
    }

    if (
      playerRef.current &&
      playerReady.current
    ) {
      try {
        playerRef.current.loadVideoById(
          song.youtubeId
        );

        playerRef.current.setVolume(volume);
        playerRef.current.playVideo();

        setPlaying(true);
        updateListeningStreak();
      } catch {}
    }
  };

  /* =======================================================
     PREVIOUS
     ======================================================= */

  const playPrevious = () => {
    if (!currentSong) return;

    const index = allSongs.findIndex(
      (song) =>
        song.title === currentSong.title &&
        song.movie === currentSong.movie
    );

    if (index > 0) {
      openSong(allSongs[index - 1]);
    }
  };

  /* =======================================================
     NEXT
     ======================================================= */

  const playNext = () => {
    if (!currentSong) return;

    const index = allSongs.findIndex(
      (song) =>
        song.title === currentSong.title &&
        song.movie === currentSong.movie
    );

    if (
      index !== -1 &&
      index < allSongs.length - 1
    ) {
      openSong(allSongs[index + 1]);
    }
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
     CLOSE PLAYER
     ======================================================= */

  const closePlayer = () => {
    if (playerRef.current) {
      try {
        playerRef.current.stopVideo();
      } catch {}
    }

    setCurrentSong(null);
    setPlaying(false);
    setShowFullPlayer(false);
    setShowVideo(false);
    setCurrentTime(0);
    setDuration(0);
  };

  /* =======================================================
     ENTER
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
     SEARCH
     ======================================================= */

  const [search, setSearch] = useState("");

  const searchResults = useMemo(() => {
    const query = search.toLowerCase().trim();

    if (!query) return [];

    return allSongs.filter((song) => {
      return (
        song.title.toLowerCase().includes(query) ||
        song.movie.toLowerCase().includes(query) ||
        song.year.toLowerCase().includes(query) ||
        song.era.toLowerCase().includes(query)
      );
    });
  }, [search]);

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
     MAIN WEBSITE
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
              Travel through decades of Telugu
              music and rediscover unforgettable
              melodies and memories.
            </p>
          </section>

          <section className="archive-grid">

            <div className="archive-card">
              <span>🎵</span>

              <h3>MUSIC</h3>

              <p>
                60s • 70s • 80s • 90s • 2000s •
                2010s • 2020s
              </p>

              <button
                onClick={() => setPage("music")}
              >
                ENTER MUSIC ARCHIVE
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
          MUSIC
         =================================================== */}

      {page === "music" && (
        <main className="music-page">

          <button
            className="back-button"
            onClick={() => setPage("home")}
          >
            ← BACK TO ఊహా లోకం
          </button>

          <section className="music-header">
            <p>
              TELUGU CINEMA & MUSIC ARCHIVE
            </p>

            <h1>
              🎵 Songs Through Time
            </h1>

            <span>
              Rediscover melodies across
              generations.
            </span>
          </section>

          <section className="music-search">
            <input
              type="text"
              placeholder="🔍 Search songs, movies or years..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

            {search.trim() && (
              <div className="search-results">

                <div className="search-heading">
                  <span>SEARCH RESULTS</span>

                  <small>
                    {searchResults.length}{" "}
                    {searchResults.length === 1
                      ? "song"
                      : "songs"}
                  </small>
                </div>

                {searchResults.length === 0 ? (
                  <div className="no-results">
                    <div>📻</div>

                    <h3>
                      No songs found
                    </h3>

                    <p>
                      Try another song,
                      movie or year.
                    </p>
                  </div>
                ) : (
                  <div className="song-grid">
                    {searchResults.map(
                      (song, index) => (
                        <SongCard
                          key={`${song.title}-${index}`}
                          song={song}
                          onPlay={openSong}
                        />
                      )
                    )}
                  </div>
                )}

              </div>
            )}
          </section>

          <section className="decade-grid">
            {Object.keys(songs).map(
              (item) => (
                <button
                  key={item}
                  className={
                    decade === item
                      ? "active-decade"
                      : ""
                  }
                  onClick={() => {
                    setDecade(item);
                    setSearch("");
                  }}
                >
                  {item}
                </button>
              )
            )}
          </section>

          {decade && !search.trim() && (
            <section className="selected-decade">

              <p>YOU SELECTED</p>

              <h2>{decade}</h2>

              <span>
                Telugu songs from the {decade}
              </span>

              {songs[decade].length === 0 ? (
                <div className="empty-library">
                  <div>📻</div>

                  <h3>
                    More melodies coming soon...
                  </h3>

                  <p>
                    We're building the
                    Ooha Lokam music archive.
                  </p>
                </div>
              ) : (
                <div className="song-grid">
                  {songs[decade].map(
                    (song, index) => (
                      <SongCard
                        key={`${song.title}-${index}`}
                        song={song}
                        onPlay={openSong}
                      />
                    )
                  )}
                </div>
              )}

            </section>
          )}

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
            <p>OOHA LOKAM REWARDS</p>

            <h1>🏆 Your Rewards</h1>

            <span>
              Keep listening. Keep discovering.
              Keep the streak alive.
            </span>
          </section>

          <section className="reward-stats">

            <div className="reward-stat">
              <span>🔥</span>

              <strong>
                {streak}
              </strong>

              <small>
                DAY STREAK
              </small>
            </div>

            <div className="reward-stat">
              <span>🎵</span>

              <strong>
                {allSongs.length}
              </strong>

              <small>
                SONGS IN ARCHIVE
              </small>
            </div>

            <div className="reward-stat">
              <span>⭐</span>

              <strong>
                {streak * 10}
              </strong>

              <small>
                POINTS
              </small>
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
                  : `${streak} day${streak === 1 ? "" : "s"} strong!`}
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

                      <small>
                        DAY
                      </small>
                    </div>
                  )
                )}

              </div>

            </div>

          </section>

          <section className="rewards-list">

            <h2>
              Milestones
            </h2>

            <div className="milestone-grid">

              <div
                className={
                  streak >= 1
                    ? "milestone unlocked"
                    : "milestone"
                }
              >
                <span>🌱</span>
                <h3>First Melody</h3>
                <p>
                  Listen for 1 day
                </p>
                <strong>
                  {streak >= 1
                    ? "UNLOCKED"
                    : "LOCKED"}
                </strong>
              </div>

              <div
                className={
                  streak >= 3
                    ? "milestone unlocked"
                    : "milestone"
                }
              >
                <span>🎶</span>
                <h3>Melody Seeker</h3>
                <p>
                  Reach a 3 day streak
                </p>
                <strong>
                  {streak >= 3
                    ? "UNLOCKED"
                    : "LOCKED"}
                </strong>
              </div>

              <div
                className={
                  streak >= 7
                    ? "milestone unlocked"
                    : "milestone"
                }
              >
                <span>🔥</span>
                <h3>Week Warrior</h3>
                <p>
                  Reach a 7 day streak
                </p>
                <strong>
                  {streak >= 7
                    ? "UNLOCKED"
                    : "LOCKED"}
                </strong>
              </div>

              <div
                className={
                  streak >= 30
                    ? "milestone unlocked"
                    : "milestone"
                }
              >
                <span>👑</span>
                <h3>Ooha Legend</h3>
                <p>
                  Reach a 30 day streak
                </p>
                <strong>
                  {streak >= 30
                    ? "UNLOCKED"
                    : "LOCKED"}
                </strong>
              </div>

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
          QUIZ PLACEHOLDER
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
              Quiz section is under
              construction.
            </h2>

            <p>
              The music archive comes first.
              Quiz features will be added next.
            </p>
          </div>

        </main>
      )}

      {/* ===================================================
          FULL CASSETTE PLAYER
         =================================================== */}

      {currentSong &&
        showFullPlayer && (
          <section className="cassette-player">

            <div className="cassette-top">
              <div>ఊహా లోకం</div>

              <div>
                VINTAGE MUSIC DECK
              </div>

              <button
                className="close-x"
                onClick={() =>
                  setShowFullPlayer(false)
                }
              >
                ✕
              </button>
            </div>

            <div className="cassette-body">

              <div className="cassette-side">

                <div className="cassette-label">

                  <div className="cassette-title">
                    ఊహా లోకం
                  </div>

                  <div className="cassette-song">
                    {currentSong.title}
                  </div>

                  <div className="cassette-movie">
                    {currentSong.movie} •{" "}
                    {currentSong.year}
                  </div>

                  <div className="cassette-line"></div>

                  <div className="cassette-reels">

                    <div
                      className={`reel ${
                        playing ? "spin" : ""
                      }`}
                    >
                      <div className="reel-center">
                        +
                      </div>
                    </div>

                    <div className="tape-window">
                      <div className="tape-line"></div>
                    </div>

                    <div
                      className={`reel ${
                        playing ? "spin" : ""
                      }`}
                    >
                      <div className="reel-center">
                        +
                      </div>
                    </div>

                  </div>

                  <div className="cassette-label-bottom">
                    SIDE A • OOHA LOKAM
                  </div>

                </div>

              </div>

              <div className="player-side">

                <div className="now-playing">
                  {playing
                    ? "● NOW PLAYING"
                    : "○ PAUSED"}
                </div>

                <h3>
                  {currentSong.title}
                </h3>

                <p>
                  {currentSong.movie} •{" "}
                  {currentSong.year}
                </p>

                {!currentSong.youtubeId && (
                  <div className="missing-video">
                    YouTube link will be added
                    for this song.
                  </div>
                )}

                <div className="radio-display">

                  <span
                    className={
                      playing
                        ? "display-light playing-light"
                        : "display-light"
                    }
                  ></span>

                  <span>
                    {playing
                      ? "♪ PLAY"
                      : "READY"}
                  </span>

                  <span>
                    {formatTime(currentTime)}
                  </span>

                  <span>/</span>

                  <span>
                    {formatTime(duration)}
                  </span>

                </div>

                <div className="duration-section">

                  <div className="duration-times">
                    <span>
                      {formatTime(currentTime)}
                    </span>

                    <span>
                      {formatTime(duration)}
                    </span>
                  </div>

                  <input
                    className="vintage-progress"
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

                </div>

                <div className="transport-controls">

                  <button
                    onClick={playPrevious}
                  >
                    ◀◀
                  </button>

                  <button
                    className="big-play"
                    onClick={togglePlay}
                  >
                    {playing
                      ? "❚❚"
                      : "▶"}
                  </button>

                  <button
                    onClick={playNext}
                  >
                    ▶▶
                  </button>

                </div>

                <div className="volume-control">

                  <span>🔊</span>

                  <input
                    className="vintage-volume"
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={changeVolume}
                  />

                  <span>
                    {volume}
                  </span>

                </div>

                <button
                  className="watch-video-button"
                  disabled={!currentSong.youtubeId}
                  onClick={() =>
                    setShowVideo(!showVideo)
                  }
                >
                  {showVideo
                    ? "▲ HIDE VIDEO"
                    : "📺 WATCH VIDEO"}
                </button>

                {showVideo &&
                  currentSong.youtubeId && (
                    <div className="youtube-video">
                      <iframe
                        src={`https://www.youtube.com/embed/${currentSong.youtubeId}?rel=0`}
                        title={currentSong.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                  )}

                <div className="player-note">
                  AUDIO MODE • VIDEO OPTIONAL
                </div>

              </div>

            </div>

            <div className="cassette-bottom">

              <span>
                SONG • CINEMA • MEMORY
              </span>

              <button
                onClick={closePlayer}
              >
                STOP & CLOSE
              </button>

            </div>

          </section>
        )}

      {/* ===================================================
          MINI PLAYER
         =================================================== */}

      {currentSong &&
        !showFullPlayer && (
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
                  {currentSong.movie} •{" "}
                  {currentSong.year}
                </span>
              </div>

            </div>

            <div className="mini-controls">

              <button
                onClick={playPrevious}
              >
                ◀
              </button>

              <button
                onClick={togglePlay}
              >
                {playing ? "❚❚" : "▶"}
              </button>

              <button
                onClick={playNext}
              >
                ▶
              </button>

            </div>

            <div className="mini-duration">

              <span>
                {formatTime(currentTime)}
              </span>

              <div className="mini-progress">
                <div
                  style={{
                    width: duration
                      ? `${Math.min(
                          100,
                          (currentTime /
                            duration) *
                            100
                        )}%`
                      : "0%",
                  }}
                ></div>
              </div>

              <span>
                {formatTime(duration)}
              </span>

            </div>

            <button
              className="mini-open"
              onClick={() =>
                setShowFullPlayer(true)
              }
            >
              📻 DECK
            </button>

            <button
              className="mini-close"
              onClick={closePlayer}
            >
              ✕
            </button>

          </section>
        )}

    </main>
  );
}

/* =========================================================
   SONG CARD
   ========================================================= */

function SongCard({ song, onPlay }) {
  return (
    <div className="song-card">

      <div className="song-icon">
        ♫
      </div>

      <div className="song-info">

        <h3>{song.title}</h3>

        <p>{song.movie}</p>

        <small>
          {song.year} • {song.era}
        </small>

      </div>

      <button
        className="play-button"
        onClick={() => onPlay(song)}
      >
        ▶
      </button>

    </div>
  );
}

export default App;