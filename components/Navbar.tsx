"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { IconType } from "react-icons";
import Image from "next/image";
import {
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaWhatsapp,
  FaFacebookF,
  FaThreads,
  FaTiktok,
  FaYoutube,
  FaSpotify,
} from "react-icons/fa6";

const WHATSAPP =
  "https://wa.me/51989529902?text=Hola%20Gabi,%20vengo%20de%20la%20web";

// Para agregar más páginas, súmalas a cualquiera de las dos listas
const linksIzquierda = [
  { name: "La Terapia", href: "/" },
  { name: "Quién Soy", href: "/quiensoy" },
];
const linksDerecha = [
  { name: "Acuerdos", href: "/acuerdos" },
  { name: "Inversión", href: "/inversion" },
];
const todosLosLinks = [...linksIzquierda, ...linksDerecha];

const redesIzquierda = [
  { label: "Llamar", href: "tel:+51989529902", Icon: FaPhone },
  {
    label: "Correo",
    href: "mailto:gab.gadeafalcon@gmail.com",
    Icon: FaEnvelope,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/psicomorfosisgf/",
    Icon: FaInstagram,
  },
];
const redesDerecha = [
  { label: "WhatsApp", href: "https://wa.me/51989529902", Icon: FaWhatsapp },
  {
    label: "Facebook",
    href: "https://www.facebook.com/psicomorfosisgf",
    Icon: FaFacebookF,
  },
  {
    label: "Threads",
    href: "https://www.threads.net/@psicomorfosisgf",
    Icon: FaThreads,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@psicomorfosisgf?_t=8fnZ8oXdQhS&_r=1",
    Icon: FaTiktok,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@psicomorfosisgf5985?si=pgYwjUbcehK57EdH",
    Icon: FaYoutube,
  },
  {
    label: "Spotify",
    href: "https://spotify.link/kV4GG1HbgDb",
    Icon: FaSpotify,
  },
];
const todasLasRedes = [...redesIzquierda, ...redesDerecha];

function IconoRed({
  href,
  label,
  Icon,
}: {
  href: string;
  label: string;
  Icon: IconType;
}) {
  const externo = href.startsWith("http");
  return (
    <a
      href={href}
      aria-label={label}
      {...(externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="transition-transform duration-200 hover:scale-125"
    >
      <Icon className="w-4 h-4" />
    </a>
  );
}

// Link con el subrayado ondulado tipo lápiz
function EnlaceMenu({ href, name }: { href: string; name: string }) {
  return (
    <Link
      href={href}
      className="relative group text-lg font-medium whitespace-nowrap hover:text-[#6cada3] transition-colors"
    >
      {name}
      <svg
        className="absolute -bottom-2 left-0 w-0 h-1 text-[#f88f1f] transition-all duration-300 group-hover:w-full"
        viewBox="0 0 100 10"
        preserveAspectRatio="none"
      >
        <path
          d="M0 5 Q 50 10 100 5"
          stroke="currentColor"
          strokeWidth="2"
          fill="transparent"
        />
      </svg>
    </Link>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Banda turquesa con redes (solo escritorio) */}
      <div className="hidden md:block bg-[#6cada3] h-[104px]">
        <div className="max-w-7xl mx-auto px-8 h-[60px] flex items-center justify-between text-white">
          <div className="flex items-center gap-6">
            {redesIzquierda.map((r) => (
              <IconoRed key={r.label} {...r} />
            ))}
          </div>
          <div className="flex items-center gap-6">
            {redesDerecha.map((r) => (
              <IconoRed key={r.label} {...r} />
            ))}
          </div>
        </div>
      </div>

      {/* Barra blanca: en escritorio cuelga de la banda y se monta sobre la portada */}
      <div className="relative bg-[#f8ede5] py-3 md:absolute md:inset-x-0 md:top-[60px] md:py-0 md:bg-transparent">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="h-[72px] md:h-[88px] bg-white rounded-full shadow-lg px-6 md:px-10 flex items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr] text-[#0c3f40]">
            {/* Links izquierda */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {linksIzquierda.map((l) => (
                <EnlaceMenu key={l.name} {...l} />
              ))}
            </div>

            {/* Logo centro */}
            <Link href="/" className="flex items-center">
              <Image
                src="/img/nombrePMGF.png"
                alt="Psicomorfosis GF"
                width={300}
                height={100}
                priority
                className="h-11 md:h-16 w-auto"
              />
            </Link>

            {/* Links derecha + botón */}
            <div className="flex items-center justify-end gap-6 lg:gap-8">
              <div className="hidden md:flex items-center gap-6 lg:gap-8">
                {linksDerecha.map((l) => (
                  <EnlaceMenu key={l.name} {...l} />
                ))}
              </div>

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="hidden md:inline-flex bg-[#f88f1f] text-white px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap shadow-sm hover:bg-[#e07d12] hover:-translate-y-0.5 transition-all"
              >
                Agendar Cita
              </a>

              {/* Botón hamburguesa (móvil) */}
              <button
                className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Abrir menú"
              >
                <span
                  className={`block w-6 h-0.5 bg-[#0c3f40] transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
                ></span>
                <span
                  className={`block w-6 h-0.5 bg-[#0c3f40] transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}
                ></span>
                <span
                  className={`block w-6 h-0.5 bg-[#0c3f40] transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
                ></span>
              </button>
            </div>
          </nav>
        </div>

        {/* Menú desplegable (móvil) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 right-0 top-full px-4 pt-2 md:hidden"
            >
              <div className="bg-white rounded-3xl shadow-xl px-6 py-4">
                {todosLosLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="block text-2xl font-medium text-[#0c3f40] py-3 border-b border-[#6cada3]/15"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 block w-full text-center bg-[#f88f1f] text-white py-3 rounded-full font-semibold"
                >
                  Agendar Cita
                </a>

                <div className="mt-5 flex flex-wrap justify-center gap-5 text-[#6cada3]">
                  {todasLasRedes.map((r) => (
                    <IconoRed key={r.label} {...r} />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
