"use client";
import Image from "next/image";
import Star from "@/public/icons/star.svg";
import Button from "@/app/elements/Button";
import Like from "@/public/icons/Like-1.svg";
import Link from "next/link";
import FavoriteIcon from "@/public/icons/FavoriteIcon";
import { FavoritesContext } from "@/app/context/FavoritesContext";
import { useContext } from "react";
import { CartContext } from "@/app/context/CartContext";

const Product = ({ product }) => {
  const { state: cartState, dispatch: cartDispatch } = useContext(CartContext);
  const { state: favoritesState, dispatch: favoritesDispatch } =
    useContext(FavoritesContext);

  const addProductToCart = (product) => {
    cartDispatch({ type: "ADD_PRODUCT", payload: { product: product } });
  };

  const addProductToFavorites = (product) => {
    favoritesDispatch({ type: "ADD_PRODUCT", payload: { product: product } });
  };

  return (
    <div className="w-full h-full flex items-center justify-between flex-col">
      {/* Product image */}
      <div className="w-full h-[50%] sm:h-[60%] bg-white flex justify-center items-center relative p-7 sm:p-10">
        <div className="py-1 px-1 bg-amber-50 rounded-full cursor-pointer absolute w-7 sm:w-auto top-3 sm:top-4 right-3 sm:right-4">
          <FavoriteIcon
            id={product.id}
            onClick={() => {
              addProductToFavorites({
                id: product.id,
                title: product.title,
                image: product.image,
                rating: product.rating.rate,
                price: product.price,
              });
            }}
          />
        </div>
        <Image
          src={product.image}
          alt={`Image: ${product.title}`}
          width={96}
          height={200}
          loading="lazy"
          className="w-auto h-24 sm:h-28"
        />
      </div>
      <div className="p-[10px] flex items-start justify-between flex-col gap-3 h-[50%] relative w-full">
        <span className="absolute w-14 h-14 bg-amber-500 rounded-full top-[57px] right-6 blur-[100px] opacity-55"></span>
        {/* Rate */}
        <div className="flex items-center gap-1">
          <Image src={Star} alt="Star icon" />
          <span className="text-base font-medium text-gray-text-800">
            {product.rating.rate}
          </span>
        </div>
        {/* Title */}
        <Link
          href={`/products/${product.id}`}
          className="text-base sm:text-[1.1rem] font-bold text-gray-text-800 w-fit text-start line-clamp-2 min-h-12 cursor-pointer"
        >
          {product.title}
        </Link>
        {/* Price & Add to cart button */}
        <div className="w-full flex-between">
          <span className="text-base sm:text-[1.1rem] font-extrabold text-gray-text-800">
            ${product.price}
          </span>
          <Button
            className="py-[6px] px-3 font-medium text-xs sm:text-sm"
            onClick={() =>
              addProductToCart({
                id: product.id,
                title: product.title,
                image: product.image,
                rating: product.rating.rate,
                quantity: 1,
                price: product.price,
              })
            }
          >
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
  s;
};

export default Product;
