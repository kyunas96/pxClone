import React from "react";
import defaultProfilePicture from "../../images/user-circle-solid.svg";
import myProfilePicture from "../../images/portrait.jpg";
// class should have an edit button on hover that will link to the
// profile picture edit page

const ProfilePicture = (props) => {
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
