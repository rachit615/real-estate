"use client";
import React, { useEffect, useRef } from "react";
import Container from "./Container";
const BackgroundVideo = () => {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 bg-gradient-to-r from-black via-gray-700-700 to-black opacity-45"
        aria-hidden="true"
      />
      <video
        loop
        autoPlay
        width="250"
        muted
        id="bg-video"
        className="object-cover w-full h-full z-[-1] "
      >
        <source src={"/videos/bg_video2.mp4"} type="video/mp4" />
      </video>
      <Container>
        <div className="text-white  absolute top-1/2 transform -translate-y-1/2 ">
          <h1 className=" text-2xl md:text-5xl  ">Luxury Unveiled</h1>
          <div className="md:text-6xl text-xl lg:max-w-[900px] mt-6">
            <div className=" md:leading-[40px] xl:leading-[80px]">
              Discover opulence in our collection of luxurious properties
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BackgroundVideo;
