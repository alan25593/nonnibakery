import React, { type FC } from "react";
import Link from "next/link";
import type { Product } from "@/types/type";

type ProductCardProps = {
  product: Product;
  imageUrl: string | null;
};

export const ProductCard: FC<ProductCardProps> = ({ product, imageUrl }) => {
  return (
    <Link href={`/shop/${product.id}`}>
      <div className="relative flex flex-col text-center">
        {product.discountPrice && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 text-sm rounded shadow-md z-[10] font-lato">
            SALE
          </div>
        )}
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={product.title}
            className="w-full h-[315px] object-cover rounded-md shadow-redcoach-lg transition-transform duration-300 transform hover:scale-105 hover:translate-x-1 hover:translate-y-1"
          />
        ) : (
          <p className="text-gray-500 italic">Sin imagen</p>
        )}
        <h2 className="text-xl font-semibold pt-6">{product.title}</h2>
        <p className="text-gray-500 pb-2">{product.category.join(", ")}</p>
        <div className="flex gap-2 justify-center font-lato">
          {product.discountPrice && (
            <p className="text-lg font-bold text-black-primary">
              {new Intl.NumberFormat("es-AR", {
                style: "currency",
                currency: "ARS",
              }).format(product.discountPrice)}
            </p>
          )}
          <p
            className={`text-lg font-bold ${
              product.discountPrice
                ? "line-through text-gray-500"
                : "text-black-primary"
            }`}
          >
            {new Intl.NumberFormat("es-AR", {
              style: "currency",
              currency: "ARS",
            }).format(product.price)}
          </p>
        </div>
      </div>
    </Link>
  );
};
