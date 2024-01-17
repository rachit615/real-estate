import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { username, email, password } = reqBody;

    //check if user already exists
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    // hashed password
    const hashedPassword = await bcrypt.hash(password, 12);

    // create newUser by using User model
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // save newUser to database
    const savedUser = await newUser.save();

    return NextResponse.json({
      message: "User created successfully",
      status: 200,
      savedUser,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message,
      },

      { status: 500 }
    );
  }
}
