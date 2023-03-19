import React from "react";
import { svg } from "../../static/svg";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  setSongs,
  setIsPlaying,
  setCurrentSong,
  setSongInfo,
} from "../../redux/songSlice";
import { useAudioPlayer } from "../../hooks/useAudioPlayer";
import { activeSongHandler } from "../../utils/activeSongHandler";
import "./Player.css";

const Player = ({ audioRef }) => {
  const dispatch = useDispatch();
  const { songs, currentSong, isPlaying, songInfo } = useSelector(
    (state) => state.song
  );

  const playSongHandler = async () => {
    isPlaying ? await audioRef.current.pause() : await audioRef.current.play();
    dispatch(setIsPlaying(!isPlaying));
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const nextSong = () => {
    let currentIndex = songs.findIndex(
      (song) => song.name === currentSong.name
    );
    const songToUpdate = songs[(currentIndex + 1) % songs.length];

    dispatch(setCurrentSong(songToUpdate));
    activeSongHandler(songToUpdate, songs, dispatch, setSongs);
  };

  const prevSong = () => {
    let currentIndex = songs.findIndex(
      (song) => song.name === currentSong.name
    );
    let temp = songs[currentIndex];

    temp =
      (currentIndex - 1) % songs.length === -1
        ? songs[songs.length - 1]
        : songs[(currentIndex - 1) % songs.length];

    dispatch(setCurrentSong(temp));
    activeSongHandler(temp, songs, dispatch, setSongs);
  };

  useAudioPlayer(audioRef, currentSong, isPlaying);

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    dispatch(setSongInfo({ ...songInfo, currentTime: e.target.value }));
  };

  return (
    <div className="player-container">
      <p className="song-name">{currentSong.name}</p>
      <p className="artist-name">{currentSong.artist}</p>
      <div className="track">
        <span className="song-time">{getTime(songInfo.currentTime)}</span>
        <input
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
