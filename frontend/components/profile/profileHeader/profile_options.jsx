import React from "react";
import { Link } from "react-router-dom";
import editPencil from './pencil.png';

const ProfileOptions = (props) => (
  <div className="profile-options">
    <Link
      className="profile-edit-button"
      to={`/users/${props.userId}/profile/edit`}
    >
      <img src={editPencil} />
    </Link>
  </div>
);

export default ProfileOptions;
