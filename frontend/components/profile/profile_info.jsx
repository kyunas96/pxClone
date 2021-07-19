import React from "react";
import FollowButton from "./follow_button";
import formatLocation from "../../util/Util";

const ProfileInfo = (props) => {
  const formattedLocation = formatLocation(props.city, props.location)
  const location = formatLocation !== "" ? 
    (<span id="profile-location">{location}</span>) : (null)

  return (
    <div className="profile-info">
      <span id="profile-username">{props.userName}</span>
      {location}
      <FollowButton following={props.following} />
      <span id="profile-description">{props.description}</span>
    </div>
  );
};

export default ProfileInfo;
