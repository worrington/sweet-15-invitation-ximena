"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ElegantEnvelope() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    if (open) return;
    setOpen(true);
    localStorage.setItem("playMusic", "true");
    setTimeout(() => router.push("/mis-xv"), 1);
  };

  useEffect(() => {
    // Obtener parámetros de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const nameParam = urlParams.get("name");
    const guestsParam = urlParams.get("guests");

    // Guardar en localStorage si existen
    if (nameParam) localStorage.setItem("inv_name", nameParam);
    if (guestsParam) localStorage.setItem("inv_guests", guestsParam);

    // Limpiar los parámetros de la URL
    if (nameParam || guestsParam) {
      const cleanUrl = window.location.origin + window.location.pathname;
      window.history.replaceState({}, "", cleanUrl);
    }
  }, []);

  return (
    <div
        style={{background: "url('/1-bg.png')", backgroundPosition: "center", backgroundSize: "cover"}}
        className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#ffd6bb73] to-[#fabb9385] overflow-hidden">

      {/* Texto de invitación */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-20"
      >
        <p className="md:text-6xl text-5xl font-serif font-highspirited">Estas <span className="text-[#D4AF37] my-2 font-highspirited ">
          cordialmente
        </span> invitado</p>
      </motion.div>

      {/* Sobre */}
      <motion.div
        className="relative mt-10 cursor-pointer z-30"
        onClick={handleClick}
        whileHover={{ scale: 1.05 }}
      >
        {/* Imagen del sobre cerrado */}
        <motion.img
          src="/icono-sobre.png"
          alt="envelope"
          className="w-80 drop-shadow-lg"
          initial={{ rotateX: 0 }}
          animate={open ? { rotateX: 180 } : { rotateX: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          style={{
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
          }}
        />
      </motion.div>
    </div>
  );
}
