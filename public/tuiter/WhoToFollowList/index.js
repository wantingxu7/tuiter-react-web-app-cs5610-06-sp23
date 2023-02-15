import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {
    return (`

        <div style=" width:100%">
            <ul class="list-group">
            <li class="list-group-item" style="font-weight: bold;">Who to follow</li>
            ${who.map(w => {
        return (WhoToFollowListItem(w));
    }).join('')
        }            
            </ul>
            </div>
           
 `);
}
export default WhoToFollowList;
$('#wd-navBar').append(WhoToFollowList);
