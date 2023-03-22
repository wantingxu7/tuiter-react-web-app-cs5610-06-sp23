import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateProfile } from './profileSlice';

export const EditProfile = () => {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.profile);

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
  }, [profile]);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateProfile(formValues));
    // Redirect the user back to the profile page
    window.location.href = '/tuiter/profile';
  };

  return (
    <div className="container">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            value={formValues.firstName}
            onChange={e => setFormValues({...formValues, firstName: e.target.value})}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            value={formValues.lastName}
            onChange={e => setFormValues({...formValues, lastName: e.target.value})}
          />
        </div>
        <div className="form-group">
          <label htmlFor="handle">Handle</label>
          <input type="text" className="form-control" id="handle" name="handle" value={formValues.handle} onChange={e => setFormValues({...formValues, handle: e.target.value})} />
        </div>
        <div className="form-group">
          <label htmlFor="profilePicture">Profile Picture</label>
          <input type="text" className="form-control" id="profilePicture" name="profilePicture" value={formValues.profilePicture} onChange={e => setFormValues({...formValues, profilePicture: e.target.value})} />
        </div>
        <div className="form-group">
          <label htmlFor="bannerPicture">Banner Picture</label>
          <input type="text" className="form-control" id="bannerPicture" name="bannerPicture" value={formValues.bannerPicture} onChange={e => setFormValues({...formValues, bannerPicture: e.target.value})} />
        </div>
        <div className="form-group">
          <label htmlFor="bio">Bio</label>
          <input type="text" className="form-control" id="bio" name="bio" value={formValues.bio} onChange={e => setFormValues({...formValues, bio: e.target.value})} />
        </div>
    );
  };



