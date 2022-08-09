import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import CreateNewFolderIcon from "@material-ui/icons/CreateNewFolderOutlined";
import WatchLaterIcon from "@material-ui/icons/WatchLaterOutlined";
import WatchLaterAlt from "@material-ui/icons/WatchLater";
import ThumbUpAlt from "@material-ui/icons/ThumbUpAlt";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import "./singleVideo.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import HorizontalCard from "../../components/horizontalCard/HorizontalCard";
import { useVideosContext } from "../../context/VideosProvider";
import { useLikesContext } from "../../context/LikesProvider";
import { useWatchlaterContext } from "../../context/WatchlaterProvider";
import { useHistoryContext } from "../../context/HistoryProvider";
import Modal from "../../components/modal/Modal";
const SingleVideo = () => {
  const { videoId } = useParams();

  const { videos } = useVideosContext();
  const { history } = useHistoryContext();
  const { likes, addVideoToLike, removeVideoFromLike } = useLikesContext();
  const { watchlater, addVideoToWatchlater, removeVideoFromWatchlater } =
    useWatchlaterContext();
  const [showModal, setShowModal] = useState(false);
  const [video, setVideo] = useState({});

  const fetchVideo = async () => {
    const videoResponse = await axios.get(`/api/video/${videoId}`);
    setVideo(videoResponse.data.video);
  };
  useEffect(() => {
    fetchVideo();
  }, [videoId]);

  const suggestedVideos = [...videos]
    .filter((item) => item._id !== videoId)
    .slice(0, 6);
  return (
    <div className="singleVideo">
      {showModal && <Modal setModal={setShowModal} video={video} />}
      <Navbar />
      <div className="singleVideoContainer">
        <Sidebar className="singleVideoSidebar" />

        <div className="videoDisplay" key={video._id}>
          <div className="videoPlayer">
            <iframe
              width="920.5"
              height="460.2"
              src={`https://www.youtube-nocookie.com/embed/${video._id}/?autoplay=1`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowFullScreen
            ></iframe>
          </div>
          <h3 className="videoTitle">{video.title}</h3>
          <div className="info-container">
            <p>
              {video.views} • {video.uploadedAt}{" "}
            </p>
            <div className="icons-container">
              {likes?.find((item) => item._id === video._id) ? (
                <ThumbUpAlt
                  className="icon"
                  style={{ color: "#8F00FF" }}
                  onClick={() => removeVideoFromLike(video._id)}
                >
                  {" "}
                  delete
                </ThumbUpAlt>
              ) : (
                <ThumbUpAltOutlinedIcon
                  className="icon"
                  onClick={() => {
                    addVideoToLike(video);
                  }}
                >
                  add
                </ThumbUpAltOutlinedIcon>
              )}

              {watchlater?.find((item) => item._id === video._id) ? (
                <WatchLaterAlt
                  className="icon"
                  style={{ color: "#8F00FF" }}
                  onClick={() => removeVideoFromWatchlater(video._id)}
                >
                  {" "}
                  delete
                </WatchLaterAlt>
              ) : (
                <WatchLaterIcon
                  className="icon"
                  onClick={() => {
                    addVideoToWatchlater(video);
                  }}
                ></WatchLaterIcon>
              )}

              <CreateNewFolderIcon
                className="icon"
                onClick={() => setShowModal(true)}
              />
            </div>
          </div>
          <hr />
          <p className="videoDesp">{video.description}</p>
        </div>

        <div className="suggestedVideos">
          {suggestedVideos.map((video, index) => {
            return <HorizontalCard video={video} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SingleVideo;
