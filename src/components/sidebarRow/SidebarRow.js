import { Link } from "react-router-dom";
import "./sidebarRow.css";
const SidebarRow = ({ title, Icon }) => {
  return (
    <div className="sidebarRow">
      <Link to="/">
        <Icon className="sidebarRow-icon"></Icon>
      </Link>

      <p className="sidebarRow-title">{title}</p>
    </div>
  );
};

export default SidebarRow;
