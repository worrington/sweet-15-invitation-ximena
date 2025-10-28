"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";

export default function FloatingMusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const shouldPlay = localStorage.getItem("playMusic") === "true";
    const audio = new Audio("/song.mp3");
    audio.loop = true;
    audio.volume = 0.7;
    audioRef.current = audio;

    if (shouldPlay) {
      // Solo intenta reproducir si hubo interacción previa
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          console.warn("El navegador bloqueó el autoplay hasta una acción del usuario.");
        });
    }

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <button
        onClick={togglePlay}
        className="bg-[#ecb498] hover:bg-[#e49b7d] text-white rounded-full shadow-lg p-2 transition-all duration-300 flex items-center justify-center"
        title={isPlaying ? "Pausar música" : "Reproducir música"}
      >
        {isPlaying ? <Pause size={28} /> : <Play size={28} />}
      </button>
    </motion.div>
  );
}
