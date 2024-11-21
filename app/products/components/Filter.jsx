"use client";
import Image from "next/image";
import starIcon from "@/public/icons/star.svg";
import silverStarIcon from "@/public/icons/silver-star.svg";
import { useEffect, useState } from "react";

const allRates = [
  {
    name: 1,
    checked: true,
  },
  {
    name: 2,
    checked: false,
  },
  {
    name: 3,
    checked: false,
  },
  {
    name: 4,
    checked: false,
  },
];

const Filter = ({ filterByRates, filterByCategories }) => {
  const [rates, setRates] = useState(allRates);
  const [categories, setCategories] = useState([]);

  const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  useEffect(() => {
    const getCategories = async () => {
      const res = await fetch("https://fakestoreapi.com/products/categories");
      const data = await res.json();
      setCategories(
        ["all", ...data].map((category) => ({
          name: category,
          checked: category == "all",
        }))
      );
    };
    getCategories();
  }, []);

  const handleCheckedFilters = (newCheckedElement, filterObject) => {
    filterObject.map((FilterName) => {
      FilterName.name == newCheckedElement
        ? (FilterName.checked = true)
        : (FilterName.checked = false);
    });
    const filterCategories = categories.filter(
      (category) => category.checked == true
    );
    const filterRates = rates.filter((rate) => rate.checked == true);
    filterByCategories(filterCategories[0].name);
    filterByRates(filterRates[0].name);
    return [...filterObject];
  };

  return (
    <div className="filter px-4 py-2 rounded-[20px] bg-light-background-90 backdrop-blur-lg absolute shadow-2xl w-60">
      <div className="flex flex-col">
        <h3 className="font-medium mb-[7px]">Categories</h3>
        {categories.map((category) => (
          <div
            class="flex items-center mb-4 cursor-pointer hover:opacity-80"
            onClick={() => {
              setCategories(
                handleCheckedFilters(category.name.toLowerCase(), categories)
              );
            }}
          >
            <input
              checked={category.checked}
              id="category-checkbox"
              type="checkbox"
              value=""
              className={`w-4 h-4 appearance-none rounded-sm relative checked:bg-amber-500 border-2 border-gray-text checked:border-none cursor-pointer`}
            />
            <p
              for="category-checkbox"
              className="pl-3 text-gray-text w-max cursor-pointer"
            >
              {capitalizeFirstLetter(category.name)}
            </p>
          </div>
        ))}
        <h3 className="font-medium mb-[7px]">Reviews</h3>
        {rates.map((rate) => (
          <div
            class="flex items-center mb-4 cursor-pointer hover:opacity-80"
            onClick={() => {
              setRates(handleCheckedFilters(rate.name, rates));
            }}
          >
            <input
              checked={rate.checked}
              id="category-checkbox"
              type="checkbox"
              value=""
              className={`w-4 h-4 appearance-none rounded-sm relative checked:bg-amber-500 border-2 border-gray-text checked:border-none cursor-pointer`}
            />
            <p
              for="category-checkbox"
              className="pl-3 text-gray-text w-max cursor-pointer flex items-center gap-2"
            >
              {rate.name !== 1
                ? Array.from({ length: 5 }).map((nistedRate, nistedIndex) =>
                    rate.name >= nistedIndex + 1 ? (
                      <Image src={starIcon} alt="Star icon" />
                    ) : (
                      <Image src={silverStarIcon} alt="Silver star icon" />
                    )
                  )
                : "All"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
