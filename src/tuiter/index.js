import Nav from "../nav";
import NavigationSidebar
  from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list/index.js";
import PostSummaryItem from "./post-summary-list/post-summary-item.js";
import PostSummaryList from "./post-summary-list/index";
import ExploreComponent from "./explore/index";
import HomeComponent from "./home/index";
import {Routes, Route} from "react-router";
import React from "react";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";


const store = configureStore({reducer: {who: whoReducer, tuits: tuitsReducer}});

function Tuiter() {
  return (
    <Provider store={store}>
      <div className="row mt-2">
        <div className="col-2 col-xs-2 col-sm-2 col-md-2 col-lg-1 col-xl-2">
          <NavigationSidebar active="explore"/>
        </div>
        <div className="col-10 col-xs-10 col-sm-10 col-md-10 col-lg-7 col-xl-6"
             style={{"position": "relative"}}>

          <Routes>
            <Route path="home" element={<HomeComponent/>}/>
            <Route path="/" element={<HomeComponent/>}/>
            <Route path="explore" element={<ExploreComponent/>}/>
          </Routes>

        </div>
        <div className="col-xl-4 col-lg-4 d-none d-lg-block">
          <Routes>
            <Route path="home" element={<WhoToFollowList/>}/>
            <Route path="/" element={<WhoToFollowList/>}/>
            <Route path="explore" element={<WhoToFollowList/>}/>
          </Routes>
        </div>
      </div>
    </Provider>
  )
}

export default Tuiter