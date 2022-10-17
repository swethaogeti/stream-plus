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
                      imgBanner={
                        playlist.videos[0]
                          ? playlist.videos[0]?.thumbnail
                          : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoM6GcvV3RiynA6olre6K9gUJvJ4Xut-Od-b0veqSiuSoZJ25W4hfyjCon9DdOUveyc3s&usqp=CAU"
                      }
                    ></PlaylistCard>
                  </div>
                </>
              );
            })
          ) : (
            <div className="explore">
              <img src={image3}></img>
              <Link to="/explore">
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
