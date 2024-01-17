"use client";
import React, { useEffect, useState } from "react";
import Container from "../Container";
import Logo from "./Logo";
import NavItems from "./NavItems";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [open, setOpen] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`fixed bg-white ${
        scrolling || pathName !== "/"
          ? "md:bg-white md:shadow-md"
          : "md:bg-transparent"
      } w-full  z-10 py-4 transition-colors duration-300`}
    >
      <div className="py-4">
        <Container>
          <div className="md:flex gap-3 md:gap-0 items-center justify-between">
            <Logo />
            <div
              onClick={() => setOpen(!open)}
              className="text-3xl absolute right-8 top-10 cursor-pointer md:hidden"
            >
              <Image
                src="/icons/hamburger.svg"
                alt="hamburger"
                className="object-cover cursor-pointer"
                width={"30"}
                height={"30"}
              />
            </div>

            <NavItems scroll={scrolling} open={open} />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
