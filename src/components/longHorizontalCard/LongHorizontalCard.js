import React from "react";
import "./longHorizontalCard.css";
import DeleteIcon from "@material-ui/icons/Delete";
import { Button } from "@material-ui/core";
import { matchPath, useLocation, useNavigate } from "react-router-dom";
import { useHistoryContext } from "../../context/HistoryProvider";

const LongHorizontalCard = ({
  video,
  removeVideo,
  removePlaylistVideo,
  playlistId,
}) => {
  const { history, addVideoToHistory } = useHistoryContext();
  const navigate = useNavigate();
  const videoClickHandler = (videoId) => {
    navigate(`/video/${videoId}`);
  };

  const location = useLocation();

  return (
    <div className="longHorizontalCard">
      <div
        className="longCard-image"
        key={video._id}
        onClick={() => {
          videoClickHandler(video._id);
          addVideoToHistory(video);
        }}
      >
        <img src={video.thumbnail}></img>
      </div>
      <div className="longCard-info">
        <div className="info-desp">{video.title}</div>
        <p>
          {video.views} • {video.uploadedAt}{" "}
        </p>
      </div>
      <DeleteIcon
        className="delete-icon"
        onClick={() => {
          removeVideo(video._id);
        }}
      />
    </div>
  );
};

export default LongHorizontalCard;
