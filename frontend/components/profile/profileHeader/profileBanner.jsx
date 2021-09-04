import React from "react";

const ProfileBanner = (props) => {
  const style = { backgroundImage: `url(${props.src})` };
  return <div className="profile-banner" style={style}></div>;
};

export default ProfileBanner;
