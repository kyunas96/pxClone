import React from "react";
import ProfileEditUserPhoto from "./profileEditUserPhoto";
import BannerUploadButton from "./bannerUploadButton";

const ProfileEditFormHeader = (props) => {
  const style = { backgroundImage: `url(${props.bannerImage})` };
  return (
    <div className="profile-edit-form-header" style={style}>
      <BannerUploadButton
        bannerImage={props.bannerImage}
        action={props.passValue}
      />
      <ProfileEditUserPhoto
        userPhoto={props.userPhoto}
        action={props.passValue}
      />
    </div>
  );
};

export default ProfileEditFormHeader;
