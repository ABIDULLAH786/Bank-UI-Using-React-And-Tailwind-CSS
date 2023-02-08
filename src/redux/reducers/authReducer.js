const initialState = {
  user: {
    username: "",
    isLoggedIn: false,
  },
};

const auth = (state = initialState, action = {}) => {
  switch (action.type) {
    case "LOGIN":
      console.log("LOGIN");
      console.log(action.payload);
      return {
        ...state,
        user: action.payload,
      };

    case "LOGOUT":
      console.log("Logged out");
      console.log(action.payload);
      return {
        ...state,
        user: action.payload,
      };
    case "SET_REGISTER":
      return {
        ...state,
        message: action.value,
      };
    case "SET_ADMIN":
      return {
        ...state,
        message: action.value,
      };
    default:
      return state;
  }
};

export default auth;
