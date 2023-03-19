import { useEffect } from "react";

export const useAudioPlayer = (audioRef, currentSong, isPlaying) => {
  useEffect(() => {
    if (!currentSong) return;
    const nextSong = async () => {
      if (isPlaying) await audioRef.current.play();
    };

    nextSong();
  }, [currentSong, isPlaying, audioRef]);
};
