import React, { useRef } from "react";
import { Link } from "react-scroll";
import "./App.css";
import Cat from "./components/Cat/Cat";
import TypeWriter from "./components/TypeWriter/TypeWriter";
import { svg } from "./static/svg";
import Player from "./components/Player/Player";
import SongLibrary from "./components/SongLibrary/SongLibrary";
import AboutMe from "./components/AboutMe/AboutMe";
import { useDispatch, useSelector } from "react-redux";
import { setSongs, setCurrentSong, setSongInfo } from "./redux/songSlice";
import { useAudioPlayer } from "./hooks/useAudioPlayer";
import { activeSongHandler } from "./utils/activeSongHandler";

const App = () => {
  const dispatch = useDispatch();
  const { songs, isPlaying, currentSong } = useSelector((state) => state.song);
  const audioRef = useRef(null);
  const revealRef = useRef(null);

  const timeHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;

    const roundCurr = Math.round(e.target.currentTime);
    const roundDuration = Math.round(e.target.duration);
    const percentage = Math.round((roundCurr / roundDuration) * 100);

    dispatch(
      setSongInfo({
        currentTime,
        duration,
        percentage,
      })
    );
  };

  const songEndHandler = () => {
    const currentIndex = songs.findIndex(
      (song) => song.name === currentSong.name
    );
    const temp = songs[(currentIndex + 1) % songs.length];

    dispatch(setCurrentSong(temp));
    activeSongHandler(temp, songs, dispatch, setSongs);
  };

  useAudioPlayer(audioRef, currentSong, isPlaying);

  const renderHero = () => {
    if (currentSong.name === "Crossing Field") {
      return svg["HeroSAO"];
    } else {
      return svg["HeroAwake"];
    }
  };

  return (
    <div>
      <audio
        ref={audioRef}
        src={currentSong.audio}
        onTimeUpdate={timeHandler}
        onLoadedMetadata={timeHandler}
        onEnded={songEndHandler}
      ></audio>

      <div className="section-container hero-section">
        <SongLibrary audioRef={audioRef} />
        <div className="hero-svg-container">
          {isPlaying ? renderHero() : svg["Hero"]}
          <Cat awake={isPlaying} />
        </div>
        <TypeWriter />
        <Link
          activeClass="active"
          to="about-me-section"
          spy={true}
          smooth={true}
          duration={500}
        >
          <div className="scroll-indicator-container">
            <div className="scroll-indicator"></div>
          </div>
        </Link>
        <Player audioRef={audioRef} />
      </div>

      <div className="section-container" id="about-me-section" ref={revealRef}>
        <AboutMe />
      </div>
    </div>
  );
};

export default App;
