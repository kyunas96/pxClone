import React from "react";
import BannerUploadButton from "./bannerUploadButton";

const ProfileEditBanner = (props) => {
  return (
    <div className="profile-banner edit">
      <img src={props.bannerImage} />
      <BannerUploadButton isImage={props.bannerImage} />
    </div>
  );
};

export default ProfileEditBanner;
