import React from "react";
import "./imgBanner.css";
import HistoryIcon from "@material-ui/icons/HistoryOutlined";

const ImgBanner = ({ imgBanner }) => {
  return (
    <div className="imgBanner">
      <div className="img-display">
        <img src={imgBanner}></img>
      </div>
      <div className="grey-overlay">
        <HistoryIcon />
        <h4>History</h4>
      </div>
    </div>
  );
};

export default ImgBanner;
