"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CertificacionesAnimadas from "./CertificacionesAnimadas";

export default function QuienSoy() {
  const [diplomaAbierto, setDiplomaAbierto] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDiplomaAbierto(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const especialidades = [
    "Ansiedad",
    "Depresión",
    "Estrés",
    "Rupturas amorosas",
    "Relaciones de pareja",
    "Autoestima",
    "Duelos",
  ];

  return (
    <>
      {/* Sección con fondo de puntitos y aquenios de diente de león */}
      <section
        className="w-full py-24 px-4 md:px-6 relative overflow-hidden bg-[#f7f4ec]"
        style={{
          backgroundImage: 'url("/img/fondo-quiensoy.svg")',
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* TARJETA PRINCIPAL ESTILO "MEET GABI" */}
        <div className="max-w-[900px] mx-auto bg-[#97c3be] rounded-[24px] shadow-xl flex flex-col md:flex-row items-center p-8 md:p-12 relative border border-white/30">
          {/* Columna Izquierda: Fotos superpuestas (Polaroids) */}
          <div className="w-full md:w-5/12 flex justify-center relative mb-16 md:mb-0 mt-6 md:mt-0">
            {/* Foto Principal */}
            <div className="relative w-56 h-72 md:w-64 md:h-80 bg-white p-2.5 pb-10 shadow-xl rotate-3 z-10 transition-transform hover:rotate-0 duration-300">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/img/GabGF5.jpg"
                  alt="Gabriela Gadea Falcón"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>

            {/* Foto Secundaria (Polaroid flotante) */}
            <div className="absolute -left-2 -top-12 md:-left-12 md:-top-10 w-32 h-40 md:w-40 md:h-48 bg-white p-2 pb-8 shadow-2xl -rotate-6 z-20 transition-transform hover:-translate-y-2 duration-300">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/img/GabGF5.jpg"
                  alt="Gabi detalle"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
              </div>
            </div>
          </div>

          {/* Columna Derecha: Contenido y Textos */}
          <div className="w-full md:w-7/12 md:pl-12 text-[#0c3f40] relative z-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-1">
              Conoce a Gabi
            </h2>
            <h3 className="text-lg md:text-xl italic opacity-80 mb-6 font-serif text-[#0c3f40]">
              Psicóloga y Psicoterapeuta Gestalt.
            </h3>

            <p className="mb-4 leading-relaxed text-[15px] md:text-base font-medium">
              Estudié la Licenciatura en la Universidad Ricardo Palma en Lima,
              Perú y luego fui a hacer mi Maestría en la Universidad Gestalt en
              la CDMX, México donde viví 5 años.
            </p>
            <p className="mb-8 leading-relaxed text-[15px] md:text-base font-medium">
              Trabajé en el área de pediatría en el INEN y en la DIRCRI de la
              Policía Nacional del Perú. Hoy mi enfoque es acompañarte a
              transformar tu historia desde un espacio seguro, empático y libre
              de juicios.
            </p>

            {/* Etiquetas de Especialidad (Pills transparentes) */}
            <div className="flex flex-wrap gap-2 mb-10">
              {especialidades.map((esp) => (
                <span
                  key={esp}
                  className="text-[11px] md:text-xs font-bold uppercase tracking-wide bg-white/25 px-3 py-1.5 rounded-full border border-white/40 text-[#0c3f40]"
                >
                  {esp}
                </span>
              ))}
            </div>

            {/* Fila Inferior: Botón y Firma */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <a
                href="https://wa.me/51989529902?text=Hola%20Gabi,%20quisiera%20agendar%20una%20sesi%C3%B3n."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-[#f8ede5] text-[#0c3f40] font-bold py-3 px-8 rounded-full shadow-[0_4px_14px_rgba(0,0,0,0.1)] transition-transform hover:-translate-y-1 w-full sm:w-auto text-center"
              >
                Conoce a Gabi
              </a>

              {/* Firma manuscrita */}
              <div
                className="text-3xl md:text-4xl text-white drop-shadow-sm rotate-[-4deg]"
                style={{ fontFamily: "'Caveat', 'Comic Sans MS', cursive" }}
              >
                Gabidigab
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPONENTE DE DIPLOMAS */}
      <CertificacionesAnimadas setDiplomaAbierto={setDiplomaAbierto} />

      {/* MODAL / LIGHTBOX DE DIPLOMAS */}
      <AnimatePresence>
        {diplomaAbierto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setDiplomaAbierto(null)}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/90 p-4 backdrop-blur-sm cursor-zoom-out"
          >
            <button
              onClick={() => setDiplomaAbierto(null)}
              className="absolute top-6 right-6 text-white hover:text-[#f88f1f] transition-colors p-2 z-[101]"
              aria-label="Cerrar imagen"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl h-[75vh] md:h-[85vh] cursor-default bg-transparent shadow-none border-none outline-none"
            >
              <Image
                src={diplomaAbierto.src}
                alt={diplomaAbierto.alt}
                fill
                className="object-contain drop-shadow-2xl"
                sizes="100vw"
                priority
              />
            </motion.div>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-white mt-4 text-lg font-medium tracking-wide text-center"
            >
              {diplomaAbierto.alt}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
