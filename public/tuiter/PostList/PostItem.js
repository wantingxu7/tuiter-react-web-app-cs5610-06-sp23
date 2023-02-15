const PostItem = (post) => {

    return (`
    <div class="container wd-one-post-main">
        <div class="wd-post-left">
            <img class="wd-profile-photo" src="${post.profilePhoto}">
        </div>
        <div class="wd-post-right ms-2">
            <div class="wd-first-line mt-2" style="font-size:18px;">
                <div class="wd-first-line-left">
                    <span class="fw-bold me-1" >${post.userName}</span><i
                     class="fa-solid fa-circle-check me-1" ></i><span class="text-muted" >@</span><span class="me-1 text-muted" >${post.handle}</span><span
                        class="me-1 text-muted">·</span><span class="text-muted" >${post.time}</span>
                </div>
                <div class="wd-first-line-right">
                    <a href="#" style="color: inherit;"><i class="fa-solid fa-ellipsis"></i></a>
                </div>

            </div>
            <div class="wd-post-content" style="font-size:18px;">
            ${post.postContent}
            </div>
            <div class="wd-below-content mt-2">
                <div class="wd-post-img">
                    <img class="wd-content-img" src="${post.image}" alt="">
                </div>
                <div class="wd-below-img m-2">
                    <div class="wd-below-img-title fw-bold" style="font-size:18px;">${post.originPostTitle}
                    </div>
                    <div class="wd-below-img-content" style="font-size:18px;">${post.originPostContent}</div>
                </div>
            </div>
            <div class="wd-last-line mt-2 mb-2" style="font-size:18px;">
                <div class="wd-icon-combo" >
                    <a href="#" style="color: inherit;"><i class="fa-regular fa-comment me-2"></i></a>
                    <span>${post.messageCount}</span>
                </div>
                <div class="wd-icon-combo">
                    <a href="#" style="color: inherit;"><i class="fa-solid fa-arrows-rotate me-2"></i></a>
                    <span>${post.repoCount}</span>
                </div>
                <div class="wd-icon-combo">
                    <a href="#" style="color: inherit;"><i class="fa-regular fa-heart me-2"></i></a> <span>${post.likeCount}</span>
                </div>
                <div class="wd-icon-combo">
                    <a href="#" style="color: inherit;"><i class="fa-solid fa-arrow-up-from-bracket me-2"></i></a>
                    <span></span>
                </div>
                <div class="wd-icon-combo"></div>

            </div>

        </div>
    </div>

    `);
}

export default PostItem;