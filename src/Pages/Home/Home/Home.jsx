import React from "react";
import Banner from "../Banner/banner";
import Features from "../Features/Features";
import HowitWorks from "../HowitWorks/HowitWorks";
import Services from "../Services/Services";
import BrandSwiper from "../BrandSwiper";
import Reviews from "../Review/Reviews";

const reviewsPromise = fetch("reviews.json").then((res) => res.json());
const Home = () => {
  return (
    <div className="mt-10">
      <Banner />
      <HowitWorks />
      <Services />
      <BrandSwiper />
      <Features />
      <Reviews reviewsPromise={reviewsPromise} />
    </div>
  );
};

export default Home;
