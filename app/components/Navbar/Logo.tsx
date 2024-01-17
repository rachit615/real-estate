"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
const Logo = () => {
  const router = useRouter();
  const handleLogoClick = () => {
    router.push("/");
  };
  return (
    <div onClick={handleLogoClick}>
      <div className="font-extrabold text-3xl italic cursor-pointer">
        WESTON
      </div>
    </div>
  );
};

export default Logo;
