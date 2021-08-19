import React from "react";

const UserList = ({ users }) => {
  // this function will take in the users as objects and render them within
  // a list
  return (
    <ul>
      {users.map(user => (
        <li>{user.username}</li>
      ))}
    </ul>
  );
};

export default UserList;
