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
            <img className='avatar-image' src={`../../images/${formValues.profilePicture}`}/>
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
          <div className="card ms-3 me-3">
            <label
              htmlFor="firstname"
              className="ms-2 mt-1"
              style={{
                color: 'grey',
                fontSize: '18px',
              }}
            >First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstname"
              name="firstname"
              value={formValues.firstName}
              onChange={e => setFormValues({...formValues, firstName: e.target.value})}
              style={{
                borderColor: 'white',
                height: '40px'
              }}
            />
          </div>
          <div className="card ms-3 me-3 mt-3">
            <label
              htmlFor="lastname"
              className="ms-2 mt-1"
              style={{
                color: 'grey',
                fontSize: '18px',
              }}
            >Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              name="lastname"
              value={formValues.lastName}
              style={{
                borderColor: 'white',
                height: '40px'
              }}
              onChange={e => {
                console.log("onchange")
                setFormValues({...formValues, lastName: e.target.value})
                console.log(formValues)
              }

              }
            />
          </div>
          <div className="card ms-3 me-3 mt-3">
            <label
              htmlFor="bio"
              className="ms-2 mt-1"
              style={{
                color: 'grey',
                fontSize: '18px',
              }}
            >Bio</label>
            <input
              type="text"
              className="form-control"
              id="bio"
              name="bio"
              value={formValues.bio}
              style={{
                borderColor: 'white',
                wordWrap: 'break-word',
                height: 'auto',
                minHeight: '60px',
                maxHeight: '120px',
                overflowY: 'auto',
              }}
              onChange={e => setFormValues({...formValues, bio: e.target.value})}
            />
          </div>
          <div className="card ms-3 me-3 mt-3">
            <label
              htmlFor="location"
              className="ms-2 mt-1"
              style={{
                color: 'grey',
                fontSize: '18px',
              }}
            >Location</label>
            <input
              type="text"
              className="form-control"
              id="location"
              value={formValues.location}
              onChange={e => setFormValues({...formValues, location: e.target.value})}
              style={{
                borderColor: 'white',
                height: '40px'
              }}/>
          </div>
          <div className="card ms-3 me-3 mt-3">
            <label
              htmlFor="website"
              className="ms-2 mt-1"
              style={{
                color: 'grey',
                fontSize: '18px',
              }}
            >Website</label>
            <input
              type="text"
              className="form-control"
              id="website"
              value={formValues.website}
              onChange={e => setFormValues({...formValues, website: e.target.value})}
              style={{
                borderColor: 'white',
                height: '40px'
              }}/>
          </div>
          <div className=" card ms-2 me-3 mt-3" style={{borderColor: 'white'}}>
            <div className={'d-flex'}>
              <label
                htmlFor="birthdate"
                className="ms-2 mt-1"
                style={{
                  color: 'grey',
                  fontSize: '18px',
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
                      }}>Edit
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