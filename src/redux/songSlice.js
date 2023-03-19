import { createSlice } from "@reduxjs/toolkit";
import { playlist } from "../static/playlist";

const songSlice = createSlice({
  name: "song",
  initialState: {
    currentSong: playlist[0],
    isPlaying: false,
    songs: playlist,
    songInfo: { currentTime: 0, duration: 0, percentage: 0 },
  },
  reducers: {
    setSongs: (state, action) => {
      state.songs = action.payload;
    },
    setIsPlaying: (state, action) => {
      state.isPlaying = action.payload;
    },
    setCurrentSong: (state, action) => {
      state.currentSong = action.payload;
    },
    setSongInfo: (state, action) => {
      state.songInfo = action.payload;
    },
  },
});

export const { setSongs, setIsPlaying, setCurrentSong, setSongInfo } = songSlice.actions;

export default songSlice.reducer;
