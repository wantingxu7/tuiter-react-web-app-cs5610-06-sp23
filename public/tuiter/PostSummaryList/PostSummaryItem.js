const PostSummaryItem = (post) => {

    if (post.userName === "") {
        return (`
        <li class="list-group-item">
        <div class="wd-one-post">
            <div class="wd-one-post-left">
                <div style="width: 95%;">
                    <div class="text-secondary" style="white-space: nowrap;">${post.topic}
                    </div>

                    <div class="fw-bold">${post.title}</div>
                    <div class="text-secondary">${post.tweets} Tweets</div>

                </div>

            </div>
            <div class="wd-one-post-right">
                <img src="${post.image}"
                    style="width:100px;height:100px;border-radius: 15px;">
            </div>
        </div>
    </li>
        `);
    }

    if (post.tweets === undefined) {
        return (`
        <li class="list-group-item">
        <div class="wd-one-post">
            <div class="wd-one-post-left">
                <div style="width: 95%;">
                    <div class="text-secondary" style="white-space: nowrap;">${post.topic}
                    </div>
                    <div style="display:flex; align-items: center;"><span class="fw-bold">${post.userName}</span> 
                     <i
                            class="fa-solid fa-circle-check" style="margin-left:7px;margin-right:7px"></i><span class="text-secondary" style="white-space: nowrap;"> -
                            ${post.time}</span></div>
                    <div class="fw-bold">${post.title}</div>


                </div>

            </div>
            <div class="wd-one-post-right">
                <img src="${post.image}"
                    style="width:100px;height:100px;border-radius: 15px;">
            </div>
        </div>
    </li>
        `);
    }



    return (`
    <li class="list-group-item">
    <div class="wd-one-post">
        <div class="wd-one-post-left">
            <div style="width: 95%;">
                <div class="text-secondary" style="white-space: nowrap;">${post.topic}
                </div>
                <div style="display:flex; align-items: center;"><span class="fw-bold">${post.userName}</span>  <i
                        class="fa-solid fa-circle-check" style="margin-left:7px;margin-right:7px"></i><span class="text-secondary" style="white-space: nowrap;"> -
                        ${post.time}</span></div>
                <div class="fw-bold">${post.title}</div>
                <div class="text-secondary">${post.tweets} Tweets</div>

            </div>

        </div>
        <div class="wd-one-post-right">
            <img src="${post.image}"
                style="width:100px;height:100px;border-radius: 15px;">
        </div>
    </div>
</li>
    `);
}

export default PostSummaryItem;