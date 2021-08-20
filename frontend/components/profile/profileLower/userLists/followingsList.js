import React, { useState, useEffect } from "react";
import * as FollowAPI from "../../../../util/FollowAPI";
import UserList from "./userList";

const FollowingsList = ({ userId }) => {
  let [users, setUsers] = useState([]);
  let [initialMount, setInitialMount] = useState(true);

  useEffect(() => {
    if (initialMount) {
      FollowAPI.getFollowings(userId).then(data => {
        setUsers(Object.values(data.users));
        console.log("followings", data.users);
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
