import React from "react";
import ProfileEditForm from "./profileEditForm";
import ProfileEditHeader from "./profile_edit_header";

const ProfileEdit = (props) => {
  const userId = props.match.params.userId
  console.log("profileEdit", props)
  return (
    <div className="profile-edit">
      <ProfileEditHeader userId={userId}/>
      <ProfileEditForm user={props.user}/>
    </div>
  );
};

export default ProfileEdit;
