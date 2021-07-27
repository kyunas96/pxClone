import React, { useState } from "react";
import ProfileEditUserPhoto from "./profileEditUserPhoto";
import bannerImage from '../../../images/griffith.jpg';
import ProfileEditBanner from "./profileEditBanner";

const ProfileEditFormHeader = (props) => {
  console.log("profileEditFormHeader", props)
  const style = { backgroundImage: `url(${bannerImage})`}
  return (
    <div className="profile-edit-form-header" style={style}>
      {/* <ProfileEditBanner
        bannerImage={props.bannerImage}
        action={props.passValue}
      /> */}
      <ProfileEditUserPhoto userPhoto={props.userPhoto} action={props.passValue} />
    </div>
  );
};

export default ProfileEditFormHeader;
