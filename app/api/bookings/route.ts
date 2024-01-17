import { connect } from "@/dbConfig/dbConfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import axios from "axios";
import Booking from "@/models/bookingModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { propertyId, date } = reqBody;
    const userId = getDataFromToken(request);

    if (!userId) {
      return NextResponse.json({ message: "User not found" }, { status: 401 });
    }

    if (!propertyId || !date) {
      return NextResponse.json({ message: "Invalid property id or date" });
    }

    const newBooking = new Booking({
      property: propertyId,
      user: userId,
      date: date,
    });

    const savedBooking = await newBooking.save();

    return NextResponse.json({
      message: "Successfully created booking",
      status: 200,
      savedBooking,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const currentUserId = getDataFromToken(request);
    if (!currentUserId) {
      return NextResponse.json({
        message: "you are not authorized",
        status: 400,
      });
    }
    const bookings = await Booking.find({ user: currentUserId });
    return NextResponse.json({ bookings });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
