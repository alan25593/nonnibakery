import { Button } from "@/components/ui/Button/button";
import Link from "next/link";

export const Banner = () => {
  return (
    <>
      <div className="relative h-screen bg-banner-home bg-left bg-no-repeat bg-cover flex items-center lg:bg-center">
        <div className="container mx-auto px-4">
          <div className="bg-black/40 p-4 sm:p-6 rounded-lg max-w-md">
            <span className="text-4xl lg:text-[50px] pl-1 lg:pl-2 font-mrs-saint-delafield text-white block">
              Repostería con amor
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl leading-tight sm:leading-snug mt-3 text-white">
              Dulzura garantizada
            </h1>
            <p className="max-w-full sm:max-w-md text-base sm:text-lg leading-relaxed sm:leading-normal mt-3 font-tenor-sans text-white">
              Disfrutá de nuestros productos, preparados con los mejores ingredientes y mucho cariño. Desde tortas personalizadas hasta muffins irresistibles.
            </p>
            <Link href="/shop">
              <Button className="mt-4 text-white font-bold !py-2 h-full !px-6 text-lg font-lato rounded-md bg-primary hover:bg-primary/90 transition-all">
                Ver Productos
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute left-0 top-1/3 w-full flex justify-center">
        </div>
      </div>
    </>
  );
};
