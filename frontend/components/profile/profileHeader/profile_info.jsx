import React from "react";
import FollowButton from "./follow_button";
import ProfileLocation from "./profile_location";

const ProfileInfo = ({
  city,
  country,
  following,
  userId,
  userName,
  description,
  toggleFollow,
  socials,
}) => {
  console.log("profileInfo", toggleFollow);
  const followButton =
    following === null ? (null) : 
    (<FollowButton 
      following={following} 
      toggleFollow={toggleFollow}
      profileId={userId} 
      />);

  return (
    <div className="profile-info">
      <span id="profile-username">{userName}</span>
      <ProfileLocation city={city} country={country} />
      {followButton}
      <span id="profile-description">{description}</span>
    </div>
  );
};

export default ProfileInfo;
