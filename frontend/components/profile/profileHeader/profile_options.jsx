import React from "react";
import { Link } from "react-router-dom";

const ProfileOptions = (props) => (
  <div className="profile-options">
    <Link
      className="profile-edit-button"
      to={`/users/${props.userId}/profile/edit`}
    >
      Edit
    </Link>
  </div>
);

export default ProfileOptions;
