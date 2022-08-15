export const filterReducer = (state, action) => {
  if (action.type === "Category") {
    return {
      ...state,
      category: action.payload,
    };
  }
};
