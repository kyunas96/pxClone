import React from "react";
import defaultProfilePicture from 'assets/images/user-circle-solid.svg';

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
