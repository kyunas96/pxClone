import React from "react";
import FollowButton from "./follow_button";
import { formatLocation } from "../../../util/Util";

const ProfileInfo = ({city, country, following, userName, description, socials}) => {
  const formattedLocation = formatLocation(city, country);
  const location =
    formattedLocation !== "" ? (
      <span id="profile-location">{location}</span>
    ) : null;

  const followButton =
    following === null ? null : <FollowButton following={following} />;

  return (
    <div className="profile-info">
      <span id="profile-username">{userName}</span>
      {location}
      {followButton}
      <span id="profile-description">{description}</span>
    </div>
  );
};

export default ProfileInfo;
