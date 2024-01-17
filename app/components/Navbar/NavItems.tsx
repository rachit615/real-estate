import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import UserMenu from "./UserMenu";

interface NavItemsProps {
  scroll: boolean;
  open: boolean;
}

const NavItems: React.FC<NavItemsProps> = ({ scroll, open }) => {
  const pathName = usePathname();
  return (
    <div className="flex justify-between">
      <ul
        className={`md:flex md:items-center md:pb-0 pb-24 bg-white md:bg-transparent md:text-black absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-4 pr-4 gap-8 transition-all duration-500 ease-in ${
          open ? "top-20" : "top-[-490px]"
        }  
         ${scroll || pathName !== "/" ? "md:text-black" : "md:text-white"}
        }`}
      >
        <li className="text-base font-normal text-center md:my-0 my-3 md:py-0 py-3 md:border-none border-b border-gray-300">
          <Link href="/">Home</Link>
        </li>
        <li className="text-base text-center font-normal md:my-0 my-3 md:py-0 py-3 md:border-none border-b border-gray-300">
          <Link href="/about">About</Link>
        </li>
        <li className="text-base text-center font-normal md:my-0 my-3 md:py-0 py-3 md:border-none border-b border-gray-300">
          <Link href="/bookings">My Bookings</Link>
        </li>
        <li className="text-base text-center font-normal md:my-0 my-3 md:py-0 py-3 md:border-none border-b border-gray-300">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <UserMenu />
    </div>
  );
};

export default NavItems;
