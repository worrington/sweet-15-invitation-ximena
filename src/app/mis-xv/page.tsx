/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import Countdown from "../components/Countdown";
import Image from "next/image";
import Timeline from "../components/Timeline";
import LocationSection from '../components/LocationSection';
import ConfirmAttendance from "../components/ConfirmAttendance";
import Carousel from "../components/Carousel";
import FloatingMusicPlayer from "../components/FloatingMusicPlayer";

const url = "https://worrington.github.io/sweet-15-invitation-ximena";

const events = [
  { time: "16:30 hrs.", title: "Ceremonia Religiosa", icon: `${url}/iglesiaIcon.png` },
  { time: "18:00 hrs.", title: "Recepción", icon: `${url}/brindis.png` },
  { time: "19:00 hrs.", title: "Presentación y Vals", icon: `${url}/presentacionIcon.png` },
  { time: "20:00 hrs.", title: "Cena", icon: `${url}/cenaIcon.png` },
  { time: "20:30 hrs.", title: "A bailar", icon: `${url}/baileIcon.png` },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay, ease: [0.22, 1, 0.36, 1] as any},
  }),
};


export default function MyXV() {
  return (
    <div className="min-h-screen gap-10">
      <main>
        <FloatingMusicPlayer />
        <div
            style={{background: "url('/sweet-15-invitation-ximena/1-bg.png')", backgroundPosition: "center", backgroundSize: "cover"}}
            className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-b from-[#ffd6bb73] to-[#fabb9385] overflow-hidden"
        >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center z-20"
            >
              <p className="text-[20px] text-[#D4AF37] text-center" style={{letterSpacing: "5px"}}>MIS XV AÑOS</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center z-20"
            >
              <p className="mea-culpa md:text-8xl text-7xl pt-5 text-[#D4AF37]">Yara Ximena</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
              className="text-center z-20"
            >
              <p className="text-[20px] text-[#D4AF37] text-center pt-9"  style={{letterSpacing: "5px"}}>DOMINGO <br></br>11 DE ENERO 2026</p>
            </motion.div>
        </div>
        <div className="md:p-16 py-16 px-10 text-center bg-[#ecb498e6] flex justify-center">
          <motion.h2
            className="text-white lg:text-4xl md:text-4xl text-2xl m-0 text-center md:w-[60%]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true, amount: "all" }}
          >
            Te invito a celebrar el inicio de una nueva etapa en mi vida, llena de sueños,
            metas y grandes logros.
          </motion.h2>
        </div>
        <div className="md:p-16  pt-16 pb-24 px-4 text-center flex flex-col justify-center items-center invitation-section">
          {/* ✨ Título principal */}
          <motion.h2
            className="font-highspirited md:text-6xl text-5xl max-w-[500px]"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.1}
          >
            Con la bendición de Dios y en compañía de mis padres y padrinos
          </motion.h2>


        <div className="h-[600px] w-full invitation-section-persons">
          {/* 👨‍👩‍👧 Mis Padres */}
          <motion.div
            className="pt-20"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.4}
          >
            <p className="md:text-6xl text-5xl font-highspirited md:mb-8 mb-4">Mis Padres</p>
            <motion.p className="md:text-2xl text-xl my-2 max-w-full" variants={fadeUp} custom={0.6}>
              David Eduardo Coronado
            </motion.p>
            <motion.p className="md:text-2xl text-xl my-2 max-w-full" variants={fadeUp} custom={0.8}>
              Elizabeth Delgado
            </motion.p>
          </motion.div>

          {/* ✝️ Mis Padrinos */}
          <motion.div
            className="pt-20"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={1}
          >
            <p className="md:text-6xl text-5xl font-highspirited md:mb-8 mb-4">Mis Padrinos</p>
            <motion.p className="md:text-2xl text-xl my-2 max-w-full" variants={fadeUp} custom={1.2}>
              Luis Antonio Delgado
            </motion.p>
            <motion.p className="md:text-2xl text-xl my-2 max-w-full" variants={fadeUp} custom={1.4}>
              Elia Guadalupe Hernández
            </motion.p>
          </motion.div>
        </div>

          {/* 💌 Mensaje final */}
          <motion.p
            className="pt-20 md:text-6xl text-5xl font-highspirited max-w-[400px]"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={1.8}
          >
            Nos complace invitarte a ser parte de este gran día.
          </motion.p>
        </div>
        <div>
          <Countdown targetDate="2026-01-11T16:30:00"/>
        </div>
        <LocationSection />
        <div className="bg-[#f8f1e5] pt-16 flex flex-col justify-center items-center">
          <Timeline events={events} />
        </div>
        <div className="md:px-16 md:py-20  py-16 px-10 text-center bg-[#ecb498e6] flex flex-col justify-center items-center">
          <motion.h2
            className="md:text-8xl text-6xl font-script mb-10 z-10 font-highspirited text-white"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true, amount: "all" }}
          >
            Regalos
          </motion.h2>
          <motion.h2
            className="text-white lg:text-3xl md:text-2xl text-2xl m-0 text-center md:w-[60%] pb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true, amount: "all" }}
          >
            Mi mejor regalo es tu presencia pero si quieres tener algún detalle conmigo te comparto la siguiente opción:
          </motion.h2>

          <motion.p
            className="md:text-5xl text-4xl font-script mb-2 z-10 font-highspirited text-white"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true, amount: "all" }}
          >
            ¡Lluvia de Sobres!
          </motion.p>
          <div className="relative w-40 h-40 mt-4">
            <Image
              src={`${url}/sobre.png`}
              alt="lluvia de sobres"
              fill
              className="object-contain"
            />
          </div>

          <motion.p
            className="md:text-2xl text-xl font-script mb-2 z-10 openSans text-white"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true, amount: "all" }}
          >
            Es la tradición de regalar dinero <br></br>dentro de un sobre al festejado el día del evento
          </motion.p>
        </div>
        <div
          className="flex flex-col items-center  pt-16 pb-24 dress-code-section"
        >
          <motion.h2
            className="font-highspirited md:text-7xl text-6xl pb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Código de Vestimenta
          </motion.h2>

          <Image src={`${url}/dress-code.png`} alt="alt" width={250} height={250} />
          <h2 className="text-2xl openSans py-4">Formal</h2>
          <p className="mt-4 md:text-6xl text-4xl text-gray-700 font-highspirited">
            Colores reservados para la quinceañera
          </p>

          {/* Colores de la quinceañera */}
          <div className="flex gap-8 my-6">
            <div className="flex flex-col items-center">
              <div
                className="w-20 h-20 rounded-full border-4 border-white shadow-md"
                style={{ backgroundColor: "#FFB38A" }} // durazno
              ></div>
              <span className="mt-2 text-base font-medium text-gray-700 openSans">Durazno</span>
            </div>
            <div className="flex flex-col items-center">
              <div
                className="w-20 h-20 rounded-full border-4 border-white shadow-md"
                style={{ backgroundColor: "#D4AF37" }} // dorado
              ></div>
              <span className="mt-2 text-base font-medium text-gray-700 openSans">Dorado</span>
            </div>
          </div>
        </div>
        <div>
         <ConfirmAttendance />
        </div>

        <Carousel />

      </main>
    </div>
  );
}
