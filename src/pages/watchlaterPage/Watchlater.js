import { Button } from "@material-ui/core";
import React from "react";
import LongHorizontalCard from "../../components/longHorizontalCard/LongHorizontalCard";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import VideoCard from "../../components/vedioCard/VideoCard";
import ImgBanner from "../../components/imgBanner/ImgBanner";
import { Link } from "react-router-dom";
import "./watchlater.css";
import { useWatchlaterContext } from "../../context/WatchlaterProvider";
const Watchlater = () => {
  const { watchlater, addVideoToWatchlater, removeVideoFromWatchlater } =
    useWatchlaterContext();
  const imgBanner = watchlater[0]?.thumbnail;
  return (
    <div className="watchlater">
      <Navbar />
      <div className="watchlaterContainer">
        <Sidebar />
        <div className="watchlaterVideoContainer">
          {watchlater.length ? (
            <div className="details-display">
              <div className="details-imgCard">
                <ImgBanner imgBanner={imgBanner} />
              </div>
              <div className="details-longCards">
                {watchlater?.map((video, index) => {
                  return (
                    <LongHorizontalCard
                      video={video}
                      removeVideo={removeVideoFromWatchlater}
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

export default Watchlater;
