import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import bannerimg1 from "../../../../assets/banner/banner1.png";
import bannerimg2 from "../../../../assets/banner/banner2.png";
import bannerimg3 from "../../../../assets/banner/banner3.png";

const Banner = () => {
  return (
    <div className="shadow-md">
      <Carousel
        autoPlay
        infiniteLoop
        interval={2500}
        showThumbs={false}
        showStatus={false}
        stopOnHover={true}
        // swipeable={true}
        // emulateTouch={true}
        >
        <div>
          <img src={bannerimg1} alt="Banner 1" className="" />
        </div>
        <div>
          <img src={bannerimg2} alt="Banner 2" className="" />
        </div>
        <div>
          <img src={bannerimg3} alt="Banner 3" className="" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
