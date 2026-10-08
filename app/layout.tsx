import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// Ajusta esta ruta dependiendo de dónde guardes el componente
import MascotaFlotante from "@/components/MascotaFlotante";
import BotonWhatsApp from "@/components/BotonWhatsApp";
import localFont from "next/font/local";
import { Mali } from "next/font/google";

const titulo = localFont({
  src: "./fonts/Railey.ttf",
  variable: "--font-titulo",
  display: "swap",
});
const parrafos = localFont({
  src: "./fonts/Amaranth.ttf",
  variable: "--font-parrafos",
  display: "swap",
});
const cuerpo = Mali({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cuerpo",
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://psicomorfosisgf.com"),
  title: "Psicomorfosis | Terapia Gestalt en Lima",
  description:
    "Psicoterapia Gestalt online y presencial con la Psic. Gabriela Gadea Falcón.",
  openGraph: {
    title: "Psicomorfosis | Terapia Gestalt en Lima",
    description:
      "Psicoterapia Gestalt online y presencial con la Psic. Gabriela Gadea Falcón.",
    url: "https://psicomorfosisgf.com",
    siteName: "Psicomorfosis",
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        className={`${titulo.variable} ${cuerpo.variable} ${parrafos.variable} min-h-full flex flex-col`}
      >
        {" "}
        {children}
        {/* La mascota renderizará globalmente sobre todas las vistas */}
        <MascotaFlotante />
        <BotonWhatsApp />
      </body>
    </html>
  );
}
