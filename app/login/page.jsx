"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import loginImage from "@/public/images/login-image.svg";
import BackIcon from "@/public/icons/next-arrow.svg";
import loginIcon from "@/public/icons/login.svg";
import Button from "../elements/Button";
import CheckIcon from "@/public/icons/CheckIcon";
import LoginUser from "./LoginUser";
import { UserContext } from "../context/UserContext";
import Cookie from "cookie-universal";
import { useRouter } from "next/navigation";
import Input from "../elements/Input";

const page = () => {
  const cookie = Cookie();
  const router = useRouter();
  if (cookie.get("token")) {
    router.push("/");
    return;
  }
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { state, dispatch } = useContext(UserContext);

  const isValidUserName = () => {
    const validateUserName = /^[a-zA-Z0-9]+$/;
    return userName.length >= 4 ? validateUserName.test(userName) : false;
  };

  const isValidUser = isValidUserName() && password.length >= 8 ? false : true;

  const handleUserInfo = () => {
    LoginUser(userName, password).then((value) => {
      setLoading(false);
      if (value.message) {
        dispatch({
          type: "ERROR",
          payload: value,
        });
      } else {
        dispatch({
          type: "LOGIN_USER",
          payload: value,
        });
      }
    });
  };

  return (
    <div className="mx-auto container px-3 md:px-7 xl:px-0 xl:max-w-[1080px] mt-20 flex-between gap-10">
      <div className="hidden lg:inline-block">
        <Image src={loginImage} alt="LogIn Image" />
      </div>
      <span className="hidden w-[1px] h-96 bg-light-border lg:block"></span>
      <div className="lg:w-[42%]">
        <Link href="/" className="text-gray-text font-light">
          <Image
            src={BackIcon}
            alt="Back Icon"
            className="inline-block mb-[2px] mr-1"
          />
          Back to home
        </Link>
        <h1 className="text-3xl mx-0 lg:text-4xl text-gray-title font-bold mt-8">
          LogIn to <span className="text-amber-500">GlamMarket</span>
        </h1>
        <p className="text-gray-text text-lg font-light mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quaerat
          delectus molestiae.
        </p>
        <div className="mt-8">
          <Input
            type="text"
            isValidInput={isValidUserName()}
            label={"UserName"}
            ariaLable="Username input"
            onChange={(e) => {
              setUserName(e.target.value);
              isValidUserName();
            }}
          />
          <Input
            type="password"
            isValidInput={password.length >= 8}
            ClassNameOfParent="mt-6"
            label={"Password"}
            ariaLable={"Password input"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex-between items-center mt-7">
            <Button
              className="w-fit py-2 px-4 font-normal text-base"
              disabled={isValidUser || loading}
              onClick={() => {
                setLoading(true);
                handleUserInfo();
              }}
            >
              Send
              <Image src={loginIcon} alt="" className="inline-block ml-2" />
            </Button>
            <p className="text-rose-600 font-light">{state.error?.message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
