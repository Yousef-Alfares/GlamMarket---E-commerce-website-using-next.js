import Image from "next/image";

const Services = () => {
  return (
    <div className="mx-auto container overflow-hidden px-3 md:px-7 xl:px-0 xl:max-w-[1080px] mt-48 relative">
      <span className="absolute w-36 h-36 bg-amber-500 rounded-full top-0 -right-36 blur-[140px] opacity-30"></span>
      <div className="text-center">
        <h2 className="text-3xl text-gray-title font-bold">Our Services</h2>
        <p className="text-gray-text text-lg font-light mt-3">
          Our curated collection blends timeless classics <br /> with the latest
          trends.
        </p>
      </div>
      <div className="grid grid-cols-4 grid-rows-4 lg:grid-rows-2 gap-8 mt-24">
        <div className="w-fit flex items-center justify-between gap-4 p-3 bg-light-background shadow-3xl rounded-xl col-span-4 sm:col-span-2">
          <div className="p-4 bg-light-text rounded-xl">
            <img src={"/icons/star.svg"}width={100} height={100} className="w-auto h-auto" alt="Star icon" />
          </div>
          <div>
            <h3 className="text-xl text-gray-t font-bold">Title of Services</h3>
            <p className="text-gray-text font-light text-md mt-2 ">
              Welcome to GlamMarket We’re more than just a clothing store
            </p>
          </div>
        </div>
        <div className="w-fit flex items-center justify-between gap-4 p-3 bg-light-background rounded-xl relative z-10 col-span-4 sm:col-span-2 sm:col-start-3 sm:row-start-2 lg:col-start-3 lg:row-start-1">
          <div className="p-4 bg-light-text rounded-xl">
          <img src={"/icons/star.svg"}width={100} height={100} className="w-auto h-auto" alt="Star icon" />
          </div>
          <div>
            <h3 className="text-xl text-gray-text-800 font-bold">
              Title of Services
            </h3>
            <p className="text-gray-text font-light text-md mt-2 ">
              Welcome to GlamMarket We’re more than just a clothing store
            </p>
          </div>
        </div>
        <div className="w-fit flex items-center justify-between gap-4 p-3 bg-light-background rounded-xl relative z-10 col-span-4 sm:col-span-2 sm:col-start-1 sm:row-start-3 lg:col-start-1 lg:row-start-2">
          <div className="p-4 bg-light-text rounded-xl">
          <img src={"/icons/star.svg"}width={100} height={100} className="w-auto h-auto" alt="Star icon" />
          </div>
          <div>
            <h3 className="text-xl text-gray-text-800 font-bold">
              Title of Services
            </h3>
            <p className="text-gray-text font-light text-md mt-2 ">
              Welcome to GlamMarket We’re more than just a clothing store
            </p>
          </div>
        </div>
        <div className="w-fit flex items-center justify-between gap-4 p-3 bg-light-background rounded-xl relative z-10 col-span-4 sm:col-span-2 sm:col-start-3 sm:row-start-4 lg:col-start-3 lg:row-start-2">
          <div className="p-4 bg-light-text rounded-xl">
            <img src={"/icons/star.svg"}width={100} height={100} className="w-auto h-auto" alt="Star icon" />
          </div>
          <div>
            <h3 className="text-xl text-gray-text-800 font-bold">
              Title of Services
            </h3>
            <p className="text-gray-text font-light text-md mt-2 ">
              Welcome to GlamMarket We’re more than just a clothing store
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
