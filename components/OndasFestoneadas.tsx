import { useId } from "react";

type OndasProps = {
  arriba: string; // color de la sección de arriba
  abajo: string; // color de la sección de abajo
  ancho?: number; // ancho de cada onda en px
  invertir?: boolean; // true: las ondas suben desde abajo en vez de colgar
  className?: string;
};

export default function OndasFestoneadas({
  arriba,
  abajo,
  ancho = 90,
  invertir = false,
  className = "",
}: OndasProps) {
  const id = useId().replace(/[^a-zA-Z0-9]/g, "");
  const r = ancho / 2;

  // Por defecto: lóbulos del color de arriba colgando sobre el color de abajo
  const fondo = invertir ? arriba : abajo;
  const lobulo = invertir ? abajo : arriba;

  return (
    <svg
      aria-hidden="true"
      width="100%"
      height={r}
      className={`block w-full ${className}`}
    >
      <defs>
        <pattern id={id} width={ancho} height={r} patternUnits="userSpaceOnUse">
          <rect width={ancho} height={r} fill={fondo} />
          <g transform={invertir ? `translate(0 ${r}) scale(1 -1)` : undefined}>
            <path d={`M0 0H${ancho}A${r} ${r} 0 0 1 0 0Z`} fill={lobulo} />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
