"use client";

import { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

const LoveMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => {
          console.warn(
            "Playback was prevented. User interaction may be needed to start audio.",
            error
          );
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center space-x-2">
      <audio
        ref={audioRef}
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ed-Sheeran-Perfect-Instrumental-Prod.-By-benny-blanco-Ed-Sheeran-Will-Hicks-E8nUXzC6PyWR65STOv9ZU4nIv8nNH3.mp3"
        loop
      />
      <button
        onClick={togglePlay}
        className="bg-red-500 hover:bg-red-600 text-white rounded-full p-3 shadow-lg transition-colors duration-200"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? <Pause size={24} /> : <Play size={24} />}
      </button>
      <button
        onClick={toggleMute}
        className="bg-pink-500 hover:bg-pink-600 text-white rounded-full p-3 shadow-lg transition-colors duration-200"
        aria-label={isMuted ? "Unmute music" : "Mute music"}
      >
        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
      </button>
    </div>
  );
};

export default LoveMusic;
