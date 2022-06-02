import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import HistoryIcon from "@material-ui/icons/History";
import WhatsShotIcon from "@material-ui/icons/Whatshot";
import WatchLAterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAlt";
import SidebarRow from "../sidebarRow/SidebarRow";
import "./sidebar.css";
const Sidebar = ({ active }) => {
  return (
    <div className={active ? "sidebar" : "resize-sidebar"}>
      <SidebarRow active={active} Icon={HomeIcon} title="home" />
      <SidebarRow active={active} Icon={WhatsShotIcon} title="Trending" />
      <SidebarRow
        active={active}
        Icon={SubscriptionsIcon}
        title="Subscription"
      />

      <SidebarRow
        active={active}
        Icon={HistoryIcon}
        title="History"
      ></SidebarRow>

      <SidebarRow
        active={active}
        Icon={WatchLAterIcon}
        title="watch Later"
      ></SidebarRow>
      <SidebarRow
        active={active}
        Icon={ThumbUpAltOutlinedIcon}
        title="Liked Videos"
      ></SidebarRow>
    </div>
  );
};

export default Sidebar;
