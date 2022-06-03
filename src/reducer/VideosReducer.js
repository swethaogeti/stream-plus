import React from "react";

export const VideosReducer = (state, action) => {
  if (action.type === "GET_VIDEOS") {
    return {
      ...state,
      videos: action.payload,
    };
  }
};
