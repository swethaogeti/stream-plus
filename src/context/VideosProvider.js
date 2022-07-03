import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";
import { VideosReducer } from "../reducer/VideosReducer";

const initialState = {
  videos: [],
};
const VideosContext = createContext();
const VideosProvider = ({ children }) => {
  const [state, dispatch] = useReducer(VideosReducer, initialState);

  const fetchVideos = async () => {
    const response = await axios.get("/api/videos");
    const videosList = response.data.videos;
    dispatch({ type: "GET_VIDEOS", payload: videosList });
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <VideosContext.Provider value={{ ...state }}>
      {children}
    </VideosContext.Provider>
  );
};

export default VideosProvider;

export const useVideosContext = () => {
  return useContext(VideosContext);
};
