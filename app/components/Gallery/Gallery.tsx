"use client";
import React, { useEffect } from "react";
import Container from "../Container";
import GalleryCard from "./GalleryCard";
import { motion, useAnimation } from "framer-motion";

const Gallery = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);
  return (
    <div
      className="mx-auto max-w-[2520px]  xl:px-80 
    md:px-20
    sm:px-10
    px-5"
    >
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        initial={{ opacity: 0 }}
        animate={controls}
        transition={{ duration: 0.5 }}
      >
        <div className="grid gap-4">
          <GalleryCard
            title="Luxury Home stays and Villas"
            imgUrl="https://images.unsplash.com/photo-1549294413-26f195200c16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGx1eHVyeSUyMGhvbWVzdGF5c3xlbnwwfHwwfHx8MA%3D%3D"
          />

          <GalleryCard
            title="Camps Houses"
            imgUrl="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FtcHN8ZW58MHx8MHx8fDA%3D"
          />

          <GalleryCard
            title="Boat House"
            imgUrl="https://images.unsplash.com/photo-1518903872200-56e0389d9e41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdXNlJTIwYm9hdHN8ZW58MHx8MHx8fDA%3D"
          />
        </div>

        <div className="grid gap-4">
          <GalleryCard
            title="Farm Houses"
            imgUrl="https://images.unsplash.com/photo-1623421851403-15b5be5f5b24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFybSUyMGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D"
          />
          <GalleryCard
            title="Heritage Homestays"
            imgUrl="https://images.unsplash.com/photo-1549831959-16824a0ddbb5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhlcml0YWdlJTIwaG9tZXN0YXlzfGVufDB8fDB8fHww"
          />

          <GalleryCard
            title="Hostels"
            imgUrl="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9zdGVsc3xlbnwwfHwwfHx8MA%3D%3D"
          />
        </div>

        <div className="grid gap-4">
          <GalleryCard
            title="Office Apartments"
            imgUrl="https://images.unsplash.com/photo-1554232456-8727aae0cfa4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNlcnZpY2UlMjBvZmZpY2VzfGVufDB8fDB8fHww"
          />
          <GalleryCard
            title="Private Pools"
            imgUrl="https://plus.unsplash.com/premium_photo-1677687191072-8b3156d30888?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG9vbHN8ZW58MHx8MHx8fDA%3D"
          />
          <GalleryCard
            title="dfds"
            imgUrl="https://images.unsplash.com/photo-1532018858449-57a81f84f0ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHZpbGxhc3xlbnwwfHwwfHx8MA%3D%3D"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Gallery;
