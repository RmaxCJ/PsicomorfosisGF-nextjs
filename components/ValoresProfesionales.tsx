"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const valores = [
  {
    titulo: "Honestidad",
    texto:
      "Comunicarnos de manera honesta nos permite disfrutar de un acompañamiento sincero para lograr un proceso transparente de crecimiento y transformación.",
    img: "/img/Acuerdos/honestidad.webp",
    bgColor: "bg-[#ede6f5]",
  },
  {
    titulo: "Responsabilidad",
    texto:
      "Trabajamos con la esencia del ser. Ser responsables es indispensable, dando prioridad al cuidado del bienestar emocional y la salud mental.",
    img: "/img/Acuerdos/responsabilidad.webp",
    bgColor: "bg-[#f8ede5]",
  },
  {
    titulo: "Respeto",
    texto:
      "Cada experiencia que es compartida en el ambiente terapéutico debe ser valorada, tratada con cuidado como al ser único al que pertenece.",
    img: "/img/Acuerdos/respeto.webp",
    bgColor: "bg-white",
  },
  {
    titulo: "Amor",
    texto:
      "Es lo que me recuerda la misión del terapeuta; un vínculo de afecto y familiaridad con mis pacientes para compartir un proceso de sanación.",
    img: "/img/Acuerdos/amor.webp",
    bgColor: "bg-[#e8f3f1]",
  },
];

export default function ValoresProfesionales() {
  return (
    <section className="py-20 px-4 md:px-8 bg-white w-full">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#f88f1f] font-bold text-sm uppercase tracking-wider">
            Mi Filosofía
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-[#0c3f40] mt-2">
            Valores Profesionales
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 mt-12">
          {valores.map((valor, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              key={valor.titulo}
              className={`${valor.bgColor} rounded-[40px] p-8 md:p-10 relative shadow-sm border border-black/5 flex flex-col items-center text-center mt-12 md:mt-10`}
            >
              {/* Imagen circular flotando arriba de la tarjeta */}
              <div className="absolute -top-14 w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-md bg-white">
                <Image
                  src={valor.img}
                  alt={valor.titulo}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 112px, 128px"
                />
              </div>

              {/* Contenido */}
              <h3 className="text-2xl font-black text-[#0c3f40] mt-12 md:mt-16 mb-4">
                {valor.titulo}
              </h3>
              <p className="text-[#555555] text-base leading-relaxed font-medium">
                {valor.texto}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
