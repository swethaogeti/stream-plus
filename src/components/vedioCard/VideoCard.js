import React from "react";
import { useNavigate } from "react-router-dom";
import { useHistoryContext } from "../../context/HistoryProvider";
import "./videoCard.css";
const VideoCard = ({ video }) => {
  const { history, addVideoToHistory } = useHistoryContext();
  const navigate = useNavigate();
  const videoClickHandler = (videoId) => {
    navigate(`/video/${videoId}`);
  };

  return (
    <div
      className="video-card"
      key={video._id}
      onClick={() => {
        videoClickHandler(video._id);
        addVideoToHistory(video);
      }}
    >
      <img className="thumbnail" src={video.thumbnail}></img>
      <div className="abt-container">
        <div className="info-desp">{video.title}</div>
        <p>{video.creator}</p>
      </div>
    </div>
  );
};

export default VideoCard;
