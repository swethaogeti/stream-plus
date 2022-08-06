export const historyReducer = (state, action) => {
  if (action.type === "History") {
    return {
      ...state,
      history: action.payload,
    };
  }
};
