
const NavigationSidebar = () => {
    const a = window.location.pathname;
    const b = window.location.href;
    console.log(a, b)

    if (window.location.pathname === '/tuiter-react-web-app-cs5610-06-sp23/public/tuiter/explore/index.html') {
        return (`

    <div style="width:100%">
        <ul class="list-group">
            <a href="#" class="list-group-item wd-list-group-item-left"><i class="fa-brands fa-twitter"></i>
            </a>
            <a href="../HomeScreen/index.html" class="list-group-item wd-list-group-item-left"><i class="fa-solid fa-house me-1"></i>
                <span> Home</span>
            </a>
            <a href="../explore/index.html" class="list-group-item active  wd-list-group-item-left"><i
                    class="fa-solid fa-hashtag me-1"></i>
                <span> Explore</span>
            </a>
            <a href="#" class="list-group-item wd-list-group-item-left"><i
                    class="fa-solid fa-bell me-1"></i><span>Notifications</span>
            </a>
            <a href="#" class="list-group-item wd-list-group-item-left"><i
                    class="fa-solid fa-envelope me-1"></i><span>
                    Messages</span>
            </a>
            <a href="#" class="list-group-item wd-list-group-item-left"><i
                    class="fa-solid fa-bookmark me-1"></i><span>
                    Bookmarks</span>
            </a>
            <a href="#" class="list-group-item wd-list-group-item-left"><i
                    class="fa-solid fa-list-ul me-1"></i><span>
                    Lists</span></a>
            <a href="#" class="list-group-item wd-list-group-item-left"><i class="fa-solid fa-user me-1"></i><span>
                    Profile</span></a>
            <a href="#" class="list-group-item wd-list-group-item-left"><i
                    class="fa-solid fa-ellipsis me-1"></i><span>
                    More</span></a>

        </ul>
    </div>
    <div><button type="button" class="btn btn-primary wd-tuit-button">Tuit</button>

    </div>

    `);
    }
    if (window.location.pathname === '/tuiter-react-web-app-cs5610-06-sp23/public/tuiter/HomeScreen/index.html') {
        return (`

            <div style="width:100%">
                <ul class="list-group">
                    <a href="#" class="list-group-item wd-list-group-item-left"><i class="fa-brands fa-twitter"></i>
                    </a>
                    <a href="../HomeScreen/index.html" class="list-group-item active wd-list-group-item-left"><i class="fa-solid fa-house me-1"></i>
                        <span> Home</span>
                    </a>
                    <a href="../explore/index.html" class="list-group-item wd-list-group-item-left"><i
                            class="fa-solid fa-hashtag me-1"></i>
                        <span> Explore</span>
                    </a>
                    <a href="#" class="list-group-item wd-list-group-item-left"><i
                            class="fa-solid fa-bell me-1"></i><span>Notifications</span>
                    </a>
                    <a href="#" class="list-group-item wd-list-group-item-left"><i
                            class="fa-solid fa-envelope me-1"></i><span>
                            Messages</span>
                    </a>
                    <a href="#" class="list-group-item wd-list-group-item-left"><i
                            class="fa-solid fa-bookmark me-1"></i><span>
                            Bookmarks</span>
                    </a>
                    <a href="#" class="list-group-item wd-list-group-item-left"><i
                            class="fa-solid fa-list-ul me-1"></i><span>
                            Lists</span></a>
                    <a href="#" class="list-group-item wd-list-group-item-left"><i class="fa-solid fa-user me-1"></i><span>
                            Profile</span></a>
                    <a href="#" class="list-group-item wd-list-group-item-left"><i
                            class="fa-solid fa-ellipsis me-1"></i><span>
                            More</span></a>
        
                </ul>
            </div>
            <div><button type="button" class="btn btn-primary wd-tuit-button">Tuit</button>
        
            </div>
        
        
            `)
    }
    return (`

<div style="width:100%">
    <ul class="list-group">
        <a href="#" class="list-group-item wd-list-group-item-left"><i class="fa-brands fa-twitter"></i>
        </a>
        <a href="../HomeScreen/index.html" class="list-group-item wd-list-group-item-left"><i class="fa-solid fa-house me-1"></i>
            <span> Home</span>
        </a>
        <a href="../explore/index.html" class="list-group-item wd-list-group-item-left"><i
                class="fa-solid fa-hashtag me-1"></i>
            <span> Explore</span>
        </a>
        <a href="#" class="list-group-item wd-list-group-item-left"><i
                class="fa-solid fa-bell me-1"></i><span>Notifications</span>
        </a>
        <a href="#" class="list-group-item wd-list-group-item-left"><i
                class="fa-solid fa-envelope me-1"></i><span>
                Messages</span>
        </a>
        <a href="#" class="list-group-item wd-list-group-item-left"><i
                class="fa-solid fa-bookmark me-1"></i><span>
                Bookmarks</span>
        </a>
        <a href="#" class="list-group-item wd-list-group-item-left"><i
                class="fa-solid fa-list-ul me-1"></i><span>
                Lists</span></a>
        <a href="#" class="list-group-item wd-list-group-item-left"><i class="fa-solid fa-user me-1"></i><span>
                Profile</span></a>
        <a href="#" class="list-group-item wd-list-group-item-left"><i
                class="fa-solid fa-ellipsis me-1"></i><span>
                More</span></a>

    </ul>
</div>
<div><button type="button" class="btn btn-primary wd-tuit-button">Tuit</button>

</div>


`);
}

export default NavigationSidebar;

$('#wd-navBar').append(NavigationSidebar);
