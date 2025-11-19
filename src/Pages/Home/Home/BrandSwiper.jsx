import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

// Brand Icons
import { FcGoogle } from "react-icons/fc";
import { FaAmazon, FaApple, FaFacebook, FaMicrosoft } from "react-icons/fa";

const HomeSection = () => {
  return (
    <section className="py-16 bg-gray-50">

      {/* Title */}
      <h2 className="text-3xl font-bold text-center text-secondary mb-10">
        We’ve helped thousands of sales teams
      </h2>

      {/* Brand Slider */}
      <Swiper
        spaceBetween={40}
        slidesPerView={5}
        loop={true}
        autoplay={{ delay: 1, disableOnInteraction: false }}
        speed={3500}
        modules={[Autoplay]}
        className="mb-16"
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
          <FaMicrosoft className="text-6xl text-gray-500" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HomeSection;
