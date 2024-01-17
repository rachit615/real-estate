import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";
import toast from "react-hot-toast";

// getting current user id of login user from the token that exist on the cookies

export const getDataFromToken = (request: NextRequest) => {
  try {
    const token = request.cookies.get("token")?.value || "";
    const decodedToken: any = jwt.verify(token, process.env.TOKEN_SECRET!);

    return decodedToken.id;
  } catch (error: any) {
    toast.error("error here");
    throw new Error(error.message);
  }
};
