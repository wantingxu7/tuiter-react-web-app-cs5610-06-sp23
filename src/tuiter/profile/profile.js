import React from "react";
import {useSelector} from "react-redux";
import "./index.css"
import {Link} from "react-router-dom";

const Profile = ({
                   p = {
                     "firstName": "W",
                     "lastName": "X",
                     "handle": "@want",
                     "profilePicture": "java-icon.png",
                     "bannerPicture": "banner.png",
                     "bio": "endorsements",
                     "website": "youtube.com/webdevtv",
                     "location": "San Jose, CA",
                     "dateOfBirth": "7/6/1996",
                     "dateJoined": "4/2009",
                     "followingCount": 33,
                     "followersCount": 66
                   },
                 }) => {
  const profile = useSelector(state => state.profile);
  
  // function handleClickEditProfile() {
  //   window.location.href = "/tuiter/edit-profile"
  // }

  return (
    <div className={'card'}>
      <div className={"d-flex"}>
        <div className={"ms-3 mt-2"}>
          <i className="fa-solid fa-arrow-left wd-back-icon" style={{fontSize: '20px'}}></i>
        </div>
        <div className={'row ms-2 mb-1 mt-1'}>
          <span className="title-text">{profile.firstName} {profile.lastName}</span>
          <span className="normal-text-grey">99 Tweets</span>
        </div>
      </div>
      <div className="banner-container">

        <div className="avatar-container">
          <img className='avatar-image' src={`../../images/${profile.profilePicture}`}/>
        </div>
        <img
          className="banner-image"
          src={
            `../../images/${profile.bannerPicture}`}/>
        <button className="btn btn-sm btn-outline-dark edit-profile-button "
                style={{
                  borderRadius: '30px',
                  width: '150px',
                  borderColor: 'lightgrey',
                  fontWeight: 'bold',
                  fontSize: '18px'
                }}
          // onClick={handleClickEditProfile}
        ><Link to={'/tuiter/edit-profile'} style={{textDecoration: 'none', color: 'inherit'}}>
          Edit Profile</Link>
        </button>
      </div>


      <div style={{height: '90px'}}></div>

      <div className={"ms-3 mt-1"}>
        <div className="row">
          <span className="title-text">{profile.firstName} {profile.lastName}</span>
          <span className="normal-text-grey">{profile.handle}</span>
        </div>
        <div className="row mt-2 normal-text-black" style={{width: '100%'}}>
          <span>
          {profile.bio}</span>
        </div>
        <div className="d-flex  mt-2">
          <div className="d-flex">
            <i className="fa-solid fa-location-dot icon"></i>
            <span className="normal-text-grey ms-1 me-2">{profile.location}</span>
          </div>
          <div className="d-flex">
            <i className="fa-regular fa-lightbulb icon"></i>
            <span className="normal-text-grey ms-1 me-2">Born {profile.dateOfBirth}</span>
          </div>
          <div className="d-flex">
            <i className="fa-regular fa-calendar-days icon"></i>
            <span className="normal-text-grey ms-1 me-2">Joined {profile.dateJoined}</span>
          </div>
        </div>
        <div className="d-flex mt-2 mb-2">
          <div className="d-flex">
            <span className="normal-text-black  " style={{fontWeight: 'bold'}}>{profile.followingCount}</span>
            <span className="normal-text-grey ms-1 me-2">Following</span>
          </div>
          <div className="d-flex">
            <span className="normal-text-black ms-1 " style={{fontWeight: 'bold'}}>{profile.followersCount}</span>
            <span className="normal-text-grey ms-1 me-2">Followers</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Profile;