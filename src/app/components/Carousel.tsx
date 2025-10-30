"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/sweet-15-invitation-ximena/galeria/ximena1.jpg",
  "/sweet-15-invitation-ximena/galeria/ximena3.jpg",
  "/sweet-15-invitation-ximena/galeria/ximena4.jpg",
  "/sweet-15-invitation-ximena/galeria/ximena5.jpg",
  "/sweet-15-invitation-ximena/galeria/ximena6.jpg",
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [expanded, setExpanded] = useState<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Variables para swipe (táctil o mouse)
  const startX = useRef<number | null>(null);
  const endX = useRef<number | null>(null);
  const isDragging = useRef<boolean>(false);

  // Auto-play cada 3.5s
  useEffect(() => {
    if (expanded !== null) return;
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearTimeout(timeoutRef.current!);
  }, [current, expanded]);

  // Cambiar de slide
  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  // Detectar clic en imagen
  const handleClick = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  // --------- EVENTOS TOUCH / DRAG ---------
  const handleStart = (clientX: number) => {
    startX.current = clientX;
    isDragging.current = true;
  };

  const handleMove = (clientX: number) => {
    if (!isDragging.current) return;
    endX.current = clientX;
  };

  const handleEnd = () => {
    if (!isDragging.current || startX.current === null || endX.current === null)
      return;

    const distance = startX.current - endX.current;
    if (distance > 50) nextSlide();
    else if (distance < -50) prevSlide();

    startX.current = null;
    endX.current = null;
    isDragging.current = false;
  };
  // ---------------------------------------

  return (
    <div
      className="relative w-full overflow-hidden py-8 select-none invitation-gallery"
      // Touch events
      onTouchStart={(e) => handleStart(e.touches[0].clientX)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      onTouchEnd={handleEnd}
      // Mouse events
      onMouseDown={(e) => handleStart(e.clientX)}
      onMouseMove={(e) => handleMove(e.clientX)}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
    >
      {/* Carrusel principal */}
      <motion.h2
        className="font-highspirited md:text-7xl text-6xl py-8 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Galeria
      </motion.h2>
      <div
        className="flex transition-transform duration-700 ease-in-out h-[500px]"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full flex justify-center items-center px-2"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              onClick={() => handleClick(index)}
              className={`relative rounded-2xl cursor-pointer shadow-lg transition-all duration-500 ${
                expanded === index ? "z-50 scale-105" : "scale-100"
              }`}
            >
              <Image
                src={src}
                alt={`Imagen ${index + 1}`}
                width={800}
                height={500}
                className="rounded-2xl object-cover w-full h-[400px]"
              />
            </motion.div>
          </div>
        ))}
      </div>

      {/* Indicadores de puntos */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrent(index)}
            aria-label={`Ir a la imagen ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-all ${
              current === index ? "bg-[#d4af37]" : "bg-gray-400"
            }`}
          >
            <span className="sr-only">{`Imagen ${index + 1}`}</span>
          </button>
        ))}
      </div>

      {/* Imagen expandida */}
      <AnimatePresence>
        {expanded !== null && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setExpanded(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              <Image
                src={images[expanded]}
                alt={`Imagen ampliada ${expanded + 1}`}
                width={1000}
                height={700}
                className="rounded-3xl shadow-2xl max-h-[90vh] object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
