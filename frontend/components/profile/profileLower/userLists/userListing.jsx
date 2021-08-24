import React from "react";
import FollowButton from "./followButton";
import UserListingPicture from "../userListingPicture";

const UserListing = ({ user, isFollowing }) => {
  /* 
    this component will be a flex-row container 
  */

  return (
    <li className="user-listing">
      <div>
        <UserListingPicture user={user} />
      </div>
      <div className="user-listing-username">
        {user.username}
      </div>
      <div>
        <FollowButton userId={user.id} isFollowing={isFollowing} />
      </div>
    </li>
  );
};

export default UserListing;
