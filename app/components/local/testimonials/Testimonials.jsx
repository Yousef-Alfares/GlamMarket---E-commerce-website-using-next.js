"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./testimonial.css";



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Image1 from "@/public/images/Ellipse 74 (1).png";

const Testmonials = () => {
  return (
    <div className="testimonial">
      <div className="mx-auto container px-3 md:px-7 xl:px-0 xl:max-w-[1080px] mt-48 relative">
        <span className="absolute w-36 h-36 bg-amber-500 rounded-full -top-20 -left-36 blur-[140px] opacity-30"></span>
        <h2 className="text-3xl text-gray-title font-bold">Testimonials</h2>
        <p className="text-gray-text text-lg font-light mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing{" "}
          <br className="hidden sm:block" /> elit. Autem quaerat delectus
        </p>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          centeredSlides={false}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          loop={true}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper mt-10 overflow-hidden"
        >
          <SwiperSlide className="rounded-2xl bg-light-background max-w-[450px]">
            <div className="flex flex-col gap-4 p-4">
              <div className="flex justify-start items-center gap-3">
                <Image src={"/icons/star.svg"} width={100} height={100} alt="Star Icon" className="w-5 h-auto" />
                <Image src={"/icons/star.svg"} width={100} height={100} alt="Star Icon" className="w-5 h-auto" />
                <Image src={"/icons/star.svg"} width={100} height={100} alt="Star Icon" className="w-5 h-auto" />
              </div>
              <p className="text-gray-text text-base font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                quaerat delectus molestiae ea commodi ullam ex quibusdam, iusto
                soluta exercitationem?
              </p>
              <div className="flex items-center gap-3">
                <Image src={Image1} alt="" className="w-10" />
                <div>
                  <h5 className="text-base font-medium">
                    Mohammed Abdullrahman
                  </h5>
                  <p className="text-gray-text text-sm font-light">
                    Graphic Designer
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-2xl bg-light-background max-w-[450px]">
            <div className="flex flex-col gap-4 p-4">
              <div className="flex justify-start items-center gap-3">
                <Image src={"/icons/star.svg"} width={100} height={100} className="w-5 h-auto" alt="Star Icon" />
                <Image src={"/icons/star.svg"} width={100} height={100} className="w-5 h-auto" alt="Star Icon" />
                <Image src={"/icons/star.svg"} width={100} height={100} className="w-5 h-auto" alt="Star Icon" />
              </div>
              <p className="text-gray-text text-base font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                quaerat delectus molestiae ea commodi ullam ex quibusdam, iusto
                soluta exercitationem?
              </p>
              <div className="flex items-center gap-3">
                <Image src={Image1} alt="" className="w-10" />
                <div>
                  <h5 className="text-base font-medium">
                    Mohammed Abdullrahman
                  </h5>
                  <p className="text-gray-text text-sm font-light">
                    Graphic Designer
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-2xl bg-light-background max-w-[450px]">
            <div className="flex flex-col gap-4 p-4">
              <div className="flex justify-start items-center gap-3">
                <Image src={"/icons/star.svg"} width={100} height={100} className="w-5 h-auto" alt="Star icon" />
                <Image src={"/icons/star.svg"} width={100} height={100} className="w-5 h-auto" alt="Star icon" />
                <Image src={"/icons/star.svg"} width={100} height={100} className="w-5 h-auto" alt="Star icon" />
              </div>
              <p className="text-gray-text text-base font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                quaerat delectus molestiae ea commodi ullam ex quibusdam, iusto
                soluta exercitationem?
              </p>
              <div className="flex items-center gap-3">
                <Image src={Image1} alt="" className="w-10" />
                <div>
                  <h5 className="text-base font-medium">
                    Mohammed Abdullrahman
                  </h5>
                  <p className="text-gray-text text-sm font-light">
                    Graphic Designer
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-2xl bg-light-background max-w-[450px]">
            <div className="flex flex-col gap-4 p-4">
              <div className="flex justify-start items-center gap-3">
                <Image src={"/icons/star.svg"} width={100} height={100} className="w-5 h-auto" alt="Star Icon" />
                <Image src={"/icons/star.svg"} width={100} height={100} className="w-5 h-auto" alt="Star Icon" />
                <Image src={"/icons/star.svg"} width={100} height={100} className="w-5 h-auto" alt="Star Icon" />
              </div>
              <p className="text-gray-text text-base font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                quaerat delectus molestiae ea commodi ullam ex quibusdam, iusto
                soluta exercitationem?
              </p>
              <div className="flex items-center gap-3">
                <Image src={Image1} alt="" className="w-10" />
                <div>
                  <h5 className="text-base font-medium">
                    Mohammed Abdullrahman
                  </h5>
                  <p className="text-gray-text text-sm font-light">
                    Graphic Designer
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testmonials;
