import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { svg } from "../../static/svg";
import Song from "../Song/Song";
import "./SongLibrary.css";

const SongLibrary = ({ audioRef }) => {
  const { songs } = useSelector((state) => state.song);
  const [showSongList, setShowSongList] = useState(false);
  const songLibraryRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        songLibraryRef.current &&
        !songLibraryRef.current.contains(event.target)
      ) {
        setShowSongList(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="song-library-wrapper">
      <div
        className="song-library"
        ref={songLibraryRef}
        style={{
          transform: showSongList ? "translateX(0%)" : "translateX(-100%)",
        }}
      >
        <div
          className="song-list-toggle"
          onClick={() => setShowSongList(!showSongList)}
        >
          {svg["Playlist"]}
        </div>
        <div className="song-list-container">
          <div className="song-list">
            {songs.map((song, index) => (
              <Song song={song} audioRef={audioRef} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongLibrary;
