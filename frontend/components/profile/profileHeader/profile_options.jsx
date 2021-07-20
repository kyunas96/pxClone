import React from "react";
import { Link } from "react-router-dom";
import editPencil from './pencil.png';

const ProfileOptions = ({isCurrentUser, userId}) => {
  console.log("options", isCurrentUser)
  if (isCurrentUser){
    return (
      <div className="profile-options">
        <Link
          className="profile-edit-button"
          to={`/users/${userId}/profile/edit`}
        >
          <img src={editPencil} />
        </Link>
      </div>
    );
  }else{
    return null;
  }

  
};

export default ProfileOptions;
