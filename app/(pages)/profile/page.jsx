import Image from "next/image";
import Link from "next/link";
import ProfileOptions from "./components/ProfileOptions";
import ProfileInfo from "./components/ProfileInfo";

const PROFILE_LINKS = [
  {
    title: "Profile",
    icon: {
      src: "/icons/profile.svg",
      alt: "Profile Icon",
    },
    href: "/",
  },
];

const ProfilePage = () => {
  return (
    <main className="mx-auto container flex-between items-start flex-col md:flex-row gap-16 md:gap-20 px-3 md:px-7 xl:px-0 xl:max-w-[1080px] mt-28">
      <nav className="bg-light-background flex flex-col text-gray-text min-w-36 rounded-[20px] overflow-hidden shadow-3xl">
        <ul>
          {PROFILE_LINKS.map(({ title, icon, href }, index) => (
            <li
              key={`profile-link-${index}`}
              className={`flex items-center gap-2 py-[10px] px-5 hover:bg-light-text hover:cursor-pointer ${
                index !== 0 && "border-t-[0.5px] border-light-border-50"
              }`}
            >
              <Image
                src={icon.src}
                alt={icon.alt}
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <Link
                href={href}
                className={title === "Log Out" ? "text-red" : "text-gray-text"}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <ProfileOptions />
      <ProfileInfo />
    </main>
  );
};

export default ProfilePage;
