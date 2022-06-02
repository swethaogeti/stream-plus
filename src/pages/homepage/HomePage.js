import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Videos from "../../components/videosList/VideosContainer";
import { useState } from "react";
import "./homePage.css";
const HomePage = () => {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <div className="homepage">
      <Navbar toggleActive={toggleActive} />
      <div className="homeContainer">
        <Sidebar active={active} />
        <Videos active={active} />
      </div>
    </div>
  );
};

export default HomePage;
