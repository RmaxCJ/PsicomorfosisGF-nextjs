import Image from "next/image";

// Estructura de productos de Merch (lista para cuando decidan activarla)
const productosMerch = [
  {
    id: 1,
    titulo: "Agenda Psicomorfosis",
    sub: "Edición Anual",
    img: "/img/Acuerdos/1.webp",
    badge: "Próximamente",
    bgColor: "bg-[#ede6f5]",
  },
  {
    id: 2,
    titulo: "Mousepads Ilustrados",
    sub: "Diseños exclusivos",
    img: "/img/Acuerdos/2.webp",
    badge: "Muy Pronto",
    bgColor: "bg-[#f8ede5]",
  },
  {
    id: 3,
    titulo: "Calendario / Planner",
    sub: "Organizador de escritorio",
    img: "/img/Acuerdos/3.webp",
    badge: "Próximamente",
    bgColor: "bg-[#e8f3f1]",
  },
  {
    id: 4,
    titulo: "Stickers & Libreta",
    sub: "Detalles para el alma",
    img: "/img/Acuerdos/4.webp",
    badge: "Próximamente",
    bgColor: "bg-white",
  },
];

// Cambia a true cuando quieran habilitar la venta de merch
const TIENDA_ACTIVA = true;

export default function TiendaSeccion() {
  if (!TIENDA_ACTIVA) return null;

  return (
    <section className="py-24 px-4 md:px-8 bg-white w-full border-t border-black/5">
      <div className="max-w-6xl mx-auto">
        {/* ENCABEZADO DE LA SECCIÓN */}
        <div className="text-center mb-16">
          <span className="text-[#f88f1f] font-bold text-sm uppercase tracking-wider bg-[#f8ede5] px-4 py-1.5 rounded-full">
            Espacio Creativo
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-[#0c3f40] mt-4 mb-3">
            Tienda & Merch
          </h2>
          <p className="text-[#555555] text-base md:text-lg max-w-xl mx-auto font-medium">
            Pequeños detalles ilustrados con cariño para acompañar tus días y tu
            proceso de autoconocimiento.
          </p>
        </div>

        {/* GRID DE PRODUCTOS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {productosMerch.map((item) => (
            <div
              key={item.id}
              className={`${item.bgColor} rounded-[32px] p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 border border-black/5 relative group`}
            >
              {/* ETIQUETA FLOTANTE */}
              <span className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm text-[#0c3f40] text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
                {item.badge}
              </span>

              {/* IMAGEN CON EFECTO ZOOM */}
              <div className="w-full h-64 rounded-2xl overflow-hidden relative mb-6 bg-white/50 shadow-inner">
                <Image
                  src={item.img}
                  alt={item.titulo}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>

              {/* INFORMACIÓN DEL PRODUCTO */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-[#0c3f40] mb-1">
                  {item.titulo}
                </h3>
                <p className="text-sm text-[#666666] font-medium mb-6">
                  {item.sub}
                </p>

                <button
                  disabled
                  className="w-full bg-black/5 text-[#0c3f40]/50 font-bold py-3 rounded-full text-sm cursor-not-allowed"
                >
                  Próximamente
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* AVISO INFORMATIVO INFERIOR */}
        <div className="text-center mt-12">
          <p className="text-sm text-gray-500 font-medium">
            ¿Te interesa adquirir algún producto o tienes dudas sobre los
            lanzamientos? Escríbenos a
            <a
              href="https://wa.me/51989529902?text=Hola%20Gabi,%20quiero%20saber%20más%20sobre%20la%20merch"
              className="text-[#6cada3] font-bold ml-1 hover:underline"
            >
              WhatsApp 🌸
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
