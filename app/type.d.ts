interface IProperty {
  id: number;
  price: number;
  location: string;
  beds: number;
  baths: number;
  category: string;
  size: number;
  image: string;
}

interface IBooking {
  id: number;
  price: number;
  location: string;
  beds: number;
  category: string;
  baths: number;
  size: number;
  image: string;
  date: Date;
  booking_id: string;
}

type PropertyState = {
  properties: IProperty[];
  bookings: IBooking[];
};

type PropertyAction = {
  type: string;
  id: number;
  date: Date;
  booking_id: string;
};

type AuthState = {
  id: string | null;
};

type AuthAction =
  | { type: "SET_USER_ID"; id: string }
  | { type: "REMOVE_USER_ID" };

type RootState = {
  booking: PropertyState;
  auth: AuthState;
};

type RootAction = PropertyAction | AuthAction;

type DispatchType = (args: RootAction) => RootAction;
