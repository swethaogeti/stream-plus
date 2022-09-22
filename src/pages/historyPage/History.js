import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import ImgBanner from "../../components/imgBanner/ImgBanner";
import LongHorizontalCard from "../../components/longHorizontalCard/LongHorizontalCard";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useHistoryContext } from "../../context/HistoryProvider";
import { useLikesContext } from "../../context/LikesProvider";
import { useWatchlaterContext } from "../../context/WatchlaterProvider";
import "./history.css";
const History = () => {
  const { history, removeVideoFromHistory, clearHistory } = useHistoryContext();
  const imgBanner = history[0]?.thumbnail;
  const { likes, addVideoToLike } = useLikesContext();
  const { watchlater, addVideoToWatchlater } = useWatchlaterContext();

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
              <img src="https://assets-global.website-files.com/5bcb5ee81fb2091a2ec550c7/613e3b12dd1556b17a1611cc_wfh-drawkit-thumbnail.png"></img>
              <Link to="/">
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
