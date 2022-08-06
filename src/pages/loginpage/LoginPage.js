import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./loginPage.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import axios from "axios";
const Login = () => {
  const [userLogin, setUserLogin] = useState({ email: "", password: "" });
  const [tester, setTester] = useState({
    email: "adarshbalika@gmail.com",
    password: "adarshbalika123",
  });
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const changeHandlerLogin = (e) => {
    setUserLogin((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }));
  };

  const loginUserHandle = async (isTester) => {
    try {
      const response = await axios.post(
        "/api/auth/login",
        isTester ? tester : userLogin
      );
      console.log(response);
      setUser({
        user: response.data.foundUser,
        token: response.data.encodedToken,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="login-container">
        <form onSubmit={(e) => e.preventDefault()}>
          <h3>Login</h3>
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={userLogin.email}
            onChange={(e) => changeHandlerLogin(e)}
            placeholder="enter your email"
            className="input-box"
          ></input>
          <span>Password</span>
          <input
            type="password"
            name="password"
            value={userLogin.password}
            onChange={(e) => changeHandlerLogin(e)}
            placeholder="enter your password"
            className="input-box"
          ></input>
          <button
            className="btn"
            onClick={() => {
              loginUserHandle(false);
            }}
          >
            Login
          </button>
          <button
            className="btn guest-btn"
            onClick={() => loginUserHandle(true)}
          >
            {" "}
            Guest LOGIN
          </button>
          <p>
            Don't have an account create one{" "}
            <Link to="/signup" className="link">
              {"  "}
              signup
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
