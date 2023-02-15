
const NavigationSidebar = () => {
        // const a = window.location.pathname;
        // const b = window.location.href;
        // console.log(a, b)
        const loc = window.location.pathname;
        // console.log(window.location)
        const output = `        
<ul id="navigationSidebar" class="list-group">
<a href="#1" class="list-group-item wd-list-group-item-left"><i class="fa-brands fa-twitter"></i>
</a>
<a href="../HomeScreen/index.html" class="list-group-item ${loc.split("/")[4] === 'HomeScreen' ? 'active' : ' '} wd-list-group-item-left"><i class="fa-solid fa-house me-1"></i>
    <span> Home</span>
</a>
<a href="../explore/index.html" class="list-group-item ${loc.split("/")[4] === 'explore' ? 'active' : ' '} wd-list-group-item-left"><i
        class="fa-solid fa-hashtag me-1"></i>
    <span> Explore</span>
</a>
<a id="noti" href="#" class="list-group-item  wd-list-group-item-left"><i
        class="fa-solid fa-bell me-1"></i><span>Notifications</span>
</a>
<a href="#" class="list-group-item  wd-list-group-item-left"><i
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
<div><button type="button" class="btn btn-primary wd-tuit-button">Tuit</button>

</div>
`

        const a = [
                '<ul id="navigationSidebar" class="list-group">',
                '<a href="#1" class="list-group-item wd-list-group-item-left"><i class="fa-brands fa-twitter"></i></a>',






        ];

        return output;

        //         return (`

        //         <ul id="navigationSidebar" class="list-group">
        //             <a href="#1" class="list-group-item wd-list-group-item-left"><i class="fa-brands fa-twitter"></i>
        //             </a>
        //             <a href="../HomeScreen/index.html" class="list-group-item ${loc.split("/")[4] === 'HomeScreen' ? 'active' : ' '} wd-list-group-item-left"><i class="fa-solid fa-house me-1"></i>
        //                 <span> Home</span>
        //             </a>
        //             <a href="../explore/index.html" class="list-group-item ${loc.split("/")[4] === 'explore' ? 'active' : ' '} wd-list-group-item-left"><i
        //                     class="fa-solid fa-hashtag me-1"></i>
        //                 <span> Explore</span>
        //             </a>
        //             <a href="#" class="list-group-item ${window.location.hash === '#no' ? 'active' : ' '} wd-list-group-item-left"><i
        //                     class="fa-solid fa-bell me-1"></i><span>Notifications</span>
        //             </a>
        //             <a href="#" class="list-group-item  wd-list-group-item-left"><i
        //                     class="fa-solid fa-envelope me-1"></i><span>
        //                     Messages</span>
        //             </a>
        //             <a href="#" class="list-group-item wd-list-group-item-left"><i
        //                     class="fa-solid fa-bookmark me-1"></i><span>
        //                     Bookmarks</span>
        //             </a>
        //             <a href="#" class="list-group-item wd-list-group-item-left"><i
        //                     class="fa-solid fa-list-ul me-1"></i><span>
        //                     Lists</span></a>
        //             <a href="#" class="list-group-item wd-list-group-item-left"><i class="fa-solid fa-user me-1"></i><span>
        //                     Profile</span></a>
        //             <a href="#" class="list-group-item wd-list-group-item-left"><i
        //                     class="fa-solid fa-ellipsis me-1"></i><span>
        //                     More</span></a>

        //         </ul>
        //         <div><button type="button" class="btn btn-primary wd-tuit-button">Tuit</button>

        //         </div>



        //     `);
}

export default NavigationSidebar;


$('#wd-navBar').append(NavigationSidebar);
