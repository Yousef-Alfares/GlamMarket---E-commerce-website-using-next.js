"use client";

import React, { useEffect, useRef, useState } from "react";
import Like from "@/public/icons/Like-1.svg";
import Button from "@/app/(shared)/components/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import StarIcon from "@/public/icons/StarIcon";

const addProductToCart = (product) => {
  const cartFromLocalStorage =
    typeof window !== "undefined" ? localStorage.getItem("cart") : null;

  let cart;

  if (cartFromLocalStorage) {
    cart = JSON.parse(cartFromLocalStorage);
  } else {
    cart = [];
  }

  // If the product exist will be quantity add 1 and return true, else will be return false
  const isProductExist = cart.some((productFromCart) => {
    if (productFromCart.id == product.id) {
      productFromCart.quantity += product.quantity;
      localStorage.setItem("cart", JSON.stringify([...cart]));
      return { message: "This product has been added to your cart" };
    }
    return productFromCart.id == product.id;
  });

  if (!isProductExist) {
    localStorage.setItem("cart", JSON.stringify([...cart, { ...product }]));
  }

  return { message: "This product has been added to your cart" };
};
const ProductSearch = ({ showSearch, products = [] }) => {
  const [search, setSearch] = useState("");
  const [quantity, setQuantity] = useState(1);

  const searchInput = useRef(null);
  const route = useRouter();

  useEffect(() => {
    if (searchInput.current) {
      searchInput.current.focus();
    }
  }, [showSearch]);

  const filterOfSerach = products.filter((product) =>
    product.title.toLowerCase().includes(search)
  );
  return (
    <>
      <input
        type="text"
        required
        spellCheck={false}
        className="w-full h-11 p-3 rounded-full bg-light-background shadow-3xl focus-visible:outline-amber-500 valid:outline-amber-500"
        ref={searchInput}
        onChange={(e) => setSearch(e.target.value)}
      />
      <label className="absolute top-1/2 left-2 -translate-y-1/2 text-gray-text bg-light-background transition-all">
        Search
      </label>
      <div className="rounded-[20px] rounded-tr-none bg-light-background-90 backdrop-blur-lg absolute -z-50 shadow-2xl">
        <div className="h-[390px] rounded-tl-[20px] overflow-auto custom-scroll overscroll-none">
          {filterOfSerach.map((product, index) => (
            <div
              key={index}
              className={`flex relative overflow-hidden}`}
              onClick={() => route.push(`/products/${product.id}`)}
            >
              <span className="absolute w-14 h-14 bg-amber-500 rounded-full top-[57px] left-[212px] blur-[100px] opacity-55"></span>
              <div className="w-[20%] bg-white flex justify-center items-center">
                <Image
                  src={product.image}
                  alt={`product image: ${product.image}`}
                  className="w-12 h-auto"
                  width={48}
                  height={48}
                />
              </div>
              <div className="p-3 w-[80%] h-24 flex items-start justify-between flex-col">
                {/* Title & rate of product */}
                <div className="flex-between w-full">
                  <h2 className="max-w-[75%] text-md font-medium text-gray-text-800 line-clamp-2">
                    {product.title}
                  </h2>
                  <div className="flex gap-1">
                    <StarIcon className="w-auto h-auto" />
                    <span className="text-base font-medium text-gray-text-800">
                      {product.rating.rate}
                    </span>
                  </div>
                </div>
                {/* Price, Quantity, like & close buttons */}
                <div className="flex-between w-full">
                  <h2 className="text-lg font-bold">${product.price}</h2>
                  <div className="flex-between gap-3">
                    <input
                      type="number"
                      value={quantity}
                      className="w-8 h-9 rounded-lg focus-visible:outline-none border border-light-border text-amber-500 text-center"
                      onChange={() => setQuantity(e.target.value)}
                    />
                    <div className="py-1 px-1 bg-amber-50 rounded-lg cursor-pointer">
                      <Image src={Like} alt="Like icon" />
                    </div>
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
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductSearch;
