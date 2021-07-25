import React, { useState } from "react";
import ProfileEditUserPhoto from "./profileEditUserPhoto";
import ProfileEditBanner from "./profileEditBanner";

const ProfileEditFormHeader = (props) => {
  return (
    <div className="profile-edit-form-header">
      <ProfileEditBanner
        bannerImage={props.bannerImage}
        action={props.passImageValues}
      />
      <ProfileEditUserPhoto userPhoto={props.userPhoto} action={props.passImageValues} />
    </div>
  );
};

export default ProfileEditFormHeader;
