export const watchlaterReducer = (state, action) => {
  if (action.type === "Watchlater") {
    return {
      ...state,
      watchlater: action.payload,
    };
  }
};
