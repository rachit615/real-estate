"use client";
import React, { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Calendar } from "react-date-range";

interface CalendarInputProps {
  date: Date;
  disabledDates: Date[];
  onChange: (date: Date) => void;
}

const CalendarInput: React.FC<CalendarInputProps> = ({
  date,
  onChange,
  disabledDates,
}) => {
  return (
    <div>
      <Calendar
        onChange={onChange}
        date={date}
        minDate={new Date()}
        disabledDates={disabledDates}
      />
    </div>
  );
};

export default CalendarInput;
