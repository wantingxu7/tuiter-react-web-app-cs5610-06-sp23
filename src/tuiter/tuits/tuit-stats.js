import React, {useState} from "react";

const TuitStats = (
  {post}
) => {
  const [liked, setLiked] = useState(post.liked);
  const [currentPost, setCurrentPost] = useState(post);
  const handleLike = () => {
    const updatedLikes = liked ? currentPost.likes - 1 : currentPost.likes + 1;
    const updatedPost = {...currentPost, likes: updatedLikes};
    setCurrentPost(updatedPost);
    setLiked(!liked);
  };

  return (
    <div className="wd-last-line  mt-2 mb-2" style={{
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
            className="fa-solid fa-arrow-up-from-bracket me-2"
          >
          </i>
          <span></span></a>
      </div>
      <div className="wd-icon-combo"></div>

    </div>
  );
};

export default TuitStats;