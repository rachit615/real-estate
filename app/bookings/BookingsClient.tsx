"use client";
import React from "react";
import { useSelector } from "react-redux";
import PropertyCard from "../components/Properties/PropertyCard";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import EmptyItems from "../components/EmptyItems/EmptyItems";

const BookingsClient = () => {
  const dispatch: Dispatch<any> = useDispatch();

  const bookings = useSelector((state: RootState) => state.booking.bookings);
  const userId = useSelector((state: RootState) => state.auth.id);
  console.log("user idd...", userId);

  const handleCancelBooking = (id: string) => {
    dispatch({ type: "REMOVE_FROM_BOOKINGS", booking_id: id });
  };

  return (
    <div className="mt-28">
      {bookings.length > 0 ? (
        <div className="grid md:grid-cols-2 2xl:grid-cols-4 lg:grid-cols-3 gap-6 mb-14">
          {bookings.map((booking) => (
            <PropertyCard
              key={booking.booking_id}
              data={booking}
              onAction={() => handleCancelBooking(booking.booking_id)}
              actionLabel="Cancel Booking"
            />
          ))}
        </div>
      ) : (
        <EmptyItems title="You do not have any bookings yet. " />
      )}
    </div>
  );
};

export default BookingsClient;
