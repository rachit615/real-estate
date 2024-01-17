import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json(); // forgot it is : request.json()
    const { email, password } = reqBody;

    //check if user exists
    const user = await User.findOne({ email });

    // if user doesn't exists
    if (!user) {
      return NextResponse.json(
        { error: "Invalid credentials user doesn't exist" },
        { status: 401 }
      );
    }

    // check if the provided password matches with the hashed password in dB
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "Invalid credentials password doesn't matches " },
        { status: 401 }
      );
    }

    //create token data
    const tokenData = {
      id: user._id,
      email: user.email,
      username: user.username,
    };

    // create token to send in user cookies
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: "1d",
    });

    // create response to set jwt token on cookies.
    const response = NextResponse.json({
      message: "Login successful",
      success: true,
    });

    // set token on cookies
    response.cookies.set("token", token);

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
