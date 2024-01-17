import { combineReducers } from "redux";
import bookingReducer from "./bookingReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  booking: bookingReducer,
  auth: authReducer,
});

export default rootReducer;
