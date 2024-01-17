import React from "react";
import Button from "../Button";

const SubscribeNewsletter = () => {
  return (
    <div className="flex justify-between gap-3 lg:gap-6 ">
      <input
        type="text"
        placeholder="Enter Your Email Address"
        className="py-3 px-8  w-full text-black"
      />
      <Button title="submit" toUpper />
    </div>
  );
};

export default SubscribeNewsletter;
