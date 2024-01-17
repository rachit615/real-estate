import React, { useCallback, useEffect, useRef, useState } from "react";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { useOnClickOutside } from "@/app/hooks/useOnClickOutside";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const dropDownRef = useRef(null);
  const token = Cookies.get("token");

  const toggleMenuList = useCallback(() => {
    setIsOpen((isOpen) => !isOpen);
  }, []);

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successful");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const handleClickOutside = () => {
    setIsOpen(false);
  };

  useOnClickOutside(dropDownRef, handleClickOutside);

  return (
    <div className="relative">
      <div onClick={toggleMenuList} className="hidden md:block ">
        <Avatar src={""} />
      </div>
      {isOpen && (
        <div
          ref={dropDownRef}
          className="absolute overflow-hidden rounded-xl shadow-md bg-white w-[12vw] top-10 right-0  "
        >
          {token ? (
            <>
              <MenuItem
                label="My Bookings"
                value="bookings"
                onClick={() => {
                  router.push("/bookings");
                  setIsOpen(false);
                }}
              />

              <hr />
              <MenuItem
                label="Logout"
                value="logout"
                onClick={() => {
                  logout();
                  setIsOpen(false);
                }}
              />
            </>
          ) : (
            <>
              <MenuItem
                label="Login"
                value="login"
                onClick={() => {
                  router.push("/login");
                  setIsOpen(false);
                }}
              />
              <MenuItem
                label="Sign up"
                value="sign up"
                onClick={() => {
                  router.push("/signup");
                  setIsOpen(false);
                }}
              />
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default UserMenu;
