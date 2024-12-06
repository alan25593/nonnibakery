import type { CategoryItemProps } from "@/types/type";
import Link from "next/link";

const CategoryItem = ({  title, bgType }: CategoryItemProps) => (
  <div className={`flex-1 ${bgType} bg-cover bg-center relative group`}>
    <Link href={"/shop"}>
      <div className="absolute inset-0 bg-black opacity-0 md:group-hover:opacity-50 transition-opacity"></div>
      <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 md:group-hover:opacity-100 transition-opacity">
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            className="absolute inset-0 z-0 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{ objectFit: "contain" }}
          />
          <p className="text-2xl font-bold text-white relative z-10 group-hover:text-purple-400 transition-colors duration-300">
            {title}
          </p>
        </div>
      </div>
    </Link>
  </div>
);

export const TrendingItems = () => {
  return (
    <div className="flex flex-col text-center">
      {/* Títulos */}
      <h3 className="font-mrs-saint-delafield text-[50px] text-purple pt-5 pb-2">
        Más solicitados
      </h3>
      <h5 className="text-[54px] font-medium text-black-primary leading-[54px]">
        Categorías destacadas
      </h5>
      <h6 className="font-lato text-[18px] text-gray-600 pt-4">
        Descubrí nuestras especialidades irresistibles para cualquier ocasión.
      </h6>

      {/* Contenedor con gap entre las imágenes */}
      <div className="flex md:flex-row flex-col w-full pt-8 h-[700px] gap-8">
        <CategoryItem
          imageSrc="/assets/img/torta-jpg"
          title="Tortas"
          bgType="bg-banner-trending-1"
        />
        <CategoryItem
          imageSrc="/assets/img/muffin-jpg"
          title="Muffins"
          bgType="bg-banner-trending-2"
        />
        <CategoryItem
          imageSrc="/assets/img/personalizado-jpg"
          title="Personalizados"
          bgType="bg-banner-trending-3"
        />
      </div>
    </div>
  );
};
