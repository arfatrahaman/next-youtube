import Link from "next/link";
import { GoVerified } from "react-icons/go";

const VideoCard = ({ videoInfo }) => {
  const {
    id: { videoId },
  } = videoInfo;
  const {
    snippet: { channelId, channelTitle, title, thumbnails },
  } = videoInfo;

  return (
    <div className="video-inner-content">
      {/* Video Detail Linik */}
      <Link href={`/video/${videoId}`} className="video-card">
        <img src={thumbnails.high.url} alt="" />
        <p className="video-title">{title.slice(0, 80)}....</p>
      </Link>
      {/* Channel Detail Link */}
      <Link href={`/channel/${channelId}`}>
        <p className="channel-name">
          {channelTitle}
          <span className="verify-icon icon">
            <GoVerified />
          </span>
        </p>
      </Link>
    </div>
  );
};

export default VideoCard;
