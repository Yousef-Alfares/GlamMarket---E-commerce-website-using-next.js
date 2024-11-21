"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import Product from "./Product";

const SliderProducts = ({ className, products = [], without = "" }) => {
  return (
    <Swiper
      breakpoints={{
        0: {
          cssMode: false,
          slidesPerView: 2,
        },
        600: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 3,
          cssMode: true,
        },
        1024: {
          cssMode: true,
          slidesPerView: 4,
        },
        1280: {
          cssMode: true,
          slidesPerView: 5,
        },
      }}
      spaceBetween={20}
      navigation={true}
      pagination={{ dynamicBullets: true, clickable: true }}
      keyboard={true}
      grabCursor={true}
      modules={[Navigation, Pagination, Keyboard]}
      className={`mySwiper ${className}`}
    >
      {products.map(
        (product) =>
          product.title !== without && (
            <SwiperSlide
              className="rounded-[20px] bg-light-background overflow-hidden shadow-3xl"
              key={product.id}
            >
              <Product product={product} />
            </SwiperSlide>
          )
      )}
    </Swiper>
  );
};

export default SliderProducts;
