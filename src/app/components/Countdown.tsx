"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CountdownProps {
  targetDate: string;
}

export default function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Convertir fecha a zona horaria de México
    const mexicoTime = new Date(
      new Date(targetDate).toLocaleString("en-US", { timeZone: "America/Mexico_City" })
    ).getTime();

    const interval = setInterval(() => {
      const now = new Date(
        new Date().toLocaleString("en-US", { timeZone: "America/Mexico_City" })
      ).getTime();

      const diff = mexicoTime - now;

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="relative flex flex-col items-center justify-center  pt-16 pb-24 overflow-hidden text-white bg-[#ecb498e6]" style={{textShadow: "0px 2px 6px #cd856d"}}>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="md:text-8xl text-6xl font-script mb-10 z-10 font-highspirited"
      >
        Faltan
      </motion.h1>

      <div className="flex gap-6 text-center z-10">
        {[
          { label: "DÍAS", value: timeLeft.days },
          { label: "HRS", value: timeLeft.hours },
          { label: "MIN", value: timeLeft.minutes },
          { label: "SEG", value: timeLeft.seconds },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="flex flex-col items-center"
          >
            <span className="text-5xl font-semibold text-white">
              {item.value.toString().padStart(2, "0")}
            </span>
            <span className="text-2xl tracking-widest mt-1">{item.label}</span>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-10 text-6xl z-10 font-highspirited"
      >
        Para mis xv años
      </motion.p>
    </div>
  );
}
