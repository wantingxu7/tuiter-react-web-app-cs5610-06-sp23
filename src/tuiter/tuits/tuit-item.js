import React from "react";
import {useDispatch} from "react-redux";
// import {deleteTuit} from "./tuits-reducer";
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitItem = (
  {post}
) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  }

  return (
    <div className=" wd-one-post-main ms-0">
      <div className="wd-post-left">
        <img className="wd-profile-photo" src={`/images/${post.image}`}/>
      </div>
      <div className="wd-post-right ms-3">
        <div className="wd-first-line mt-2" style={{fontSize: "18px"}}>
          <div className="float-start">
            <span className="fw-bold me-1">{post.username}</span><i
            className="fa-solid fa-circle-check me-1"></i><span
            className="me-1 text-muted">{post.handle}</span><span
            className="me-1 text-muted">·</span><span className="text-muted">{post.time}</span>
          </div>
          <div className="float-end">
            <a style={{color: "inherit"}}><i className="bi bi-x-lg float-end"
                                             onClick={() => deleteTuitHandler(post._id)}></i></a>
          </div>

        </div>
        <div className="wd-post-content" style={{fontSize: "18px"}}>
          {post.tuit}
        </div>

        {/*<div className="wd-below-content mt-2">*/}
        {/*  <div className="wd-post-img">*/}
        {/*    <img className="wd-content-img" src={`/images/${post.image}`}/>*/}
        {/*  </div>*/}
        {/*  <div className="wd-below-img m-2">*/}
        {/*    <div className="wd-below-img-title fw-bold" style={{fontSize: "18px"}}>{post.originPostTitle}*/}
        {/*    </div>*/}
        {/*    <div className="wd-below-img-content" style={{fontSize: "18px"}}>{post.originPostContent}</div>*/}
        {/*  </div>*/}
        {/*</div>*/}


        {/*/!*Tuit statastics*!/*/}
        {/*<div className="wd-last-line mt-2 mb-2" style={{fontSize: "18px"}}>*/}
        {/*  <div className="wd-icon-combo">*/}
        {/*    <a style={{color: "inherit"}}><i className="fa-regular fa-comment me-2"></i></a>*/}
        {/*    <span>{post.replies}</span>*/}
        {/*  </div>*/}
        {/*  <div className="wd-icon-combo">*/}
        {/*    <a style={{color: "inherit"}}><i className="fa-solid fa-arrows-rotate me-2"></i></a>*/}
        {/*    <span>{post.retuits}</span>*/}
        {/*  </div>*/}
        {/*  <div className="wd-icon-combo">*/}
        {/*    <a style={{color: "inherit"}}><i className="fa-regular fa-heart me-2"></i></a>*/}
        {/*    <span>{post.likes}</span>*/}
        {/*  </div>*/}
        {/*  <div className="wd-icon-combo">*/}
        {/*    <a style={{color: "inherit"}}><i*/}
        {/*      className="fa-solid fa-arrow-up-from-bracket me-2"></i></a>*/}
        {/*    <span></span>*/}
        {/*  </div>*/}
        {/*  <div className="wd-icon-combo"></div>*/}
        {/*</div>*/}

      </div>
    </div>

  );
};

export default TuitItem;
