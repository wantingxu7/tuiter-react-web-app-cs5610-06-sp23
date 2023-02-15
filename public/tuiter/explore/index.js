import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
// import PostSummaryList from "../PostSummaryList";
import ExploreComponent from "./ExploreComponent.js";


function exploreComponent() {
    $('#wd-explore').append(`
    <div class="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2 col-xs-2 wd-container-left"
    style="padding-right:20px">
    ${NavigationSidebar("explore")}
    </div>

    <div class="wd-post-area  col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-10 col-xs-10" style="padding-right:20px">
    ${ExploreComponent("1")}
    </div>

    <div class="container  col-xxl-4 col-xl-4 col-lg-4 wd-container-right" style="padding-right:20px padding-left:0">
    ${WhoToFollowList()}
    </div>

   `);
}
$(exploreComponent);


$(document).ready(function () {
    $("#navigationSidebar a").click(function () {
        console.log(this);
        let children = $("#navigationSidebar").children();
        children.each(function (idx, val) {
            $(this).removeClass('active');
        });
        $(this).addClass("active");
    });
});


