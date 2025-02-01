import SliderProducts from "./product/SliderProducts";
import "./products.css";

const Products = async () => {
  const res = await fetch(`https://fakestoreapi.com/products?limit=7`);
  const products = await res.json();

  return (
    <div className="mx-auto flex-between flex-col container px-3 md:px-[88px] xl:px-0 xl:max-w-[1080px] mt-32 relative products overflow-hidden">
      <span className="absolute w-36 h-36 bg-amber-500 rounded-full top-0 -right-36 blur-[140px] opacity-30"></span>
      <div className="text-center">
        <h2 className="text-3xl text-gray-title font-bold">Our Products</h2>
        <p className="text-gray-text text-lg font-light mt-3">
          Our curated collection blends timeless classics <br /> with the latest
          trends.
        </p>
      </div>
      <SliderProducts products={products} className="mt-24" />
    </div>
  );
};

export default Products;
