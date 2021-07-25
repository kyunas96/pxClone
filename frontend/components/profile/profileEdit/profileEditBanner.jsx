import React from "react";
import bannerImage from "../../../images/griffith.jpg";
import cameraIcon from './camera.png';

const ProfileEditBanner = (props) => {
  const buttonActionTitle = props.bannerImage === null ? "Upload a " : "Change";
  return (
    <div className="profile-banner edit">
      <img src={bannerImage} />
      <label htmlFor="bannerImage">
        <div>
        <img src={cameraIcon} />
        {`${buttonActionTitle} cover photo`}
        </div>
      </label>
      <input id="bannerImage" type="file" onChange={(e) => props.action(e)} />
    </div>
  );
};

export default ProfileEditBanner;
