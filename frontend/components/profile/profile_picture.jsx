import React from "react";
import { Link } from "react-router-dom";
import defaultProfilePicture from '../../images/user-circle-solid.svg';
// class should have an edit button on hover that will link to the
// profile picture edit page

const ProfilePicture = (props) => {
  const imageUrl = props.profilePicture ? props.profilePicture : defaultProfilePicture;

  return (
    <div className="profile-picture">
      <img src={imageUrl} />
      <Link className="profile-picture-edit"
      to={`/users/${props.userId}/profile/userImage/edit`}>
        Edit
      </Link>
    </div>
  );
};

export default ProfilePicture;
