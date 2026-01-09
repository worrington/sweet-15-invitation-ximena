"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ConfirmAttendance() {
  const [name, setName] = useState<string>("");
  const [guests, setGuests] = useState<number>(1);
  const [minor, setMinor] = useState<number>(0);
  const [table, setTable] = useState<string>("");

  useEffect(() => {
    // Leer desde params o localStorage o valores por defecto
    const storedName =  localStorage.getItem("inv_name") || "";
    const storedTable =  localStorage.getItem("table") || "";
    const storedGuests = Number(localStorage.getItem("inv_guests")) || 1;
    const storedMinor = Number(localStorage.getItem("inv_minor")) || 0;

    setName(storedName);
    setGuests(storedGuests);
    setMinor(storedMinor)
    setTable(storedTable);

  }, []);

  const handleConfirm = () => {
    const message = `${name || "Invitado"}, confirmo asistencia para ${guests} ${guests > 1 ? "Adultos" : "Adulto"} ${minor > 0 && minor === 1 ? "y 1 Niño":  `y ${minor} Niños`}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "+523315641639";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="flex flex-col items-center justify-center pt-16 pb-24 bg-[#f8f1e5] px-4 text-center">
      <motion.h2
        className="font-highspirited md:text-7xl text-6xl pb-16 text-center max-w-[360] w-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Gracias por acompañarme en este día tan especial <br></br>
        <span className="text-[20px]">♥</span>
      </motion.h2>

      <h2 className="text-5xl md:text-6xl mb-6 font-highspirited">
        Invitación {name && <> para <br></br>{name}</>}
      </h2>
      <p className="text-2xl">
        {name
          ? `${guests} ${guests > 1 ? "Adultos" : "Adulto"}`
          : "1 Adulto"}
      </p>
      {minor > 0 && <p className="text-2xl">{minor === 1 ? "y 1 niño" : `y ${minor} niños`}</p>}

      <p className="text-4xl pt-12">Mesa asignada: {table || "Verificar en recepción"}</p>

    </div>
  );
}
