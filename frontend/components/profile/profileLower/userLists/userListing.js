import React from "react";
import defaultProfilePicture from 'assets/images/user-circle-solid.svg';

const UserListing = ({ user }) => (
  /* 
    this component will be a flex-row container 
  */
  <li className="user-listing">
    <div className="user-listing-photo">
      <img src={user.userPhoto || defaultProfilePicture} />
    </div>
    <div>
      {user.username}
    </div>
    <div>
      {/* this last div will be for a follow button */}
    </div>
  </li>
);

export default UserListing;
