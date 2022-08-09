export const likesReducer = (state, action) => {
  if (action.type === "Likes") {
    return {
      ...state,
      likes: action.payload,
    };
  }
};
