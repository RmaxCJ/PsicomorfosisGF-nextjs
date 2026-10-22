"use client";

import { useState, useRef, useEffect, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  preguntasDestacadas,
  todasLasPreguntas,
  responderPorId,
  buscarRespuesta,
  type Enlace,
  type Respuesta,
} from "@/lib/conejita";

// Lista de diálogos rotativos
const dialogos = [
  "¡Hola! Soy la ayudante de Gabi. ¿Quieres agendar una sesión o tienes dudas? 🌸",
  "Tomar la decisión de ir a terapia es un gran paso. ¡Aquí estamos para apoyarte! 🌿",
  "Gabi atiende a adultos y adolescentes. ¿Revisamos los paquetes? ✨",
  "Recuerda que la Terapia Gestalt se centra en tu aquí y ahora. 💖",
  "¡Qué bueno verte por aquí! ¿Te ayudo a contactar a Gabi? 🐰",
];

type Mensaje = { de: "bot" | "yo"; texto: string; enlace?: Enlace };

// Se calculan una sola vez (vienen del faq.json)
const botones = preguntasDestacadas();
const todas = todasLasPreguntas();
const saludo = responderPorId("saludo");

export default function MascotaFlotante() {
  // --- Globo con diálogos (hover), igual que antes ---
  const [isOpen, setIsOpen] = useState(false);
  const [mensajeActual, setMensajeActual] = useState(dialogos[0]);

  // --- Chat (click en la conejita) ---
  const [chatAbierto, setChatAbierto] = useState(false);
  const [mensajes, setMensajes] = useState<Mensaje[]>([
    { de: "bot", texto: saludo.texto },
  ]);
  const [input, setInput] = useState("");
  const [escribiendo, setEscribiendo] = useState(false);
  const [verTodas, setVerTodas] = useState(false);
  const listaRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Al pasar el mouse, elegimos un mensaje al azar y abrimos el globo
  const handleMouseEnter = () => {
    const randomMsg = dialogos[Math.floor(Math.random() * dialogos.length)];
    setMensajeActual(randomMsg);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const alternarChat = () => {
    setIsOpen(false); // el globo se esconde mientras el chat está abierto
    setChatAbierto((v) => !v);
  };

  // Agrega la pregunta de la persona y, tras una pausa "escribiendo...",
  // la respuesta de la conejita
  const agregar = (pregunta: string, r: Respuesta) => {
    setMensajes((m) => [...m, { de: "yo", texto: pregunta }]);
    setEscribiendo(true);
    if (r.tipo === "sin_respuesta") setVerTodas(true);

    // Pausa proporcional al largo de la respuesta (entre 0.8 y 1.8 s).
    // En crisis responde casi de inmediato.
    const demora =
      r.tipo === "crisis" ? 300 : Math.min(1800, 800 + r.texto.length * 4);

    timerRef.current = setTimeout(() => {
      setMensajes((m) => [
        ...m,
        { de: "bot", texto: r.texto, enlace: r.enlace },
      ]);
      setEscribiendo(false);
    }, demora);
  };

  // Botón rápido: usa la respuesta por id
  const handleBoton = (id: string, pregunta: string) => {
    if (escribiendo) return;
    agregar(pregunta, responderPorId(id));
  };

  // Texto libre: busca en el faq.json
  const handleEnviar = (e: FormEvent) => {
    e.preventDefault();
    const texto = input.trim();
    if (!texto || escribiendo) return;
    agregar(texto, buscarRespuesta(texto));
    setInput("");
  };

  // Baja el scroll al último mensaje
  useEffect(() => {
    const el = listaRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [mensajes, escribiendo, chatAbierto]);

  // Limpia el timer si el componente se desmonta
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div
      // El contenedor detecta el mouse. Ocupará el espacio del globo y la mascota.
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Globo de diálogo (solo si el chat está cerrado) */}
      <AnimatePresence>
        {isOpen && !chatAbierto && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.9 }}
            className="mb-4 bg-white p-4 rounded-2xl shadow-2xl border-[1.5px] border-[#6cada3] max-w-[220px] relative origin-bottom-right"
          >
            <p className="text-sm text-[#0c3f40] font-medium text-center leading-snug">
              {mensajeActual}
            </p>

            <button
              type="button"
              onClick={alternarChat}
              className="mt-3 block w-full bg-[#6cada3] text-white text-xs text-center py-2.5 rounded-xl font-bold shadow-sm hover:bg-[#5a9c92] transition-colors"
            >
              Resolver una duda
            </button>

            <a
              href="https://wa.me/51989529902"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block w-full bg-[#f88f1f] text-white text-xs text-center py-2.5 rounded-xl font-bold shadow-sm hover:bg-orange-500 transition-colors"
            >
              Ir a WhatsApp
            </a>

            {/* Triángulo del globo apuntando a la mascota */}
            <div className="absolute -bottom-2 right-10 w-4 h-4 bg-white border-b-[1.5px] border-r-[1.5px] border-[#6cada3] rotate-45"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Ventana de chat */}
      <AnimatePresence>
        {chatAbierto && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            className="mb-4 w-[320px] max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl border-[1.5px] border-[#6cada3] overflow-hidden origin-bottom-right flex flex-col"
          >
            {/* Encabezado */}
            <div className="bg-[#eae2f8] text-[#0c3f40] px-4 py-3 flex items-start justify-between">
              <div>
                <p className="text-sm font-bold leading-tight">
                  Ayudante de Gabi 🐰
                </p>
                <p className="text-[11px] opacity-80 leading-tight mt-0.5">
                  Asistente virtual · no reemplaza una sesión
                </p>
              </div>
              <button
                type="button"
                onClick={alternarChat}
                aria-label="Cerrar chat"
                className="text-[#0c3f40]/70 hover:text-[#0c3f40] text-lg leading-none px-1"
              >
                ✕
              </button>
            </div>

            {/* Mensajes */}
            <div
              ref={listaRef}
              className="h-64 overflow-y-auto px-3 py-3 flex flex-col gap-2"
            >
              {mensajes.map((m, i) => (
                <div
                  key={i}
                  className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-snug whitespace-pre-line ${
                    m.de === "bot"
                      ? "self-start bg-[#f8ede5] text-[#0c3f40]"
                      : "self-end bg-[#6cada3] text-white"
                  }`}
                >
                  {m.texto}
                  {m.enlace && (
                    <a
                      href={m.enlace.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 block bg-[#f88f1f] text-white text-xs text-center font-bold py-2 px-3 rounded-xl hover:bg-orange-500 transition-colors"
                    >
                      {m.enlace.texto}
                    </a>
                  )}
                </div>
              ))}

              {/* Puntitos "escribiendo..." */}
              {escribiendo && (
                <div
                  className="self-start bg-[#f8ede5] rounded-2xl px-4 py-3 flex items-center gap-1"
                  aria-label="La ayudante está escribiendo"
                >
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      className="block w-2 h-2 rounded-full bg-[#6cada3]"
                      animate={{ y: [0, -5, 0], opacity: [0.5, 1, 0.5] }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.15,
                      }}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Botones rápidos */}
            <div className="px-3 pb-2 flex flex-wrap gap-1.5 max-h-28 overflow-y-auto">
              {(verTodas ? todas : botones).map((b) => (
                <button
                  key={b.id}
                  type="button"
                  onClick={() => handleBoton(b.id, b.pregunta)}
                  disabled={escribiendo}
                  className="text-xs bg-[#eae2f8] text-[#0c3f40] px-3 py-1.5 rounded-full hover:bg-[#c9c0e3] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {b.pregunta}
                </button>
              ))}
              <button
                type="button"
                onClick={() => setVerTodas((v) => !v)}
                className="text-xs text-[#0c3f40] border border-[#c9c0e3] px-3 py-1.5 rounded-full hover:bg-[#eae2f8] transition-colors"
              >
                {verTodas ? "Ver menos −" : "Más preguntas +"}
              </button>
            </div>

            {/* Caja de texto */}
            <form
              onSubmit={handleEnviar}
              className="border-t border-[#6cada3]/30 p-2 flex gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                maxLength={200}
                placeholder="Escribe tu duda..."
                className="flex-1 min-w-0 text-sm text-[#0c3f40] placeholder:text-gray-400 border border-gray-200 rounded-full px-3 py-2 outline-none focus:border-[#6cada3]"
              />
              <button
                type="submit"
                disabled={escribiendo}
                className="bg-[#f88f1f] text-white text-xs font-bold px-4 rounded-full hover:bg-orange-500 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                Enviar
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contenedor de la mascota con Brillos (Estilo Navi) */}
      <div
        role="button"
        tabIndex={0}
        aria-label={chatAbierto ? "Cerrar chat" : "Abrir chat con la ayudante"}
        onClick={alternarChat}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            alternarChat();
          }
        }}
        className="relative w-24 h-32 mt-2 cursor-pointer"
      >
        {/* Brillo 1 (Izquierda Arriba) */}
        <motion.div
          animate={{
            scale: [0.8, 1.3, 0.8],
            opacity: [0.3, 1, 0.3],
            rotate: [0, 90, 180],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute -top-3 -left-3 text-[#f88f1f] text-2xl z-0 pointer-events-none"
        >
          ✨
        </motion.div>

        {/* Brillo 2 (Derecha Medio) */}
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.9, 0.2],
            rotate: [180, 90, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "linear",
            delay: 0.5,
          }}
          className="absolute top-1/2 -right-4 text-[#6cada3] text-xl z-0 pointer-events-none"
        >
          ✨
        </motion.div>

        {/* Conejita flotando */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-full relative z-10 drop-shadow-lg"
        >
          {/* El object-contain y el fondo transparente de tu PNG harán que se vea perfecta */}
          <Image
            src="/img/mascota1.png"
            alt="Ayudante de Psicomorfosis"
            fill
            unoptimized
            style={{ background: "transparent" }}
            className="object-contain"
            sizes="96px"
          />
        </motion.div>
      </div>
    </div>
  );
}
