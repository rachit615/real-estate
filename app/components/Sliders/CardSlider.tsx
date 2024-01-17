"use client";
import React from "react";
import "./cardslider.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Container from "../Container";

const CardSlider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1800 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1800, min: 1200 },
      items: 4,
    },
    
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const destinations = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1597040663342-45b6af3d91a5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      city: "Delhi",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      city: "Mumbai",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1565018054866-968e244671af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFuZ2Fsb3JlfGVufDB8fDB8fHww",
      city: "Bangalore",
    },
    {
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1697730414399-3d4d9ada98bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a29sa2F0YXxlbnwwfHwwfHx8MA%3D%3D",
      city: "Kolkata",
    },
    {
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1661901647310-4deafc6f29a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amFpcHVyfGVufDB8fDB8fHww",
      city: "Jaipur",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1551161242-b5af797b7233?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHlkZXJhYmFkfGVufDB8fDB8fHww",
      city: "Hyderabad",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1685419368532-8ee7adf43ce4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      city: "Bangalore",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1685419368532-8ee7adf43ce4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      city: "Bangalore",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1597040663342-45b6af3d91a5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      city: "Zhangigabele",
    },
  ];

  return (
    <Container>
      <span className="mb-5 md:text-3xl text-xl ">
        Explore Properties in Top Cities
      </span>
      <div className="mt-8">
        <Carousel responsive={responsive}>
          {destinations.map((destination, index) => (
            <div key={index} className="destination_card">
              <img src={destination.imageUrl} alt="destination" />
              <div className="destination_text">
                <p className="destination_city">{destination.city}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </Container>
  );
};

export default CardSlider;
