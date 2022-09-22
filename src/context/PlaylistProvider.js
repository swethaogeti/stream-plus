import React, { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";
import { playlistReducer } from "../reducer/playlistReducer";
import { useAuth } from "./AuthProvider";
const PlaylistContext = createContext();

const PlaylistProvider = ({ children }) => {
  const { user } = useAuth();
  const [playlists, dispatch] = useReducer(playlistReducer, []);

  useEffect(() => {
    const fetchPlaylist = async () => {
      if (user.token) {
        try {
          const playlistResponse = await axios.get("/api/user/playlists", {
            headers: {
              authorization: user.token,
            },
          });

          dispatch({
            type: "Playlists",
            payload: playlistResponse.data.playlists,
          });
        } catch (err) {
          console.log("error in playlist fetch", err.message);
        }
      } else {
        dispatch({ type: "Playlists", payload: [] });
      }
    };
    fetchPlaylist();
  }, [user]);

  const createNewPlaylist = async (playlistName) => {
    try {
      const newPlaylistResponse = await axios.post(
        "/api/user/playlists",
        { playlist: { title: playlistName, description: "" } },
        { headers: { authorization: user.token } }
      );
      dispatch({
        type: "Playlists",
        payload: newPlaylistResponse.data.playlists,
      });
    } catch (err) {
      console.log("error in creating playlist", err.message);
    }
  };

  const deletePlaylist = async (playlistId) => {
    try {
      const deletePlaylistResponse = await axios.delete(
        `/api/user/playlists/${playlistId}`,
        { headers: { authorization: user.token } }
      );
      dispatch({
        type: "Playlists",
        payload: deletePlaylistResponse.data.playlists,
      });
    } catch (err) {
      console.log("error occured in deleting playlist", err.message);
    }
  };

  const addVideoToPlaylist = async (video, playlistId) => {
    try {
      const addVideoToPlaylistResponse = await axios.post(
        `/api/user/playlists/${playlistId}`,
        { video },
        { headers: { authorization: user.token } }
      );

      dispatch({
        type: "Playlist",
        payload: addVideoToPlaylistResponse.data.playlist,
      });
    } catch (err) {
      console.log("error occured in adding video to playlist", err.message);
    }
  };

  const deleteVideoFromPlaylist = async (videoId, playlistId) => {
    try {
      const deleteVideoFromPlaylistResponse = await axios.delete(
        `/api/user/playlists/${playlistId}/${videoId}`,
        { headers: { authorization: user.token } }
      );

      dispatch({
        type: "Playlist",
        payload: deleteVideoFromPlaylistResponse.data.playlist,
      });
    } catch (err) {
      console.log("error occured in deleting video from playlist", err.message);
    }
  };

  return (
    <PlaylistContext.Provider
      value={{
        playlists,
        createNewPlaylist,
        deletePlaylist,
        addVideoToPlaylist,
        deleteVideoFromPlaylist,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};

export default PlaylistProvider;

export const usePlaylistContext = () => {
  return useContext(PlaylistContext);
};
