import NextIcon from "@/public/icons/Next (1).svg";
import PrevIcon from "@/public/icons/Prev.svg";
import Image from "next/image";

const Pagination = ({
  productsPerPage,
  totalProducts,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 0; i < Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i + 1);
  }

  return (
    <div className="mt-14">
      <div className="flex items-center justify-center">
        <div className="flex sm:flex-1 sm:items-center sm:justify-between">
          <div className="w-full">
            <div aria-label="Pagination" className="flex gap-2 justify-center">
              <div
                className="relative inline-flex items-center rounded-lg px-2 py-2 text-gray-400 hover:bg-gray-50 bg-amber-500 border border-light-background hover:border-amber-500 cursor-pointer transition-colors"
                onClick={() => paginate((pageNumber) => pageNumber - 1)}
              >
                <Image
                  src={PrevIcon}
                  alt=""
                  aria-hidden="true"
                  className="h-5 w-5"
                />
              </div>
              {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900  hover:bg-gray-50 focus:outline-offset-0" */}
              {pageNumbers.map((number) => (
                <span
                  aria-current="page"
                  className={`relative z-10 inline-flex items-center px-3 py-2 rounded-lg text-sm text-amber-500 font-semibold border hover:bg-gray-200 hover:border-light-border transition-colors cursor-pointer ${
                    number == currentPage
                      ? "border-amber-500"
                      : "border-light-border text-gray-text"
                  }`}
                  onClick={() => paginate(number)}
                >
                  {number}
                </span>
              ))}
              <div
                className="relative inline-flex items-center rounded-lg px-2 py-2 text-gray-400 hover:bg-gray-50 bg-amber-500 cursor-pointer transition-colors"
                onClick={() => paginate((pageNumber) => pageNumber + 1)}
              >
                <Image
                  src={NextIcon}
                  alt=""
                  aria-hidden="true"
                  className="h-5 w-5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
