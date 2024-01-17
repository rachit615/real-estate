import React from "react";
import Container from "../Container";
import Logo from "../Navbar/Logo";
import SubscribeNewsletter from "./SubscribeNewsletter";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white px-7 lg:px-[72px] pt-[50px] pb-7 ">
        <div className="flex flex-col lg:flex-row gap-9 justify-between mb-8 ">
          <div className="flex items-center lg:items-start flex-col gap-3 lg:gap-9">
            <Logo />
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            </span>
          </div>

          <div className="flex flex-col gap-9 ">
            <span className="text-xs md:text-base">
              For exclusive news and market updates sign up for our newsletter.
            </span>
            <SubscribeNewsletter />
          </div>

          <div className="flex flex-col">
            <span className="mb-2 lg:mb-9">CONTACT US</span>
            <span className="mb-3">(+75) 81 2345 1234</span>
            <span className="mb-3">Contact@domain.com</span>
            <span>Ubud No.88, New York USA, Renon, New York</span>
          </div>

          <div className="flex flex-col gap-9 items-center">
            <span>FOLLOW US</span>
            <div className="flex justify-between gap-4">
              <div>
                <Image
                  src="/icons/facebook.svg"
                  alt="Facebook"
                  className="object-cover cursor-pointer"
                  width={"50"}
                  height={"50"}
                />
              </div>
              <div>
                <Image
                  src="/icons/instagram.svg"
                  alt="Instagram"
                  className="object-cover cursor-pointer"
                  width={"50"}
                  height={"50"}
                />
              </div>
              <div>
                <Image
                  src="/icons/linkedin.svg"
                  alt="Instagram"
                  className="object-cover cursor-pointer"
                  width={"50"}
                  height={"50"}
                />
              </div>
              <div>
                <Image
                  src="/icons/twitter.svg"
                  alt="Instagram"
                  className="object-cover cursor-pointer"
                  width={"50"}
                  height={"50"}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <hr className="text-white mb-4" />
          <span className="">Copyright 2022 @weston all Right Riserved.</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
