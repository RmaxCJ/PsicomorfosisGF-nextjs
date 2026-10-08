"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

type ContadorProps = {
  hasta: number;
  prefijo?: string;
  sufijo?: string;
  duracion?: number;
};

export default function Contador({
  hasta,
  prefijo = "+",
  sufijo = "",
  duracion = 2,
}: ContadorProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const enVista = useInView(ref, { once: true, margin: "-80px" });
  const reducirMovimiento = useReducedMotion();
  const [valor, setValor] = useState(0);

  useEffect(() => {
    if (!enVista) return;
    if (reducirMovimiento) {
      setValor(hasta);
      return;
    }
    const controles = animate(0, hasta, {
      duration: duracion,
      ease: "easeOut",
      onUpdate: (v) => setValor(Math.round(v)),
    });
    return () => controles.stop();
  }, [enVista, hasta, duracion, reducirMovimiento]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefijo}
      {valor}
      {sufijo}
    </span>
  );
}
