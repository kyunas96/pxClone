import React from "react";
import { Link } from "react-router-dom";
import editPencil from 'assets/images/pencil.png';

const ProfileOptions = ({isCurrentUser, userId}) => {
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
