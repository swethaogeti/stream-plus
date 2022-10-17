import { useState } from "react";
import { useFilterContext } from "../../context/FilterProvider";
import VideoCard from "../vedioCard/VideoCard";
import "./videosContainer.css";

const Videos = ({ videoList, categories }) => {
  const { dispatchFilter } = useFilterContext();
  const [isActive, setIsActive] = useState();

  return (
    <div className="videos">
      <div className=" btn-container">
        {categories.map((item) => {
          return (
            <button
              style={{
                backgroundColor: isActive === item._id ? "#8F00FF" : "",
                color: isActive === item._id ? "white" : "",
              }}
              type="button"
              key={item._id}
              className="category-btn"
              value={item.categoryName}
              onClick={() => {
                dispatchFilter({
                  type: "Category",
                  payload: item.categoryName,
                });
                setIsActive(item._id);
              }}
            >
              {item.categoryName}
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
