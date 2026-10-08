"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";

export default function BotonWhatsApp() {
  return (
    <a
      href="https://wa.me/51989529902?text=Hola%20Gabi,%20vengo%20de%20la%20web"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-6 left-6 z-50 group"
    >
      {/* Aro pulsante */}
      <motion.span
        className="absolute inset-0 rounded-full bg-[#25D366]"
        animate={{ scale: [1, 1.6], opacity: [0.5, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
      />

      {/* Botón */}
      <motion.span
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl"
      >
        <FaWhatsapp className="w-7 h-7" />
      </motion.span>

      {/* Etiqueta al pasar el mouse (solo escritorio) */}
      <span className="hidden md:block absolute left-full ml-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-white text-[#0c3f40] text-sm font-medium px-3 py-1.5 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Escríbele a Gabi
      </span>
    </a>
  );
}
