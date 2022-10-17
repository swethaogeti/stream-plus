import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import ImgBanner from "../../components/imgBanner/ImgBanner";
import LongHorizontalCard from "../../components/longHorizontalCard/LongHorizontalCard";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useAuth } from "../../context/AuthProvider";
import { useHistoryContext } from "../../context/HistoryProvider";
import { useLikesContext } from "../../context/LikesProvider";
import { useWatchlaterContext } from "../../context/WatchlaterProvider";
import image1 from "../../images/image1.png";
import "./history.css";
const History = () => {
  const { history, removeVideoFromHistory, clearHistory } = useHistoryContext();
  const imgBanner = history[0]?.thumbnail;
  const { likes, addVideoToLike } = useLikesContext();
  const { watchlater, addVideoToWatchlater } = useWatchlaterContext();
  const { user } = useAuth();
  console.log(user);
  return (
    <div className="history">
      <Navbar />

      <div className="historyContainer">
        <Sidebar />

        <div className="historyVideoContainer">
          {history.length ? (
            <div className="details-display">
              <div className="details-imgCard">
                <ImgBanner imgBanner={imgBanner} />

                <Button onClick={() => clearHistory()}>Clear All</Button>
              </div>
              <div className="details-longCards">
                {history?.map((video, index) => {
                  return (
                    <LongHorizontalCard
                      video={video}
                      removeVideo={removeVideoFromHistory}
                    />
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="explore">
              <img src={image1}></img>
              <Link to="/explore">
                <Button>Explore</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default History;
