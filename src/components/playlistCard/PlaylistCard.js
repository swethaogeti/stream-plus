import HistoryIcon from "@material-ui/icons/HistoryOutlined";
import "./playlistCard.css";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/DeleteOutlineOutlined";
import { usePlaylistContext } from "../../context/PlaylistProvider";
const PlaylistCard = ({ playlist, imgBanner }) => {
  const navigate = useNavigate();

  const playlistClickHandler = (playlistId) => {
    navigate(`/playlist/${playlistId}`);
  };

  const { deletePlaylist } = usePlaylistContext();
  console.log(playlist);
  return (
    <div className="playlist-imgBanner imgBanner">
      <div
        className="img-display"
        onClick={() => playlistClickHandler(playlist._id)}
      >
        <img src={imgBanner}></img>
      </div>
      <div className="grey-overlay">
        <HistoryIcon />
        <h4>{playlist.title} </h4>
      </div>
      <div className="delete-icon">
        <DeleteIcon onClick={() => deletePlaylist(playlist._id)} />
      </div>
    </div>
  );
};

export default PlaylistCard;
