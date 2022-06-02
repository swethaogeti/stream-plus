import React from "react";
import "./videosContainer.css";
const Videos = ({ active }) => {
  return <div className={active ? "videos" : "resize-container"}>Videos</div>;
};

export default Videos;
