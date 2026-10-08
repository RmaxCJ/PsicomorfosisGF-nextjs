"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import OndasFestoneadas from "@/components/OndasFestoneadas";
import Contador from "@/components/Contador";

import {
  FaInstagram,
  FaTiktok,
  FaFacebookF,
  FaThreads,
  FaSpotify,
  FaYoutube,
} from "react-icons/fa6";

const contenedor: Variants = {
  oculto: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.25 },
  },
};

const tarjeta: Variants = {
  oculto: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Metodologia() {
  const redes = [
    {
      nombre: "Facebook",
      icon: <FaFacebookF size={26} />,
      url: "https://www.facebook.com/psicomorfosisgf",
      color: "bg-[#b0a7be]",
      badge: "bg-[#d9831f]",
      plus: "text-[#f8ede5]",
      seguidores: <Contador hasta={3300} />,
    },
    {
      nombre: "Instagram",
      icon: <FaInstagram size={26} />,
      url: "https://www.instagram.com/psicomorfosisgf/",
      color: "bg-[#f88f1f]",
      badge: "bg-[#f8ede5]",
      plus: "text-[#f88f1f]",
      seguidores: <Contador hasta={52200} />,
    },
    {
      nombre: "TikTok",
      icon: <FaTiktok size={26} />,
      url: "https://www.tiktok.com/@psicomorfosisgf?_t=8fnZ8oXdQhS&_r=1",
      color: "bg-[#bca694]",
      badge: "bg-[#6cada3]",
      plus: "text-[#f8ede5]",
      seguidores: <Contador hasta={13100} />,
    },
    {
      nombre: "YouTube",
      icon: <FaYoutube size={26} />,
      url: "https://www.youtube.com/@psicomorfosisGF",
      color: "bg-[#e9846d]",
      badge: "bg-[#6cada3]",
      plus: "text-[#f8ede5]",
      seguidores: <Contador hasta={40} />,
    },
    {
      nombre: "Spotify",
      icon: <FaSpotify size={26} />,
      url: "https://spotify.link/kV4GG1HbgDb",
      color: "bg-[#6cada3]",
      badge: "bg-[#f88f1f]",
      plus: "text-[#f8ede5]",
      seguidores: <Contador hasta={180} />,
    },
    {
      nombre: "Threads",
      icon: <FaThreads size={26} />,
      url: "https://www.threads.net/@psicomorfosisgf",
      color: "bg-[#f7aead]",
      badge: "bg-[#e9846d]",
      plus: "text-[#f8ede5]",
      seguidores: <Contador hasta={6640} />,
    },
  ];

  return (
    <section
      className="relative py-20 px-4 md:px-6"
      style={{
        backgroundColor: "#f0e4da",
        backgroundImage:
          "repeating-linear-gradient(90deg, transparent 0 70px, #d8cfe2 70px 100px)",
      }}
    >
      {/* Ondas turquesa que caen sobre el fondo de rayas */}
      <div className="absolute top-0 left-0 w-full">
        <OndasFestoneadas arriba="#6cada3" abajo="transparent" ancho={50} />
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* COLUMNA 1: Fotografía (entra desde la izquierda) */}
        <motion.div
          className="w-full aspect-[4/5] relative max-w-md mx-auto"
          initial={{ opacity: 0, x: -40, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Image
            src="/img/fotoPerfil2.png"
            alt="Gabriela Gadea Falcón - Psicóloga Gestalt Lima"
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </motion.div>

        {/* COLUMNA 2: Redes sociales (aparecen una tras otra) */}
        <div
          className="flex flex-col justify-center items-center"
          style={{ fontFamily: "var(--font-parrafos), sans-serif" }}
        >
          <motion.div
            className="grid grid-cols-3 gap-4 w-full max-w-md"
            variants={contenedor}
            initial="oculto"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {redes.map((red) => (
              <motion.a
                key={red.nombre}
                variants={tarjeta}
                whileHover={{ scale: 1.05 }}
                href={red.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Ir a ${red.nombre}`}
                className={`${red.color} relative aspect-[3/4] px-2 py-4 rounded-[1.1rem_1.6rem_1.3rem_1.8rem] flex flex-col items-center justify-center text-[#f8ede5] shadow-sm group`}
              >
                {/* Bolita "+" asomando en la esquina */}
                <span
                  className={`${red.badge} ${red.plus} absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full flex items-center justify-center shadow-sm`}
                >
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M12 5v14m7-7H5"
                    />
                  </svg>
                </span>

                {/* Ícono con círculo de contorno */}
                <div className="w-14 h-14 rounded-full border-2 border-[#f8ede5]/90 flex items-center justify-center mb-3 group-hover:bg-[#f8ede5] group-hover:text-[#0c3f40] transition-colors duration-300">
                  {red.icon}
                </div>

                {/* Textos */}
                <span className="font-bold text-xs sm:text-sm leading-tight">
                  {red.nombre}
                </span>
                <span className="font-bold text-xs sm:text-sm leading-tight mt-0.5">
                  {red.seguidores}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
