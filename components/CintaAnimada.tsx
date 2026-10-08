"use client";
import { motion } from "framer-motion";

export default function CintaAnimada() {
  return (
    <div className="bg-[#0c3f40] text-[#f8ede5] py-3 overflow-hidden flex whitespace-nowrap">
      <motion.div
        className="flex space-x-8 text-sm md:text-base font-medium tracking-wide"
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {/* Repetimos el texto para el efecto de bucle infinito */}
        {[...Array(4)].map((_, i) => (
          <span key={i} className="flex items-center space-x-8">
            <span>Terapia Gestalt Centrada en el Presente</span>
            <span>✦</span>
            <span>Atención Virtual Especializada</span>
            <span>✦</span>
            <span>Espacio Seguro y Empático</span>
            <span>✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
