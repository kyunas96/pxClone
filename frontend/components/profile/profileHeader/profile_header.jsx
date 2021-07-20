import React from "react";
import ProfilePicture from "./profile_picture";
import ProfileBanner from "./profile_banner";
import ProfileInfo from "./profile_info";
import ProfileOptions from "./profile_options";

const ProfileHeader = ({isCurrentUser, userId}) => (
  <div className="profile-header">
    <div></div>
    <div>
      <ProfilePicture />
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
