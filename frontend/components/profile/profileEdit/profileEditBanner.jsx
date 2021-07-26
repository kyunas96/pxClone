import React from "react";
import bannerImage from "../../../images/griffith.jpg";
import cameraIcon from './camera.svg';

const ProfileEditBanner = (props) => {
  console.log("profileEditbanner", props)
  const buttonActionTitle = props.bannerImage === undefined ? "Upload a " : "Change";
  return (
    <div className="profile-banner edit">
      <img src={bannerImage} />
      <label htmlFor="bannerImage">
        <div className="camera-icon-container">
        <img src={cameraIcon} />
        {`${buttonActionTitle} cover photo`}
        </div>
      </label>
      <input id="bannerImage" type="file" onChange={(e) => props.action(e)} />
    </div>
  );
};

export default ProfileEditBanner;
