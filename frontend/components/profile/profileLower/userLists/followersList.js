import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as FollowAPI from "../../../../util/FollowAPI";
import UserList from "./userList";
import { receiveFollowers } from "../../../../actions/followActions";

const FollowersList = ({ userId }) => {
  let dispatch = useDispatch();
  let [initialMount, setInitialMount] = useState(true);
  let users = useSelector(state => state.entities.follows);

  useEffect(() => {
    if (initialMount) {
      FollowAPI.getFollowers(userId).then((data) => {
        dispatch(receiveFollowers(data.users));
        // setUsers(Object.values(data.users))
        console.log("followers", data.users);
        setInitialMount(false);
      });
    }
  }, [initialMount]);

  useEffect(() => {
    return () => setInitialMount(true);
  });

  return <UserList users={users} />;
};

export default FollowersList;
