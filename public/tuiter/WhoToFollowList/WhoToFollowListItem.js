const WhoToFollowListItem = (who) => {
    return (`
    <li class="list-group-item">
    <div class="wd-follow-row">
        <div class="wd-follow-left-middle" style="display: flex;">
            <div class="wd-follow-left"><a href="#"><img
                        src="../../images/${who.avatarIcon}"
                        style="width:45px; height:45px; border-radius: 50%;"></a></div>
            <div class="wd-follow-middle">
                <div class="wd-follow-name" style="font-weight: bold;">
                ${who.userName} <i class="fa-solid fa-circle-check"></i></div>
                <div class="wd-follow-@">@${who.handle}</div>
            </div>
        </div>
        <div class="wd-follow-right">
            <a href="#"><button class="wd-follow-button">Follow</button></a>

        </div>
    </div>
</li>
    `);
}

export default WhoToFollowListItem;