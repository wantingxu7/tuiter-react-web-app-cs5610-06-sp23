import React from "react";
// import whoArray from '../data/who.json';
import WhoToFollowListItem from "./who-to-follow-list-item";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
  const whoArray = useSelector((state) => state.who);

  return (
    <ul className="list-group wd-font-18">
      <li className="list-group-item">
        <h3 className="fw-bold m-0" style={{fontSize: "20px"}}>Who to follow</h3>
      </li>
      {
        whoArray.map(who =>
          <WhoToFollowListItem
            key={who._id}
            who={who}/>
        )
      }
    </ul>
  );
};

export default WhoToFollowList;