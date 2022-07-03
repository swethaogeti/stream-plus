import React from "react";
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
          return (
            <div className="video-card" key={index}>
              <img className="thumbnail" src={video.thumbnail}></img>
              <div className="flex-div">
                <div className="video-info">
                  <h4>{video.title}</h4>
                  <div className="flex-div-info">
                    <p>{video.creator}</p>
                    <p>
                      {video.views} views &bull; {video.uploadedAt}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Videos;
