import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Videos from "../../components/videosList/VideosContainer";
import "./homePage.css";
import { useVideosContext } from "../../context/VideosProvider";
import { useCategoriesContext } from "../../context/CategoriesProvider";
import { useFilterContext } from "../../context/FilterProvider";
const HomePage = () => {
  const { videos } = useVideosContext();

  const { categories } = useCategoriesContext();
  const {
    filter: { category },
  } = useFilterContext();

  const getFilterCategory = (videos, category) => {
    if (category === "All") return videos;

    return videos.filter((video) => video.category === category);
  };

  const filteredVideos = getFilterCategory(videos, category);
  console.log("filter videos", filteredVideos);

  return (
    <div className="homepage">
      <Navbar />
      <div className="homeContainer">
        <Sidebar />
        <Videos videoList={filteredVideos} categories={categories} />
      </div>
    </div>
  );
};

export default HomePage;
