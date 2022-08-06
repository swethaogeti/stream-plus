import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import HistoryIcon from "@material-ui/icons/History";
import CreateNewFolderIcon from "@material-ui/icons/CreateNewFolder";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAlt";
import "./sidebar.css";
import { Link } from "react-router-dom";
const Sidebar = ({ active }) => {
  return (
    <div className={active ? "sidebar" : "resize-sidebar"}>
      <div className="sidebarRow">
        <Link to="/landing">
          <HomeIcon className="sidebarRow-icon"></HomeIcon>
        </Link>

        <p className="sidebarRow-title">Home</p>
      </div>

      <div className="sidebarRow">
        <Link to="/">
          <ExploreIcon className="sidebarRow-icon"></ExploreIcon>
        </Link>

        <p className="sidebarRow-title">Explore</p>
      </div>

      <div className="sidebarRow">
        <Link to="/playlist">
          <CreateNewFolderIcon className="sidebarRow-icon"></CreateNewFolderIcon>
        </Link>

        <p className="sidebarRow-title">Playlist</p>
      </div>

      <div className="sidebarRow">
        <Link to="/likes">
          <ThumbUpAltOutlinedIcon className="sidebarRow-icon"></ThumbUpAltOutlinedIcon>
        </Link>

        <p className="sidebarRow-title">Likes</p>
      </div>

      <div className="sidebarRow">
        <Link to="/watchlater">
          <WatchLaterIcon className="sidebarRow-icon"></WatchLaterIcon>
        </Link>

        <p className="sidebarRow-title">Watchlater</p>
      </div>

      <div className="sidebarRow">
        <Link to="/history">
          <HistoryIcon className="sidebarRow-icon"></HistoryIcon>
        </Link>

        <p className="sidebarRow-title">History</p>
      </div>
    </div>
  );
};

export default Sidebar;
