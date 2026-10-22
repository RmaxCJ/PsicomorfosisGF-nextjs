"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Definimos las 5 certificaciones originales con sus respectivos colores de borde (Glow)
const diplomas = [
  {
    src: "/img/Home/Calificaciones Maestria.webp",
    alt: "Calificaciones Maestría",
    glow: "border-[#9b87c9] shadow-[inset_0_0_40px_rgba(155,135,201,0.4)]", // Morado
  },
  {
    src: "/img/Home/BACHILLER_foto.webp",
    alt: "Certificado de Bachiller",
    glow: "border-[#6cada3] shadow-[inset_0_0_40px_rgba(108,173,163,0.4)]", // Turquesa
  },
  {
    src: "/img/Home/DIPLOMA_GESTALT_foto.webp",
    alt: "Diploma Excelencia Académica",
    glow: "border-[#f88f1f] shadow-[inset_0_0_40px_rgba(248,143,31,0.4)]", // Naranja
  },
  {
    src: "/img/Home/PNP_foto_cuadro.webp",
    alt: "Certificado DIRCRI PNP",
    glow: "border-[#f7aead] shadow-[inset_0_0_40px_rgba(247,174,173,0.4)]", // Coral
  },
  {
    src: "/img/Home/INEN_CUADRO.webp",
    alt: "Constancia INEN - Aprendo Contigo",
    glow: "border-[#6cada3] shadow-[inset_0_0_40px_rgba(108,173,163,0.4)]", // Turquesa
  },
];

// Recibimos la función setDiplomaAbierto como prop para abrir el modal (lightbox)
interface CertificacionesProps {
  setDiplomaAbierto: (diploma: { src: string; alt: string }) => void;
}

export default function CertificacionesAnimadas({
  setDiplomaAbierto,
}: CertificacionesProps) {
  return (
    <section className="w-full py-20 px-4 md:px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-[30px] font-medium text-[#0c3f40] relative inline-block">
            Formación y Certificaciones
          </h2>
        </div>

        <div className="relative h-56 md:h-[450px] w-full max-w-5xl mx-auto flex justify-center items-center mt-4 md:mt-12 mb-12 md:mb-16">
          {/* DIPLOMA 1 (Izquierda Extrema) */}
          <motion.div
            whileHover={{ scale: 1.05, zIndex: 50 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setDiplomaAbierto(diplomas[0])}
            className="absolute z-10 left-[2%] md:left-[5%] w-24 md:w-56 aspect-[3/4] bg-white p-1.5 md:p-2 rounded-xl md:rounded-2xl shadow-xl -rotate-6 cursor-pointer transition-transform duration-300"
          >
            <div className="relative w-full h-full rounded-lg md:rounded-xl overflow-hidden bg-gray-100">
              <Image
                src={diplomas[0].src}
                alt={diplomas[0].alt}
                fill
                className="object-cover"
              />
              <div
                className={`absolute inset-0 border-[2px] md:border-[3px] rounded-lg md:rounded-xl pointer-events-none ${diplomas[0].glow}`}
              />
            </div>
          </motion.div>

          {/* DIPLOMA 2 (Centro Izquierda) */}
          <motion.div
            whileHover={{ scale: 1.05, zIndex: 50 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setDiplomaAbierto(diplomas[1])}
            className="absolute z-20 left-[18%] md:left-[22%] w-24 md:w-56 aspect-[3/4] bg-white p-1.5 md:p-2 rounded-xl md:rounded-2xl shadow-xl rotate-3 cursor-pointer transition-transform duration-300"
          >
            <div className="relative w-full h-full rounded-lg md:rounded-xl overflow-hidden bg-gray-100">
              <Image
                src={diplomas[1].src}
                alt={diplomas[1].alt}
                fill
                className="object-cover"
              />
              <div
                className={`absolute inset-0 border-[2px] md:border-[3px] rounded-lg md:rounded-xl pointer-events-none ${diplomas[1].glow}`}
              />
            </div>
          </motion.div>

          {/* DIPLOMA 3 (Centro Exacto) */}
          <motion.div
            whileHover={{ scale: 1.05, zIndex: 50 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setDiplomaAbierto(diplomas[2])}
            className="absolute z-30 left-[35%] md:left-[39%] w-24 md:w-56 aspect-[3/4] bg-white p-1.5 md:p-2 rounded-xl md:rounded-2xl shadow-2xl -rotate-2 cursor-pointer transition-transform duration-300"
          >
            <div className="relative w-full h-full rounded-lg md:rounded-xl overflow-hidden bg-gray-100">
              <Image
                src={diplomas[2].src}
                alt={diplomas[2].alt}
                fill
                className="object-cover"
              />
              <div
                className={`absolute inset-0 border-[2px] md:border-[3px] rounded-lg md:rounded-xl pointer-events-none ${diplomas[2].glow}`}
              />
            </div>
          </motion.div>

          {/* DIPLOMA 4 (Centro Derecha) */}
          <motion.div
            whileHover={{ scale: 1.05, zIndex: 50 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setDiplomaAbierto(diplomas[3])}
            className="absolute z-20 left-[52%] md:left-[56%] w-24 md:w-56 aspect-[3/4] bg-white p-1.5 md:p-2 rounded-xl md:rounded-2xl shadow-xl rotate-6 cursor-pointer transition-transform duration-300"
          >
            <div className="relative w-full h-full rounded-lg md:rounded-xl overflow-hidden bg-gray-100">
              <Image
                src={diplomas[3].src}
                alt={diplomas[3].alt}
                fill
                className="object-cover"
              />
              <div
                className={`absolute inset-0 border-[2px] md:border-[3px] rounded-lg md:rounded-xl pointer-events-none ${diplomas[3].glow}`}
              />
            </div>
          </motion.div>

          {/* DIPLOMA 5 (Derecha Extrema) */}
          <motion.div
            whileHover={{ scale: 1.05, zIndex: 50 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setDiplomaAbierto(diplomas[4])}
            className="absolute z-10 left-[68%] md:left-[73%] w-24 md:w-56 aspect-[3/4] bg-white p-1.5 md:p-2 rounded-xl md:rounded-2xl shadow-xl -rotate-3 cursor-pointer transition-transform duration-300"
          >
            <div className="relative w-full h-full rounded-lg md:rounded-xl overflow-hidden bg-gray-100">
              <Image
                src={diplomas[4].src}
                alt={diplomas[4].alt}
                fill
                className="object-cover"
              />
              <div
                className={`absolute inset-0 border-[2px] md:border-[3px] rounded-lg md:rounded-xl pointer-events-none ${diplomas[4].glow}`}
              />
            </div>
          </motion.div>

          {/* TARJETA 6 (Estática - Acento Gabi) */}
          <div className="absolute z-40 left-[82%] md:left-[88%] w-16 md:w-36 aspect-square bg-white p-1.5 md:p-2.5 rounded-xl md:rounded-3xl shadow-2xl rotate-12 transition-transform hover:scale-105 hover:z-50 duration-300">
            <div className="relative w-full h-full rounded-lg md:rounded-2xl overflow-hidden bg-[#eae2f8] flex flex-col items-center justify-center border border-[#e2d5c8]">
              <div className="text-xl md:text-3xl mb-0.5 md:mb-1">🎓</div>
              <p className="text-[6px] md:text-[10px] font-bold text-[#7e69ad] text-center leading-tight uppercase">
                Formación
                <br />y Certificados
              </p>
              <span className="absolute top-1 right-1 text-[#f88f1f] text-xs md:text-base">
                ✨
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
