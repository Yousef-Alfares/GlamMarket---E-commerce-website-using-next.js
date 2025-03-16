"use client";
import Image from "next/image";
import CloseIcon from "@/public/icons/Close.svg";
import Button from "@/app/(shared)/components/Button";
import { useContext, useState } from "react";
import { UserContext } from "@/app/(shared)/context/UserContext";
import Input from "@/app/(shared)/components/Input";

const ProfileEditOption = ({ edit, isOpen = true }) => {
  const { state, dispatch } = useContext(UserContext);

  if (edit[0] == "Name") {
    edit = ["firstName", "lastName"];
  } else if (edit[0] == "Address") {
    edit = ["state", "city", "country"];
  }

  const handleClose = (value) => {
    isOpen(value);
  };

  return (
    <div className="fixed w-full left-0 top-0 h-[100vh] bg-black bg-opacity-5 z-[99999]">
      <div
        className={`w-full sm:w-[400px] absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 shadow-3xl p-4 bg-light-background rounded-2xl`}
      >
        <div className="flex-between">
          <h2 className="text-lg text-gray-text font-medium">
            {edit[0] == "firstName"
              ? "Name"
              : edit[0] == "address"
              ? "Address"
              : edit[0].toLowerCase()}
          </h2>
          <Image
            alt="close icon"
            src={CloseIcon}
            onClick={() => {
              handleClose(false);
            }}
          />
        </div>
        <div className="flex items-center justify-between gap-4 mt-5">
          {edit.map((e, index) => (
            <Input
              key={index}
              type="text"
              defaultValue={
                edit[0] == "state"
                  ? state.user.address[e.toLowerCase()]
                  : edit[0] == "firstName"
                  ? state.user[e]
                  : state.user[e.toLowerCase()]
              }
              label={e}
              ariaLable="Username input"
            />
          ))}
        </div>
        <Button className={`text-lg px-5 py-[6px] mt-4`} disabled={true}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default ProfileEditOption;
