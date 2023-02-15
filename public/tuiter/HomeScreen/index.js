import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/PostSummaryItem.js";
import ExploreComponent from "../explore/ExploreComponent.js";
import PostList from "../PostList/index.js";

function exploreComponent() {
    $('#wd-home').append(`
    <div class=" col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2 col-xs-2 wd-container-left"
    style="padding-right:20px; padding-left:0;">
    ${NavigationSidebar("home")}</div>

    <div class="wd-post-area  col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-10 col-xs-10" style="margin-left:20px; margin-right:20px;">   
    ${PostList()}</div>

    
    <div class=" col-xxl-4 col-xl-4 col-lg-4 d-none d-lg-block wd-container-right" style="padding-right:20px;">
    ${ExploreComponent()}</div>
   
   `);
}
$(exploreComponent);

$(document).ready(function () {
    $("#navigationSidebar a").click(function () {
        let children = $("#navigationSidebar").children();
        children.each(function (idx, val) {
            $(this).removeClass('active');
        });
        $(this).addClass("active");
    });
});