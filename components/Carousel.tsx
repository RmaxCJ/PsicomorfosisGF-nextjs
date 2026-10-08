"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image"; // Usaremos next/image para mejor optimización y adaptación

export default function Carousel() {
  const images = [
    "/img/Portadas/Portada_LaTerapia.png",
    "/img/Portadas/Portada_Precios.png",
    "/img/Portadas/Portada_QuienSoy.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    // CONTENEDOR PRINCIPAL:
    // Quitamos el 'py-4' que estaba rompiendo el margen en móviles.
    // Usamos bg-transparent o el color turquesa, pero asegurando que el aspect ratio manda.
    <div className="relative w-full aspect-[16/9] md:aspect-[1500/450] bg-[#6cada3] overflow-hidden group">
      {/* Contenedor del recorte de nubes (Solo visible en PC, en móvil ensucia mucho) */}
      <div
        className="absolute inset-0 w-full h-full z-10 hidden md:block pointer-events-none"
        style={{
          background: `
            radial-gradient(12px at 12px 100%, transparent 98%, #6cada3) 0 -12px / 24px 100% repeat-x,
            radial-gradient(12px at 12px 0%, transparent 98%, #6cada3) 0 12px / 24px 100% repeat-x
          `,
        }}
      ></div>

      {/* CARRUSEL DE IMÁGENES */}
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* 
            En móvil (aspect 16/9), object-contain hará que la imagen se vea entera al centro.
            Si el PNG ya tiene los bordes de diseño, se adaptará perfectamente.
          */}
          <Image
            src={images[currentIndex]}
            alt={`Banner ${currentIndex + 1} de Psicomorfosis`}
            fill
            priority
            className="object-contain md:object-cover object-center"
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Capa de oscurecimiento muy sutil para destacar indicadores */}
      <div className="absolute inset-0 bg-black/5 pointer-events-none z-20"></div>

      {/* INDICADORES (Puntitos) */}
      {/* En móvil los pegamos más al fondo (bottom-2) y en escritorio los subimos un poco (md:bottom-6) */}
      <div className="absolute bottom-2 md:bottom-6 left-0 right-0 flex justify-center items-center space-x-2 z-30">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2.5 rounded-full transition-all duration-300 shadow-sm ${
              currentIndex === index
                ? "bg-[#f88f1f] w-8"
                : "bg-white/80 hover:bg-white w-2.5"
            }`}
            aria-label={`Ir al banner ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
