import React from "react";
import cameraIcon from 'assets/images/camera.png';
// import cameraIcon from './camera.png';


const ProfileEditUserPhoto = (props) => (
  <div className="profile-picture-edit">
    <div className="profile-picture-buffer">
      <img src={props.userPhoto} />
    </div>
    <div className="user-photo-button">
      <label htmlFor="userPhoto">
        <img src={cameraIcon} />
      </label>
      <input id="userPhoto" type="file" onChange={(e) => props.action(e)} />
    </div>
  </div>
);

export default ProfileEditUserPhoto;
