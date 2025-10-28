"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ConfirmAttendance() {
  const [name, setName] = useState<string>("");
  const [guests, setGuests] = useState<number>(1);

  useEffect(() => {
    // Leer desde params o localStorage o valores por defecto
    const storedName =  localStorage.getItem("inv_name") || "";
    const storedGuests =
      Number(localStorage.getItem("inv_guests")) ||
      1;

    setName(storedName);
    setGuests(storedGuests);

  }, []);

  const handleConfirm = () => {
    const message = `${name || "Invitado"}, confirmo asistencia para ${guests} ${guests > 1 ? "personas" : "persona"}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "+523315641639";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="flex flex-col items-center justify-center pt-16 pb-24 bg-[#f8f1e5] px-4 text-center">
      <motion.h2
        className="font-highspirited md:text-7xl text-6xl pb-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Gracias por acompañarme en <br></br>este día tan especial <br></br>
        <span className="text-[20px]">♥</span>
      </motion.h2>

      <h2 className="text-5xl md:text-6xl mb-6 font-highspirited">
        Invitación {name && <> para <br></br>{name}</>}
      </h2>
      <p className="text-lg mb-10">
        {name
          ? `${guests} ${guests > 1 ? "personas" : "persona"}`
          : "1 persona"}
      </p>

      <button
        onClick={handleConfirm}
        className="relative inline-block px-8 py-4 md:text-xl text-md text-white font-semibold rounded-full bg-gradient-to-r from-[#dcb020] to-[#D4AF37] shadow-lg shadow-[#d4af3766] transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 hover:from-[#dcb020] hover:to-[#D4AF37] focus:ring-2 focus:ring-offset-2 focus:ring-[#D4AF37]"
      >
        Confirmar asistencia
      </button>
    </div>
  );
}
