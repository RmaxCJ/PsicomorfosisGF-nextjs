import Link from "next/link";
import Image from "next/image";

import {
  FaInstagram,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaTiktok,
  FaYoutube,
  FaThreads,
  FaSpotify,
} from "react-icons/fa6";

const redes = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/psicomorfosisgf/",
    Icon: FaInstagram,
  },
  { label: "WhatsApp", href: "https://wa.me/51989529902", Icon: FaWhatsapp },
  { label: "Llamar", href: "tel:+51989529902", Icon: FaPhone },
  {
    label: "Correo",
    href: "mailto:gab.gadeafalcon@gmail.com",
    Icon: FaEnvelope,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/psicomorfosisgf",
    Icon: FaFacebookF,
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
    label: "Threads",
    href: "https://www.threads.net/@psicomorfosisgf",
    Icon: FaThreads,
  },
  {
    label: "Spotify",
    href: "https://spotify.link/kV4GG1HbgDb",
    Icon: FaSpotify,
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#f8ede5] text-[#0c3f40]">
      {/* Cinta decorativa */}
      <div className="h-8" />

      <div className="max-w-5xl mx-auto px-6 py-12 text-center">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center mb-8">
          <Image
            src="/img/nombrePMGF.png"
            alt="Psicomorfosis GF"
            width={300}
            height={100}
            priority
            className="h-11 md:h-16 w-auto"
          />
        </Link>
        {/* Redes sociales */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {redes.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-14 h-14 rounded-full border border-[#f88f1f] text-[#f88f1f] flex items-center justify-center hover:bg-[#f88f1f] hover:text-white transition-colors"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* Contacto + Horario */}
        <div className="grid sm:grid-cols-2 gap-8 sm:gap-0 mb-10">
          <div className="sm:text-right sm:pr-8 sm:border-r sm:border-[#0c3f40]/15">
            <h5 className="text-xl font-bold text-[#333333] mb-3">
              Contáctame
            </h5>
            <p className="mb-2">
              <a
                href="mailto:gab.gadeafalcon@gmail.com"
                className="text-[#6cada3] hover:text-[#117170] transition-colors"
              >
                gab.gadeafalcon@gmail.com
              </a>
            </p>
            <p>
              <a
                href="tel:+51989529902"
                className="text-[#6cada3] hover:text-[#117170] transition-colors"
              >
                (+51) 989 529 902
              </a>
            </p>
          </div>

          <div className="sm:text-left sm:pl-8">
            <h5 className="text-xl font-bold text-[#333333] mb-3">
              Horario de Atención
            </h5>
            <p className="mb-2">Lun - Vie, 9AM – 9PM</p>
            <p>Sábado: 10 AM - 1 PM</p>
          </div>
        </div>

        {/* Copyright */}
        <p>
          © {new Date().getFullYear()} PsicomorfosisGF · Psic. Gabriela Gadea
          Falcón
        </p>
        <p className="text-xs text-gray-400 mt-1">
          Sitio web diseñado y desarrollado por{" "}
          <a
            href="https://maxanotherways.com/portfolio.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6cada3] hover:underline"
          >
            Maximiliano Núñez
          </a>{" "}
          · ¿Quieres uno así?{" "}
          <a
            href="https://maxanotherways.com/portfolio.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6cada3] hover:underline"
          >
            Contáctame
          </a>
        </p>
      </div>
    </footer>
  );
}
