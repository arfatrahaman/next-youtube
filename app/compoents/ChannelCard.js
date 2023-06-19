import Image from "next/image";
import Link from "next/link";

const ChannelCard = ({ channelInfo }) => {
  const {
    snippet: { thumbnails, channelTitle, channelId },
  } = channelInfo;

  return (
    <Link href={`/channel/${channelId}`} className="channel-inner-content">
      <div className="channel-profile-image">
        <Image
          width={500}
          height={300}
          property="true"
          src={thumbnails?.high?.url}
          alt="channel-video-image"
          className="channel-profile-img"
        />
      </div>
      <p className="channel-name">{channelTitle}</p>
    </Link>
  );
};

export default ChannelCard;
