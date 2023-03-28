import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findTuitsThunk, updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = (
  {post}
) => {
  const [currentPost, setCurrentPost] = useState(post);
  const [liked, setLiked] = useState(currentPost.liked);
  const [disliked, setDisliked] = useState(currentPost.disliked);
  const dispatch = useDispatch();
  const handleLike = () => {
    console.log("handleLike");
    const newPost = {
      ...currentPost,
      liked: !liked,
      likes: liked ? currentPost.likes - 1 : currentPost.likes + 1
    };
    dispatch(updateTuitThunk(newPost));
    setCurrentPost(newPost);
    setLiked(!liked);
  }

  function handleDislike() {
    const newPost = {
      ...currentPost,
      disliked: !disliked,
      dislikes: disliked ? currentPost.dislikes - 1 : currentPost.dislikes + 1
    }
    dispatch(updateTuitThunk(newPost));
    setCurrentPost(newPost);
    setDisliked(!disliked);
  }

  useEffect(() => {
    setCurrentPost(post);
    setLiked(post.liked);
  }, [post]);
  // const updatedLikes = liked ? currentPost.likes - 1 : currentPost.likes + 1;
  // const updatedPost = {...currentPost, likes: updatedLikes};
  // setCurrentPost(updatedPost);
  // setLiked(!liked);
  // };


  return (
    <div className="wd-last-line ms-3 me-1 mt-2 mb-2" style={{
      fontSize: "18px",
      // border: "1px solid black"
    }}>
      <div className="wd-icon-combo"></div>
      <div className="wd-icon-combo">
        <a style={{color: "inherit"}}>
          <i
            className="fa-regular fa-comment me-2"
          ></i>

          <span>{currentPost.replies}</span></a>
      </div>
      <div className="wd-icon-combo">
        <a style={{color: "inherit"}}>
          <i
            className="fa-solid fa-arrows-rotate me-2"></i>
          <span>{currentPost.retuits}</span>
        </a>
      </div>
      <div className="wd-icon-combo">
        <a style={{color: "inherit"}}>
          <i
            className={`${liked ? "fa-solid" : "fa-regular"} fa-heart me-2 ${liked ? "text-danger" : ""}`}
            onClick={handleLike}>
          </i>

          <span>{currentPost.likes}</span></a>
      </div>
      <div className="wd-icon-combo">
        <a style={{color: "inherit"}}>
          <i
            className={`${disliked ? "fa-solid" : "fa-regular"} fa-thumbs-down me-2 ${disliked ? "text-black" : ""}`}
            onClick={handleDislike}>
          </i>

          <span>{currentPost.dislikes}</span></a>
      </div>


      <div className="wd-icon-combo">
        <a style={{color: "inherit"}}>
          <i
            className="fa-solid fa-arrow-up-from-bracket me-2"
          >
          </i>
          <span></span></a>
      </div>
      {/*<div className="wd-icon-combo"></div>*/}

    </div>
  );
};

export default TuitStats;