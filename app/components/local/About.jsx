"use client";
import Button from "@/app/elements/Button";
import Image from "next/image";
import WindowShopping from "@/public/images/Man doing window shopping.svg";
import { useRouter } from "next/navigation";
import LinkIcon from "@/public/icons/LinkIcon";
import { useState } from "react";

const About = () => {
  const [fill, setFill] = useState("#ffffff");
  const router = useRouter();
  return (
    <div className="w-full mt-48">
      <div className="mx-auto flex-between flex-wrap md:flex-nowrap justify-center lg:justify-between sm:h-[500px] md:h-auto container px-3 md:px-7 xl:px-0 xl:max-w-[1080px] relative">
        <span className="absolute w-36 h-36 bg-amber-500 rounded-full top-0 -left-36 blur-[140px] opacity-30"></span>
        <Image
        alt="Shopping image"
          src={WindowShopping}
          className="max-w-[80%] mx-auto lg:m-0 w-[75%] md:w-[50%] sm:hidden lg:block lg:max-w-[100%]"
        />
        {/* Title, Paragraph & buttons */}
        <div className="sm:text-center lg:text-left overflow-x-hidden mt-4 md:mt-0">
          <span className="text-xl font-medium text-amber-500">About Us</span>
          <h1 className="mt-1 max-w-[31rem] text-4xl mx-0 sm:mx-auto lg:mx-0 lg:text-[2.7rem] text-gray-title font-bold leading-[50px] lg:leading-[58px]">
            Our curated collection <br className="hidden lg:block" /> classics
            with the <span className="text-amber-500">latest trends</span>
          </h1>
          <p className="text-lg text-gray-text-800 font-light mt-7 sm:max-w-[100%] md:max-w-[640px] lg:max-w-[498px] leading-8">
            Welcome to GlamMarket We’re more than just a clothing store, we’re
            your style destination, Our curated collection blends timeless
            classics with the latest trends.
          </p>
          <div className="flex items-center sm:justify-center lg:justify-start gap-4 mt-12">
            <Button
              className="py-[10px] px-[20px] font-normal text-base lg:text-lg"
              onMouseEnter={() => setFill("#f59e0b")}
              onMouseLeave={() => setFill("#ffffff")}
              onClick={() => router.push("/products")}
            >
              Explore Products{" "}
              <LinkIcon className="inline-block ml-2" fill={fill} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
