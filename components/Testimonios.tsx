"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Testimonios() {
  // Arreglo temporal de 10 capturas, simulando los 10 bloques de tu imagen
  const capturas = [
    {
      id: 1,
      src: "/img/Testimonios/chat1.jpg",
      alt: "Testimonio 1",
      fallbackHeight: "aspect-[4/5]",
    },
    {
      id: 2,
      src: "/img/Testimonios/chat2.jpg",
      alt: "Testimonio 2",
      fallbackHeight: "aspect-square",
    },
    {
      id: 3,
      src: "/img/Testimonios/chat3.jpg",
      alt: "Testimonio 3",
      fallbackHeight: "aspect-[3/5]",
    },
    {
      id: 4,
      src: "/img/Testimonios/chat4.jpg",
      alt: "Testimonio 4",
      fallbackHeight: "aspect-[4/3]",
    },
    {
      id: 5,
      src: "/img/Testimonios/chat5.jpg",
      alt: "Testimonio 5",
      fallbackHeight: "aspect-square",
    },
    {
      id: 6,
      src: "/img/Testimonios/chat6.jpg",
      alt: "Testimonio 6",
      fallbackHeight: "aspect-[4/5]",
    },
    {
      id: 7,
      src: "/img/Testimonios/chat7.jpg",
      alt: "Testimonio 7",
      fallbackHeight: "aspect-square",
    },
    {
      id: 8,
      src: "/img/Testimonios/chat8.jpg",
      alt: "Testimonio 8",
      fallbackHeight: "aspect-[4/5]",
    },
    {
      id: 9,
      src: "/img/Testimonios/chat9.jpg",
      alt: "Testimonio 9",
      fallbackHeight: "aspect-video",
    },
    {
      id: 10,
      src: "/img/Testimonios/chat10.jpg",
      alt: "Testimonio 10",
      fallbackHeight: "aspect-square",
    },
  ];

  return (
    <section className="py-24 px-4 md:px-8 bg-[#f8ede5] w-full">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#6cada3] font-bold text-sm uppercase tracking-wider">
            Lo que dicen de la terapia
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0c3f40] mt-2 tracking-tight">
            Experiencias Reales
          </h2>
          <p className="text-[#555555] mt-4 max-w-2xl mx-auto text-[15px] md:text-base">
            Más allá de la teoría, el verdadero impacto se refleja en los
            procesos de quienes han decidido iniciar su camino de sanación.
          </p>
        </motion.div>

        {/* 
          Cuadrícula Masonry Adaptada: 
          - 2 columnas en móviles (columns-2)
          - 3 columnas en tablets (md:columns-3)
          - 4 columnas en PC (lg:columns-4) para igualar tu imagen
        */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6">
          {capturas.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
              className="break-inside-avoid"
            >
              {/* 
                Nota: Se ha agregado 'bg-gray-200' y la clase 'item.fallbackHeight' temporal 
                para que veas la estructura asimétrica en tu pantalla antes de subir las fotos. 
              */}
              <div
                className={`relative w-full overflow-hidden rounded-2xl shadow-sm hover:shadow-md border border-white/60 bg-gray-200 group transition-all duration-300 ${item.fallbackHeight}`}
              >
                {/* Descomenta la etiqueta Image cuando tengas las rutas reales de tus imágenes */}
                {/* 
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={400}
                  height={800} 
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                /> 
                */}

                {/* Número superpuesto temporal para que veas el orden de renderizado (borrar después) */}
                <div className="absolute inset-0 flex items-center justify-center text-4xl font-black text-black/20">
                  {item.id}
                </div>

                <div className="absolute inset-0 bg-[#0c3f40]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
