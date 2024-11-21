import Product from "@/app/components/global/products/product/Product";

const AllProducts = ({ currentProducts, loading }) => {
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 mt-10">
      {currentProducts.map((product) => (
        <div
          className="rounded-[20px] bg-light-background overflow-hidden shadow-3xl"
          key={product.id}
        >
          <Product product={product} />
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
