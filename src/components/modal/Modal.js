import React, { useEffect, useState } from "react";
import "./modal.css";
import ClearIcon from "@material-ui/icons/Clear";
import { usePlaylistContext } from "../../context/PlaylistProvider";

const Modal = ({ setModal, video }) => {
  const {
    playlists,
    createNewPlaylist,
    deletePlaylist,
    addVideoToPlaylist,
    deleteVideoFromPlaylist,
  } = usePlaylistContext();

  const [playlistTitle, setPlaylistTitle] = useState(" ");

  const createPlaylistNew = (item) => {
    if (item.length > 0 && item.trim(" ")) {
      createNewPlaylist(item);
    } else {
      return;
    }
  };
  console.log(playlists);
  return (
    <div className="modalBg">
      <div className="modal">
        <div className="modal-flex">
          <h4>Create Playlist</h4>
          <ClearIcon className="modal-btn" onClick={() => setModal(false)} />
        </div>
        <div className="playlist-Items">
          {playlists?.map((item) => {
            return (
              <div className="modal-addItem" key={item._id}>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    e.target.checked === true
                      ? addVideoToPlaylist(video, item._id)
                      : deleteVideoFromPlaylist(video._id, item._id);
                  }}
                  checked={
                    item.videos.find((v) => v._id === video._id) ? true : false
                  }
                ></input>
                <span>{item.title}</span>
              </div>
            );
          })}
        </div>

        <div className="modal-input">
          <input
            placeholder="Create Playlist.."
            onChange={(e) => setPlaylistTitle(e.target.value)}
            value={playlistTitle}
            type="text"
          ></input>

          <button
            onClick={() => {
              createPlaylistNew(playlistTitle);
              setPlaylistTitle("");
            }}
          >
            CREATE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
