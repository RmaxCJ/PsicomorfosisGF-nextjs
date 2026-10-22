"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  id: number;
  pregunta: string;
  respuesta: React.ReactNode;
  bgColor: string;
  textColor: string;
}

export default function PreguntasFrecuentes() {
  const [abierto, setAbierto] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setAbierto(abierto === id ? null : id);
  };

  const faqs: FAQItem[] = [
    {
      id: 1,
      pregunta: "¿Cómo es la primera sesión?",
      bgColor: "bg-[#c9c0e3]", // Lila
      textColor: "text-white",
      respuesta: (
        <>
          La primera sesión dura <strong>1 hora y 15 minutos</strong>, es decir,
          25 minutos más que una sesión habitual. Este tiempo nos permite
          conocernos, resolver tus dudas y definir los primeros objetivos del
          proceso.
          <br />
          <br />
          Solo necesitas estar en un espacio <strong>privado, tranquilo</strong>
          , con buena conexión a internet y que sea cómodo para hablar con
          libertad.
        </>
      ),
    },
    {
      id: 2,
      pregunta: "¿Puedo pagar por sesión sin paquete?",
      bgColor: "bg-[#f8ede5]", // Beige
      textColor: "text-[#333333]",
      respuesta: (
        <>
          Sí. Puedes pagar una sesión individual sin comprometerte a un paquete.
          Los paquetes son solo una opción para quienes desean comprometerse con
          su proceso y acceder a un precio más accesible por sesión.
          <br />
          <br />
          También puedes agendar una <strong>llamada de 15 minutos</strong> para
          resolver dudas antes de decidir.
        </>
      ),
    },
    {
      id: 3,
      pregunta: "¿Qué pasa si necesito cancelar?",
      bgColor: "bg-[#f7aead]", // Coral
      textColor: "text-white",
      respuesta: (
        <>
          Entiendo que pueden surgir imprevistos, por eso te pido avisar con{" "}
          <strong>al menos 24 horas de anticipación</strong> si necesitas
          cancelar o reprogramar para poder reorganizar la agenda. El pago se
          realiza <strong>24 horas antes de la sesión</strong> como confirmación
          de asistencia; en caso de emergencias reales (salud o situaciones
          urgentes) lo reagendamos sin problema juntxs, pero olvidos, quedarse
          dormidx o desorganización personal no se consideran emergencias.
        </>
      ),
    },
    {
      id: 4,
      pregunta: "¿Las sesiones son confidenciales?",
      bgColor: "bg-[#c9c0e3]",
      textColor: "text-white",
      respuesta: (
        <>
          Sí, absolutamente. Todo lo que se habla en sesión es{" "}
          <strong>estrictamente confidencial</strong>. El secreto profesional es
          uno de los pilares éticos de mi trabajo. Puedes hablar con total
          libertad y confianza.
        </>
      ),
    },
    {
      id: 5,
      pregunta: "¿Haces terapia de pareja?",
      bgColor: "bg-[#f8ede5]",
      textColor: "text-[#333333]",
      respuesta: (
        <>
          Por el momento me especializo en <strong>terapia individual</strong>{" "}
          con adultos y adolescentes. Si estás buscando apoyo para tu relación,
          puedo acompañarte en tu proceso personal, lo cual muchas veces tiene
          un impacto positivo en tus vínculos.
        </>
      ),
    },
    {
      id: 6,
      pregunta: "¿Qué diferencia hay entre psicólogo y psicoterapeuta?",
      bgColor: "bg-[#e9846d]", // Terracota / Coral oscuro
      textColor: "text-white",
      respuesta: (
        <>
          Un psicólogo tiene formación universitaria en psicología. Un
          psicoterapeuta, además de esa base, tiene una{" "}
          <strong>
            formación especializada en una corriente terapéutica específica
          </strong>{" "}
          — en mi caso, la Gestalt, con una Maestría en México. Esto significa
          que no solo evalúo o doy orientación, sino que realizo un
          acompañamiento terapéutico profundo y estructurado.
        </>
      ),
    },
    {
      id: 7,
      pregunta: "¿Necesito un diagnóstico previo para iniciar?",
      bgColor: "bg-[#c9c0e3]",
      textColor: "text-white",
      respuesta: (
        <>
          No. No necesitas ningún diagnóstico ni derivación médica para iniciar
          terapia. Puedes venir simplemente porque sientes que algo no está
          bien, porque atraviesas un momento difícil, quieres{" "}
          <strong>conocerte mejor</strong> o trabajar en tus{" "}
          <strong>sueños y objetivos</strong>. Eso es suficiente.
        </>
      ),
    },
    {
      id: 8,
      pregunta: "¿Puedo pausar mi proceso y retomarlo después?",
      bgColor: "bg-[#f8ede5]",
      textColor: "text-[#333333]",
      respuesta: (
        <>
          Sí. La terapia es <strong>tu proceso y va a tu ritmo</strong>. Si
          necesitas pausar por cualquier motivo, lo conversamos y hacemos un
          cierre adecuado. Cuando quieras retomarlo, aquí estaré.
        </>
      ),
    },
    {
      id: 9,
      pregunta: "¿Cómo sé si estoy progresando?",
      bgColor: "bg-[#f7aead]",
      textColor: "text-white",
      respuesta: (
        <>
          El progreso en terapia no siempre es lineal ni dramático — a veces se
          siente en pequeñas cosas: reaccionar diferente ante algo que antes te
          desbordaba, entenderte un poco más, poner un límite que antes no
          podías.{" "}
          <strong>En sesión revisamos periódicamente tus objetivos</strong> para
          que tengas claridad sobre tu proceso.
        </>
      ),
    },
    {
      id: 10,
      pregunta: "¿Qué pasa si no conectamos como terapeuta y paciente?",
      bgColor: "bg-[#c9c0e3]",
      textColor: "text-white",
      respuesta: (
        <>
          El vínculo terapéutico es fundamental y no siempre se da con cualquier
          terapeuta — y eso está bien. Si después de las primeras sesiones
          sientes que no es el espacio adecuado para ti,{" "}
          <strong>
            te lo digo con honestidad y te ayudo a encontrar a alguien más afín
          </strong>
          . Tu bienestar es lo primero.
        </>
      ),
    },
    {
      id: 11,
      pregunta:
        "¿Las sesiones virtuales son igual de efectivas que las presenciales?",
      bgColor: "bg-[#f8ede5]",
      textColor: "text-[#333333]",
      respuesta: (
        <>
          Sí. La evidencia y mi experiencia clínica confirman que la terapia
          online es igual de efectiva. Las sesiones se realizan por{" "}
          <strong>Google Meet</strong> y el trabajo es exactamente el mismo.
          Muchos pacientes incluso prefieren la modalidad virtual por la
          comodidad de estar en su propio espacio.
        </>
      ),
    },
    {
      id: 12,
      pregunta: "¿Cómo se realiza el pago?",
      bgColor: "bg-[#e9846d]",
      textColor: "text-white",
      respuesta: (
        <>
          El pago se realiza <strong>24 horas antes de la sesión</strong> como
          confirmación de asistencia. Los medios disponibles son:
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Transferencia interbancaria (CCI)</li>
            <li>Yape</li>
            <li>Plin</li>
            <li>PayPal</li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <section className="w-full py-20 px-4 md:px-6 bg-[#6cada3]">
      <div className="max-w-4xl mx-auto">
        {/* Título de la sección */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0c3f40]">
            Preguntas Frecuentes
          </h2>
          <p className="text-white mt-2 text-base md:text-lg">
            Todo lo que necesitas saber sobre el proceso terapéutico
          </p>
        </div>

        {/* Lista de acordeones */}
        <div className="space-y-3">
          {faqs.map((faq) => {
            const isSelected = abierto === faq.id;

            return (
              <div
                key={faq.id}
                className="overflow-hidden rounded-[50px] shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className={`w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-base md:text-lg transition-opacity hover:opacity-95 ${faq.bgColor} ${faq.textColor}`}
                >
                  <span className="pr-4">{faq.pregunta}</span>
                  <motion.span
                    animate={{ rotate: isSelected ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 text-xl"
                  >
                    ↓
                  </motion.span>
                </button>

                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="bg-white"
                    >
                      <div className="px-6 py-5 text-[#117170] text-base leading-relaxed border-t border-gray-100">
                        {faq.respuesta}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Botón de acción al pie de la sección */}
        <div className="text-center mt-12">
          <p className="text-white text-lg mb-4">
            ¿Tienes alguna otra pregunta?
          </p>
          <a
            href="https://wa.me/51989529902?text=Hola%20Gabi,%20tengo%20una%20consulta%20sobre%20las%20sesiones"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#f88f1f] hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-md transition-colors"
          >
            Escríbeme por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
