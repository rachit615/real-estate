import Image from "next/image";
import React from "react";

interface HeroProps {
  imgPath: string;
}

const Hero: React.FC<HeroProps> = ({ imgPath }) => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="md:hidden">
        <Image
          src={imgPath}
          fill
          alt="image"
          className="object-cover w-full h-60 md:h-full"
        />
      </div>
      <div className="flex flex-col justify-center w-full md:w-1/2 p-8 md:px-10 xl:px-20">
        <div className="text-3xl font-bold mb-4">Our Properties</div>
        <div className="text-lg text-gray-700">
          Discover the Essence of Tranquil Living: Unveiling Our Exceptional
          Properties
        </div>
      </div>
      <div className="hidden md:flex items-center justify-center w-full md:w-1/2 overflow-x-hidden relative">
        <Image src={imgPath} fill alt="image" className="object-cover w-full" />
      </div>
    </div>
  );
};

export default Hero;
