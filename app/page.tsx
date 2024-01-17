import Properties from "./components/Properties/Properties";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import Slider from "./components/Slider";
import CardSlider from "./components/Sliders/CardSlider";
import BackgroundVideo from "./components/BackgroundVideo";
import Gallery from "./components/Gallery/Gallery";

export default function Home() {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value || "";
  console.log(token);

  let currentUser;
  if (token) {
    currentUser = jwt.verify(token, process.env.TOKEN_SECRET!);
  }

  const slides = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      altText: "Tree House",
      slideText: "living houses",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      altText: "living pools",
      slideText: "house villas",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      altText: "fresh House",
      slideText: "house apartments",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1461988625982-7e46a099bf4f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      altText: "Tree House",
      slideText: "office floors",
    },
  ];

  return (
    <div>
      <div className="mb-24">
        <Slider slides={slides} />
      </div>
      <div className="mb-24">
        <CardSlider />
      </div>
      <div className="mb-24">
        <BackgroundVideo />
      </div>
      <Gallery />

      <Properties currentUser={currentUser} />
    </div>
  );
}
