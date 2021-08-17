import React from "react";
import FollowButtonContainer from "./followButton/followButtonContainer";
import ProfileLocation from "./profile_location";

const ProfileInfo = ({renderFollow, username, city, country, description, socials}) => {
  const followButton =
    renderFollow === true ? (<FollowButtonContainer />) : (null) 

  return (
    <div className="profile-info">
      <span id="profile-username">{username}</span>
      <ProfileLocation city={city} country={country} />
      {followButton}
      
      <span id="profile-description">{description}</span>
    </div>
  );
};

export default ProfileInfo;
