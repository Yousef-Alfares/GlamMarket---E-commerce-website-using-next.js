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

const SliderProducts = ({
  className,
  products = [],
  without = "",
  loading,
}) => {
  if (loading) {
    return (
      <Swiper
        breakpoints={{
          0: {
            cssMode: false,
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
            cssMode: true,
          },
          1024: {
            cssMode: true,
            slidesPerView: 3,
          },
          1216: {
            cssMode: true,
            slidesPerView: 4,
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
        {[...Array(4)].map((_, index) => (
          <SwiperSlide className="rounded-[20px] bg-light-background">
            <div
              className="rounded-[20px] bg-light-background overflow-hidden shadow-3xl"
              key={index}
            >
              <Product loading={loading} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }
  return (
    <Swiper
      breakpoints={{
        0: {
          cssMode: false,
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
          cssMode: true,
        },
        1024: {
          cssMode: true,
          slidesPerView: 3,
        },
        1216: {
          cssMode: true,
          slidesPerView: 4,
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
              className="rounded-[20px] bg-light-background shadow-3xl"
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
