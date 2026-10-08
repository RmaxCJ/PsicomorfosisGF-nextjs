import Image from "next/image";

type PortadaProps = {
  imagen: string;
  alt: string;
};

export default function Portada({ imagen, alt }: PortadaProps) {
  return (
    <div className="relative w-full h-[180px] sm:h-[240px] md:h-[400px] overflow-hidden">
      <Image
        src={imagen}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-bottom"
      />
    </div>
  );
}
