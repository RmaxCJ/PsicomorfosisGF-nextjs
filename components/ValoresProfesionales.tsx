"use client";

import { motion } from "framer-motion";

// Adaptamos los colores y la estructura para que luzcan idénticos a los "sticky notes" de tu referencia visual.
const valores = [
  {
    titulo: "Honestidad",
    texto:
      "Comunicarnos de manera honesta nos permite disfrutar de un acompañamiento sincero para lograr un proceso transparente de crecimiento y transformación.",
    bgColor: "bg-[#ebdce3]", // Rosa pastel (Discovery)
    textColor: "text-[#333333]",
    rotate: "-rotate-2",
    translate: "md:translate-y-4",
    colSpan: "",
  },
  {
    titulo: "Responsabilidad",
    texto:
      "Trabajamos con la esencia del ser. Ser responsables es indispensable, dando prioridad al cuidado del bienestar emocional y la salud mental.",
    bgColor: "bg-[#dbe6f0]", // Azul pastel (Direction)
    textColor: "text-[#333333]",
    rotate: "rotate-1",
    translate: "md:-translate-y-2",
    colSpan: "",
  },
  {
    titulo: "Respeto",
    texto:
      "Cada experiencia que es compartida en el ambiente terapéutico debe ser valorada, tratada con cuidado como al ser único al que pertenece.",
    bgColor: "bg-[#e3dcb8]", // Beige/Caqui (Creation)
    textColor: "text-[#333333]",
    rotate: "rotate-2",
    translate: "md:translate-y-6",
    colSpan: "",
  },
  {
    titulo: "Amor",
    texto:
      "Es lo que me recuerda la misión del terapeuta; un vínculo de afecto y familiaridad con mis pacientes para compartir un proceso de sanación.",
    bgColor: "bg-[#915872]", // Morado oscuro (Launch)
    textColor: "text-white",
    rotate: "-rotate-1",
    translate: "md:-translate-y-12",
    colSpan: "md:col-start-2 z-10", // Lo centramos en la segunda fila superponiéndolo
  },
];

export default function ValoresProfesionales() {
  return (
    <section className="py-24 px-4 md:px-8 bg-[#fdfbf9] w-full overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Título con animación ligada al scroll */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-black text-[#0c3f40] tracking-tight">
            Valores Profesionales
          </h2>
        </motion.div>

        {/* Cuadrícula estilo Masonry/Sticky Notes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 place-items-center md:place-items-stretch">
          {valores.map((valor, index) => (
            <motion.div
              key={valor.titulo}
              // 1. Configuración de animación vertical
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              // 2. EL SECRETO: once: false hace que desaparezcan al subir y aparezcan al bajar
              viewport={{ once: false, margin: "0px 0px -100px 0px" }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: index * 0.15, // Efecto cascada
              }}
              // Clases para posicionar la nota en la cuadrícula
              className={`w-full max-w-sm mx-auto ${valor.colSpan} ${valor.translate}`}
            >
              {/* Contenedor visual de la "Nota Adhesiva" */}
              <div
                className={`${valor.bgColor} ${valor.textColor} h-full p-8 md:p-10 shadow-[0_15px_35px_rgba(0,0,0,0.1)] ${valor.rotate} transition-transform hover:scale-105 duration-300 relative`}
              >
                {/* Borde punteado interior característico del diseño de referencia */}
                <div className="absolute inset-1 border-[1.5px] border-dashed border-black/15 pointer-events-none"></div>

                {/* Usamos font-serif para igualar la tipografía de los títulos en la imagen 4 */}
                <h3 className="text-[26px] md:text-3xl font-serif mb-4 relative z-10">
                  {valor.titulo}
                </h3>
                <p
                  className={`text-[15px] md:text-base leading-relaxed relative z-10 ${
                    valor.textColor === "text-white"
                      ? "opacity-90"
                      : "text-gray-700"
                  }`}
                >
                  {valor.texto}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
