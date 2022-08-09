import React from "react";
import VideoCard from "../vedioCard/VideoCard";
import "./videosContainer.css";
const Videos = ({ active, videoList, filterCategory, categories }) => {
  console.log(filterCategory);
  return (
    <div className={active ? "videos" : "resize-container"}>
      <div className=" btn-container">
        {categories.map((btn, index) => {
          return (
            <button
              type="button"
              key={index}
              className="category-btn"
              value={btn}
              onClick={() => filterCategory(btn)}
            >
              {btn}
            </button>
          );
        })}
      </div>
      <div className="flex-container">
        {videoList.map((video, index) => {
          return <VideoCard video={video} />;
        })}
      </div>
    </div>
  );
};

export default Videos;
