import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FcGoogle } from "react-icons/fc";
import { FaAmazon, FaApple, FaFacebook, FaMicrosoft } from "react-icons/fa";

// import Autoplay module
import { Autoplay } from "swiper/modules";

const BrandSwiper = () => {
  return (
    <div className="py-10">
      <h2 className="text-3xl text-secondary font-bold text-center mb-8">
        We’ve helped thousands of sales teams
      </h2>
      <Swiper
        spaceBetween={40}
        slidesPerView={4}
        loop={true}
        speed={3000}
        grabCursor={true}
      >
        <SwiperSlide className="flex justify-center">
          <FcGoogle className="text-6xl" />
        </SwiperSlide>

        <SwiperSlide className="flex justify-center">
          <FaFacebook className="text-6xl text-blue-600" />
        </SwiperSlide>

        <SwiperSlide className="flex justify-center">
          <FaAmazon className="text-6xl text-yellow-500" />
        </SwiperSlide>

        <SwiperSlide className="flex justify-center">
          <FaApple className="text-6xl text-black" />
        </SwiperSlide>

        <SwiperSlide className="flex justify-center">
          <FaMicrosoft className="text-6xl text-[#737373]" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BrandSwiper;
