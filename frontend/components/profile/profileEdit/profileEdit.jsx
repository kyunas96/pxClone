import React from "react";
import ProfileEditForm from "./profileEditForm";
import ProfileEditHeader from "./profile_edit_header";

const ProfileEdit = (props) => {
  const userId = props.match.params.userId
  return (
    <div className="profile-edit">
      <ProfileEditHeader userId={userId}/>
      <ProfileEditForm userId={userId}/>
    </div>
  );
};

export default ProfileEdit;
