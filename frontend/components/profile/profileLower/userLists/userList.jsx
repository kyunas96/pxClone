import React from "react";
import { useSelector } from "react-redux";
import UserListing from "./userListing";

const UserList = ({ users, followings }) => {
  // this function will take in the users as objects and render them within
  // a list
  const curUserId = useSelector(state => state.session.currentUser.id);


  return (
    <div className="user-list">
      <ul>
        {users.map((user, i) => {
          const isCurrentUser = user.id === curUserId;
          const isFollowing = isCurrentUser ? null : followings.includes(user.id);
          return <UserListing user={user} key={i} isFollowing={isFollowing}/>
        })}
      </ul>
    </div>
  );
};

export default UserList;
