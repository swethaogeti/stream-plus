import React, { createContext } from "react";
import { useAuth } from "./AuthProvider";
import { useContext, useReducer, useEffect } from "react";
import axios from "axios";
import { watchlaterReducer } from "../reducer/watchlaterReducer";
const WatchlaterContext = createContext();
const initialState = {
  watchlater: [],
};
const WatchlaterProvider = ({ children }) => {
  const { user } = useAuth();
  const [watchlater, dispatch] = useReducer(watchlaterReducer, initialState);

  useEffect(() => {
    const fetchWatchlater = async () => {
      if (user.token) {
        try {
          const watchlaterResponse = await axios.get("/api/user/watchlater", {
            headers: { authorization: user.token },
          });

          dispatch({
            type: "Watchlater",
            payload: watchlaterResponse.data.watchlater,
          });
        } catch (err) {
          console.log("error in watchlater fetch", err.message);
        }
      } else {
        dispatch({ type: "Watchlater", payload: [] });
      }
    };

    fetchWatchlater();
  }, [user]);

  const addVideoToWatchlater = async (video) => {
    try {
      const addVideoToWatchlaterResponse = await axios.post(
        "/api/user/watchlater",
        { video },
        { headers: { authorization: user.token } }
      );

      dispatch({
        type: "Watchlater",
        payload: addVideoToWatchlaterResponse.data.watchlater,
      });
    } catch (err) {
      console.log("error in adding video", err.message);
    }
  };

  const removeVideoFromWatchlater = async (videoId) => {
    try {
      const removeVideoFromWatchlaterResponse = await axios.delete(
        `/api/user/watchlater/${videoId}`,
        { headers: { authorization: user.token } }
      );
      dispatch({
        type: "Watchlater",
        payload: removeVideoFromWatchlaterResponse.data.watchlater,
      });
    } catch (err) {
      console.log("error in video removing form watchlater", err.message);
    }
  };

  return (
    <WatchlaterContext.Provider
      value={{
        ...watchlater,
        addVideoToWatchlater,
        removeVideoFromWatchlater,
      }}
    >
      {children}
    </WatchlaterContext.Provider>
  );
};

export default WatchlaterProvider;

export const useWatchlaterContext = () => {
  return useContext(WatchlaterContext);
};
