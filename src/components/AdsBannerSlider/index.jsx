import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import BannerBox from "../BannerBox";

const AdsBannerSlider = (props) => {
  return (
    <div className="py-5 w-full">
      <Swiper
        slidesPerView={props.items}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="smlBtn"
      >
        <SwiperSlide>
          <BannerBox img={'/AdBanner1.webp'} link={'/'}/>
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img={'/AdBanner2.webp'} link={'/'}/>
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img={'/AdBanner3.webp'} link={'/'}/>
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img={'/AdBanner4.webp'} link={'/'}/>
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img={'/AdBanner5.webp'} link={'/'}/>
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img={'/AdBanner6.webp'} link={'/'}/>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default AdsBannerSlider;
