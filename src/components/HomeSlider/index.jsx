import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";

const HomeSlider = () => {
  return (
    <div className="homeSlider py-3">
      <div className="container">
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="sliderHome"
        >
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="https://apisap.fabindia.com/medias/hp-sec1-13mar25-03.webp?context=bWFzdGVyfGltYWdlc3w3MjY1MHxpbWFnZS93ZWJwfGFERmlMMmhsTlM4NE5UZ3hOREEyTURBeU16Z3pPQzlvY0MxelpXTXhMVEV6YldGeU1qVXRNRE11ZDJWaWNBfGRmYzgwN2EyZDMyMDI4MzVkMjUzYWI2MTYxNzU4MmEyMDc3MGE5MWI3ZDJiNjZhYTIzMTkxNDg2ODgyODdkODg"
                alt=""
                className="w-full"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="https://apisap.fabindia.com/medias/hp-sec1-13mar25-01.webp?context=bWFzdGVyfGltYWdlc3w2NjM5NHxpbWFnZS93ZWJwfGFEVmpMMmhsT0M4NE5UWTROVE13TXpJeE5ERXhNQzlvY0MxelpXTXhMVEV6YldGeU1qVXRNREV1ZDJWaWNBfDQ3OWU2ZDUzZjkwYTIwYzI5ZWI4NGIwMmM1ODM3NTg5YzFkYmE3ZDJhOWIwYzRiNWYwODA1MjE2YTAwMTMzMDg"
                alt=""
                className="w-full"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="https://apisap.fabindia.com/medias/hp-sec1-13mar25-02.webp?context=bWFzdGVyfGltYWdlc3w4MjY2NnxpbWFnZS93ZWJwfGFHTTBMMmhsWWk4NE5UWTROVE13TXpNeE1qUXhOQzlvY0MxelpXTXhMVEV6YldGeU1qVXRNREl1ZDJWaWNBfGMzM2U0YTQ5ODViYWRkOTY3YTVmMWM4NGZiZWE5MzE0ZmQ2MWI4YWQ1ODY5NTJlNzJiNGNmZjAyMmYzMTBkMzI"
                alt=""
                className="w-full"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="https://apisap.fabindia.com/medias/hp-sec1-13mar25-04.webp?context=bWFzdGVyfGltYWdlc3wxMDEyNzh8aW1hZ2Uvd2VicHxhREU1TDJoa01pODROVFk0TmpZMU1EYzVPREV4TUM5b2NDMXpaV014TFRFemJXRnlNalV0TURRdWQyVmljQXxjYTBkODA5NGQ1YjAwNmJhNDNhYjM3NjI5MDhkNjI3ZmM4NTZmNzdhZDZlZjY4Zjk0YjYwNWMxNzUxYWI3NzJh"
                alt=""
                className="w-full"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="https://apisap.fabindia.com/medias/hp-sec1-13mar25-05.webp?context=bWFzdGVyfGltYWdlc3wxMDIzNDR8aW1hZ2Uvd2VicHxhRFUwTDJnNU55ODROVFk0T1RZME9EZ3dOemsyTmk5b2NDMXpaV014TFRFemJXRnlNalV0TURVdWQyVmljQXw1NWI0OGViZmJjM2M3MTdmNTMyOGZjMTNhYWUzMTBiZjAyNTJkZmQ2NzRiNjQwMDQxNjQ0ZDRmZmVhMDcxYjc0"
                alt=""
                className="w-full"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="https://apisap.fabindia.com/medias/hp-sec1-28feb25-06.webp?context=bWFzdGVyfGltYWdlc3w3Nzc2NnxpbWFnZS93ZWJwfGFHSTFMMmczTWk4NE5EWXhOelkzT1RreU9UTTNOQzlvY0MxelpXTXhMVEk0Wm1WaU1qVXRNRFl1ZDJWaWNBfDY5NGYwYTRkYjc0MDk1MTZkNzA1ZGI5YjgyNmI0M2NlZWMwZDFkYTAzYTBhODA1MTAyMTcxMzMxMTExNTU3NzU"
                alt=""
                className="w-full"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSlider;
