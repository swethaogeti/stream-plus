import { useFilterContext } from "../../context/FilterProvider";
import VideoCard from "../vedioCard/VideoCard";
import "./videosContainer.css";
const Videos = ({ videoList, categories }) => {
  const { dispatchFilter } = useFilterContext();

  return (
    <div className="videos">
      <div className=" btn-container">
        {categories.map((item) => {
          return (
            <button
              type="button"
              key={item._id}
              className="category-btn"
              value={item.categoryName}
              onClick={() =>
                dispatchFilter({
                  type: "Category",
                  payload: item.categoryName,
                })
              }
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
