"use client";

import Link from "next/link";
import Image from "next/image";
import CartIcon from "@/public/icons/Cart.svg";
import Like from "@/public/icons/Like.svg";
import Menu from "@/public/icons/Menu.svg";
import { useContext, useState } from "react";
import Cart from "./nav/Cart";
import Favorites from "@/app/components/global/nav/Favorites";
import Login from "@/public/icons/login.svg";
import { useRouter } from "next/navigation";
import { UserContext } from "@/app/context/UserContext";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Products", path: "/products" },
];

const links_2 = [
  { image: "/icons/register.svg", name: "Registe", path: "/" },
  { image: Login, name: "Log in", path: "/login" },
];

const Nav = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [showcart, setShowcart] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const [showAccount, setShowAccount] = useState(false);

  const { state, dispatch } = useContext(UserContext);

  const router = useRouter();

  return (
    <div className="w-full h-[68px] fixed top-0 bg-light-background-90 backdrop-blur-sm z-[9999]">
      <div className="h-[68px] flex-between container  px-3 md:px-7 xl:px-0 xl:max-w-[1080px] fixed left-1/2 -translate-x-1/2 top-0">
        <h1 className="text-[28px] font-bold text-amber-500 ">GlamMarket</h1>
        {/* Desktop */}
        <ul className="gap-[85px] text-gray-text hidden md:flex">
          {links.map((link, index) => (
            <li key={index}>
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
        {/* Mobile */}
        <div className="relative md:hidden">
          <Image
            src={Menu}
            alt="Menu icon"
            className="cursor-pointer"
            onClick={() => setShowLinks((prev) => !prev)}
          />

          <ul
            className={`flex-col md:hidden text-gray-text w-36 rounded-[20px] overflow-hidden absolute top-9 right-3 shadow-3xl transition delay-100 ease-in-out ${
              showLinks ? "flex" : "hidden"
            }`}
          >
            {links.map((link, index) => (
              <li
                key={index}
                className={`py-[10px] px-5 hover:bg-light-text hover:cursor-pointer bg-light-background ${
                  index !== 0 && "border-t-[0.5px] border-light-border-50"
                }`}
              >
                <Link href={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-[15px]">
          <div className="sm:relative">
            <Image
              src={Like}
              alt="Like icon"
              className="cursor-pointer"
              onClick={() => setShowFavorites((prev) => !prev)}
            />
            <div
              className={`w-full sm:w-[400px] absolute top-16 sm:top-9 right-0 sm:right-3 shadow-3xl transition ease-in-out ${
                showFavorites ? "block" : "hidden"
              }`}
            >
              <Favorites />
            </div>
          </div>
          <div className="sm:relative">
            <Image
              src={CartIcon}
              alt="Cart icon"
              className="cursor-pointer"
              onClick={() => {
                setShowcart((prev) => !prev);
              }}
            />
            <div
              className={`w-full sm:w-[400px] absolute top-16 sm:top-9 right-0 sm:right-3 shadow-3xl transition delay-100 ease-in-out ${
                showcart ? "block" : "hidden"
              }`}
            >
              <Cart />
            </div>
          </div>
          {!state.user ? (
            <div className="relative">
              <Image
                src={"icons/account.svg"}
                width={100}
                height={100}
                alt="Account icon"
                className="cursor-pointer w-auto h-auto"
                onClick={() => setShowAccount((prev) => !prev)}
              />

              <ul
                className={`bg-light-background flex flex-col text-gray-text w-36 rounded-[20px] overflow-hidden absolute top-9 right-3 shadow-3xl opacity-0 transition delay-100 ease-in-out  ${
                  showAccount && "opacity-100"
                }`}
              >
                {links_2.map((link, index) => (
                  <li
                    key={index}
                    className={`flex items-center gap-2 py-[10px] px-5 hover:bg-light-text hover:cursor-pointer ${
                      index !== 0 && "border-t-[0.5px] border-light-border-50"
                    }`}
                  >
                    <Image src={link.image} width={100} height={100} className="w-auto h-auto" alt={link.name + "icon"} />
                    <Link href={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div>
              <Image
                src={state.user.image}
                alt="Profile image"
                width={30}
                height={30}
                className="cursor-pointer rounded-full border border-gray-200"
                onClick={() => router.push("/profile")}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
