const initialState = {
  tags: JSON.parse(localStorage.getItem("tags"))
    ? JSON.parse(localStorage.getItem("tags"))
    : [],
};
// const initialState = JSON.parse(localStorage.getItem("tags"))
//     ? JSON.parse(localStorage.getItem("tags"))
//     : []
function tagsReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TAG":
      return {
        ...state,
        tags: [...state.tags, action.payload],
      };
      case "REMOVE_ALL_TAGS":
      return {
        ...state,
        tags: [],
      };
    case "REMOVE_TAG":
      var array = [...state.tags]; // make a separate copy of the array
      var index = array.indexOf(action.payload);
      if (index !== -1) {
        array.splice(index, 1);
      }
      return {
        ...state,
        tags: array,
      };
    default:
      return state;
  }
}

export default tagsReducer;
