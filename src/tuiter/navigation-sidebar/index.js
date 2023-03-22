import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
  const {pathname} = useLocation();
  const paths = pathname.split('/')
  const active = paths[2];
  // console.log(paths)

  return (
    <div className="list-group wd-font-18">
      <a className="list-group-item wd-nowrap wd-flex ps-2"><i
        className="fa-brands fa-twitter"></i></a>
      <Link to="/tuiter/home" className={`list-group-item wd-nowrap wd-flex ps-2
                    ${active === 'home' || paths.length === 2 || active === '' ? 'active' : ''}`}><i
        className="fa-solid fa-house me-1 "></i>
        <span className={"wd-lg-block"}>Home</span>
      </Link>
      <Link to="/tuiter/explore" className={`list-group-item wd-nowrap ps-2
                    ${active === 'explore' ? 'active' : ''}`}><i
        className="fa-solid fa-hashtag me-1"></i>
        <span className={"wd-lg-block"}>Explore</span>
      </Link>
      <Link to="/" className="list-group-item ps-2">
        Labs
      </Link>
      <a className={`list-group-item wd-nowrap ps-2
                    ${active === 'notifications' ? 'active' : ''}`}><i className="fa-solid fa-bell me-1"></i>
        <span className={"wd-lg-block"}>Notifications</span>
      </a>
      <a className={`list-group-item wd-nowrap ps-2
                    ${active === 'messages' ? 'active' : ''}`}><i className="fa-solid fa-envelope me-1"></i>
        <span className={"wd-lg-block"}>Messages</span>
      </a>
      <a className={`list-group-item wd-nowrap ps-2
                    ${active === 'bookmarks' ? 'active' : ''}`}><i className="fa-solid fa-bookmark me-1"></i>
        <span className={"wd-lg-block"}>Bookmarks</span>
      </a>
      <a className={`list-group-item wd-nowrap ps-2
                    ${active === 'lists' ? 'active' : ''}`}><i className="fa-solid fa-list-ul me-1"></i>
        <span className={"wd-lg-block"}>Lists</span>
      </a>
      <Link to="/tuiter/profile" className={`list-group-item wd-nowrap ps-2
                    ${active === 'profile' || active === 'edit-profile' ? 'active' : ''}`}><i
        className="fa-solid fa-user me-1"></i>
        <span className={"wd-lg-block"}>Profile</span>
      </Link>
      {/*<a className={`list-group-item wd-nowrap ps-2*/}
      {/*              ${active === 'profile' ? 'active' : ''}`}><i className="fa-solid fa-user me-1"></i>*/}
      {/*  <span className={"wd-lg-block"}>Profile</span>*/}
      {/*</a>*/}
      <a className={`list-group-item wd-nowrap ps-2
                    ${active === 'more' ? 'active' : ''}`}><i className="fa-solid fa-ellipsis me-1"></i>
        <span className={"wd-lg-block"}>More</span>
      </a>
    </div>
  );
};
export default NavigationSidebar;

