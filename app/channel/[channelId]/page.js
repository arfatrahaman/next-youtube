import ApiData from "@/app/ApiData/ApiData";
import VideoItems from "../../compoents/VideoItems";
import Image from "next/image";
import { GoVerified } from "react-icons/go";

const channelDetails = async ({ params: { channelId } }) => {
  const channelData = await ApiData(
    `channels?part=snippet%2Cstatistics&id=${channelId}`
  );
  const channelVideos = await ApiData(
    `search?channelId=${channelId}&part=snippet%2Cid&order=date&maxResults=50`
  );
  const channelStatisticsData = channelData.items[0];
  const channelAllData = channelVideos.items;

  return (
    <section id="channel-details">
      <div className="container">
        <div className="channel-details-wrapper">
          {/* Channel All Information */}
          <div className="channel-item-1 channel-item">
            <div className="channel-item-1-inner-content">
              <div className="channel-banner-image-box">
                <Image
                  width={1200}
                  height={500}
                  property="true"
                  src={
                    channelStatisticsData?.brandingSettings?.image
                      ?.bannerExternalUrl
                  }
                  alt="channel-banner"
                  className="channel-banner-image"
                />
              </div>
              <div className="channel-all-information-inner">
                <div className="channel-all-information-1">
                  <div className="channel-profile-image-box">
                    <Image
                      width={50}
                      height={50}
                      property="true"
                      src={
                        channelStatisticsData?.snippet?.thumbnails?.high?.url
                      }
                      alt="channel-profile"
                      className="channel-profile-image"
                    />
                  </div>
                </div>
                <div className="channel-all-information-2">
                  <div className="channel-title-box">
                    <p className="channel-title">
                      {channelStatisticsData?.brandingSettings?.channel?.title}
                      <span className="verify-icon icon">
                        <GoVerified />
                      </span>
                    </p>
                  </div>
                  <div className="channer-customurl-box">
                    <p className="channer-customurl">
                      {channelStatisticsData?.snippet?.customUrl}
                    </p>
                    <p className="channel-subscriber">
                      {channelStatisticsData?.statistics?.subscriberCount}{" "}
                      Subscriber
                    </p>
                    <p className="channel-videos">
                      {channelStatisticsData?.statistics?.videoCount} Videos
                    </p>
                  </div>
                  <div className="channel-description-box">
                    <p className="channel-description">
                      {channelStatisticsData?.snippet?.description.slice(0, 50)}
                      ....
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Channel All Videos */}
          <div className="channel-item-2 channel-item">
            <div className="channel-item-2-inner-content">
              <div className="channel-all-videos">
                <VideoItems videoItems={channelAllData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default channelDetails;
