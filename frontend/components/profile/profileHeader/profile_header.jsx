import React from "react";
import ProfilePicture from "./profile_picture";
import ProfileBanner from "./profile_banner";
import ProfileInfoContainer from "./profileInfoContainer";
import ProfileOptions from "./profile_options";

const ProfileHeader = ({ username, bannerImage, userPhoto, isCurrentUser, id }) => {
  return (
    <div className="profile-header">
      <ProfileBanner src={bannerImage} />
      <div className="profile-header-partition">
        <div></div>
        <div className="profile-picture-info">
          <ProfilePicture userPhoto={userPhoto} />
          <ProfileInfoContainer userId={id} />
        </div>
        <div>
          <ProfileOptions isCurrentUser={isCurrentUser} userId={id} />
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
