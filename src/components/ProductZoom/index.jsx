import React, { useRef, useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const ProductZoom = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const zoomSliderBig = useRef();
  const zoomSliderSmall = useRef();

  const goto = (index) => {
    setSlideIndex(index);
    zoomSliderSmall.current.swiper.slideTo(index);
    zoomSliderBig.current.swiper.slideTo(index);
  }

  return (
    <>
      <div className="flex gap-3">
        <div className="slider w-[15%]">
          <Swiper
            ref={zoomSliderSmall}
            direction={"vertical"}
            slidesPerView={5}
            spaceBetween={0}
            navigation={true}
            modules={[Navigation]}
            className="zoomProductSliderThumbs h-[500px] overflow-hidden"
          >
            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex === 0 ? 'opacity-100' : 'opacity-30'}`}
                onClick={() => goto(0)}
              >
                <img
                  src="https://www.jiomart.com/images/product/original/rv6kbxggln/inkkr-men-solid-round-neck-polyester-multicolor-t-shirt-non-returnable-product-images-rv6kbxggln-0-202502141255.jpg"
                  alt=""
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex === 1 ? 'opacity-100' : 'opacity-30'}`}
                onClick={() => goto(1)}
              >
                <img
                  src="https://www.jiomart.com/images/product/original/rv6kbxggln/inkkr-men-solid-round-neck-polyester-multicolor-t-shirt-non-returnable-product-images-rv6kbxggln-1-202502141255.jpg"
                  alt=""
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex === 2 ? 'opacity-100' : 'opacity-30'}`}
                onClick={() => goto(2)}
              >
                <img
                  src="https://www.jiomart.com/images/product/original/rv6kbxggln/inkkr-men-solid-round-neck-polyester-multicolor-t-shirt-non-returnable-product-images-rv6kbxggln-2-202502141255.jpg"
                  alt=""
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex === 3 ? 'opacity-100' : 'opacity-30'}`}
                onClick={() => goto(3)}
              >
                <img
                  src="https://www.jiomart.com/images/product/original/rv6kbxggln/inkkr-men-solid-round-neck-polyester-multicolor-t-shirt-non-returnable-product-images-rv6kbxggln-3-202502141255.jpg"
                  alt=""
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex === 4 ? 'opacity-100' : 'opacity-30'}`}
                onClick={() => goto(4)}
              >
                <img
                  src="https://www.jiomart.com/images/product/original/rv6kbxggln/inkkr-men-solid-round-neck-polyester-multicolor-t-shirt-non-returnable-product-images-rv6kbxggln-4-202502141255.jpg"
                  alt=""
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item rounded-md overflow-hidden cursor-pointer group">
                <img
                  src="https://www.jiomart.com/images/product/original/rv6kbxggln/inkkr-men-solid-round-neck-polyester-multicolor-t-shirt-non-returnable-product-images-rv6kbxggln-5-202502141255.jpg"
                  alt=""
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide></SwiperSlide>
          </Swiper>
        </div>

        <div className="zoomContainer w-[85%] h-[500px] overflow-hidden rounded-md">
          <Swiper
            ref={zoomSliderBig}
            slidesPerView={1}
            spaceBetween={0}
            navigation={false}
            modules={[Navigation]}
          >
            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src={
                  "https://www.jiomart.com/images/product/original/rv6kbxggln/inkkr-men-solid-round-neck-polyester-multicolor-t-shirt-non-returnable-product-images-rv6kbxggln-0-202502141255.jpg"
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src={
                  "https://www.jiomart.com/images/product/original/rv6kbxggln/inkkr-men-solid-round-neck-polyester-multicolor-t-shirt-non-returnable-product-images-rv6kbxggln-1-202502141255.jpg"
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src={
                  "https://www.jiomart.com/images/product/original/rv6kbxggln/inkkr-men-solid-round-neck-polyester-multicolor-t-shirt-non-returnable-product-images-rv6kbxggln-2-202502141255.jpg"
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src={
                  "https://www.jiomart.com/images/product/original/rv6kbxggln/inkkr-men-solid-round-neck-polyester-multicolor-t-shirt-non-returnable-product-images-rv6kbxggln-3-202502141255.jpg"
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src={
                  "https://www.jiomart.com/images/product/original/rv6kbxggln/inkkr-men-solid-round-neck-polyester-multicolor-t-shirt-non-returnable-product-images-rv6kbxggln-4-202502141255.jpg"
                }
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ProductZoom;
