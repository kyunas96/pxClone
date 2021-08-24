import React from "react";
import { Link } from "react-router-dom";
import defaultProfilePicture from "assets/images/user-circle-solid.svg";

const UserListingPicture = ({ user }) => {
  const src = user.userPhoto ? user.userPhoto : defaultProfilePicture;
  return (
    <div className="user-listing-photo">
      <Link to={`/users/${user.id}/profile`}>
        <img src={src} />
      </Link>
    </div>
  );
};

export default UserListingPicture;
