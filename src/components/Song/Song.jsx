import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAudioPlayer } from "../../hooks/useAudioPlayer";
import { setCurrentSong, setSongs } from "../../redux/songSlice";
import "./Song.css";

const Song = ({ song, audioRef }) => {
  const { songs, isPlaying, currentSong } = useSelector((state) => state.song);
  const dispatch = useDispatch();

  const selectSong = () => {
    dispatch(setCurrentSong(song));
    const newSongs = songs.map((newSong) => {
      if (newSong.name === song.name) {
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
    dispatch(setSongs(newSongs));
  };

  useAudioPlayer(audioRef, currentSong, isPlaying);

  return (
    <div
      className={`song-container ${song.active ? "active" : ""}`}
      onClick={selectSong}
    >
      <img className="song-image" src={song.cover} alt={song.name}></img>
      <div className="song-description">
        <h1 className="song-title">{song.name}</h1>
        <p className="song-artist">{song.artist}</p>
      </div>
    </div>
  );
};

export default Song;
