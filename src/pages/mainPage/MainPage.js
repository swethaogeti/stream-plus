import "./mainPage.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import ImageSlider from "../../components/imageSlider/ImageSlider";
import { Link } from "react-router-dom";
const MainPage = () => {
  const myArr = [0, 1, 2, 3];
  return (
    <div className="mainPage">
      <ImageSlider />
      <div className="live">
        <div className="live-border">
          <h4>STREAM+ Live TV</h4>
          <div className="text-xl">STREAM PLUS Makes It Better</div>
          <div className="sub-text">
            Make the switch from cable. Get 30+ top shows with your favorite
            movies, shows - plus the entire stream + streaming library.
          </div>
          <Link to="/login" className="btn">
            Login
          </Link>
        </div>
      </div>
      <div className="categories">
        <div className="sub-text">
          Stream full seasons of exclusive series, current-season episodes, hit
          movies, Stream + Originals, kids shows, and more.
        </div>

        <div className="covers">
          {myArr.map((item, i) => (
            <div className={`cover-${i}`}>
              <div className="cover-grad"></div>
              <div className="cover-text">
                <div className="sub-title">Past & Current Season</div>
                <h3>Tv Shows</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer class="footer">
        <div class="footer-container">
          <h3>Made by Swetha Ogeti</h3>
          <div class="social-icons">
            <a href="#">
              <TwitterIcon />
            </a>
            <a href="#">
              <LinkedInIcon />
            </a>
            <a href="#">
              <GithubIcon />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainPage;
