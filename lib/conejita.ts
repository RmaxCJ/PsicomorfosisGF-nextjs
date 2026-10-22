import faqData from "@/data/faq.json";

export type Enlace = { texto: string; href: string };

export type Faq = {
  id: string;
  pregunta: string;
  destacada?: boolean;
  oculta?: boolean; // no sale como botón (saludo, etc.)
  claves: string[];
  respuesta: string;
  enlace?: Enlace;
};

export type Respuesta = {
  tipo: "faq" | "crisis" | "sin_respuesta";
  texto: string;
  enlace?: Enlace;
  id?: string;
};

const faq = faqData as Faq[];

const WHATSAPP: Enlace = {
  texto: "Escribir por WhatsApp",
  href: "https://wa.me/51989529902",
};

// Quita tildes y mayúsculas para comparar ("Cancelación" -> "cancelacion")
const norm = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

// ---- Crisis: siempre se revisa ANTES de buscar en el FAQ ----
const REGEX_CRISIS =
  /suicid|quitarme la vida|quitarse la vida|no quiero vivir|no quiero seguir viviendo|matarme|acabar con mi vida|terminar con mi vida|hacerme dano|lastimarme|autolesion|cortarme|me quiero matar|quiere matarme|matar|matarme/;

const RESPUESTA_CRISIS: Respuesta = {
  tipo: "crisis",
  texto:
    "Lamento mucho que estés pasando por esto, y me alegra que lo hayas escrito. No tienes que cargarlo sola o solo. " +
    "Soy una mascota virtual y no puedo darte la ayuda que mereces, pero hay personas que sí pueden, ahora mismo y gratis:\n\n" +
    "• Perú: Línea 113, opción 5 (salud mental, 24 horas).\n" +
    "• México: Línea de la Vida, 800 911 2000 (24 horas).\n" +
    "• Si estás en peligro inmediato, llama a emergencias de tu país o ve al servicio de urgencias más cercano.\n\n" +
    "Si quieres, también puedes escribirle a Gaby.",
  enlace: WHATSAPP,
};

const RESPUESTA_SIN_RESPUESTA: Respuesta = {
  tipo: "sin_respuesta",
  texto:
    "No estoy segura de haber entendido 🐰 Mira las preguntas de abajo, a ver si alguna te sirve, o escríbele directamente a Gaby por WhatsApp y te responde.",
  enlace: WHATSAPP,
};

const aRespuesta = (item: Faq): Respuesta => ({
  tipo: "faq",
  id: item.id,
  texto: item.respuesta,
  enlace: item.enlace,
});

/** Preguntas para los botones iniciales del chat. */
export function preguntasDestacadas(): { id: string; pregunta: string }[] {
  return faq
    .filter((f) => f.destacada)
    .map(({ id, pregunta }) => ({ id, pregunta }));
}

/** Todas las preguntas con botón (destacadas primero). */
export function todasLasPreguntas(): { id: string; pregunta: string }[] {
  const visibles = faq.filter((f) => !f.oculta);
  return [
    ...visibles.filter((f) => f.destacada),
    ...visibles.filter((f) => !f.destacada),
  ].map(({ id, pregunta }) => ({ id, pregunta }));
}

/** Respuesta directa cuando se toca un botón. */
export function responderPorId(id: string): Respuesta {
  const item = faq.find((f) => f.id === id);
  return item ? aRespuesta(item) : RESPUESTA_SIN_RESPUESTA;
}

/** Respuesta a texto libre escrito por la persona. */
export function buscarRespuesta(texto: string): Respuesta {
  const t = norm(texto).trim();
  if (!t) return RESPUESTA_SIN_RESPUESTA;

  if (REGEX_CRISIS.test(t)) return RESPUESTA_CRISIS;

  const palabras = t.split(/[^a-z0-9ñ]+/).filter((p) => p.length > 2);

  let mejor: Faq | null = null;
  let mejorPuntaje = 0;

  for (const item of faq) {
    let puntaje = 0;
    for (const clave of item.claves.map(norm)) {
      if (t.includes(clave)) {
        puntaje += 3; // coincide la frase completa
      } else if (
        !clave.includes(" ") &&
        clave.length >= 6 &&
        palabras.some((p) => p.startsWith(clave.slice(0, 5)))
      ) {
        puntaje += 2; // misma raíz: "cancelo" ~ "cancelar"
      }
    }
    // ">" estricto: en empate gana la primera del archivo
    if (puntaje > mejorPuntaje) {
      mejorPuntaje = puntaje;
      mejor = item;
    }
  }

  return mejor && mejorPuntaje >= 3
    ? aRespuesta(mejor)
    : RESPUESTA_SIN_RESPUESTA;
}
