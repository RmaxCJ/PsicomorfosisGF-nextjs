"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Lista de diálogos rotativos
const dialogos = [
  "¡Hola! Soy la ayudante de Gabi. ¿Quieres agendar una sesión o tienes dudas? 🌸",
  "Tomar la decisión de ir a terapia es un gran paso. ¡Aquí estamos para apoyarte! 🌿",
  "Gabi atiende a adultos y adolescentes. ¿Revisamos los paquetes? ✨",
  "Recuerda que la Terapia Gestalt se centra en tu aquí y ahora. 💖",
  "¡Qué bueno verte por aquí! ¿Te ayudo a contactar a Gabi? 🐰",
];

export default function MascotaFlotante() {
  const [isOpen, setIsOpen] = useState(false);
  const [mensajeActual, setMensajeActual] = useState(dialogos[0]);

  // Al pasar el mouse, elegimos un mensaje al azar y abrimos el globo
  const handleMouseEnter = () => {
    const randomMsg = dialogos[Math.floor(Math.random() * dialogos.length)];
    setMensajeActual(randomMsg);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      // El contenedor detecta el mouse. Ocupará el espacio del globo y la mascota.
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Globo de diálogo */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.9 }}
            className="mb-4 bg-white p-4 rounded-2xl shadow-2xl border-[1.5px] border-[#6cada3] max-w-[220px] relative origin-bottom-right"
          >
            <p className="text-sm text-[#0c3f40] font-medium text-center leading-snug">
              {mensajeActual}
            </p>

            <a
              href="https://wa.me/51989529902"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block w-full bg-[#f88f1f] text-white text-xs text-center py-2.5 rounded-xl font-bold shadow-sm hover:bg-orange-500 transition-colors"
            >
              Ir a WhatsApp
            </a>

            {/* Triángulo del globo apuntando a la mascota */}
            <div className="absolute -bottom-2 right-10 w-4 h-4 bg-white border-b-[1.5px] border-r-[1.5px] border-[#6cada3] rotate-45"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contenedor de la mascota con Brillos (Estilo Navi) */}
      <div className="relative w-24 h-32 mt-2 cursor-pointer">
        {/* Brillo 1 (Izquierda Arriba) */}
        <motion.div
          animate={{
            scale: [0.8, 1.3, 0.8],
            opacity: [0.3, 1, 0.3],
            rotate: [0, 90, 180],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute -top-3 -left-3 text-[#f88f1f] text-2xl z-0 pointer-events-none"
        >
          ✨
        </motion.div>

        {/* Brillo 2 (Derecha Medio) */}
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.9, 0.2],
            rotate: [180, 90, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "linear",
            delay: 0.5,
          }}
          className="absolute top-1/2 -right-4 text-[#6cada3] text-xl z-0 pointer-events-none"
        >
          ✨
        </motion.div>

        {/* Conejita flotando */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-full relative z-10 drop-shadow-lg"
        >
          {/* El object-contain y el fondo transparente de tu PNG harán que se vea perfecta */}
          <Image
            src="/img/mascota1.png"
            alt="Ayudante de Psicomorfosis"
            fill
            unoptimized
            style={{ background: "transparent" }}
            className="object-contain"
            sizes="96px"
          />
        </motion.div>
      </div>
    </div>
  );
}
