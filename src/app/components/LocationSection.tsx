"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeSlide = (direction: "left" | "right") => ({
  hidden: { opacity: 0, x: direction === "left" ? -100 : 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
});

export default function LocationSection() {
  return (
    <div className="bg-[#f8f1e5]  pt-16 pb-24 flex flex-col justify-center items-center">
      <motion.h2
        className="font-highspirited md:text-7xl text-6xl pb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Dónde y Cuándo
      </motion.h2>

      {/* ✝️ Ceremonia Religiosa (entra desde la izquierda) */}
      <motion.div
        className="marco max-w-[475px] w-full mb-16"
        variants={fadeSlide("left")}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div
          className="w-full h-[350px]"
          style={{
            background: "url(/iglesia.jpeg)",
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        ></div>
        <div className="text-center px-4 py-10">
          <p className="font-highspirited md:text-6xl text-6xl pb-8">
            Ceremonia Religiosa
          </p>
          <p className="py-3 md:text-2xl text-xl">
            Templo de San José de Tateposco
          </p>
          <p className="py-3 md:text-xl text-md">4:30 PM</p>
          <p className="py-3 md:text-xl text-md">C. Francisco I. Madero 38</p>
          <div className="my-5">
            <Link
              className="relative inline-block px-8 py-4 md:text-xl text-md text-white font-semibold rounded-full
                bg-gradient-to-r from-[#dcb020] to-[#D4AF37]
                shadow-lg shadow-[#d4af3766]
                transition-all duration-300 ease-in-out
                hover:shadow-xl hover:scale-105 hover:from-[#dcb020] hover:to-[#D4AF37]
                focus:ring-2 focus:ring-offset-2 focus:ring-[#D4AF37]"
              href="https://maps.app.goo.gl/Ge5ruqzjQht7m1Vx5"
              target="_blank"
            >
              Ver Mapa
            </Link>
          </div>
        </div>
      </motion.div>

      {/* 🎉 Recepción (entra desde la derecha) */}
      <motion.div
        className="marco max-w-[475px] w-full"
        variants={fadeSlide("right")}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div
          className="w-full h-[350px]"
          style={{
            background: "url(/evento.jpeg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="text-center px-4 py-10">
          <p className="font-highspirited md:text-6xl text-6xl pb-8">
            Recepción
          </p>
          <p className="py-3 md:text-2xl text-xl">Salón Alvento&#39;s</p>
          <p className="py-3 md:text-xl text-md">6:00 PM</p>
          <p className="py-3 md:text-xl text-md">Av. Patria Ote. 211B</p>
          <div className="my-5">
            <Link
              className="relative inline-block px-8 py-4 md:text-xl text-md text-white font-semibold rounded-full
                bg-gradient-to-r from-[#dcb020] to-[#D4AF37]
                shadow-lg shadow-[#d4af3766]
                transition-all duration-300 ease-in-out
                hover:shadow-xl hover:scale-105 hover:from-[#dcb020] hover:to-[#D4AF37]
                focus:ring-2 focus:ring-offset-2 focus:ring-[#D4AF37]"
              href="https://maps.app.goo.gl/7VZjTTC1obHgHD6R6"
              target="_blank"
            >
              Ver Mapa
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
