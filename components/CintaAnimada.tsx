"use client";

import { useEffect, useId, useRef, useState } from "react";

// ====== Colores (cámbialos aquí) ======
const COLOR_CINTA = "#0c3f40"; // prueba "#f88f1f" para una cinta naranja como la referencia
const COLOR_TEXTO = "#f8ede5";
const COLOR_FONDO = "#f8ede5";
const NARANJA = "#f88f1f";
const MENTA = "#6cada3";
const ROSA = "#e58fa6";

// ====== Geometría ======
const W = 1600; // ancho visible del dibujo
const H = 220; // alto del dibujo
const CENTRO = 110; // línea media de la onda
const AMP = 40; // qué tanto sube y baja la onda
const PASO = 300; // distancia horizontal entre cada cresta y valle
const GROSOR = 56; // grosor de la cinta
const VELOCIDAD = 50; // velocidad del texto (unidades por segundo)

// Texto que se repite (el último separador cierra el ciclo)
const FRASES = [
  "Terapia Gestalt Centrada en el Presente",
  "Atención Virtual Especializada",
  "Espacio Seguro y Empático",
];
const SEPARADORES = [
  { s: "✿", c: NARANJA },
  { s: "♥", c: ROSA },
  { s: "✦", c: MENTA },
];

// Propiedades compartidas por el texto visible y el de medición
const PROPS_TEXTO = {
  fontSize: 20,
  fontWeight: 600,
  letterSpacing: 0.5,
  fill: COLOR_TEXTO,
} as const;

// Ruta ondulada que se extiende más allá de los bordes para que no se vean los extremos
function crearRuta() {
  const puntos: [number, number][] = [];
  for (let x = -PASO, i = 0; x <= W + PASO * 2; x += PASO, i++) {
    puntos.push([x, CENTRO + (i % 2 === 0 ? AMP : -AMP)]);
  }
  let d = "";
  puntos.forEach(([x, y], i) => {
    if (i === 0) {
      d += `M ${x} ${y}`;
      return;
    }
    const [px, py] = puntos[i - 1];
    const mx = (px + x) / 2;
    d += ` C ${mx} ${py}, ${mx} ${y}, ${x} ${y}`;
  });
  return d;
}
const RUTA = crearRuta();

// Una "unidad" completa del texto (frases + separadores de colores)
function Unidad() {
  return (
    <>
      {FRASES.map((frase, i) => (
        <tspan key={i}>
          {frase}
          <tspan fill={SEPARADORES[i % SEPARADORES.length].c}>
            {`\u00A0\u00A0${SEPARADORES[i % SEPARADORES.length].s}\u00A0\u00A0`}
          </tspan>
        </tspan>
      ))}
    </>
  );
}

// Flor decorativa de 8 pétalos que gira muy despacio
function Flor({
  x,
  y,
  r = 26,
  petalo = NARANJA,
  dur = 40,
}: {
  x: number;
  y: number;
  r?: number;
  petalo?: string;
  dur?: number;
}) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <g
        className="motion-safe:animate-spin"
        style={{
          animationDuration: `${dur}s`,
          transformBox: "fill-box",
          transformOrigin: "center",
        }}
      >
        {Array.from({ length: 8 }, (_, i) => (
          <ellipse
            key={i}
            cx={0}
            cy={-r * 0.55}
            rx={r * 0.26}
            ry={r * 0.5}
            fill={petalo}
            transform={`rotate(${i * 45})`}
          />
        ))}
        <circle r={r * 0.2} fill={COLOR_FONDO} />
      </g>
    </g>
  );
}

export default function CintaAnimada() {
  const id = useId().replace(/:/g, "");
  const rutaRef = useRef<SVGPathElement>(null);
  const medidaRef = useRef<SVGTextElement>(null);
  const [anim, setAnim] = useState<{
    unidad: number;
    repeticiones: number;
  } | null>(null);
  const [sinMovimiento, setSinMovimiento] = useState(false);

  useEffect(() => {
    setSinMovimiento(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    );
    let cancelado = false;

    const medir = () => {
      const ruta = rutaRef.current;
      const texto = medidaRef.current;
      if (!ruta || !texto || cancelado) return;
      const unidad = texto.getComputedTextLength();
      if (!unidad) return;
      const largo = ruta.getTotalLength();
      setAnim({ unidad, repeticiones: Math.ceil(largo / unidad) + 2 });
    };

    // Esperamos a que cargue la tipografía para medir bien
    document.fonts.ready.then(medir);
    return () => {
      cancelado = true;
    };
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ background: COLOR_FONDO }}
    >
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Terapia Gestalt Centrada en el Presente · Atención Virtual Especializada · Espacio Seguro y Empático"
        className="relative left-1/2 block h-auto max-w-none -translate-x-1/2"
        style={{ width: "max(100%, 1100px)", fontFamily: "inherit" }}
      >
        {/* Texto invisible solo para medir el largo de una unidad */}
        <text
          ref={medidaRef}
          {...PROPS_TEXTO}
          style={{ visibility: "hidden" }}
          aria-hidden="true"
        >
          <Unidad />
        </text>

        {/* Flores decorativas */}
        <Flor x={300} y={42} r={28} petalo={NARANJA} dur={45} />
        <Flor x={600} y={172} r={24} petalo={MENTA} dur={38} />
        <Flor x={900} y={38} r={22} petalo={NARANJA} dur={50} />
        <Flor x={1200} y={176} r={28} petalo={NARANJA} dur={42} />
        <Flor x={1500} y={44} r={24} petalo={MENTA} dur={36} />
        <Flor x={75} y={175} r={16} petalo={ROSA} dur={30} />
        <Flor x={760} y={190} r={12} petalo={ROSA} dur={28} />
        <Flor x={1040} y={78} r={11} petalo={ROSA} dur={32} />

        {/* Cinta */}
        <path
          ref={rutaRef}
          id={`${id}-ruta`}
          d={RUTA}
          fill="none"
          stroke={COLOR_CINTA}
          strokeWidth={GROSOR}
        />

        {/* Texto que sigue la curva y se desplaza */}
        <text {...PROPS_TEXTO} dy={7}>
          <textPath href={`#${id}-ruta`} startOffset={0}>
            {anim && !sinMovimiento && (
              <animate
                attributeName="startOffset"
                from="0"
                to={-anim.unidad}
                dur={`${anim.unidad / VELOCIDAD}s`}
                repeatCount="indefinite"
              />
            )}
            {Array.from({ length: anim?.repeticiones ?? 1 }, (_, i) => (
              <Unidad key={i} />
            ))}
          </textPath>
        </text>
      </svg>
    </div>
  );
}
