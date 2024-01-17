// import { createStore, Store } from "redux";

// import bookingReducer from "../reducers/bookingReducer";
// export const store: Store<PropertyState, PropertyAction> & {
//   dispatch: DispatchType;
// } = createStore(bookingReducer);

import { createStore, Store } from "redux";
import rootReducer from "../reducers/rootReducer";

export const store: Store<RootState, RootAction> & {
  dispatch: DispatchType;
} = createStore(rootReducer);
