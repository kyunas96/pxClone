import React from "react";
import { Link } from "react-router-dom";
import backArrow from "./arrowback.png";

const ProfileEditHeader = (props) => (
  <div className="profile-edit-header-container">
    <div>
      <Link className="back-button">
        <img src={backArrow} />
      </Link>
    </div>
    <div className="profile-edit-title">
      <h1>Edit Profile</h1>
    </div>
    <div>

    </div>
  </div>
);

export default ProfileEditHeader;
