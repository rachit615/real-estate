import React from "react";
import { motion, useAnimation } from "framer-motion";

interface GalleryCardProps {
  imgUrl: string;
  title: string;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ imgUrl, title }) => {
  return (
    <div className="relative cursor-pointer">
      <motion.img
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="h-full max-w-full rounded-lg"
        src={imgUrl}
        alt={title}
      />
      <div className="absolute max-w-fit right-0 top-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-black via-transparent"></div>

      <div className="hover:-translate-y-5 transition-transform duration-500 ease-in-out absolute bottom-5 left-10 flex flex-col">
        <span className=" text-lg mb-3 text-white font-bold leading-6">
          {title}
        </span>
        <span className="text-white bg-transparent max-w-fit pt-[6px] pb-[6px] px-5 rounded-3xl  border border-white-[1px]">
          KNOW MORE
        </span>
      </div>
    </div>
  );
};

export default GalleryCard;