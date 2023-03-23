import React, {useEffect, useState} from "react";
import "./index.css";
import {useSelector, useDispatch} from "react-redux";
import {updateProfileData} from "../profile/profile-reducer.js";
import {Link} from "react-router-dom";


const EditProfileComponent = () => {

  const profile = useSelector(state => state.profile);
  const dispatch = useDispatch();

  const [formValues, setFormValues] = useState({
    firstName: profile.firstName,
    lastName: profile.lastName,
    handle: profile.handle,
    profilePicture: profile.profilePicture,
    bannerPicture: profile.bannerPicture,
    bio: profile.bio,
    website: profile.website,
    location: profile.location,
    dateOfBirth: profile.dateOfBirth,
    dateJoined: profile.dateJoined,
    followingCount: profile.followingCount,
    followersCount: profile.followersCount
  });

  useEffect(() => {
    setFormValues({
      firstName: profile.firstName,
      lastName: profile.lastName,
      handle: profile.handle,
      profilePicture: profile.profilePicture,
      bannerPicture: profile.bannerPicture,
      bio: profile.bio,
      website: profile.website,
      location: profile.location,
      dateOfBirth: profile.dateOfBirth,
      dateJoined: profile.dateJoined,
      followingCount: profile.followingCount,
      followersCount: profile.followersCount
    });
    console.log("formValues", formValues);
    console.log("date", profile.dateOfBirth, typeof profile.dateOfBirth);
  }, []);


  // function xmarkClickHandler() {
  //   window.location.href = "/tuiter/profile"
  // }

  const handleSubmit = e => {
    console.log("handleSubmit");
    e.preventDefault();
    dispatch(updateProfileData(formValues));
  };

  return (
    <>
      <form className={"card"}>
        <div className={"flex-box mt-1 mb-1"}>
          <div className={"float-start ms-3 mt-1"}>
            <Link to={'/tuiter/profile'}><i
              // onClick={xmarkClickHandler}
              className="fa-solid fa-xmark wd-back-icon"
              style={{fontSize: '20px', color: 'black'}}
            ></i>
            </Link>
          </div>
          <div className={'float-start ms-4 mb-1 mt-1'}>
            <span className="title-text">Edit profile</span>
          </div>
          <div className={'float-end mt-1 me-2'}>

            <button className="btn btn-sm btn-dark"
                    onClick={handleSubmit}
                    style={{
                      borderRadius: '25px',
                      width: '85px',
                      fontWeight: 'bold',
                      fontSize: '18px'
                    }}>
              <Link to="/tuiter/profile"
                    style={{textDecoration: 'none', color: 'inherit'}}>Save</Link>
            </button>

          </div>
        </div>
        <div className="banner-container mt-1">
          <div className="avatar-container " style={{width: 'max-content'}}>
            <img
              style={{filter: 'brightness(75%)'}}
              className='avatar-image' src={`../../images/${formValues.profilePicture}`}/>
            <div className={'me-2 avatar-center'} style={{
              backgroundColor: 'black',
              borderRadius: '50%',
              height: '50px',
              width: '50px',
              opacity: '0.6',
            }}>
              <i className="fa-solid fa-camera " style={{
                color: 'white',
                marginLeft: '12px',
                marginTop: '12px',
              }}></i>
            </div>

          </div>
          <img
            className="banner-image"
            style={{filter: 'brightness(75%)'}}
            src={
              '../../images/banner.png'}/>
          <div className={'d-flex banner-center'}>
            <div className={'me-2'} style={{
              backgroundColor: 'black',
              borderRadius: '50%',
              height: '50px',
              width: '50px',
              opacity: '0.6',
            }}>
              <i className="fa-solid fa-camera " style={{
                color: 'white',
                marginLeft: '12px',
                marginTop: '12px',
              }}></i>
            </div>
            <div className={'ms-2'} style={{
              backgroundColor: 'black',
              borderRadius: '50%',
              height: '50px',
              width: '50px',
              opacity: '0.6',
            }}>
              <i className="fa-solid fa-xmark" style={{
                color: 'white',
                marginLeft: '17px',
                marginTop: '13px',
              }}></i>
            </div>
          </div>

        </div>
        <div style={{height: '90px'}}></div>
        <div>
          <div className="form-floating mb-3 ms-3 me-3">
            <input
              type="text"
              className="form-control"
              id="fistName"
              value={formValues.firstName}
              onChange={(e) =>
                setFormValues({...formValues, firstName: e.target.value})
              }
              placeholder="name@example.com"/>
            <label
              htmlFor="fistName"
              style={{
                color: "grey",
                fontSize: "20px",
              }}
            >First Name</label>
          </div>

          <div className="form-floating mb-3 ms-3 me-3">
            <input
              type="text"
              className="form-control"
              id="lastname"
              value={formValues.lastName}
              placeholder="name@example.com"
              onChange={e => {
                // console.log("onchange")
                setFormValues({...formValues, lastName: e.target.value})
                // console.log(formValues)
              }
              }
            />
            <label
              htmlFor="lastname"
              style={{
                color: 'grey',
                fontSize: '20px',
              }}
            >Last Name</label>


          </div>
          <div className="form-floating ms-3 me-3 mt-3">
            <textarea
              type="text"
              className="form-control"
              id="bio"
              name="bio"
              value={formValues.bio}
              placeholder={"What's happening?"}
              style={{
                height: '140px',
                overflowY: 'scroll',
              }}
              onChange={e => setFormValues({...formValues, bio: e.target.value})}
            />
            <label
              htmlFor="bio"
              style={{
                color: 'grey',
                fontSize: '20px',
              }}
            >Bio</label>
          </div>
          <div className="form-floating ms-3 me-3 mt-3">
            <input
              type="text"
              className="form-control"
              id="location"
              value={formValues.location}
              placeholder={"Where are you?"}
              onChange={e => setFormValues({...formValues, location: e.target.value})}
              style={{
                height: 'auto'
              }}/>
            <label
              htmlFor="location"
              style={{
                color: 'grey',
                fontSize: '20px',
              }}
            >Location</label>
          </div>
          <div className="form-floating ms-3 me-3 mt-3">
            <input
              type="text"
              className="form-control"
              id="website"
              value={formValues.website}
              placeholder={"https://example.com"}
              onChange={e => setFormValues({...formValues, website: e.target.value})}
            />
            <label
              htmlFor="website"
              style={{
                color: 'grey',
                fontSize: '20px',
              }}
            >Website</label>
          </div>
          <div className=" card ms-2 me-3 mt-3" style={{borderColor: 'white'}}>
            <div className={'d-flex'}>
              <label
                htmlFor="birthdate"
                className="ms-2 mt-1"
                style={{
                  color: 'grey',
                  fontSize: '20px',
                  width: 'max-content'
                }}
              >Birth Date · </label>
              <button className={'float-end btn btn-light '}
                      style={{
                        width: '60px',
                        height: '30px',
                        fontSize: '18px',
                        paddingLeft: '0',
                        paddingTop: '6px',
                        backgroundColor: 'white',
                        borderColor: 'white',
                        color: '#1DA1F2'
                      }}
                      onClick={() => {
                      }}
              >Edit
              </button>
            </div>
            <div>
              <input
                type="text"
                className="form-control"
                id="birthdate"
                value={formValues.dateOfBirth}
                onChange={e => setFormValues({...formValues, dateOfBirth: e.target.value})}
                style={{
                  borderColor: 'white',
                  height: '40px'
                }}/>
            </div>
          </div>

        </div>

        <div className={'d-flex ms-3 mb-4 me-3 mt-2'} style={{justifyContent: 'space-between'}}>
          <div className={'float-start'}>
            <span style={{fontSize: '22px'}}>Switch to professional</span>
          </div>
          <div className={'float-end'}>
            <i className="fa-solid fa-chevron-right" style={{fontSize: '18px'}}></i>
          </div>
        </div>
      </form>

    </>
  )
}
export default EditProfileComponent