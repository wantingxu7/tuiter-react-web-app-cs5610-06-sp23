import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";
import WhoToFollowList from "../who-to-follow-list";

const ExploreComponent = () => {
    return (
        <>
            <div className="row">
                <div className="col-10 position-relative" style={{alignItems: "center"}}>
                    <input placeholder="Search Tuiter"
                           className="form-control rounded-pill ps-5 pt-1 pb-1"/>
                    <i className="bi bi-search position-absolute
                       wd-nudge-up" style={{top: "15%", left: "8%"}}></i>
                </div>
                <div className="col-2">
                    <i className="wd-bottom-4 text-primary float-end bi
                       bi-gear-fill fs-3 position-relative"></i>
                </div>
            </div>
            <ul className="nav nav-pills mb-2">
                <li className="nav-item">
                    <a className="nav-link active">For You</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">News</a>
                </li>
            </ul>
            <div className="position-relative">
                <img src="/images/SpaceX's-Starship.jpeg" className="w-100"/>
                <h1 className="position-absolute wd-nudge-up text-white fs-4 fw-bold">
                    Space'X Starship</h1>
            </div>
            <PostSummaryList/>
        </>
    );
};
export default ExploreComponent;

