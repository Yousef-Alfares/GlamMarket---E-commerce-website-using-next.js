"use client";
import Image from "next/image";
import Button from "@/app/(shared)/components/Button";
import Link from "next/link";
import StarIcon from "@/public/icons/StarIcon";
import FavoriteIcon from "@/public/icons/FavoriteIcon";
import { FavoritesContext } from "@/app/(shared)/context/FavoritesContext";
import { useContext } from "react";
import { CartContext } from "@/app/(shared)/context/CartContext";

const Product = ({ product, loading }) => {
  if (loading) {
    return (
      <div
        role="status"
        className="max-w-sm p-4 rounded-sm shadow-sm animate-pulse md:p-6 dark:border-gray-700"
      >
        <div className="flex items-center justify-center h-48 mb-4 bg-light-border-50 rounded-sm">
          <svg
            className="w-10 h-10 text-light-border"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 20"
          >
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
          </svg>
        </div>
        <div className="h-5 bg-light-border-50 rounded-full w-9 mb-4"></div>
        <div className="h-4 bg-light-border-50 rounded-full mb-2.5"></div>
        <div className="h-4 bg-light-border-50 rounded-full w-20 mb-4"></div>
        <div className="h-2 bg-light-border-50 rounded-full mb-3"></div>
        <div className="h-2 bg-light-border-50 rounded-full mb-4 w-44"></div>
        <div className="flex justify-between items-center mt-4">
          <div className="h-5 bg-light-border-50 rounded-full w-9 mb-4"></div>
          <div className="h-8 bg-light-border-50 rounded-[10px] w-24 mb-4"></div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
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
      <div className="w-full h-[200px] bg-white flex justify-center items-center relative p-7 sm:p-10 rounded-t-[20px]">
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
      <div className="p-[10px] flex items-start justify-between flex-col gap-3 h-[55%] relative w-full">
        <span className="absolute w-14 h-14 bg-amber-500 rounded-full top-[57px] right-6 blur-[100px] opacity-55"></span>
        {/* Rate */}
        <div className="flex items-center gap-[6px]">
          <StarIcon className="w-auto h-auto" />
          <span className="text-lg font-bold text-gray-text-800">
            {product.rating.rate}
          </span>
        </div>
        {/* Title and Description */}
        <div>
          <Link
            href={`/products/${product.id}`}
            className="text-xl font-extrabold text-gray-text-800 w-fit text-start line-clamp-2 cursor-pointer mb-2"
          >
            {product.title}
          </Link>
          <p className="text-base text-gray-text-800 w-fit text-start line-clamp-2">
            {product.description}
          </p>
        </div>
        {/* Price & Add to cart button */}
        <div className="w-full flex-between mt-1">
          <span className="text-[1.3rem] font-extrabold text-gray-text-800">
            ${product.price}
          </span>
          <Button
            className="py-[6px] px-3 font-medium"
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
};

export default Product;
