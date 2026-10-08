import Navbar from "@/components/Navbar";
import DivisorOndas from "@/components/DivisorOndas";
import Carousel from "@/components/Carousel";
import CintaAnimada from "@/components/CintaAnimada";
import Presentacion from "@/components/Presentacion";
import Metodologia from "@/components/Metodologia";
import Footer from "@/components/Footer";
import Portada from "@/components/Portada";
import OndasFestoneadas from "@/components/OndasFestoneadas";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <Portada imagen="/img/Portadas/Portada_LaTerapia.png" alt="La Terapia" />
      <DivisorOndas color="text-[#f0e4da]" bgColor="bg-[#6cada3]" />

      <Presentacion />
      <Metodologia />
      <CintaAnimada />

      <Footer />
    </main>
  );
}
