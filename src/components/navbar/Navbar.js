import SearchIcon from "@material-ui/icons/Search";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import { useAuth } from "../../context/AuthProvider";

const Navbar = () => {
  const { user, setUser } = useAuth();

  const navigate = useNavigate();
  const logout = () => {
    setUser({ token: null, user: null });
    navigate("/login");
  };

  return (
    <div className="navbar">
      <div className="nav-left">
        <Link to="/" className="link">
          <h1 className="nav-logo">STREAM+</h1>
        </Link>
      </div>
      <div className="nav-input">
        <input type="text" placeholder="search here.."></input>
        <SearchIcon className="nav-searchBtn" />
      </div>

      <div className="nav-right">
        {user.token ? (
          <div className="nav-logout">
            <h3>{user?.user?.firstName}</h3>
            <button onClick={() => logout()}>Logout</button>
          </div>
        ) : (
          <div className="nav-logout">
            <h3> Hi👋</h3>
            <button
              onClick={() => {
                if (user.token) {
                  navigate("/explore");
                } else {
                  navigate("/login");
                }
              }}
            >
              LOGIN
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
