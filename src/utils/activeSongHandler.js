export const activeSongHandler = (songToUpdate, songs, dispatch, setSongs) => {
  const newSongs = songs.map((newSong) => {
    if (newSong.name === songToUpdate.name) {
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
