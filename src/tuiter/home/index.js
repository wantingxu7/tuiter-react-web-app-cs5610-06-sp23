import React from "react";
import NavigationSidebar from "../navigation-sidebar";
import PostList from "../post-list";
import WhoToFollowList from "../who-to-follow-list";
import ExploreComponent from "../explore";
import "./index.css";
import TuitList from "../tuits/tuit-list";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
  return (
    <>
      <h4>Home</h4>
      <WhatsHappening/>
      <TuitList/>
    </>
  )
};
export default HomeComponent;
