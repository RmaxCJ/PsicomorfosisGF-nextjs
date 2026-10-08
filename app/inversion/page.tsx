"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import CintaAnimada from "@/components/CintaAnimada";
import Footer from "@/components/Footer";
import Portada from "@/components/Portada";
import DivisorOndas from "@/components/DivisorOndas";

export default function InversionPage() {
  const numTelefono = "51989529902";

  // Arreglo de Sesiones Puntuales (Arriba)
  const sesiones = [
    {
      titulo: "Sesión Individual Online",
      modalidad: "Google Meet o Zoom",
      tiempo: "50 minutos",
      precio: "S/. 140",
      mensajeWa:
        "Hola Gabi, vengo de la web y me gustaría agendar una Sesión Individual Online.",
      bgColor: "bg-[#eae2f8]", // Lavender
      textColor: "text-[#7e69ad]", // Purple dark
      img: "/img/Precios/laptop.png",
    },
    {
      titulo: "Sesión Individual Presencial",
      modalidad: "Consultorio en Chorrillos",
      tiempo: "50 minutos",
      precio: "S/. 160",
      mensajeWa:
        "Hola Gabi, vengo de la web y me gustaría agendar una Sesión Individual Presencial.",
      bgColor: "bg-[#e3f0ee]", // Teal light
      textColor: "text-[#6cada3]", // Teal
      img: "/img/Precios/sillon.png",
    },
  ];

  // Arreglo de Paquetes Terapéuticos (Abajo)
  const paquetes = [
    {
      badgeText: "1 MES · 4 SESIONES",
      badgeColor: "bg-[#9b87c9]",
      imgBgColor: "bg-[#eae2f8]",
      imgOutline: "outline-[#9b87c9]",
      titulo: "Conociendo la Terapia",
      tagline: "Conócete ♡",
      taglineColor: "text-[#7e69ad]",
      desc: "Empieza aquí si esta será tu primera experiencia en terapia.",
      precio: "S/. 520",
      priceColor: "text-[#7e69ad]",
      checkColor: "text-[#9b87c9]",
      mensajeWa:
        "Hola Gabi, vengo de la web y me gustaría iniciar con el Paquete Conociendo la Terapia (1 mes).",
      img: "/img/Precios/1mes.png",
      items: ["4 sesiones", "Espacio seguro", "Primeros pasos hacia el cambio"],
    },
    {
      badgeText: "2 MESES · 8 SESIONES",
      badgeColor: "bg-[#6cada3]",
      imgBgColor: "bg-[#f7aead]", // Coral bg
      imgOutline: "outline-[#f7aead]",
      titulo: "Conociéndome Mejor",
      tagline: "Suelta ♡",
      taglineColor: "text-[#6cada3]",
      desc: "Para quienes quieren ir más allá de entender lo que sienten.",
      precio: "S/. 980",
      priceColor: "text-[#6cada3]",
      checkColor: "text-[#6cada3]",
      mensajeWa:
        "Hola Gabi, vengo de la web y me gustaría iniciar con el Paquete Conociéndome Mejor (2 meses).",
      img: "/img/Precios/2meses.png",
      items: [
        "8 sesiones",
        "Mayor comprensión de ti",
        "Herramientas prácticas",
      ],
    },
    {
      badgeText: "3 MESES · 12 SESIONES",
      badgeColor: "bg-[#f88f1f]",
      imgBgColor: "bg-[#f88f1f]",
      imgOutline: "outline-[#f88f1f]",
      titulo: "Transformando mi Historia",
      tagline: "Resignifica ♡",
      taglineColor: "text-[#f88f1f]",
      desc: "Comprendes con mayor profundidad tu historia y le das un nuevo significado.",
      precio: "S/. 1,410",
      priceColor: "text-[#f88f1f]",
      checkColor: "text-[#f88f1f]",
      mensajeWa:
        "Hola Gabi, vengo de la web y me gustaría iniciar con el Paquete Transformando mi Historia (3 meses).",
      img: "/img/Precios/3meses.png",
      items: [
        "12 sesiones",
        "Trabajo profundo y sostenido",
        "Nuevas perspectivas",
      ],
    },
    {
      badgeText: "4 MESES · 16 SESIONES",
      badgeColor: "bg-[#6cada3]",
      imgBgColor: "bg-[#f7aead]",
      imgOutline: "outline-[#f7aead]",
      titulo: "Construyendo una Nueva Forma de Vivir",
      tagline: "Transfórmate ♡",
      taglineColor: "text-[#6cada3]",
      desc: "Lo aprendido empieza a integrarse en tu día a día y el cambio se vuelve tu nueva forma de vivir.",
      precio: "S/. 1,800",
      priceColor: "text-[#6cada3]",
      checkColor: "text-[#6cada3]",
      mensajeWa:
        "Hola Gabi, vengo de la web y me gustaría iniciar con el Paquete Construyendo una Nueva Forma de Vivir (4 meses).",
      img: "/img/Precios/4meses.png",
      items: [
        "16 sesiones",
        "Integración en tu día a día",
        "Cambios que se sostienen",
      ],
    },
    {
      badgeText: "6 MESES · 24 SESIONES",
      badgeColor: "bg-[#9b87c9]",
      imgBgColor: "bg-[#eae2f8]",
      imgOutline: "outline-[#9b87c9]",
      titulo: "Construyendo la Vida que Quiero",
      tagline: "Renace ♡",
      taglineColor: "text-[#7e69ad]",
      desc: "Un proceso profundo para consolidar cambios y vivir con más libertad, conciencia y coherencia contigo.",
      precio: "S/. 2,600",
      priceColor: "text-[#7e69ad]",
      checkColor: "text-[#9b87c9]",
      mensajeWa:
        "Hola Gabi, vengo de la web y me gustaría iniciar con el Paquete Construyendo la Vida que Quiero (6 meses).",
      img: "/img/Precios/6meses.png",
      items: [
        "24 sesiones",
        "Acompañamiento profundo",
        "Transformación duradera",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#f8ede5]">
      <Navbar />
      <Portada imagen="/img/Portadas/Portada_Precios.png" alt="La Terapia" />
      <DivisorOndas color="text-[#C0B3D5]" bgColor="bg-[#F8EDE5]" />

      <section className="pt-24 pb-12 px-4 md:px-6 max-w-[1400px] mx-auto">
        {/* Cabecera Principal */}
        <div className="mb-12">
          <h1
            className="text-[42px] md:text-5xl font-bold text-[#2f2f2f] leading-tight mb-4"
            style={{ fontFamily: "var(--font-geist-sans)" }}
          >
            ¿Cómo te gustaría <br className="hidden md:block" /> comenzar?
          </h1>
          <p className="text-[#555] max-w-[480px]">
            Hay diferentes formas de empezar.{" "}
            <span className="inline-block text-[#f7aead]">♡</span> Elige la
            opción que mejor se adapte a lo que necesitas hoy.
          </p>
        </div>

        {/* Sección 1: Sesiones Puntuales */}
        <div className="flex items-center gap-2.5 font-semibold text-[#333] mb-6">
          <span className="w-[34px] h-[34px] rounded-full bg-[#eae2f8] text-[#7e69ad] flex items-center justify-center shrink-0">
            🌱
          </span>
          <span>¿Solo necesitas una sesión puntual?</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 items-stretch">
          {sesiones.map((sesion, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`${sesion.bgColor} rounded-[18px] p-[30px] flex flex-col`}
            >
              <div className="w-[130px] h-[130px] rounded-full bg-white/60 flex items-center justify-center mb-[18px] overflow-hidden">
                <Image
                  src={sesion.img}
                  alt={sesion.titulo}
                  width={100}
                  height={100}
                  className="object-cover"
                />
              </div>
              <h5 className="font-bold text-lg mb-1.5 text-[#0c3f40]">
                {sesion.titulo}
              </h5>
              <p className="text-[#555] text-sm mb-1">{sesion.modalidad}</p>
              <p className="text-[#555] text-sm mb-1 flex items-center gap-1.5">
                <svg
                  className="w-4 h-4 opacity-70"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {sesion.tiempo}
              </p>
              <div
                className={`text-[28px] font-bold my-3.5 ${sesion.textColor}`}
              >
                {sesion.precio}
              </div>
              <a
                href={`https://wa.me/${numTelefono}?text=${encodeURIComponent(sesion.mensajeWa)}`}
                target="_blank"
                rel="noreferrer"
                className={`mt-auto inline-block text-center rounded-[30px] py-2.5 px-6 font-semibold text-white transition-opacity hover:opacity-90 ${sesion.textColor.replace("text-", "bg-")}`}
              >
                Agendar sesión
              </a>
            </motion.div>
          ))}

          {/* Tarjeta Informativa Lateral */}
          <div className="lg:border-l border-[#ddd] lg:pl-[30px] flex items-center">
            <div className="text-[#555]">
              <span className="text-[#f7aead] text-xl mb-3 block">♥</span>
              <p className="m-0">
                Ideal si deseas una primera consulta, orientación específica o
                resolver una duda puntual.
              </p>
            </div>
          </div>
        </div>

        <hr className="border-[#ddd] my-12" />

        {/* Sección 2: Procesos Terapéuticos (Paquetes) */}
        <div className="flex items-center gap-2.5 font-semibold text-[#333] mb-2">
          <span className="w-[34px] h-[34px] rounded-full bg-[#eae2f8] text-[#7e69ad] flex items-center justify-center shrink-0">
            🌱
          </span>
          <span>O elige un proceso terapéutico</span>
        </div>
        <p className="text-[#6c757d] mb-8">
          Un acompañamiento continuo para trabajar en ti paso a paso.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[22px] mb-12 items-stretch">
          {paquetes.map((paquete, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border border-[#eee] rounded-[18px] p-[26px_22px_30px] text-center shadow-[0_4px_18px_rgba(0,0,0,0.04)] flex flex-col"
            >
              <span
                className={`${paquete.badgeColor} self-center text-white text-[11px] font-bold tracking-[0.3px] rounded-[30px] px-3.5 py-1 mb-[18px] whitespace-nowrap`}
              >
                {paquete.badgeText}
              </span>

              <div
                className={`w-[110px] h-[110px] rounded-full mx-auto mb-[18px] overflow-hidden outline outline-[5px] ${paquete.imgBgColor} ${paquete.imgOutline}`}
              >
                <Image
                  src={paquete.img}
                  alt={paquete.titulo}
                  width={110}
                  height={110}
                  className="object-cover w-full h-full"
                />
              </div>

              <h5 className="font-bold mb-1 min-h-[60px] flex items-center justify-center text-center text-[#0c3f40] leading-tight">
                {paquete.titulo}
              </h5>

              <p className={`italic mb-3.5 ${paquete.taglineColor}`}>
                {paquete.tagline}
              </p>

              <p className="text-[#555] text-sm mb-[18px] min-h-[80px]">
                {paquete.desc}
              </p>

              <ul className="list-none p-0 pt-3.5 m-[0_0_14px] border-t border-[#eee] text-left flex-grow">
                {paquete.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-[13px] text-[#555] mb-2"
                  >
                    <svg
                      className={`w-4 h-4 mt-0.5 shrink-0 ${paquete.checkColor}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <div
                className={`text-[24px] font-bold mb-[18px] ${paquete.priceColor}`}
              >
                {paquete.precio}
              </div>

              <a
                href={`https://wa.me/${numTelefono}?text=${encodeURIComponent(paquete.mensajeWa)}`}
                target="_blank"
                rel="noreferrer"
                className={`mt-auto inline-block text-center rounded-[30px] py-2.5 px-6 font-semibold text-white transition-opacity hover:opacity-90 ${paquete.badgeColor}`}
              >
                Comenzar
              </a>
            </motion.div>
          ))}
        </div>

        {/* Barra de Características Inferior */}
        <div className="bg-[#f8ede5] rounded-[18px] p-[30px_20px] mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-3.5">
              <span className="w-[46px] h-[46px] rounded-full bg-[#6cada3] text-white flex items-center justify-center shrink-0">
                🔒
              </span>
              <div>
                <h6 className="font-bold mb-0.5 text-[#0c3f40]">
                  Confidencial y seguro
                </h6>
                <p className="m-0 text-[13px] text-[#666]">
                  Tu espacio es privado.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3.5">
              <span className="w-[46px] h-[46px] rounded-full bg-[#9b87c9] text-white flex items-center justify-center shrink-0">
                📅
              </span>
              <div>
                <h6 className="font-bold mb-0.5 text-[#0c3f40]">
                  Sesiones 1 vez por semana
                </h6>
                <p className="m-0 text-[13px] text-[#666]">
                  Duración: 50 minutos.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3.5">
              <span className="w-[46px] h-[46px] rounded-full bg-[#6cada3] text-white flex items-center justify-center shrink-0">
                💻
              </span>
              <div>
                <h6 className="font-bold mb-0.5 text-[#0c3f40]">
                  Modalidad Flexible
                </h6>
                <p className="m-0 text-[13px] text-[#666]">
                  Online o presencial.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3.5">
              <span className="w-[46px] h-[46px] rounded-full bg-[#f7aead] text-white flex items-center justify-center shrink-0">
                ♥
              </span>
              <div>
                <h6 className="font-bold mb-0.5 text-[#0c3f40]">
                  Compromiso mutuo
                </h6>
                <p className="m-0 text-[13px] text-[#666]">
                  Para que el proceso funcione.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Nota Legal / Disclaimer */}
        <div className="text-center text-[#444] pb-8">
          <p className="mb-2">
            <span className="text-[#6cada3] mr-2">🌱</span>
            Los precios están en soles peruanos (S/.)
          </p>
          <p className="font-bold text-[#0c3f40]">
            Si tienes dudas, escríbeme. Estoy aquí para acompañarte.
            <span className="text-[#f7aead] ml-1">♥</span>
          </p>
        </div>
      </section>

      {/* Sección Métodos de Pago */}
      <section className="bg-[#cec6db] py-20 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0c3f40] mb-3">
              Métodos de Pago
            </h2>
            <p className="text-[#555] text-[15px]">
              El pago se realiza <strong>24 horas antes</strong> de la sesión
              como confirmación de asistencia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Perú */}
            <div className="bg-white rounded-[20px] p-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.08)] border-t-[5px] border-t-[#f88f1f] flex flex-col items-center">
              <Image
                src="/img/banderaPeru.png"
                alt="Perú"
                width={80}
                height={50}
                className="rounded-md mb-6"
              />
              <h5 className="font-bold text-xl text-[#0c3f40] mb-6">Perú</h5>
              <div className="flex flex-col gap-3 mb-8 w-full text-left pl-8">
                <span className="flex items-center gap-3 font-medium text-[#555]">
                  <Image
                    src="/img/plin_icono.webp"
                    alt="Plin"
                    width={24}
                    height={24}
                  />{" "}
                  Plin
                </span>
                <span className="flex items-center gap-3 font-medium text-[#555]">
                  <span className="text-[#6cada3] font-bold text-xl w-6 text-center">
                    🏦
                  </span>{" "}
                  CCI
                </span>
              </div>
              <a
                href={`https://wa.me/${numTelefono}?text=Hola%20Gabi,%20quiero%20agendar%20desde%20Perú`}
                target="_blank"
                rel="noreferrer"
                className="mt-auto bg-[#f88f1f] text-white rounded-full py-2 px-8 font-semibold hover:bg-[#e07d12] transition-colors"
              >
                Agendar →
              </a>
            </div>

            {/* México */}
            <div className="bg-white rounded-[20px] p-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.08)] border-t-[5px] border-t-[#6cada3] flex flex-col items-center">
              <Image
                src="/img/banderaMexico.png"
                alt="México"
                width={80}
                height={50}
                className="rounded-md mb-6"
              />
              <h5 className="font-bold text-xl text-[#0c3f40] mb-6">México</h5>
              <div className="flex flex-col gap-3 mb-8 w-full text-left pl-8">
                <span className="flex items-center gap-3 font-medium text-[#555]">
                  <span className="text-[#6cada3] font-bold text-xl w-6 text-center">
                    🏦
                  </span>{" "}
                  SPEI
                </span>
              </div>
              <a
                href={`https://wa.me/${numTelefono}?text=Hola%20Gabi,%20quiero%20agendar%20desde%20México`}
                target="_blank"
                rel="noreferrer"
                className="mt-auto bg-[#6cada3] text-white rounded-full py-2 px-8 font-semibold hover:bg-[#589990] transition-colors"
              >
                Agendar →
              </a>
            </div>

            {/* Otros Países */}
            <div className="bg-white rounded-[20px] p-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.08)] border-t-[5px] border-t-[#f88f1f] flex flex-col items-center">
              <Image
                src="/img/mundoIcon.webp"
                alt="Otros países"
                width={80}
                height={80}
                className="mb-4"
              />
              <h5 className="font-bold text-xl text-[#0c3f40] mb-6">
                Otros países
              </h5>
              <div className="flex flex-col gap-3 mb-8 w-full text-left pl-8">
                <span className="flex items-center gap-3 font-medium text-[#555]">
                  <img
                    src="https://www.paypalobjects.com/webstatic/icon/favicon.ico"
                    alt="PayPal"
                    className="w-6 h-6"
                  />{" "}
                  PayPal
                </span>
              </div>
              <a
                href={`https://wa.me/${numTelefono}?text=Hola%20Gabi,%20quiero%20agendar%20desde%20el%20extranjero`}
                target="_blank"
                rel="noreferrer"
                className="mt-auto bg-[#f88f1f] text-white rounded-full py-2 px-8 font-semibold hover:bg-[#e07d12] transition-colors"
              >
                Agendar →
              </a>
            </div>
          </div>
        </div>
      </section>

      <CintaAnimada />
      <Footer />
    </main>
  );
}
