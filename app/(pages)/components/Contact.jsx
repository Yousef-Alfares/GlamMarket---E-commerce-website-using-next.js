"use client";
import Button from "@/app/(shared)/components/Button";
import Image from "next/image";
import LocationIcon from "@/public/icons/Location.svg";
import EmailIcon from "@/public/icons/email.svg";
import "@/app/(styles)/contact.css";
import Input from "@/app/(shared)/components/Input";
import { useState } from "react";
import LinkIcon from "@/public/icons/LinkIcon";
import CallIcon from "@/public/icons/CallIcon";

const contacts = [
  {
    image: <CallIcon className="w-6 h-6 max-w-6" />,

    title: "Phone Number",
    description: "+963 987 654 321",
  },
  {
    image: (
      <Image
        src={EmailIcon}
        alt="Email icon"
        width={100}
        height={100}
        className="w-6 h-6 max-w-6"
      />
    ),

    title: "Email",
    description: "contact@GlamMarket.com",
  },
  {
    image: (
      <Image
        src={LocationIcon}
        alt="Location icon"
        width={100}
        height={100}
        className="w-6 h-6 max-w-6"
      />
    ),

    title: "Location",
    description: "Damascus, Syria",
  },
];

const Contact = () => {
  const [isValidName, setIsValidName] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidMessage, setIsValidMessage] = useState(false);
  const [fill, setFill] = useState("#ffffff");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const isValidForm = !isValidName || !isValidEmail || !isValidMessage;

  return (
    <div className="mx-auto flex-between flex-col md:flex-row gap-20 container px-3 md:px-7 xl:px-0 xl:max-w-[1080px] mt-48 relative overflow-hidden">
      <span className="absolute w-36 h-36 bg-amber-500 rounded-full top-0 -right-36 blur-[140px] opacity-30 -z-10"></span>
      <form action="" className="flex flex-col gap-6 w-full">
        <Input
          type="text"
          isValidInput={isValidName}
          label="Your Name"
          ariaLabel="Your Name input"
          placeholder="Enter your name"
          required
          minLength={3}
          onChange={(e) => {
            const value = e.target.value.trim();
            setIsValidName(value.length >= 3 && /^[a-zA-Z\s]*$/.test(value));
          }}
        />
        <Input
          type="email"
          isValidInput={isValidEmail}
          label={"Email"}
          ariaLable="Email input"
          onChange={(e) => {
            setIsValidEmail(emailPattern.test(e.target.value));
          }}
        />
        <div className="input relative">
          <textarea
            name=""
            className="w-full h-36 p-2 rounded-lg bg-light-background shadow-3xl focus-visible:outline-amber-500 valid:outline-amber-500 resize-none"
            onChange={(e) => {
              setIsValidMessage(e.target.value.length > 50);
            }}
            minLength={100}
            maxLength={1000}
          />

          <label className="absolute top-5 left-2 -translate-y-1/2 text-gray-text bg-light-background transition-all">
            Message
          </label>
        </div>
        <Button
          className="w-fit py-2 px-4 font-normal text-base relative z-10"
          disabled={isValidForm}
          onMouseEnter={() => setFill("#f59e0b")}
          onMouseLeave={() => setFill("#ffffff")}
        >
          Send <LinkIcon className="inline-block ml-2" fill={fill} />
        </Button>
      </form>
      <span className="w-[1px] h-96 bg-light-border hidden md:block"></span>
      <div className="flex-between items-start flex-col gap-12 w-full">
        {contacts.map((contact, index) => (
          <div
            className={`flex justify-start items-center gap-6 w-full p-4 bg-light-background rounded-2xl ${
              index == 0 && "shadow-3xl"
            }`}
            key={index}
          >
            <div className="p-4 rounded-xl bg-light-text">{contact.image}</div>
            <div>
              <h5 className="text-xl font-medium">{contact.title}</h5>
              <p className="text-base font-light text-gray-text mt-[5px]">
                {contact.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
