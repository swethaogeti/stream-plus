import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { useAuth } from "../../context/AuthProvider";
const Signup = () => {
  const { setUser } = useAuth();
  const [userSignup, setUserSignup] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });
  const navigate = useNavigate();
  const changeHandlerSignup = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUserSignup((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const signupUser = async () => {
    try {
      const response = await axios.post("/api/auth/signup", userSignup);
      console.log(response);
      setUser({
        user: response.data.createdUser,
        token: response.data.encodedToken,
      });
      navigate("/");
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="login-container">
        <form onSubmit={(e) => e.preventDefault()}>
          <h3>Signup</h3>
          <span>First Name</span>
          <input
            type="text"
            name="firstName"
            value={userSignup.firstName}
            onChange={(e) => changeHandlerSignup(e)}
            placeholder="enter your first name"
            className="input-box"
          ></input>
          <span>Last Name</span>
          <input
            type="text"
            name="lastName"
            value={userSignup.lastName}
            onChange={(e) => changeHandlerSignup(e)}
            placeholder="enter your last name"
            className="input-box"
          ></input>
          <span>Email</span>
          <input
            type="text"
            name="email"
            value={userSignup.email}
            onChange={(e) => changeHandlerSignup(e)}
            placeholder="enter your email"
            className="input-box"
          ></input>
          <span>Password</span>
          <input
            type="password"
            name="password"
            value={userSignup.password}
            onChange={(e) => changeHandlerSignup(e)}
            placeholder="enter your password"
            className="input-box"
          ></input>
          <button className="btn" onClick={() => signupUser()}>
            Signup
          </button>

          <p>
            Have an account{" "}
            <Link to="/login" className="link">
              {"  "}
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
