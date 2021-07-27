import React from "react";
import ProfilePicture from "./profile_picture";
import ProfileBanner from "./profile_banner";
import ProfileInfoContainer from "./profileInfoContainer";
import ProfileOptions from "./profile_options";

const ProfileHeader = ({ bannerImage, userPhoto, isCurrentUser, userId }) => {
  return (
    <div className="profile-header">
      {/* <div className="profile-banner-container"> */}
      <ProfileBanner src={bannerImage} />
    {/* </div> */}
      <div className="profile-header-partition">
        <div></div>
        <div className="profile-picture-info">
          <ProfilePicture src={userPhoto} />
          <ProfileInfoContainer />
        </div>
        <div>
          <ProfileOptions isCurrentUser={isCurrentUser} userId={userId} />
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
