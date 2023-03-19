import React, { useRef, useState } from "react";
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
  const [showContentAfterHeading, setShowContentAfterHeading] = useState(false);

  const handleShowContent = () => {
    setShowContentAfterHeading(true);
  };

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
      <div className="portfolio-content-container hero-section">
        <div className="main-page-song-library-container">
          <SongLibrary audioRef={audioRef} />
        </div>
        <div>
          <div className="svg-container">
            {isPlaying ? renderHero() : svg["Hero"]}
          </div>
          <Cat awake={isPlaying} />
        </div>
        <TypeWriter
          handleShowContent={handleShowContent}
          showContentAfterHeading={showContentAfterHeading}
        />
        <div className="main-page-music-container">
          <Player audioRef={audioRef} />
        </div>
      </div>
      {true && (
        <>
          <div
            className="portfolio-content-container about-me-section"
            ref={revealRef}
          >
            <AboutMe />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
