import React, { useRef, useState, useEffect } from "react";
import "./App.css";
import Cat from "./components/Cat/Cat";
import IntroHeading from "./components/IntroHeading/IntroHeading";
import { svg } from "./static/svg";
import { playlist } from "./static/playlist";
import Player from "./components/Player/Player";
import SongLibrary from "./components/SongLibrary/SongLibrary";

function App() {
  const [songs, setSongs] = useState(playlist);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(playlist[0]);
  const audioRef = useRef(null);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    percentage: 0,
  });

  const timeHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;

    const roundCurr = Math.round(e.target.currentTime);
    const roundDuration = Math.round(e.target.duration);
    const percentage = Math.round((roundCurr / roundDuration) * 100);

    setSongInfo({
      currentTime,
      duration,
      percentage,
    });
  };

  const activeSongHandler = (nextPrev) => {
    const newSongs = songs.map((newSong) => {
      if (newSong.name === nextPrev.name) {
        return {
          ...newSong,
          active: true,
        };
      } else {
        return {
          ...newSong,
          active: false,
        };
      }
    });
    setSongs(newSongs);
    audioRef.current.play();
  };

  const songEndHandler = () => {
    const currentIndex = songs.findIndex(
      (song) => song.name === currentSong.name
    );
    setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    activeSongHandler(songs[(currentIndex + 1) % songs.length]);
  };

  useEffect(() => {
    if (!currentSong) return;
    const nextSong = async () => {
      if (isPlaying) await audioRef.current.play();
    };

    nextSong();
  }, [currentSong, isPlaying]);

  return (
    <div>
      <audio
        ref={audioRef}
        src={currentSong.audio}
        onTimeUpdate={timeHandler}
        onLoadedMetadata={timeHandler}
        onEnded={songEndHandler}
      ></audio>
      <div className="main-container">
        <div className="song-library-container">
          <SongLibrary
            songs={songs}
            setCurrentSong={setCurrentSong}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setSongs={setSongs}
          />
        </div>

        <div className="hero-container">
          <div className="svg-container">
            {isPlaying ? svg["HeroAwake"] : svg["Hero"]}
          </div>
          <Cat awake={isPlaying} />
        </div>
        <IntroHeading />
        <div className="music-container">
          <Player
            audioRef={audioRef}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
            songs={songs}
            setSongs={setSongs}
            songInfo={songInfo}
            setSongInfo={setSongInfo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
