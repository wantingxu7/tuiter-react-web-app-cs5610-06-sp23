import PostItem from "./PostItem.js";
import posts from "./posts.js";

const PostList = () => {
    return (`
 

    <div >
        <ul class="list-group">
           
        ${posts.map(post => {
        return (PostItem(post));
    }).join('')
        }   
        
    

        </ul>
    </div>

    `);
}

export default PostList;

