import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./imageSlider.css";
import { useAuth } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const ImageSlider = () => {
  let settings = {
    dots: true,
    inifinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  const navigate = useNavigate();
  const { user } = useAuth();

  const sliderimages = [
    { id: 1, img: "https://cdn.europosters.eu/image/hp/63119.jpg" },
    {
      id: 2,
      img: "https://w0.peakpx.com/wallpaper/270/734/HD-wallpaper-the-jungle-book-the-jungle-book-2016.jpg",
    },
    {
      id: 3,
      img: "https://w0.peakpx.com/wallpaper/744/417/HD-wallpaper-stranger-things-all-season-characters-stranger-things.jpg",
    },
    {
      id: 4,
      img: "https://assets.fontsinuse.com/static/use-media-items/27/26619/full-1500x690/567022b0/interstellar_ver7_xlg.jpeg",
    },
    {
      id: 5,
      img: "https://w0.peakpx.com/wallpaper/815/718/HD-wallpaper-tv-show-squid-game.jpg",
    },
  ];
  return (
    <Slider className="carousel" {...settings}>
      {sliderimages.map((item) => {
        return (
          <div
            className="wrap"
            key={item.id}
            onClick={() => {
              if (user.token) {
                navigate("/explore");
              } else {
                navigate("/login");
              }
            }}
          >
            <img src={item.img}></img>
          </div>
        );
      })}
    </Slider>
  );
};

export default ImageSlider;
