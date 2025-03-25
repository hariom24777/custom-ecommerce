import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import Button from "@mui/material/Button";

const HomeSliderNew = () => {
  return (
    <Swiper
      loop={true}
      spaceBetween={30}
      effect={"fade"}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[EffectFade, Navigation, Pagination, Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      className="homeSliderNew"
    >
      <SwiperSlide>
        <div className="item w-full rounded-md overflow-hidden relative">
          <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_imageslider/views/img/sample-1.jpg" />
          <div className="info absolute top-0 right-[-100%] opacity-0 w-[50%] h-[100%] z-50 p-8 flex items-center flex-col justify-center transition-all duration-500">
            <h4 className="text-[18px] font-[500] w-full text-left mb-3">
              Big Saving Days Sale
            </h4>
            <h2 className="text-[35px] font-[600] w-full">
              Women Solid Round Yellow T-Shirt
            </h2>
            <h3 className=" flex items-center gap-3 text-[18px] font-[500] w-full text-left mt-3 mb-3">
              Starting At Only
              <span className="text-primary text-[30px] font-[600]">
                $79.00
              </span>
            </h3>
            <div className="w-full">
              <Button className="btn-org">Shop Now</Button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="item w-full rounded-md overflow-hidden relative">
          <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_imageslider/views/img/sample-2.jpg" />
          <div className="info absolute top-0 right-[-100%] opacity-0 w-[50%] h-[100%] z-50 p-8 flex items-center flex-col justify-center transition-all duration-500">
            <h4 className="text-[18px] font-[500] w-full text-left mb-3">
              Big Saving Days Sale
            </h4>
            <h2 className="text-[35px] font-[600] w-full">
              Buy Modern Chair In Black Color
            </h2>
            <h3 className=" flex items-center gap-3 text-[18px] font-[500] w-full text-left mt-3 mb-3">
              Starting At Only
              <span className="text-primary text-[30px] font-[600]">
                $109.00
              </span>
            </h3>
            <div className="w-full">
              <Button className="btn-org">Shop Now</Button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeSliderNew;
