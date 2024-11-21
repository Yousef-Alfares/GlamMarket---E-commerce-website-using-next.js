import Image from "next/image";
import FacebookIcon from "@/public/icons/Facebook.svg";
import TwitterIcon from "@/public/icons/twitter.svg";
import LinkedinIcon from "@/public/icons/linkedin.svg";
import Link from "next/link";
import { redirect } from "next/navigation";

const Footer = () => {
  return (
    <div className="mx-auto flex-between flex-col items-start gap-10 md:flex-row md:gap-0 container px-3 md:px-7 xl:px-0 xl:max-w-[1080px] mt-48 relative mb-12">
      <span className="w-[300vw] h-[1px] bg-light-border absolute -left-60 -top-12"></span>

      <div className="flex flex-col items-start justify-center gap-1">
        <h1 className="text-[22px] font-semibold text-amber-500">GlamMarket</h1>
        <p className="font-light text-gray-text mt-[5px]">
          Lorem ipsum dolor sit amet <br /> consectetur adipisicing.
        </p>
        <div className="flex items-center justify-center gap-2 mt-4">
          <Image src={FacebookIcon} alt="Facebook icon" />
          <Image src={TwitterIcon} alt="Twitter icon" />
          <Image src={LinkedinIcon} alt="LinkedIn icon" />
        </div>
      </div>
      <div className="flex flex-col items-start justify-center gap-3">
        <h1 className="text-lg font-medium w-max">Find Products</h1>
        <div className="flex items-start justify-center flex-col gap-2">
          <Link
            href="/products/category/electronics"
            className="text-gray-text hover:text-gray-text-800 transition-colors"
          >
            Electronics
          </Link>
          <Link
            href="/products/category/jewelery"
            className="text-gray-text hover:text-gray-text-800 transition-colors"
          >
            Jewelery
          </Link>
          <Link
            href="/products/category/men's%20clothing"
            className="text-gray-text hover:text-gray-text-800 transition-colors"
          >
            Men's clothing
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-start justify-center gap-3">
        <h1 className="text-lg font-medium w-max">Pages</h1>
        <div className="flex items-start justify-center flex-col gap-2">
          <Link
            href="/"
            className="text-gray-text hover:text-gray-text-800 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-text hover:text-gray-text-800 transition-colors"
          >
            About
          </Link>
          <Link
            href="/products"
            className="text-gray-text hover:text-gray-text-800 transition-colors"
          >
            Products
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-start justify-center gap-3">
        <h1 className="text-lg font-medium w-max">Contact Us</h1>
        <div className="flex items-start justify-center flex-col gap-2">
          <p className="text-gray-text">+963 987 654 321</p>
          <p className="text-gray-text">contact@GlamMarket.com</p>
          <p className="text-gray-text">Damascus, Syria</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
