import React from "react";
import ProfileEditForm from "./profileEditForm";
import ProfileEditHeader from "./profileEditHeader";

const ProfileEdit = (props) => {
  const userId = props.match.params.userId;
  return (
    <div className="profile-edit">
      <ProfileEditHeader userId={userId} />
      <ProfileEditForm user={props.user} updateUser={props.updateUser}/>
    </div>
  );
};

export default ProfileEdit;
