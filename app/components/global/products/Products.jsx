"use client";
import { useState, useEffect } from "react";
import SliderProducts from "./product/SliderProducts";
import "./products.css";
import Button from "@/app/elements/Button";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://fakestoreapi.com/products?limit=7");
      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await res.json();
      setProducts(data);
      setError(null);
    } catch (error) {
      setError(error.message);
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <section className="mx-auto flex-between flex-col container px-3 md:px-[88px] xl:px-0 xl:max-w-[1080px] mt-32 relative products">
      <span className="absolute w-36 h-36 bg-amber-500 rounded-full top-0 -right-36 blur-[140px] opacity-30"></span>
      <div className="text-center">
        <h2 className="text-3xl text-gray-title font-bold">Our Products</h2>
        <p className="text-gray-text text-lg font-light mt-3">
          Our curated collection blends timeless classics <br /> with the latest
          trends.
        </p>
      </div>
      {error ? (
        <div className="text-center mt-24">
          <p className="text-red-500 mb-4">Error: {error}</p>
          <Button
            onClick={fetchProducts}
            className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-400 transition-colors"
          >
            Refresh Products
          </Button>
        </div>
      ) : (
        <SliderProducts
          products={products}
          className="mt-24"
          loading={loading}
        />
      )}
    </section>
  );
};

export default Products;
