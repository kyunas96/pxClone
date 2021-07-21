import React from "react";
import ProfilePicture from "./profile_picture";
import ProfileBanner from "./profile_banner";
import ProfileInfo from "./profile_info";
import ProfileOptions from "./profile_options";

const ProfileHeader = ({bannerImage, userPhoto, isCurrentUser, userId}) => (
  <div className="profile-header">
    <div className="profile-banner">
      <ProfileBanner 
        src={bannerImage}
      />
    </div>
    <div></div>
    <div className="profile-picture-info">
      <ProfilePicture 
        src={userPhoto}
      />
      {/* <ProfileInfo /> */}
    </div>
    <div>
      <ProfileOptions
        isCurrentUser={isCurrentUser}
        userId={userId}
      />
    </div>
  </div>
);

export default ProfileHeader;
