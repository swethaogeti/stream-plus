import React, { createContext, useContext, useEffect, useReducer } from "react";
import { likesReducer } from "../reducer/likesReducer";
import { useAuth } from "./AuthProvider";
import axios from "axios";
const LikesContext = createContext();
const initialState = {
  likes: [],
};

const LikesProvider = ({ children }) => {
  const { user } = useAuth();

  const [likes, dispatch] = useReducer(likesReducer, initialState);

  useEffect(() => {
    const fetchLikes = async () => {
      if (user.token) {
        try {
          const likeVideoResponse = await axios.get("/api/user/likes", {
            headers: {
              authorization: user.token,
            },
          });
          dispatch({
            type: "Likes",
            payload: likeVideoResponse.data.likes,
          });
        } catch (err) {
          console.log(
            "error occured in the fetching liked videos",
            err.message
          );
        }
      } else {
        dispatch({ type: "Likes", payload: [] });
      }
    };

    fetchLikes();
  }, [user]);

  const addVideoToLike = async (video) => {
    try {
      const videoLikeResponse = await axios.post(
        "/api/user/likes",
        { video },
        {
          headers: {
            authorization: user.token,
          },
        }
      );
      dispatch({ type: "Likes", payload: videoLikeResponse.data.likes });
    } catch (err) {
      console.log("error occured in adding video to likes", err.message);
    }
  };

  const removeVideoFromLike = async (videoId) => {
    try {
      const removeVideoLikeResponse = await axios.delete(
        `/api/user/likes/${videoId}`,
        {
          headers: {
            authorization: user.token,
          },
        }
      );
      dispatch({ type: "Likes", payload: removeVideoLikeResponse.data.likes });
    } catch (err) {
      console.log("error occured in removing video from like", err.message);
    }
  };

  return (
    <LikesContext.Provider
      value={{ ...likes, addVideoToLike, removeVideoFromLike }}
    >
      {children}
    </LikesContext.Provider>
  );
};

export default LikesProvider;

export const useLikesContext = () => {
  return useContext(LikesContext);
};
