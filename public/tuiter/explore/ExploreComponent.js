import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`
  
    <div class="wd-search-bar">
                    <div class="input-group" style="width: 93%;">
                        <span class="wd-search-box-icon input-group-text "><i
                                class="fa-solid fa-magnifying-glass"></i></span>
                        <input type="text" class="form-control wd-search-box" placeholder="Search Tuiter">
                    </div>
                    <a href="explore-settings.html"><i class="fa-solid fa-gear" style="color:rgb(3, 78, 255)"></i></a>
                </div>
                <div class="wd-tab-line">
                    <ul class="nav nav-tabs">
                        <li class="nav-item">
                            <a class="nav-link active" href="for-you.html">For you</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="trending.html">Trending</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="news.html">News</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="sports.html">Sports</a>
                        </li>
                        <li class="nav-item wd-nav-entertainment">
                            <a class="nav-link" href="entertainment.html">Entertainment</a>
                        </li>
                    </ul>
                </div>
    <div class="wd-img-area">
    <img src="https://imageio.forbes.com/specials-images/imageserve/1171862750/Starship-launch-vehicle/960x0.jpg?format=jpg&width=960"
        style="width:100%">
    <div class="wd-img-area-text">SpaceX's Starship</div></div>
    
${PostSummaryList()}
    </div>

   
            
           
    `);
}
export default ExploreComponent;
