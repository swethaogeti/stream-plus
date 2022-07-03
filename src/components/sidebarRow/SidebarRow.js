import React from "react";
import "./sidebarRow.css";
const SidebarRow = ({ title, Icon, active }) => {
  return (
    <div className={active ? "sidebarRow" : "resize"}>
      <Icon className="sidebarRow-icon" />
      <h2 className="sidebarRow-title">{title}</h2>
    </div>
  );
};

export default SidebarRow;
