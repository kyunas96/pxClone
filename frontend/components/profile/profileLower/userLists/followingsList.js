import React from "react";
import UserList from "./userList";
import { useSelector } from "react-redux";
import * as FollowAPI from "../../../../util/FollowAPI";
import { useState, useEffect } from "react";

const FollowingsList = ({ userId }) => {
  let [users, setUsers] = useState([]);
  let [initialMount, setInitialMount] = useState(true);

  useEffect(() => {
    if (initialMount) {
      FollowAPI.getFollowings(userId).then((data) => {
        setUsers(Object.values(data.users));
        console.log("users", data.users);
        setInitialMount(false);
      });
    }
  },[initialMount]);

  useEffect(() => {
    return () => setInitialMount(true);
  })

  return <UserList users={users}/>;
};

export default FollowingsList;
