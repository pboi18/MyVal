"use client";

import { useEffect, useRef, useState } from "react";

const LoveMusic = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [autoplayFailed, setAutoplayFailed] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5; // Set volume to 50%
      const playPromise = audioRef.current.play();

      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn(
            "Autoplay was prevented. User interaction may be needed to start audio.",
            error
          );
          setAutoplayFailed(true);
        });
      }
    }
  }, []);

  return (
    <>
      <audio
        ref={audioRef}
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ed-Sheeran-Perfect-Instrumental-Prod.-By-benny-blanco-Ed-Sheeran-Will-Hicks-E8nUXzC6PyWR65STOv9ZU4nIv8nNH3.mp3"
        loop
      />
      {autoplayFailed && (
        <div className="fixed bottom-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded z-50">
          <p>
            Music autoplay was blocked. Please interact with the page to enable
            music.
          </p>
        </div>
      )}
    </>
  );
};

export default LoveMusic;
