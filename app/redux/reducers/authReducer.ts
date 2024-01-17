const initialState: AuthState = {
  id: null,
};

const authReducer = (
  state: AuthState = initialState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case "SET_USER_ID":
      return {
        ...state,
        id: action.id,
      };

    case "REMOVE_USER_ID":
      return {
        ...state,
        id: null,
      };

    default:
      return state;
  }
};

export default authReducer;
