"use client";

import Image from "next/image";
import SearchIcon from "@/public/icons/Search.svg";
import FilterIcon from "@/public/icons/filter.svg";
import { useEffect, useRef, useState } from "react";
import AllProducts from "./components/AllProducts";
import Pagination from "./components/Pagination";

import Search from "./components/Search";
import Filter from "./components/Filter";

const page = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [showSearch, setShowSearch] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProductsByCategories, setFilterProductsByCategories] =
    useState("all");
  const [filterProductsByRates, setFilterProductsByRates] = useState(1);
  const productsPerPage = 10;

  const filterConditions = (product) => {
    return product.rating.rate >= filterProductsByRates
      ? filterProductsByCategories !== "all"
        ? product.category == filterProductsByCategories
        : true
      : false;
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const res = await fetch("https://fakestoreapi.com/products");
      const products = await res.json();
      setLoading(false);
      const filteredProducts = products.filter((product) =>
        filterConditions(product)
      );
      setProducts(filteredProducts);
    };
    getProducts();
  }, [filterProductsByCategories, filterProductsByRates]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = currentPage * productsPerPage - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const filterByCategories = (category) =>
    setFilterProductsByCategories(category);
  const filterByRates = (rate) => setFilterProductsByRates(rate);

  return (
    <div className="mx-auto container px-3 md:px-7 xl:px-0 xl:max-w-[1080px] mt-20 products">
      <div className="text-center py-20 px-5 sm:px-10 border border-light-border-50 rounded-3xl">
        <h2 className="text-3xl text-gray-title font-bold">Our Products</h2>
        <p className="text-gray-text text-lg font-light mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quaerat
          delectus <br className="hidden md:block" /> molestiae ea commodi ullam
          ex quibusdam, iusto soluta exercitationem?
        </p>
      </div>
      <div className="flex-between mt-12">
        <div className="relative min-w-10 min-h-10">
          <div
            className={`input relative z-50 w-[46px] ${
              showSearch ? "input-active" : "hidden"
            }`}
          >
            <Search showSearch={showSearch} products={products} />
          </div>

          <div
            onClick={() => setShowSearch((prev) => !prev)}
            className={`absolute right-2 top-1/2 -translate-y-1/2 rounded-full z-50 ${
              showSearch ? "search-active" : null
            }`}
          >
            <Image
              src={SearchIcon}
              className={`cursor-pointer ${
                showSearch ? "icon-search-active" : null
              }`}
            />
          </div>
        </div>
        <div className="relative">
          <Image
            src={FilterIcon}
            className="cursor-pointer"
            onClick={() => setShowFilter((prev) => !prev)}
          />
          <div
            className={`absolute right-64 top-6 rounded-full z-50 ${
              showFilter ? "active" : "hidden"
            }`}
          >
            <Filter
              filterByCategories={filterByCategories}
              filterByRates={filterByRates}
            />
          </div>
        </div>
      </div>
      <AllProducts
        currentProducts={currentProducts}
        loading={loading}
        productsPerPage={productsPerPage}
      />
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default page;
