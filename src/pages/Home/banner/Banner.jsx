import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import BannerSliderFirst from "./BannerSliderFirst";
import "./Banner.css";
import BannerSliderSecond from "./BannerSliderSecond";
import BannerSliderThird from "./BannerSliderThird";

const Banner = () => {
  return (
    <Swiper
      spaceBetween={30}
      autoplay={{
        delay: 5500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      loop={true}
      modules={[Autoplay, Pagination]}
      className="mySwiper rounded-2xl"
    >
      <SwiperSlide>
        <BannerSliderFirst />
      </SwiperSlide>
      <SwiperSlide>
        <BannerSliderSecond />
      </SwiperSlide>
      <SwiperSlide>
        <BannerSliderThird />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
