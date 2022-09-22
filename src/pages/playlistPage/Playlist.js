import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import PlaylistCard from "../../components/playlistCard/PlaylistCard";
import Sidebar from "../../components/sidebar/Sidebar";
import { usePlaylistContext } from "../../context/PlaylistProvider";
import "./playlist.css";
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
              <img src="https://assets-global.website-files.com/5bcb5ee81fb2091a2ec550c7/613e3b12dd1556b17a1611cc_wfh-drawkit-thumbnail.png"></img>
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
