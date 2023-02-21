import React from "react";

const PostItem = (
    {
        post = {
            "userName": "Elon Musk",
            "handle": "elonmusk",
            "time": "23h",
            "profilePhoto": "../../images/profile-photo-musk.jpeg",
            "image": ",../../images/inspiration4.jpeg",
            "postContent": "This is the post content. This is the post content. This is the post content. This is the post content. This is the post content. ",
            "messageCount": "4.2k",
            "repoCount": "3.5k",
            "likeCount": "37.5k",
            "originPostTitle": "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            "originPostContent": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quodtemporaipsum, ex, voluptate delectus rerum vel a porro eos quo, recusandae qui error quas corrupti? Autdeleniti quo tempora fugit."
        }
    }
) => {
    return (
        <div className="container wd-one-post-main">
            <div className="wd-post-left">
                <img className="wd-profile-photo" src={`/images/${post.profilePhoto}`}/>
            </div>
            <div className="wd-post-right ms-2">
                <div className="wd-first-line mt-2" style={{fontSize: "18px"}}>
                    <div className="wd-first-line-left">
                        <span className="fw-bold me-1">{post.userName}</span><i
                        className="fa-solid fa-circle-check me-1"></i><span className="text-muted">@</span><span
                        className="me-1 text-muted">{post.handle}</span><span
                        className="me-1 text-muted">·</span><span className="text-muted">{post.time}</span>
                    </div>
                    <div className="wd-first-line-right">
                        <a style={{color: "inherit"}}><i className="fa-solid fa-ellipsis"></i></a>
                    </div>

                </div>
                <div className="wd-post-content" style={{fontSize: "18px"}}>
                    {post.postContent}
                </div>
                <div className="wd-below-content mt-2">
                    <div className="wd-post-img">
                        <img className="wd-content-img" src={`/images/${post.image}`}/>
                    </div>
                    <div className="wd-below-img m-2">
                        <div className="wd-below-img-title fw-bold" style={{fontSize: "18px"}}>{post.originPostTitle}
                        </div>
                        <div className="wd-below-img-content" style={{fontSize: "18px"}}>{post.originPostContent}</div>
                    </div>
                </div>
                <div className="wd-last-line mt-2 mb-2" style={{fontSize: "18px"}}>
                    <div className="wd-icon-combo">
                        <a style={{color: "inherit"}}><i className="fa-regular fa-comment me-2"></i></a>
                        <span>{post.messageCount}</span>
                    </div>
                    <div className="wd-icon-combo">
                        <a style={{color: "inherit"}}><i className="fa-solid fa-arrows-rotate me-2"></i></a>
                        <span>{post.repoCount}</span>
                    </div>
                    <div className="wd-icon-combo">
                        <a style={{color: "inherit"}}><i className="fa-regular fa-heart me-2"></i></a>
                        <span>{post.likeCount}</span>
                    </div>
                    <div className="wd-icon-combo">
                        <a style={{color: "inherit"}}><i
                            className="fa-solid fa-arrow-up-from-bracket me-2"></i></a>
                        <span></span>
                    </div>
                    <div className="wd-icon-combo"></div>

                </div>

            </div>
        </div>

    );
};

export default PostItem;
