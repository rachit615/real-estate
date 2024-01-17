"use client";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "./slider.css";

type Slide = {
  imageSrc: string;
  altText: string;
  slideText: string;
};

interface SliderProps {
  slides: Slide[];
}

const Slider: React.FC<SliderProps> = ({ slides }) => {
  const [activeSlide, setActiveSlide] = React.useState<number>(0);

  const slideChangeHandler = (swiper: any) => {
    setActiveSlide(swiper.activeIndex);
  };

  return (
    <Swiper
      spaceBetween={50}
      centeredSlides={true}
      slidesPerView={1}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper "
      onSlideChange={slideChangeHandler}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="relative">
          <img src={slide.imageSrc} alt={slide.altText} />
          <div
            className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-20"
            aria-hidden="true"
          />
          <div className="container">
            <div className="clipText">
              <div
                className={`typewriter ${
                  activeSlide === index ? "animation__dy" : ""
                }`}
              >
                <div className="lensImg">
                  <img
                    src="https://promos.makemytrip.com/images/lens-040124.png"
                    style={{
                      width: "35px",
                      height: "35px",
                    }}
                    alt="lens img"
                  />
                </div>
                <h1 className="text-white font-bold text-[28px]">
                  {slide.slideText}
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
