"use client";

import SliderProducts from "@/app/components/global/products/product/SliderProducts";

import { useEffect, useState } from "react";

import SingleProduct from "./SingleProduct";

const page = ({ params }) => {
  const [product, setProduct] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProductAndSimilarProducts = async () => {
      const resProduct = await fetch(
        `https://fakestoreapi.com/products/${params.product}`
      );
      const product = await resProduct.json();
      setProduct(product);

      const resProducts = await fetch(
        `https://fakestoreapi.com/products/category/${product.category}`
      );
      const products = await resProducts.json();
      setProducts(products);
    };

    getProductAndSimilarProducts();
  }, []);

  return (
    <div className="mx-auto container px-3 md:px-7 xl:px-0 xl:max-w-[1080px] mt-20">
      <SingleProduct product={product} />
      <div className="mt-20">
        <h3 className="text-lg w-fit mx-auto px-2 py-1 text-gray-text-800 font-semibold border-b-2 border-amber-500">
          More information
        </h3>
        <p className="text-lg text-gray-text-800 font-light leading-8 mt-10">
          {product.description}
        </p>
      </div>
      <div className="mt-20">
        <h3 className="text-xl text-gray-text-800 font-semibold">
          Similar products
        </h3>
        <SliderProducts
          products={products}
          without={product.title}
          className="mt-8"
        />
      </div>
    </div>
  );
};

export default page;
