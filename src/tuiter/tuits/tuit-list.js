import React from "react";
import {useSelector} from "react-redux";
import TuitItem from "./tuit-item";
import TuitStats from "./tuit-stats";

const TuitList = () => {
  const tuitsArray = useSelector(state => state.tuits)
  return (
    <div style={{
      fontSize: "18px",
      border: "1px solid lightGrey",
      borderRadius: "8px"
    }}>
      <ul className="list-group">
        {tuitsArray.map(tuit => (
          <div key={tuit._id}
               style={{
                 borderBottom: "1px solid lightGrey",
               }}>
            <TuitItem post={tuit}/>
            <TuitStats post={tuit}/>
          </div>
        ))}
      </ul>
    </div>
  );
};
export default TuitList;