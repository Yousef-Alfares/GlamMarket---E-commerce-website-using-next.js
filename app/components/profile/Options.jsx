"use client";
import profileIcon from "@/public/icons/profile.svg";
import userNameIcon from "@/public/icons/username.svg";
import emailIcon from "@/public/icons/email-profile.svg";
import passwordIcon from "@/public/icons/password.svg";
import callIcon from "@/public/icons/call-profile.svg";
import locationIcon from "@/public/icons/location-profile.svg";
import logOutIcon from "@/public/icons/logout.svg";
import Image from "next/image";
import Option from "./Option";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { UserContext } from "@/app/context/UserContext";

const links = [
  {
    title: "Name",
    icon: {
      src: profileIcon,
      alt: "",
    },
  },
  {
    title: "Username",
    icon: {
      src: userNameIcon,
      alt: "",
    },
  },
  {
    title: "Email",
    icon: {
      src: emailIcon,
      alt: "",
    },
  },
  {
    title: "Password",
    icon: {
      src: passwordIcon,
      alt: "",
    },
  },
  {
    title: "Phone",
    icon: {
      src: callIcon,
      alt: "",
    },
  },
  {
    title: "Address",
    icon: {
      src: locationIcon,
      alt: "",
    },
  },
  {
    title: "Log Out",
    icon: {
      src: logOutIcon,
      alt: "",
    },
  },
];

const Options = () => {
  const [edit, setEdit] = useState([]);
  const [close, setClose] = useState(false);

  const { state, dispatch } = useContext(UserContext);
  const router = useRouter();

  const handleClose = (value) => {
    setClose(value);
  };

  const handleLogOut = () => {
    dispatch({ type: "LOG_OUT" });
    router.push("/");
  };

  return (
    <>
      <ul
        className={`bg-light-background flex flex-col order-last md:order-none text-gray-text w-full rounded-[20px] overflow-hidden shadow-3xl`}
      >
        {links.map((link, index) => (
          <li
            key={index}
            className={`flex items-center gap-3 py-4 px-5 hover:bg-light-text hover:cursor-pointer ${
              index !== 0 && "border-t-[0.5px] border-light-border-50"
            }`}
            onClick={() => {
              if (link.title !== "Log Out") {
                setEdit([link.title]);
                setClose(true);
              } else {
                handleLogOut();
              }
            }}
          >
            <Image
              src={link.icon.src}
              alt={link.icon.alt}
              className="opacity-80"
            />
            <span
              className={
                link.title == "Log Out" ? "text-red" : "text-gray-text"
              }
            >
              {link.title}
            </span>
          </li>
        ))}
      </ul>
      {!edit.length == true || !close == true ? null : (
        <Option edit={edit} isOpen={handleClose} />
      )}
    </>
  );
};

export default Options;
