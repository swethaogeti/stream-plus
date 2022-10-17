import ExploreIcon from "@material-ui/icons/Explore";
import HistoryIcon from "@material-ui/icons/History";
import CreateNewFolderIcon from "@material-ui/icons/CreateNewFolder";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAlt";
import "./sidebar.css";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/explore" className="link">
        <div className="sidebarRow">
          <ExploreIcon className="sidebarRow-icon"></ExploreIcon>
          <p className="sidebarRow-title">Explore</p>
        </div>
      </Link>

      <Link to="/playlist" className="link">
        <div className="sidebarRow">
          <CreateNewFolderIcon className="sidebarRow-icon"></CreateNewFolderIcon>
          <p className="sidebarRow-title">Playlist</p>
        </div>
      </Link>

      <Link to="/likes" className="link">
        <div className="sidebarRow">
          <ThumbUpAltOutlinedIcon className="sidebarRow-icon"></ThumbUpAltOutlinedIcon>
          <p className="sidebarRow-title">Likes</p>
        </div>
      </Link>

      <Link to="/watchlater" className="link">
        <div className="sidebarRow">
          <WatchLaterIcon className="sidebarRow-icon"></WatchLaterIcon>
          <p className="sidebarRow-title">Watchlater</p>
        </div>
      </Link>

      <Link to="/history" className="link">
        <div className="sidebarRow">
          <HistoryIcon className="sidebarRow-icon"></HistoryIcon>
          <p className="sidebarRow-title">History</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
