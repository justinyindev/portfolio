import React, { useEffect } from "react";
import "./Song.css";

const Song = ({
  song,
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
}) => {
  const selectSong = async () => {
    await setCurrentSong(song);
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
    setSongs(newSongs);
  };

  useEffect(() => {
    if (!songs) return;
    const play = async () => {
      if (isPlaying) await audioRef.current.play();
    };

    play();
  }, [songs, isPlaying, audioRef]);

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
