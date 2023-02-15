import PostSummaryItem from "./PostSummaryItem.js";
import postItems from "./postItems.js"

const PostSummaryList = (posts) => {
    return (`

    

    <div>
        <ul class="list-group">
           
        ${postItems.map(postItem => {
        return (PostSummaryItem(postItem));
    }).join('')
        }   
        
    

        </ul>
    </div>
    `);
}

export default PostSummaryList;

