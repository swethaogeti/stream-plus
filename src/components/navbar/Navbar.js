import Avatar from "@material-ui/core/Avatar";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useAuth } from "../../context/AuthProvider";
const Navbar = () => {
  const { user } = useAuth();

  return (
    <div className="navbar">
      <div className="nav-left">
        <Link to="/" className="link">
          <h1 className="nav-logo">STREAM +</h1>
        </Link>
      </div>
      <div className="nav-input">
        <input type="text" placeholder="search here.."></input>
        <SearchIcon className="nav-searchBtn" />
      </div>

      <div className="nav-icons">
        <Link to="/login">
          <Avatar />
          <p>{user?.user?.firstName}</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
