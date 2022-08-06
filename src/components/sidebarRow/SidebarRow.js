import React from "react";
import { Link } from "react-router-dom";
import "./sidebarRow.css";
const SidebarRow = ({ title, Icon, active, link }) => {
  return (
    // <div className={active ? "sidebarRow" : "resize"}>
    //   <Icon className="sidebarRow-icon" />
    //   <h2 className="sidebarRow-title">{title}</h2>
    // </div>

    <div className="sidebarRow">
      <Link to="/">
        <Icon className="sidebarRow-icon"></Icon>
      </Link>

      <p className="sidebarRow-title">{title}</p>
    </div>
  );
};

export default SidebarRow;
