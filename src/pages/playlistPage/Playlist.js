import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import PlaylistCard from "../../components/playlistCard/PlaylistCard";
import Sidebar from "../../components/sidebar/Sidebar";
import { usePlaylistContext } from "../../context/PlaylistProvider";
import "./playlist.css";
import image3 from "../../images/image3.png";
const Playlist = () => {
  const { playlists } = usePlaylistContext();

  return (
    <div className="playlist">
      <Navbar />
      <div className="playlistContainer">
        <Sidebar />
        <div className="playlistVideoContainer">
          {playlists.length ? (
            playlists.map((playlist) => {
              return (
                <>
                  <div className="playlistImgContainer">
                    <PlaylistCard
                      playlist={playlist}
                      key={playlist._id}
                      imgBanner="https://i0.wp.com/media.giphy.com/media/14bCoBnYgL4u0U/giphy.gif?resize=300%2C285&ssl=1"
                    ></PlaylistCard>
                  </div>
                </>
              );
            })
          ) : (
            <div className="explore">
              <img src={image3}></img>
              <Link to="/">
                <Button>Explore</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Playlist;
