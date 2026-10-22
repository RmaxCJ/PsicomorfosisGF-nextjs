import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Portada from "@/components/Portada";
import CintaAnimada from "@/components/CintaAnimada";

interface Acuerdo {
  num: string;
  titulo: string;
  descripcion: React.ReactNode;
  bgColor: string;
}

const listaAcuerdos: Acuerdo[] = [
  {
    num: "01",
    titulo: "Tiempos y Tolerancia",
    descripcion: (
      <ul className="list-disc list-inside space-y-2 mt-2">
        <li>
          La sesión dura <strong>50 minutos</strong> (la primera de evaluación
          dura 75 min).
        </li>
        <li>
          La sesión <strong>finaliza a la hora acordada</strong>, sin extensión
          por retrasos.
        </li>
        <li>
          En caso de retraso sin aviso, se otorga una{" "}
          <strong>espera máxima de 15 minutos</strong>; pasada esa tolerancia,
          la sesión se cancela.
        </li>
      </ul>
    ),
    bgColor: "bg-[#ede6f5]", // Lila pastel
  },
  {
    num: "02",
    titulo: "Pagos y Reembolsos",
    descripcion: (
      <ul className="list-disc list-inside space-y-2 mt-2">
        <li>
          Toda sesión debe reservarse y pagarse con al menos{" "}
          <strong>24 horas de anticipación</strong>.
        </li>
        <li>
          <strong>Política estricta:</strong> Los pagos realizados por sesiones
          o paquetes <strong>no son reembolsables</strong>. Al adquirir un
          paquete reservas un espacio, por lo que no hay devoluciones por
          abandono o cancelación del paciente.
        </li>
      </ul>
    ),
    bgColor: "bg-[#f8ede5]", // Crema
  },
  {
    num: "03",
    titulo: "Cancelaciones y Reprogramación",
    descripcion: (
      <ul className="list-disc list-inside space-y-2 mt-2">
        <li>
          Avisar con <strong>24 horas de antelación</strong> si no podrás
          asistir.
        </li>
        <li>
          No hay reembolsos por inasistencias sin aviso previo (salvo fuerza
          mayor comprobable).
        </li>
        <li>
          Si necesitas posponer, la sesión se reprogramará{" "}
          <strong>dentro de la misma semana</strong>.
        </li>
        <li>
          Si la terapeuta no puede cumplir la sesión, se compromete a{" "}
          <strong>reponerla sin costo</strong>.
        </li>
      </ul>
    ),
    bgColor: "bg-white",
  },
  {
    num: "04",
    titulo: "Compromiso con el Proceso",
    descripcion: (
      <ul className="list-disc list-inside space-y-2 mt-2">
        <li>
          Por respeto al espacio,{" "}
          <strong>no se puede asistir bajo efectos de sustancias</strong> no
          recetadas.
        </li>
        <li>
          Si decides cerrar tu proceso terapéutico, debes avisar con
          anticipación para hacer un cierre adecuado.
        </li>
        <li>
          Si dejas de asistir y <strong>no respondes en 10 días</strong>, tu
          horario será liberado automáticamente para otros consultantes.
        </li>
      </ul>
    ),
    bgColor: "bg-[#ede6f5]",
  },
  {
    num: "05",
    titulo: "Ética y Confidencialidad",
    descripcion: (
      <ul className="list-disc list-inside space-y-2 mt-2">
        <li>
          La terapeuta mantiene <strong>confidencialidad absoluta</strong> y
          actúa con honestidad, respeto y responsabilidad bajo el enfoque
          Gestalt.
        </li>
        <li>
          Cualquier intención de grabar la sesión requerirá de una autorización
          previa.
        </li>
        <li>
          Se ofrece la opción de sesiones presenciales a consultantes online,
          sujeto a disponibilidad.
        </li>
      </ul>
    ),
    bgColor: "bg-[#f8ede5]",
  },
];

export default function AcuerdosPage() {
  return (
    <main className="min-h-screen bg-[#6cada3] flex flex-col justify-between">
      <Navbar />

      <Portada
        imagen="/img/Portadas/Portada_LaTerapia.png"
        alt="Acuerdos del Proceso Terapéutico"
      />

      <section className="py-16 px-4 md:px-8 max-w-5xl mx-auto w-full">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-white drop-shadow-sm mb-4">
            Reglas del Espacio Seguro
          </h1>
          <p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto font-medium">
            Este espacio terapéutico se construye con compromisos compartidos.
            Lee atentamente las pautas antes de iniciar tu proceso.
          </p>
        </div>

        {/* LISTA DE ACUERDOS */}
        <div className="space-y-6">
          {listaAcuerdos.map((item) => (
            <div
              key={item.num}
              className={`${item.bgColor} p-6 md:p-8 rounded-3xl shadow-md flex flex-col md:flex-row items-start gap-6 transition-all hover:shadow-lg`}
            >
              {/* Número a la izquierda en Laptop, Arriba en Móvil */}
              <div className="shrink-0">
                <span className="text-3xl md:text-4xl font-black text-[#f88f1f] bg-white px-5 py-3 rounded-2xl shadow-sm block text-center">
                  {item.num}
                </span>
              </div>

              {/* Contenido a la derecha */}
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-[#0c3f40] mb-3">
                  {item.titulo}
                </h2>
                <div className="text-[#333333] text-base leading-relaxed font-medium">
                  {item.descripcion}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTÓN WHATSAPP */}
        <div className="text-center mt-16">
          <p className="text-white font-medium mb-5 text-lg">
            ¿Estás de acuerdo con el encuadre y listo/a para iniciar?
          </p>
          <a
            href="https://wa.me/51989529902?text=Hola%20Gabi,%20he%20le%C3%ADdo%20los%20acuerdos%20y%20quiero%20agendar%20mi%20sesi%C3%B3n"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#f88f1f] hover:bg-orange-500 text-white font-black py-4 px-10 rounded-full shadow-xl transition-transform hover:scale-105 text-lg"
          >
            Acepto y quiero agendar
          </a>
        </div>
      </section>

      <CintaAnimada />
      <Footer />
    </main>
  );
}
