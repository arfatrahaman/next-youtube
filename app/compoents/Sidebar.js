"use client";
import { sidebarData } from "./sidebarData";

const Sidebar = ({ activeSidebar, setActiveSidebar }) => {
  return (
    <aside id="sidebar" className="show-sidebar">
      <div className="sidebar-wrapper">
        <div className="sidebar-inner-content">
          {sidebarData.map((item, index) => {
            return (
              <div
                className={
                  activeSidebar === item.name
                    ? "active-sidebar-item sidebar-item"
                    : "sidebar-item"
                }
                onClick={() => setActiveSidebar(item.name)}
                key={index}
              >
                <div className="sidebar-icon-box">
                  <p className="icon">{item.icon}</p>
                </div>
                <div className="sidebar-name-box">
                  <h4>{item.name}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
