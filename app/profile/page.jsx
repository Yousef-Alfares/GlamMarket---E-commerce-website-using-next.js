import Image from "next/image";
import Link from "next/link";
import Options from "../components/profile/Options";
import Information from "../components/profile/Information";

const links2 = [
  {
    title: "Profile",
    icon: {
      src: "/icons/profile.svg",
      alt: "Profile Icon",
    },
  },
];

const page = () => {
  return (
    <div className="mx-auto container flex-between items-start flex-col md:flex-row gap-16 md:gap-20 px-3 md:px-7 xl:px-0 xl:max-w-[1080px] mt-28">
      <ul
        className={`bg-light-background flex flex-col text-gray-text min-w-36 rounded-[20px] overflow-hidden shadow-3xl`}
      >
        {links2.map((link, index) => (
          <li
            key={index}
            className={`flex items-center gap-2 py-[10px] px-5 hover:bg-light-text hover:cursor-pointer ${
              index !== 0 && "border-t-[0.5px] border-light-border-50"
            }`}
          >
            <Image
              src={link.icon.src}
              alt={link.icon.alt}
              width={100}
              height={100}
              className="w-auto h-auto"
            />
            <Link
              href="/"
              className={
                link.title == "Log Out" ? "text-red" : "text-gray-text"
              }
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
      <Options />
      <Information />
    </div>
  );
};

export default page;
