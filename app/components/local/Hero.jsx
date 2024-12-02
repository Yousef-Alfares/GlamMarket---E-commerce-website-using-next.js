"use client";
import Button from "@/app/elements/Button";
import Image from "next/image";
import OnlineShopping from "@/public/images/Online shopping site.svg";
import Down from "@/public/icons/Down.svg";
import LinkIcon from "@/public/icons/LinkIcon";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  return (
    <div className="w-full">
      <div className="mx-auto flex-between justify-center lg:justify-between flex-wrap-reverse lg:flex-nowrap sm:h-[500px] lg:h-auto container  px-3 md:px-7 xl:px-0 xl:max-w-[1080px] mt-20">
        <span className="absolute w-36 h-36 bg-amber-500 rounded-full top-0 -left-36 blur-[140px] opacity-50 z-50"></span>
        {/* Title, Paragraph & buttons */}
        <div className="sm:text-center md:text-left">
          <h1 className="text-start sm:text-center lg:text-start w-fit text-4xl mx-0 sm:mx-auto lg:mx-0 lg:text-5xl text-gray-title font-bold leading-[50px] lg:leading-[58px]">
            Discover Your Perfect <br className="" />
            Style at <span className="text-amber-500">GlamMarket</span>
          </h1>
          <p className="text-lg text-gray-text-800 font-light mt-7 sm:max-w-[100%] md:max-w-[640px] lg:max-w-[498px] leading-8">
            Welcome to GlamMarket We’re more than just a clothing store, we’re
            your style destination, Our curated collection blends timeless
            classics with the latest trends.
          </p>
          <div className="flex items-center sm:justify-center lg:justify-start gap-4 mt-12">
            <Button
              className="py-[10px] px-[20px] font-normal text-base lg:text-lg"
              onClick={() => router.push("/products")}
            >
              Explore now
            </Button>
            <button
              className="text-amber-500 rounded-[10px] transition bg-light-background py-[10px] px-[20px] font-normal text-base lg:text-lg"
              onClick={() => router.push("/about")}
            >
              About us <LinkIcon className="inline-block ml-2" fill="#f59e0b" />
            </button>
          </div>
        </div>
        <Image
          priority
          alt="Online shopping image"
          src={OnlineShopping}
          className="max-w-[80%] mx-auto md:m-0 w-[75%] md:w-[50%] sm:hidden lg:block md:max-w-[100%]"
        />
      </div>
      <div className="animate-bounce hidden sm:flex justify-center items-center mt-5">
        <Image src={Down} className=" hover:cursor-pointer" alt="Down icon" />
      </div>
    </div>
  );
};

export default Hero;
