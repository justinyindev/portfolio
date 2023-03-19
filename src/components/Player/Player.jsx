import React, { useEffect } from "react";
import { svg } from "../../static/svg";
import Button from "../Button/Button";
import "./Player.css";

const Player = ({
  currentSong,
  setCurrentSong,
  setIsPlaying,
  isPlaying,
  audioRef,
  songInfo,
  setSongs,
  songs,
  setSongInfo,
}) => {
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
  };

  const playSongHandler = () => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const nextSong = async () => {
    let currentIndex = songs.findIndex(
      (song) => song.name === currentSong.name
    );
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    activeSongHandler(songs[(currentIndex + 1) % songs.length]);
  };

  const prevSong = async () => {
    let currentIndex = songs.findIndex(
      (song) => song.name === currentSong.name
    );
    if ((currentIndex - 1) % songs.length === -1) {
      await setCurrentSong(songs[songs.length - 1]);
      activeSongHandler(songs[currentIndex - 1]);
    } else {
      await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
      activeSongHandler(songs[(currentIndex - 1) % songs.length]);
    }
  };

  useEffect(() => {
    if (!currentSong) return;
    const nextSong = async () => {
      if (isPlaying) await audioRef.current.play();
    };

    nextSong();
  }, [currentSong, isPlaying, audioRef]);

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  return (
    <div className="player-container">
      <p className="song-name">{currentSong.name}</p>
      <p className="artist-name">{currentSong.artist}</p>
      <div className="track">
        <span className="song-time">{getTime(songInfo.currentTime)}</span>
        <input
          id="mySlider"
          className="slider"
          min={0}
          max={songInfo.duration || 0}
          value={songInfo.currentTime}
          onChange={dragHandler}
          type="range"
        />
        <span className="song-time">{getTime(songInfo.duration)}</span>
      </div>
      <div className="play-control">
        <Button content={svg["Prev"]} handleClick={prevSong} />
        <Button
          content={isPlaying ? svg["Pause"] : svg["Play"]}
          handleClick={playSongHandler}
        />
        <Button content={svg["Next"]} handleClick={nextSong} />
      </div>
    </div>
  );
};

export default Player;
