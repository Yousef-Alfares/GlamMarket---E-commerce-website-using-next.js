"use client";

import Link from "next/link";
import Image from "next/image";
import CartIcon from "@/public/icons/Cart.svg";
import Like from "@/public/icons/Like.svg";
import Menu from "@/public/icons/Menu.svg";
import { useContext, useState } from "react";
import Cart from "./Cart";
import Favorites from "@/app/(shared)/components/nav/Favorites";
import Login from "@/public/icons/login.svg";
import { useRouter } from "next/navigation";
import { UserContext } from "@/app/(shared)/context/UserContext";
import RegisterIcon from "@/public/icons/RegisterIcon";
import AccountIcon from "@/public/icons/AccountIcon";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Products", path: "/products" },
];

const accountLinks = [
  {
    image: <RegisterIcon className="w-auto h-auto" />,
    name: "Register",
    path: "/",
  },
  {
    image: (
      <Image
        src={Login}
        width={100}
        height={100}
        className="w-auto h-auto"
        alt={"Login icon"}
      />
    ),
    name: "Log in",
    path: "/login",
  },
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
          {navLinks.map((link, index) => (
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
            {navLinks.map((link, index) => (
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
              <AccountIcon
                className="cursor-pointer w-auto h-auto"
                onClick={() => setShowAccount((prev) => !prev)}
              />

              {showAccount ? (
                <ul
                  className={`bg-light-background flex flex-col text-gray-text w-36 rounded-[20px] overflow-hidden absolute top-9 right-3 shadow-3xl transition delay-100 ease-in-out`}
                >
                  {accountLinks.map((link, index) => (
                    <li
                      key={index}
                      className={`flex items-center gap-2 py-[10px] px-5 hover:bg-light-text hover:cursor-pointer ${
                        index !== 0 && "border-t-[0.5px] border-light-border-50"
                      }`}
                    >
                      {link.image}
                      <Link href={link.path}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              ) : null}
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
