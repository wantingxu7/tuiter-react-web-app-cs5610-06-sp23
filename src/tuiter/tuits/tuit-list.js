import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import TuitItem from "./tuit-item";
import TuitStats from "./tuit-stats";
import {findTuitsThunk} from "../../services/tuits-thunks";

const TuitList = () => {
  // const tuitsArray = useSelector(state => state.tuits)
  const {tuits, loading} = useSelector(state => state.tuitsData)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findTuitsThunk())
  }, [])

  return (

    <div style={{
      fontSize: "18px",
      // border: "1px solid lightGrey",
      borderRadius: "8px"
    }}>
      {
        loading &&
        <li className="list-group-item">
          Loading...
        </li>
      }
      <ul className="list-group">


        {[...tuits].reverse().map(tuit => (
          <div key={tuit._id}
               className={"list-group-item ps-2 pe-1 pt-0"}
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