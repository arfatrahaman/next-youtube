import ApiData from "@/app/ApiData/ApiData";
import VideoItems from "@/app/compoents/VideoItems";
import React from "react";

const searchvideos = async ({ params: { searchvideos } }) => {
  const data = await ApiData(
    `search?q=${searchvideos}&part=snippet&regionCode=us&maxResults=50&order=date`
  );
  const videoItems = await data.items;
  return (
    <section id="search-feed">
      <div className="container">
        <VideoItems videoItems={videoItems} />
      </div>
    </section>
  );
};

export default searchvideos;
