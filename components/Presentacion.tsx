"use client";

import Image from "next/image";
import Contador from "@/components/Contador";

export default function Presentacion() {
  return (
    <section className="bg-[#6cada3] py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* BLOQUE IZQUIERDO: Foto de Gabi con borde estilo nube/trébol */}
        <div className="w-full lg:w-5/12 aspect-square relative flex-shrink-0 mx-auto max-w-md">
          <Image
            src="/img/fotoPerfil.jpg"
            alt="Gabriela Gadea Falcón - Psicóloga Gestalt Lima"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 33vw"
            priority
          />
        </div>

        {/* BLOQUE DERECHO: Texto de Presentación y Estadísticas */}
        <div
          className="w-full lg:w-7/12 text-[#f8ede5] flex flex-col justify-center"
          style={{ fontFamily: "var(--font-cuerpo), sans-serif" }}
        >
          <h2
            className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight"
            style={{
              fontFamily: "var(--font-titulo), cursive",
              fontWeight: 400,
              color: "#ffbbac",
              WebkitTextStroke: "6px #ca6955",
              paintOrder: "stroke fill",
            }}
          >
            Hola. Soy Gabriela Gadea
          </h2>

          <div
            className="space-y-4 md:space-y-5 text-[15px] md:text-[17px] font-medium leading-normal tracking-wide opacity-95"
            style={{ fontFamily: "var(--font-parrafos), sans-serif" }}
          >
            <p>
              Psicóloga y Psicoterapeuta Gestalt. Me gusta ofrecerte un ambiente
              seguro para poder sanar, aprender, crecer y transformarte; que la
              terapia sea para ti lo que en algún momento fue para mí una luz
              dentro de tanta oscuridad.
            </p>
            <p>
              Practico una psicología que no busca enseñarnos a encajar, sino
              acompañarnos a conocernos, recuperar nuestro lugar en el mundo y
              construir una vida que se sienta más suave y auténtica; o sea, más
              tuya.
            </p>
            <p>
              Por eso, mi forma de hacer psicoterapia también incorpora una
              mirada con perspectiva de género, conciencia de clase y justicia
              social, reconociendo que nuestra historia personal también está
              atravesada por el mundo en el que vivimos.
            </p>
          </div>

          {/* Cajas de Estadísticas (Integradas e Invertidas) */}
          <div
            className="flex flex-col sm:flex-row mt-8 gap-3 md:gap-4 w-full"
            style={{ fontFamily: "var(--font-parrafos), sans-serif" }}
          >
            {" "}
            {/* Contenedor Lila Dividido (Pacientes / Años) */}
            <div className="flex flex-row bg-[#ede6f5] rounded-xl flex-1 shadow-sm">
              <div className="flex-1 text-center border-r-[1.5px] border-[#6cada3]/20 px-2 py-6 flex flex-col justify-center">
                <span className="block text-4xl md:text-5xl font-black text-[#f88f1f] mb-1">
                  <Contador hasta={100} />
                </span>
                <span className="text-[12px] md:text-[13px]  text-[#f88f1f] leading-snug block px-2">
                  personas acompañadas en América Latina, Estados Unidos, Canadá
                  y Europa
                </span>
              </div>
              <div className="flex-1 text-center px-2 py-6 flex flex-col justify-center">
                <span className="block text-4xl md:text-5xl font-black text-[#f88f1f] mb-1">
                  <Contador hasta={7} />
                </span>
                <span className="text-[12px] md:text-[13px] text-[#f88f1f] leading-snug block px-2">
                  años de experiencia profesional, clínica-social y
                  psicoterapéutica
                </span>
              </div>
            </div>
            {/* Caja de Comunidad Digital (Fondo Naranja, letras lilas) */}
            <div className="rounded-xl bg-[#f88f1f] flex flex-col justify-center text-center px-4 py-6 w-full sm:w-[35%] shadow-sm">
              <span className="block text-4xl md:text-5xl font-black text-[#ede6f5] mb-1 drop-shadow-sm">
                <Contador hasta={75} sufijo="K" />
              </span>
              <span className="text-[11px] md:text-xstext-[#ede6f5] leading-tight block uppercase tracking-wider drop-shadow-sm">
                Comunidad Digital
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
