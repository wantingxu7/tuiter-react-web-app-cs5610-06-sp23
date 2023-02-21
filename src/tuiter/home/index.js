import React from "react";
import NavigationSidebar from "../navigation-sidebar";
import PostList from "../post-list";
import WhoToFollowList from "../who-to-follow-list";
import ExploreComponent from "../explore";
import "./index.css";

const HomeComponent = () => {
    return (
        <>
            {/*<div className="col-10 col-md-10 col-lg-7 col-xl-6"*/}
            {/*     style={{"position": "relative"}}>*/}
            <PostList/>
            {/*</div>*/}
            {/*<div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">*/}
            {/*    <ExploreComponent/>*/}
            {/*</div>*/}
        </>
    )
};
export default HomeComponent;
