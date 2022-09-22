import React from "react";
import "./imgBanner.css";
import HistoryIcon from "@material-ui/icons/HistoryOutlined";
import { useLocation } from "react-router-dom";

const ImgBanner = ({ imgBanner }) => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div className="imgBanner">
      <div className="img-display">
        <img src={imgBanner}></img>
      </div>
      <div className="grey-overlay">
        <HistoryIcon />

        {pathname === "/history" && <h4>History</h4>}
        {pathname === "/likes" && <h4>Likes</h4>}
        {pathname === "/watchlater" && <h4>watchlater</h4>}
      </div>
    </div>
  );
};

export default ImgBanner;
