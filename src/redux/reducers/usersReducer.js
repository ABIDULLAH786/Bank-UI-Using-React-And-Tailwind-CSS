import { usersData } from "../../assets/users";
const initialState = {
  users: usersData,
};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER":
      return {
        ...state,
      };
    case "ADD_USER":

    const newData = [action.payload, ...state.users];
    console.log(newData);
      return {
        ...state,
        users: newData,
      };
    case "EDIT_USER":
     
      return {
        ...state,
        users: state.users.map((user) =>
          user.email === action.payload.email ? action.payload : user
        ),
      };
    case "DELETE_USER":
      console.log("state: ");
      console.log(state);
      return {
        ...state,
        users: state.users.filter((item) => item.email !== action.payload),
      };

    default:
      return state;
  }
};

export default usersReducer;
