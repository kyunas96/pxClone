import React from "react";
import BannerUploadButton from "./bannerUploadButton";
import bannerImage from "../../../images/griffith.jpg";

const ProfileEditBanner = (props) => {
  return (
    <div className="profile-banner edit">
      <img src={props.bannerImage} />
      <BannerUploadButton isImage={props.bannerImage} />
    </div>
  );
};

export default ProfileEditBanner;
