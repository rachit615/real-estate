import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import bcrypt from "bcryptjs";
import Property from "@/models/propertyModel";

import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest) {
  try {
    const properties = await Property.find({});

    return NextResponse.json({ properties });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
