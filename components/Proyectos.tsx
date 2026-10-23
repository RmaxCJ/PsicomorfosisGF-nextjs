"use client";

import { motion } from "framer-motion";

export default function Proyectos() {
  return (
    <section className="py-24 px-4 md:px-8 bg-[#f8ede5] w-full" id="proyectos">
      <div className="max-w-6xl mx-auto">
        {/* Título de la sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-[#f88f1f] font-bold text-sm uppercase tracking-wider">
            Escucha & Ve
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0c3f40] mt-2 tracking-tight">
            Conoce mis proyectos
          </h2>
        </motion.div>

        {/* Cuadrícula de Contenido */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          {/* Columna Izquierda: Spotify Show/Podcast */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col w-full"
          >
            <div className="bg-white p-4 rounded-3xl shadow-sm border border-[#6cada3]/30">
              <span className="block text-[#0c3f40] font-bold text-lg mb-3 text-center">
                Podcast Cuentoterapia
              </span>
              <div className="w-full rounded-2xl overflow-hidden">
                <iframe
                  data-testid="embed-iframe"
                  style={{ borderRadius: "12px" }}
                  src="https://open.spotify.com/embed/show/0jq73X0cUcrRMbBjRevvAt?utm_source=generator&si=51157a68515944c6"
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </motion.div>

          {/* Columna Derecha: YouTube Video Player */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col w-full"
          >
            <div className="bg-white p-4 rounded-3xl shadow-sm border border-[#6cada3]/30">
              <span className="block text-[#0c3f40] font-bold text-lg mb-3 text-center">
                Videos & Reflexiones
              </span>
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/cFP7cIecVdI?si=FSkq2siU7NbAhIGT"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
