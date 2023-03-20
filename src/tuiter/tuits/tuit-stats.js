import React from "react";

const TuitStats = (
  {
    post = {
      "_id": 234,
      "topic": "Space",
      "userName": "SpaceX",
      "time": "2h",
      "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
      "image": "spacex.png",
      "liked": true,
      "replies": 123,
      "retuits": 432,
      "likes": 2345,
      "handle": "@spacex",
      "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
    }
  }
) => {
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

          <span>{post.replies}</span></a>
      </div>
      <div className="wd-icon-combo">
        <a style={{color: "inherit"}}>
          <i
            className="fa-solid fa-arrows-rotate me-2"></i>
          <span>{post.retuits}</span>
        </a>
      </div>
      <div className="wd-icon-combo">
        <a style={{color: "inherit"}}>
          <i
            className="fa-regular fa-heart me-2"
            onClick={() => {
              alert('heart clicked')
            }}>
          </i>

          <span>{post.likes}</span></a>
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