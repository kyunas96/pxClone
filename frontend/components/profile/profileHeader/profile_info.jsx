import React from "react";
import FollowButton from "./followButton";
import ProfileLocation from "./profileLocation";

const ProfileInfo = ({renderFollow, username, city, country, description, socials}) => {
  const followButton =
    renderFollow === true ? (<FollowButton />) : (null) 

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
