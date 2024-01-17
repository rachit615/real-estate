import React from "react";

const PropertyDimensions = () => {
  return (
    <div className="grid md:grid-cols-3 gap-y-12 grid-cols-1 mt-[72px]">
      <div className="">
        <span className="text-xl font-medium ">Exterior Details</span>
        <ul className="flex flex-col gap-6 mt-6">
          <li>
            <span className="">Plot Size : </span>
            <span className="text-base font-normal text-gray-400">
              0.7 acers
            </span>
          </li>
          <li>
            <span className="">Construction : </span>
            <span className="text-base font-normal text-gray-400">
              Frame and wood construction
            </span>
          </li>
          <li>
            <span className="">Roof : </span>
            <span className="text-base font-normal text-gray-400">
              Partial the roof
            </span>
          </li>
          <li>
            <span className="">Cooling : </span>
            <span className="text-base font-normal text-gray-400">
              {" "}
              Electric air conditioning
            </span>
          </li>
        </ul>
      </div>

      <div className="">
        <span className="text-xl font-medium ">Interior Details</span>
        <ul className="flex flex-col gap-6 mt-6">
          <li>
            <span className="">Interior Size: </span>
            <span className="text-base font-normal text-gray-400">
              3000 sq.ft
            </span>
          </li>
          <li>
            <span className="">Bedroom : </span>
            <span className="text-base font-normal text-gray-400">4</span>
          </li>
          <li>
            <span className="">Bathroom : </span>
            <span className="text-base font-normal text-gray-400">3</span>
          </li>
          <li>
            <span className="">Garage : </span>
            <span className="text-base font-normal text-gray-400"> 4 cars</span>
          </li>
          <li>
            <span className="">Laundry Room : </span>
            <span className="text-base font-normal text-gray-400">
              {" "}
              Washer/Dryer Hookups
            </span>
          </li>
        </ul>
      </div>

      <div className="">
        <span className="text-xl font-medium ">Room Dimensions</span>
        <ul className="flex flex-col gap-6 mt-6">
          <li>
            <span className="">Living Room: </span>
            <span className="text-base font-normal text-gray-400">23×18</span>
          </li>
          <li>
            <span className="">Bedroom : </span>
            <span className="text-base font-normal text-gray-400">12×15</span>
          </li>
          <li>
            <span className="">Bathroom : </span>
            <span className="text-base font-normal text-gray-400">23×18</span>
          </li>
          <li>
            <span className="">Kitchen : </span>
            <span className="text-base font-normal text-gray-400"> 23×18</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PropertyDimensions;
