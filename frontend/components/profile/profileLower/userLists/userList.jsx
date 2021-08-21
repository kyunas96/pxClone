import React from "react";
import UserListing from "./userListing";

const UserList = ({ users }) => {
  // this function will take in the users as objects and render them within
  // a list

  return (
    <div className="user-list">
      <ul>
        {users.map((user, i) => (
          <UserListing user={user} key={i}/>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
