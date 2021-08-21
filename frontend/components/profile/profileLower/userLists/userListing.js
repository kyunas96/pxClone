import React from "react";
import FollowButton from "./followButton";
import defaultProfilePicture from "assets/images/user-circle-solid.svg";

const UserListing = ({ user, isFollowing }) => {
  /* 
    this component will be a flex-row container 
  */

  return (
    <li className="user-listing">
      <div className="user-listing-photo">
        <img src={user.userPhoto || defaultProfilePicture} />
      </div>
      <div>{user.username}</div>
      <div>{/* this last div will be for a follow button */}</div>
      <div>
        <FollowButton userId={user.id} isFollowing={isFollowing} />
      </div>
    </li>
  );
};

export default UserListing;
