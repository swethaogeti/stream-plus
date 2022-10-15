import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import ImgBanner from "../../components/imgBanner/ImgBanner";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import LongHorizontalCard from "../../components/longHorizontalCard/LongHorizontalCard";
import "./likes.css";
import { useLikesContext } from "../../context/LikesProvider";
import image2 from "../../images/image2.png";
const Likes = () => {
  const { likes, removeVideoFromLike } = useLikesContext();
  const imgBanner = likes[0]?.thumbnail;

  return (
    <div className="likes">
      <Navbar />
      <div className="likesContainer">
        <Sidebar />
        <div className="likesVideoContainer">
          {likes.length ? (
            <div className="details-display">
              <div className="details-imgCard">
                <ImgBanner imgBanner={imgBanner} />
              </div>
              <div className="details-longCards">
                {likes?.map((video, index) => {
                  return (
                    <LongHorizontalCard
                      video={video}
                      removeVideo={removeVideoFromLike}
                    />
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="explore">
              <img src={image2}></img>
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

export default Likes;
