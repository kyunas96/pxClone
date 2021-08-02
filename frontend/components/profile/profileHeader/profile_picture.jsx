import React from "react";
import defaultProfilePicture from "../../../images/user-circle-solid.svg";
import myProfilePicture from "../../../images/portrait.jpg";
import ProfileOptions from "./profile_options";

const ProfilePicture = ({userPhoto}) => {
  const imageUrl = userPhoto ? userPhoto : defaultProfilePicture;

  return (
    <div className="profile-picture">
      <div className="profile-picture-buffer">
        <img src={imageUrl} />
      </div>
    </div>
  );
};

export default ProfilePicture;
