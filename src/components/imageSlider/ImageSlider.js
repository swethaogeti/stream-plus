import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./imageSlider.css";

const ImageSlider = () => {
  let settings = {
    dots: true,
    inifinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Slider className="carousel" {...settings}>
      <div className="wrap">
        <img src="https://cdn.europosters.eu/image/hp/63119.jpg"></img>
      </div>
      <div className="wrap">
        <img src="https://w0.peakpx.com/wallpaper/270/734/HD-wallpaper-the-jungle-book-the-jungle-book-2016.jpg"></img>
      </div>
      <div className="wrap">
        <img src="https://w0.peakpx.com/wallpaper/744/417/HD-wallpaper-stranger-things-all-season-characters-stranger-things.jpg"></img>
      </div>

      <div className="wrap">
        <img src="https://assets.fontsinuse.com/static/use-media-items/27/26619/full-1500x690/567022b0/interstellar_ver7_xlg.jpeg"></img>
      </div>
      <div className="wrap">
        <img src="https://w0.peakpx.com/wallpaper/815/718/HD-wallpaper-tv-show-squid-game.jpg"></img>
      </div>
    </Slider>
  );
};

export default ImageSlider;
