import StarIcon from "@/public/icons/StarIcon";
import Image from "next/image";

const Testimonial = ({ rate, description, profileImage, name, jobName }) => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex justify-start items-center gap-3">
        {[...Array(rate)].map((_, index) => (
          <StarIcon className="w-5 h-auto" />
        ))}
      </div>
      <p className="text-gray-text text-base font-light">{description}</p>
      <div className="flex items-center gap-3">
        <Image src={profileImage.src} alt={profileImage.alt} className="w-10" />
        <div>
          <h5 className="text-base font-medium">{name}</h5>
          <p className="text-gray-text text-sm font-light">{jobName}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
