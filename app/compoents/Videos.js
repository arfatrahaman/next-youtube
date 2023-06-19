import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";

const Videos = ({ videoItems }) => {
  return (
    <section id="videos" className="small-width">
      <div className="video-items">
        <div className="common-videos-wrapper">
          {videoItems?.map((videoItem) => {
            return (
              <div className="video-item-inner" key={videoItem?.id?.videoId}>
                {videoItem?.id?.channelId && (
                  <ChannelCard channelInfo={videoItem} />
                )}
                {videoItem?.id?.videoId && <VideoCard videoInfo={videoItem} />}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Videos;
