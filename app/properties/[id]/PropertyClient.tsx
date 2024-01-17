"use client";
import React, { useMemo, useRef, useState } from "react";
import { useSelector } from "react-redux";
import PropertyDimensions from "./PropertyDimensions";
import SimilarProperties from "./SimilarProperties";
import PropertyGallery from "./PropertyGallery";
import Button from "@/app/components/Button";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import CalendarInput from "@/app/components/Inputs/CalendarInput";
import Image from "next/image";
import toast from "react-hot-toast";
import { useOnClickOutside } from "@/app/hooks/useOnClickOutside";

interface PropertyClientProps {
  id?: number;
}

const PropertyClient: React.FC<PropertyClientProps> = ({ id }) => {
  const properties = useSelector(
    (state: RootState) => state.booking.properties
  );
  const bookings = useSelector((state: RootState) => state.booking.bookings);
  const dispatch: Dispatch<any> = useDispatch();

  const property = properties.find((property) => property.id == id);

  const propertyBookings = bookings.filter((booking) => booking.id == id);

  const disabledDates = useMemo(() => {
    let dates: Date[] = [];
    propertyBookings.forEach((pBooking) => {
      dates.push(pBooking.date);
    });
    return dates;
  }, [id]);

  const similarProperties = properties.filter((property) => property.id != id);

  const handleBookVisit = () => {
    dispatch({ type: "ADD_TO_BOOKINGS", id, date });
  };
  const handleOpenCalendar = () => {
    setIsOpen(!isOpen);
  };
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const calendarRef = useRef(null);

  const handleDateChange = (date: Date) => {
    setDate(date);
  };

  const handleClickOutsideCal = () => {
    setIsOpen(false);
  };

  useOnClickOutside(calendarRef, handleClickOutsideCal);

  return (
    <div className="mt-24">
      <PropertyGallery />

      <div className="mt-10  relative ">
        <div className="text-3xl font-medium mb-4">
          ICONIC MEADOW LANE OCEANFRONT
        </div>
        <div className="text-gray-400 mb-9">{property?.location}</div>
        <div className="text-3xl font-medium">${property?.price}</div>

        <div className="flex gap-20 flex-wrap">
          <div className="mt-7">
            <div className="mb-3">
              <span className="">Est .Payment :</span>
              <span className="">$9,265.69/mo/mo</span>
            </div>
            <div className="flex gap-[10px] mb-10 ">
              <span>Status : Active</span>
              <span className="border-r border-solid border-gray-300"></span>
              <span>Days on site: 5</span>
            </div>
            <div className="text-2xl font-medium mb-4">House Description</div>
            <div className="md:w-[415px] w-full h-[182px] text-gray-400  text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              sem convallis magna nunc vitae eu commodo quisque. Facilisi mi eu
              est nisl. Tincidunt molestie elit quisque nulla. Mi sed est
              imperdiet ipsum quam pellentesque cras blandit urna. Consequat
              odio non vel habitant pellentesque egestas. Nam libero, accumsan
              amet quam ut orci tristique risus, parturient.
            </div>
          </div>

          <div className="">
            <div className="flex gap-8 mb-12">
              <div className="flex flex-col">
                <span className="text-3xl">{property?.beds}</span>
                <span>Bed</span>
              </div>
              <div className="border-r border-solid  border-black"></div>
              <div className="flex flex-col">
                <span className="text-3xl">{property?.baths}</span>
                <span>Bath</span>
              </div>
              <div className="border-r border-solid border-black"></div>

              <div className="flex flex-col">
                <span className="text-3xl">{property?.size}</span>
                <span>SqFt</span>
              </div>
            </div>
            <div className="">
              <div className="text-2xl font-medium mb-4">House Description</div>
              <div className="flex flex-col gap-0">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400 text-base">Property Type</span>
                  <span className="text-base">Residential</span>
                </div>
                <div className="border-b border-solid text-gray-400"></div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400 text-base">Lot/Acreage</span>
                  <span className="text-base">0.2</span>
                </div>
                <div className="border-b border-solid text-gray-400"></div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400 text-base">Year Built</span>
                  <span className="text-base">0.2</span>
                </div>
                <div className="border-b border-solid text-gray-400"></div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400 text-base">Country</span>
                  <span className="text-base">United States</span>
                </div>
                <div className="border-b border-solid text-gray-400"></div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400 text-base">Area</span>
                  <span className="text-base">Southampton</span>
                </div>
                <div className="border-b border-solid text-gray-400"></div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400 text-base">MLS</span>
                  <span className="text-base">32-123654</span>
                </div>
                <div className="border-b border-solid text-gray-400"></div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="md:w-[412px] h-[230px] 2xl:absolute top-0 right-20 w-full mx-auto flex flex-col justify-center gap-7 px-12 cursor-pointer mt-12"
          style={{
            boxShadow: "0px 15px 30px 0px rgba(0, 0, 0, 0.10)",
          }}
        >
          <div
            onClick={handleOpenCalendar}
            className="flex relative justify-between border-[1px] border-gray-400 px-5 py-3"
          >
            <span>
              {date.toLocaleDateString("en-US", {
                month: "2-digit",
                day: "2-digit",
                year: "numeric",
              })}
            </span>
            <Image
              src={"/images/calendar.png"}
              width={"20"}
              height={"20"}
              alt="calendar_img"
            />
            {isOpen && (
              <div
                className="absolute left-0 top-[50px] w-full"
                style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}
                ref={calendarRef}
              >
                <CalendarInput
                  date={date}
                  onChange={handleDateChange}
                  disabledDates={disabledDates}
                />
              </div>
            )}
          </div>

          <Button
            title="Book a Visit"
            fill={true}
            toUpper={true}
            onClick={handleBookVisit}
          />
        </div>
      </div>

      {/* Property dimensions */}
      <PropertyDimensions />
      <div className="mt-16 ">
        <div className="flex items-center justify-center mb-14">
          <span className="text-3xl font-medium">SIMILAR LISTING</span>
        </div>

        <SimilarProperties similarProperties={similarProperties} />
        <div className="flex items-center justify-center mb-14">
          <Button
            title="view all properties"
            toUpper={true}
            onClick={() => router.push("/")}
          />
        </div>
      </div>
    </div>
  );
};

export default PropertyClient;
