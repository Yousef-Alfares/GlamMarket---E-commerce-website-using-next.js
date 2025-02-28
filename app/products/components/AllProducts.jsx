import Product from "@/app/components/global/products/product/Product";

const AllProducts = ({ currentProducts, loading, productsPerPage }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 sm:gap-4 mt-10">
        {[...Array(productsPerPage)].map((_, index) => (
          <div
            className="rounded-[20px] bg-light-background overflow-hidden shadow-3xl"
            key={index}
          >
            <Product loading={loading} />
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 sm:gap-4 mt-10">
      {currentProducts.map((product) => (
        <div
          className="rounded-[20px] bg-light-background overflow-hidden shadow-3xl"
          key={product.id}
        >
          <Product product={product} loading={loading} />
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
