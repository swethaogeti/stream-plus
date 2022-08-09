import React, { createContext } from "react";
import { historyReducer } from "../reducer/servicesReducer";
import { useAuth } from "./AuthProvider";
import { useContext, useReducer, useEffect } from "react";
import axios from "axios";
const HistoryContext = createContext();
const initialState = {
  history: [],
};
const HistoryProvider = ({ children }) => {
  const { user } = useAuth();
  const [history, dispatch] = useReducer(historyReducer, initialState);

  useEffect(() => {
    const fetchHistory = async () => {
      if (user.token) {
        try {
          const historyResponse = await axios.get("/api/user/history", {
            headers: { authorization: user.token },
          });

          dispatch({ type: "History", payload: historyResponse.data.history });
        } catch (err) {
          console.log("error in history fetch", err.message);
        }
      } else {
        dispatch({ type: "History", payload: [] });
      }
    };

    fetchHistory();
  }, [user]);

  const addVideoToHistory = async (video) => {
    try {
      const addVideoHistoryResponse = await axios.post(
        "/api/user/history",
        { video },
        { headers: { authorization: user.token } }
      );

      dispatch({
        type: "History",
        payload: addVideoHistoryResponse.data.history,
      });
    } catch (err) {
      console.log("error in adding video", err.message);
    }
  };

  const removeVideoFromHistory = async (videoId) => {
    try {
      const removeVideoHistoryResponse = await axios.delete(
        `/api/user/history/${videoId}`,
        { headers: { authorization: user.token } }
      );
      dispatch({
        type: "History",
        payload: removeVideoHistoryResponse.data.history,
      });
    } catch (err) {
      console.log("error in video removing form history", err.message);
    }
  };

  const clearHistory = async () => {
    try {
      const clearHistoryResponse = await axios.delete("/api/user/history/all", {
        headers: { authorization: user.token },
      });

      dispatch({
        type: "History",
        payload: [],
      });
    } catch (err) {
      console.log("error in clear history", err.message);
    }
  };

  return (
    <HistoryContext.Provider
      value={{
        ...history,
        addVideoToHistory,
        removeVideoFromHistory,
        clearHistory,
      }}
    >
      {children}
    </HistoryContext.Provider>
  );
};

export default HistoryProvider;

export const useHistoryContext = () => {
  return useContext(HistoryContext);
};
