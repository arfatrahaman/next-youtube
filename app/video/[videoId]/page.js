import ApiData from "@/app/ApiData/ApiData";
import Link from "next/link";

import { GoVerified } from "react-icons/go";
import { AiFillLike } from "react-icons/ai";
import { BiShow } from "react-icons/bi";
import VideoItems from "@/app/compoents/VideoItems";

const videoId = async ({ params: { videoId } }) => {
  const videoData = await ApiData(
    `videos?part=contentDetails,Csnippet,Cstatistics&id=${videoId}`
  );

  const relatedVideos = await ApiData(
    `search?relatedToVideoId=${videoId}&part=snippet&type=video&maxResults=50`
  );

  const getSingleVideo = videoData?.items ?? [];
  const videoDetails = getSingleVideo[0];
  const videos = relatedVideos?.items;

  return (
    <section id="video-details">
      <div className="container">
        <div className="video-details-wrapper">
          <div className="video-details-item-1">
            <div className="video-details-item-1-inner">
              <div className="video-player">
                <iframe
                  className="next-player"
                  src={`https://www.youtube.com/embed/${videoId}`}
                ></iframe>
              </div>
              <div className="video-title">
                <p>{videoDetails?.snippet?.title}</p>
              </div>
              <div className="video-detail-information">
                <div className="channel-link">
                  <Link
                    href={`/channel/${videoDetails?.snippet?.channelId}`}
                    className="channel-link-inner"
                  >
                    {videoDetails?.snippet?.channelTitle}
                    <span className="verify-icon icon">
                      <GoVerified />
                    </span>
                  </Link>
                </div>
                <div className="video-view-count ">
                  <p className="view-count-inner">
                    <span>
                      <BiShow className="icon" />
                    </span>
                    {videoDetails?.statistics?.viewCount}
                  </p>
                </div>
                <div className="video-like-count">
                  <p className="like-count-inner">
                    <span>
                      <AiFillLike className="icon" />
                    </span>
                    {videoDetails?.statistics?.likeCount}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="video-details-item-2">
            <div className="video-details-item-2-inner">
              <VideoItems videoItems={videos} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default videoId;
