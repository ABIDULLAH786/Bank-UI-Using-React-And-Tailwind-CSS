const initialState = {
  language: "",
};

const SET_LANGUAGE = "SET_LANGUAGE";

export function languageSwitcherReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LANGUAGE:
      return { ...state, language: action.language };
    default:
      return state;
  }
}
