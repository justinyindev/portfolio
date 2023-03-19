import React, { useState } from "react";
import { svg } from "../../static/svg";
import Song from "../Song/Song";
import "./SongLibrary.css";

const SongLibrary = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
}) => {
  const [showSongList, setShowSongList] = useState(false);

  return (
    <div
      className="songlib-container"
      style={{
        transform: showSongList ? "translateX(0%)" : "translateX(100%)",
      }}
    >
      <div
        className="song-list-toggle"
        onClick={() => setShowSongList(!showSongList)}
      >
        {svg["Playlist"]}
      </div>
      <div className="library-container">
        <div className="song-list">
          {songs.map((song) => (
            <Song
              song={song}
              songs={songs}
              setCurrentSong={setCurrentSong}
              audioRef={audioRef}
              isPlaying={isPlaying}
              setSongs={setSongs}
              key={song.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SongLibrary;
