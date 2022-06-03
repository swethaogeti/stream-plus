import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Videos from "../../components/videosList/VideosContainer";
import { useState } from "react";
import "./homePage.css";
import { useVideosContext } from "../../context/VideosProvider";
const HomePage = () => {
  const [active, setActive] = useState(false);
  const { videos } = useVideosContext();
  const [allVideos, setAllVideos] = useState(videos);
  const allCategories = [
    "all",
    ...new Set(videos.map((item) => item.category)),
  ];

  const [categories, setCategories] = useState(allCategories);

  const filterCategory = (category) => {
    if (category === "all") {
      setAllVideos(videos);
      return;
    }
    const newCategory = videos.filter((item) => item.category === category);
    setAllVideos(newCategory);
  };

  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <div className="homepage">
      <Navbar toggleActive={toggleActive} />
      <div className="homeContainer">
        <Sidebar active={active} />
        <Videos
          active={active}
          videoList={allVideos}
          categories={categories}
          filterCategory={filterCategory}
        />
      </div>
    </div>
  );
};

export default HomePage;
