import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import ImgBanner from "../../components/imgBanner/ImgBanner";
import LongHorizontalCard from "../../components/longHorizontalCard/LongHorizontalCard";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { usePlaylistContext } from "../../context/PlaylistProvider";
import DeleteIcon from "@material-ui/icons/Delete";
import "./playlistVideos.css";

const PlaylistVideos = () => {
  const { playlistId } = useParams();
  const { playlists, deleteVideoFromPlaylist } = usePlaylistContext();
  const getCurrentPlaylist = playlists.find((item) => item._id === playlistId);
  console.log(getCurrentPlaylist);
  const { videos } = getCurrentPlaylist;

  return (
    <div className="playlistVideos">
      <Navbar />
      <div className="playlistVideosContainer">
        <Sidebar />
        <div className="playlistVideosVideoContainer">
          {videos.length ? (
            <div className="details-display">
              <div className="details-imgCard">
                <ImgBanner imgBanner={videos[0].thumbnail} />
              </div>
              <div className="details-longCards">
                {videos?.map((video, index) => {
                  return (
                    <>
                      <div className="long-card">
                        <LongHorizontalCard
                          video={video}
                          playlistId={playlistId}
                        />
                        <DeleteIcon
                          className="video-delete"
                          onClick={() =>
                            deleteVideoFromPlaylist(video._id, playlistId)
                          }
                        />
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="explore">
              <img src="https://i0.wp.com/media.giphy.com/media/26wfQrP51M7TJGBiHL/giphy.gif?resize=404%2C404&ssl=1"></img>
              <Link to="/playlist">
                <Button>Go Back</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlaylistVideos;
