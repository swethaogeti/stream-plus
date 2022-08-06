import React from "react";
import "./horizontalCard.css";
import { useNavigate } from "react-router-dom";
import { useHistoryContext } from "../../context/HistoryProvider";
const HorizontalCard = ({ video }) => {
  const { addVideoToHistory } = useHistoryContext();
  const navigate = useNavigate();
  const videoClickHandler = (videoId) => {
    navigate(`/video/${videoId}`);
  };
  return (
    <div
      className="horizontalCard"
      key={video._id}
      onClick={() => {
        videoClickHandler(video._id);
        addVideoToHistory(video);
      }}
    >
      <div className="imgContainer">
        <img src={video.thumbnail}></img>
      </div>
      <div className="abt-container">
        <div className="info-desp">{video.title}</div>
        <p>
          {video.views} • {video.uploadedAt}{" "}
        </p>
      </div>
    </div>
  );
};

export default HorizontalCard;
