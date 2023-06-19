"use client";
import { useEffect, useState } from "react";
import ApiDataClient from "./ApiData/ApiDataClient";
import Sidebar from "./compoents/Sidebar";
import Videos from "./compoents/Videos";

const HomePage = () => {
  const [activeSidebar, setActiveSidebar] = useState("New");
  const [videoItems, setVideoItems] = useState([]);

  useEffect(() => {
    ApiDataClient(`search?&part=snippet&q=${activeSidebar}&maxResults=50`).then(
      (data) => {
        setVideoItems(data.items);
      }
    );
  }, [activeSidebar]);

  return (
    <section id="feed-page">
      <div className="container">
        <div className="common-page-wrapper">
          <Sidebar
            activeSidebar={activeSidebar}
            setActiveSidebar={setActiveSidebar}
          />
          <Videos videoItems={videoItems} />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
