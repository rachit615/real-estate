import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

const initState: PropertyState = {
  properties: [
    {
      id: 1,
      price: 12750000,
      location: "20724 visa Court, london, CA 95476",
      beds: 4,
      baths: 5,
      category: "Living House",
      size: 5776,
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      price: 12750000,
      location: "20724 visa Court, london, CA 95476",
      beds: 4,
      baths: 5,
      category: "Living House",
      size: 5776,
      image:
        "https://plus.unsplash.com/premium_photo-1661876449499-26de7959878f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvcGVydHl8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 3,
      price: 12750000,
      location: "20724 visa Court, london, CA 95476",
      beds: 4,
      baths: 5,
      category: "Living House",
      size: 5776,
      image:
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb3BlcnR5fGVufDB8fDB8fHww",
    },
    {
      id: 4,
      price: 12750000,
      location: "20724 visa Court, london, CA 95476",
      beds: 4,
      baths: 5,
      category: "Living House",
      size: 5776,
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb3BlcnR5fGVufDB8fDB8fHww",
    },
    {
      id: 5,
      price: 12750000,
      location: "20724 visa Court, london, CA 95476",
      beds: 4,
      baths: 5,
      category: "House Villa",
      size: 5776,
      image:
        "https://plus.unsplash.com/premium_photo-1687960117069-567a456fe5f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb3BlcnR5fGVufDB8fDB8fHww",
    },
    {
      id: 6,
      price: 12750000,
      location: "20724 visa Court, london, CA 95476",
      beds: 4,
      baths: 5,
      category: "House Apartments",
      size: 5776,
      image:
        "https://images.unsplash.com/photo-1602941525421-8f8b81d3edbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb3BlcnR5fGVufDB8fDB8fHww",
    },
    {
      id: 7,
      price: 12750000,
      location: "20724 visa Court, london, CA 95476",
      beds: 4,
      baths: 5,
      category: "House Apartments",
      size: 5776,
      image:
        "https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHByb3BlcnR5fGVufDB8fDB8fHww",
    },
    {
      id: 8,
      price: 12750000,
      location: "20724 visa Court, london, CA 95476",
      beds: 4,
      baths: 5,
      category: "Living House",
      size: 5776,
      image:
        "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHByb3BlcnR5fGVufDB8fDB8fHww",
    },
    {
      id: 9,
      price: 12750000,
      location: "20724 visa Court, london, CA 95476",
      beds: 4,
      baths: 5,
      category: "Living House",
      size: 5776,
      image:
        "https://plus.unsplash.com/premium_photo-1686090450488-48ce19426bbe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHByb3BlcnR5fGVufDB8fDB8fHww",
    },
    {
      id: 10,
      price: 12750000,
      location: "20724 visa Court, london, CA 95476",
      beds: 4,
      baths: 5,
      category: "Living House",
      size: 5776,
      image:
        "https://plus.unsplash.com/premium_photo-1686090450488-48ce19426bbe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHByb3BlcnR5fGVufDB8fDB8fHww",
    },
    {
      id: 11,
      price: 12750000,
      location: "20724 visa Court, london, CA 95476",
      beds: 4,
      baths: 5,
      category: "Living House",
      size: 5776,
      image:
        "https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHByb3BlcnR5fGVufDB8fDB8fHww",
    },
    {
      id: 12,
      price: 12750000,
      location: "20724 visa Court, london, CA 95476",
      beds: 4,
      baths: 5,
      category: "House Apartments",
      size: 5776,
      image:
        "https://images.unsplash.com/photo-1600047508788-786f3865b4b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHByb3BlcnR5fGVufDB8fDB8fHww",
    },
    {
      id: 13,
      price: 12750000,
      location: "20724 visa Court, london, CA 95476",
      beds: 4,
      baths: 5,
      category: "House Apartments",
      size: 5776,
      image:
        "https://plus.unsplash.com/premium_photo-1684445034834-c8dec93ed218?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHByb3BlcnR5fGVufDB8fDB8fHww",
    },
    {
      id: 14,
      price: 12750000,
      location: "20724 visa Court, london, CA 95476",
      beds: 4,
      baths: 5,
      category: "House Apartments",
      size: 5776,
      image:
        "https://images.unsplash.com/photo-1597047084897-51e81819a499?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHByb3BlcnR5fGVufDB8fDB8fHww",
    },
    {
      id: 15,
      price: 12750000,
      location: "20724 visa Court, london, CA 95476",
      beds: 4,
      baths: 5,
      category: "House Apartments",
      size: 5776,
      image:
        "https://images.unsplash.com/photo-1597047084897-51e81819a499?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHByb3BlcnR5fGVufDB8fDB8fHww",
    },
    {
      id: 16,
      price: 12750000,
      location: "20724 visa Court, london, CA 95476",
      beds: 4,
      baths: 5,
      category: "House Apartments",
      size: 5776,
      image:
        "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHByb3BlcnR5fGVufDB8fDB8fHww",
    },
    {
      id: 17,
      price: 12750000,
      location: "20724 visa Court, london, CA 95476",
      beds: 4,
      baths: 5,
      category: "House Apartments",
      size: 5776,
      image:
        "https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHByb3BlcnR5fGVufDB8fDB8fHww",
    },
    {
      id: 18,
      price: 12750000,
      location: "20724 visa Court, london, CA 95476",
      beds: 4,
      baths: 5,
      category: "House Apartments",
      size: 5776,
      image:
        "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHByb3BlcnR5fGVufDB8fDB8fHww",
    },
    {
      id: 19,
      price: 12750000,
      location: "20724 visa Court, london, CA 95476",
      beds: 4,
      baths: 5,
      category: "Living House",
      size: 5776,
      image:
        "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHByb3BlcnR5fGVufDB8fDB8fHww",
    },
    {
      id: 20,
      price: 12750000,
      location: "20724 visa Court, london, CA 95476",
      beds: 4,
      baths: 5,
      category: "Living House",
      size: 5776,
      image:
        "https://images.unsplash.com/photo-1597047084897-51e81819a499?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHByb3BlcnR5fGVufDB8fDB8fHww",
    },
  ],
  bookings: [],
};

const bookingReducer = (
  state: PropertyState = initState,
  action: PropertyAction
): PropertyState => {
  switch (action.type) {
    case "ADD_TO_BOOKINGS":
      let addedItem = state.properties.find((item) => item.id == action.id);
      if (addedItem) {
        let existedItem = state.bookings.find(
          (item) =>
            item.id == action.id &&
            item.date.getTime() === action.date.getTime()
        );
        if (existedItem) {
          toast.error("You already have a visit on selected date !");
          return {
            ...state,
          };
        } else {
          let booking = {
            ...addedItem,
            date: action.date,
            booking_id: uuidv4(),
          };
          toast.success("Your visit for selected date is confirmed");
          return {
            ...state,
            bookings: [...state.bookings, booking],
          };
        }
      }
    case "REMOVE_FROM_BOOKINGS":
      let updatedProperties = state.bookings.filter(
        (item) => item.booking_id !== action.booking_id
      );
      toast.success("Booking has been removed successfully");
      return {
        ...state,
        bookings: updatedProperties,
      };

    default:
      return state;
  }
};

export default bookingReducer;
