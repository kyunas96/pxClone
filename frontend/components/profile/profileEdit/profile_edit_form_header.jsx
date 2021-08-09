import React, { useState } from "react";
import ProfileEditUserPhoto from "./profileEditUserPhoto";
import BannerUploadButton from "./bannerUploadButton";
import bannerImage from "../../../images/griffith.jpg";
import ProfileEditBanner from "./profileEditBanner";

const ProfileEditFormHeader = (props) => {
  const style = { backgroundImage: `url(${props.bannerImage})` };
  return (
    <div className="profile-edit-form-header" style={style}>
      <BannerUploadButton
        bannerImage={props.bannerImage}
        action={props.passValue}
      />
      {/* <ProfileEditBanner
        bannerImage={props.bannerImage}
        action={props.passValue}
      /> */}
      <ProfileEditUserPhoto
        userPhoto={props.userPhoto}
        action={props.passValue}
      />
    </div>
  );
};

export default ProfileEditFormHeader;
