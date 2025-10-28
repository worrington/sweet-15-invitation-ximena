"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Event {
  time: string;
  title: string;
  icon: string;
}

interface TimelineProps {
  events: Event[];
}

function EventItem({
  event,
  isActive,
}: {
  event: Event;
  isActive: boolean;
}) {
  return (
    <div className="relative flex items-center justify-center w-full min-h-[350px]">
      {/* Columna izquierda: línea + punto */}
      <div className="flex flex-col items-center relative w-1/3">
        <div
          className={`relative w-12 h-12 rounded-full border-4 flex items-center justify-center transition-all duration-300 z-10 ${
            isActive
              ? "bg-[#ecb498] border-[#ecb498]"
              : "bg-gray-200 border-gray-200"
          }`}
        >
          <span
            className={`text-white text-xl transition-transform duration-300 ${
              isActive ? "scale-110" : "scale-100"
            }`}
          >
            ♥
          </span>
        </div>
      </div>

      {/* Columna derecha: contenido */}
      <div
        className={`flex flex-col items-start justify-center w-2/3 transition-all duration-700 ${
          isActive ? "opacity-100 translate-y-0" : "opacity-10 translate-y-6"
        }`}
      >
        <p className="text-4xl font-highspirited">{event.time}</p>
        <h3 className="md:text-6xl text-5xl font-highspirited">{event.title}</h3>
        <div className="relative w-24 h-24 mt-4">
          <Image
            src={event.icon}
            alt={event.title}
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default function Timeline({ events }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const pointRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const screenCenter = window.innerHeight / 2 + 150;
      let lastActiveIndex = -1;

      // Revisamos cada punto para ver cuál ya pasó el centro
      pointRefs.current.forEach((point, index) => {
        if (!point) return;
        const rect = point.getBoundingClientRect();
        const pointCenter = rect.top + rect.height / 2;

        if (pointCenter <= screenCenter) {
          lastActiveIndex = index;
        }
      });

      setActiveIndex(lastActiveIndex);

      // Si hay puntos activos, calculamos la altura exacta de la línea
      if (lastActiveIndex >= 0) {
        const lastPoint = pointRefs.current[lastActiveIndex];
        if (lastPoint && lineRef.current && containerRef.current) {
          const containerRect = containerRef.current.getBoundingClientRect();
          const lastPointRect = lastPoint.getBoundingClientRect();

          // Distancia entre el inicio del contenedor y el centro del último punto activo
          const newHeight =
            lastPointRect.top +
            lastPointRect.height / 2 -
            containerRect.top;

          setLineHeight(newHeight);
        }
      } else {
        setLineHeight(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <>
    <motion.h2
      className="font-highspirited md:text-7xl text-6xl pb-16 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      Detalles de la celebración
    </motion.h2>
    <div
      ref={containerRef}
      className="relative flex flex-col items-center justify-center max-w-4xl mx-auto"
    >
      {/* Línea base */}
      <div
        ref={lineRef}
        className="absolute left-[16.5%] top-[151px] bottom-[151px] h-auto w-[3px] bg-gray-200 overflow-hidden"
      >
        {/* Línea de progreso */}
        <div
          className="absolute left-0 top-0 w-full bg-[#e9a794] transition-all duration-200"
          style={{ height: `${lineHeight}px`, borderRadius: "2px" }}
        />
      </div>

      {/* Eventos */}
      <div className="w-full">
        {events.map((event, i) => (
          <div
            key={i}
            ref={(el) => {
              pointRefs.current[i] = el;
            }}
            className="relative"
          >
            <EventItem event={event} isActive={i <= activeIndex} />
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
