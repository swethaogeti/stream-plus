import React from "react";
import Avatar from "@material-ui/core/Avatar";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = ({ toggleActive }) => {
  return (
    <div>
      <div className="navbar">
        <div className="nav-left">
          <MenuIcon className="nav-icon" onClick={toggleActive}></MenuIcon>
          <Link to="/" className="link">
            <h1 className="nav-logo">STREAM +</h1>
          </Link>
        </div>
        <div className="nav-input">
          <input type="text" placeholder="search here.."></input>
          <SearchIcon className="nav-searchBtn" />
        </div>

        <div className="nav-icons">
          <Avatar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
