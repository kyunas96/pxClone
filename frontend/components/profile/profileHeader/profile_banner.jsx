import React from "react";
import bannerImage from "../../../images/griffith.jpg";

const ProfileBanner = (props) => {
  const style = { backgroundImage: `url(${props.src})` };
  return <div className="profile-banner" style={style}></div>;
};

export default ProfileBanner;
