"use client";

import Image from "next/image";
import Quantity from "@/app/Quantity";
import Button from "@/app/elements/Button";
import StarIcon from "@/public/icons/StarIcon";
import { useContext, useState } from "react";
import { CartContext } from "@/app/context/CartContext";
import { FavoritesContext } from "@/app/context/FavoritesContext";
import FavoriteIcon from "@/public/icons/FavoriteIcon";

const SingleProduct = ({ product }) => {
  const [countOFQuantity, setCountOFQuantity] = useState(1);

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
    <div className="flex-between flex-col md:flex-row gap-6">
      <div className="min-w-72 w-full h-72 bg-white flex justify-center items-center rounded-3xl">
        <Image
          src={product.image}
          alt={`Image: ${product.title}`}
          width={120}
          height={120}
        />
      </div>
      <div className="flex justify-between flex-col gap-4">
        <h3 className="text-2xl text-gray-text-800 font-semibold">
          {product.title}
        </h3>
        <p className="text-lg text-gray-text-800 font-light leading-8 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center gap-1">
          <StarIcon className="w-auto h-auto" />
          <p className="text-lg font-bold">{product.rating?.rate} </p>
          <span className="text-gray-text-800">
            ( {product.rating?.count} )
          </span>
        </div>
        <div className="flex-between flex-col lg:flex-row">
          <div className="w-full flex-between gap-4 lg:gap-8 lg:w-auto">
            <h3 className="text-2xl text-gray-text-800 font-extrabold">
              ${product.price}
            </h3>
            <Quantity
              setValueOFQuantity={(value) => setCountOFQuantity(value)}
              valueOFQuantity={countOFQuantity}
            />
          </div>
          <div className="flex gap-3 lg:gap-5 w-full mt-6 lg:mt-0 lg:w-auto">
            <div className="py-2 px-2 bg-amber-50 rounded-lg cursor-pointer">
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
            <Button
              className="py-[8px] px-[15px] font-medium text-base min-w-fit w-full lg:w-auto"
              onClick={() => {
                addProductToCart({
                  id: product.id,
                  title: product.title,
                  image: product.image,
                  rating: product.rating.rate,
                  quantity: countOFQuantity,
                  price: product.price,
                });
                setCountOFQuantity(1);
              }}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
