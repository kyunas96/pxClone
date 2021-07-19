import React from "react";
import defaultProfilePicture from "../../../images/user-circle-solid.svg";
import myProfilePicture from "../../../images/portrait.jpg";

const ProfilePicture = (props) => {
  // component will check if a profilePicture is passed in through props and if not
  // the defaultProfilePicture will be used 
  // const imageUrl = props.profilePicture ? props.profilePicture : defaultProfilePicture;

  return (
    <div className="profile-picture">
      <div className="profile-picture-buffer">
        <img src={myProfilePicture} />
      </div>
    </div>
  );
};

export default ProfilePicture;
