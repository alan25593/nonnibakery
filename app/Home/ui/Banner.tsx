import { Button } from "@/components/ui/Button/button";
import Link from "next/link";

export const Banner = () => {
  return (
    <div className="relative h-screen bg-white flex items-center">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        {/* Columna izquierda: Texto */}
        <div className="lg:w-1/2 px-5 sm:px-10 lg:pl-20">
          <span className="text-5xl lg:text-[60px] font-mrs-saint-delafield text-purple">
            Dulzura garantizada
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight sm:leading-snug mt-4 text-black-primary">
            Repostería con amor
          </h1>
          <p className="max-w-full sm:max-w-md lg:max-w-[465px] text-base sm:text-lg lg:text-[20px] leading-relaxed sm:leading-normal mt-4 text-gray-600 font-tenor-sans">
            Disfrutá de nuestros productos, preparados con los mejores
            ingredientes y mucho cariño. Desde tortas personalizadas hasta
            muffins irresistibles.
          </p>
          <Link href="/shop">
            <Button className="text-white font-bold !py-2 h-full !px-8 text-lg font-lato rounded-[8px] bg-primary hover:bg-primary/90 transition-all">
              Catálogo
            </Button>
          </Link>
        </div>

        {/* Columna derecha: Imagen */}
        <div className="lg:w-1/2 h-[500px] lg:h-full flex justify-center items-center">
          <img
            src="/assets/Banners/inicio.webp"
            alt="Banner de Repostería"
            className="w-full h-auto max-w-lg object-contain"
          />
        </div>
      </div>
    </div>
  );
};
