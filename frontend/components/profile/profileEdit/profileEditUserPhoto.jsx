import React from "react";

const ProfileEditUserPhoto = (props) => (
  <div className="profile-picture">
    <div className="profile-picture-buffer">
      <img src={props.userPhoto} />
    </div>
  </div>
);

export default ProfileEditUserPhoto;
