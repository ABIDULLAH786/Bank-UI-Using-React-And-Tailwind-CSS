const initialState = {
  theme: "light",
};

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return {
        ...state,
        theme: action.theme,
      };
    default:
      return state;
  }
};
