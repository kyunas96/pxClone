import React from "react";
import ProfileEditFormContainer from "./profileEditContainer";
import ProfileEditHeader from "./profile_edit_header";

const ProfileEdit = (props) => {
  const userId = props.match.params.userId
  return (
    <div className="profile-edit">
      <ProfileEditHeader userId={userId}/>
      <ProfileEditFormContainer />
    </div>
  );
};

export default ProfileEdit;
