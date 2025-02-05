"use client";
import userNameIcon from "@/public/icons/username.svg";
import emailIcon from "@/public/icons/email-profile.svg";
import callIcon from "@/public/icons/call-profile.svg";
import locationIcon from "@/public/icons/location-profile.svg";
import profilePhoto from "@/public/images/User-image.png";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";
import { UserContext } from "@/app/context/UserContext";
import { useContext, useEffect } from "react";

const Information = () => {
  const router = useRouter();

  const { state } = useContext(UserContext);
  const user = state.user;

  useEffect(() => {
    if (!user) {
      router.push("/login");
      return;
    }
  }, [user, router]);

  if (!user) {
    return null;
  }

  const image = user.image || profilePhoto;

  return (
    <div className="mx-auto md:mx-0">
      <Image
        src={image}
        priority
        alt="Profile photo"
        width={150}
        height={150}
        className="mx-auto"
      />
      <h2 className="text-xl font-bold text-center mt-4">{`${user.firstName} ${user.lastName}`}</h2>
      <ul
        className={`bg-light-background flex flex-col gap-5 text-gray-text w-full mt-8`}
      >
        <li className={`flex items-center gap-3`}>
          <Image
            src={userNameIcon}
            alt="Username icon"
            className="opacity-50"
          />
          {user.username}
        </li>
        <li className={`flex items-center gap-3`}>
          <Image src={emailIcon} alt="Email icon" className="opacity-50" />
          {user.email}
        </li>
        <li className={`flex items-center gap-3`}>
          <Image src={callIcon} alt="Call icon" className="opacity-50" />
          {user.phone}
        </li>
        <li className={`flex items-center gap-3`}>
          <Image
            src={locationIcon}
            alt="Username icon"
            className="opacity-50"
          />
          {`${user.address.state}, ${user.address.city}, ${user.address.country}`}
        </li>
      </ul>
    </div>
  );
};

export default Information;
