import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as FollowAPI from "../../../../util/FollowAPI";
import { receiveFollowings } from "../../../../actions/followActions";
import UserList from "./userList";

const FollowingsList = ({ userId }) => {
  let dispatch = useDispatch();
  let [initialMount, setInitialMount] = useState(true);
  let followings =
    useSelector((state) => state.entities.follows[userId]?.followings) || [];
  let users = useSelector((state) => Object.values(state.entities.users));
  let siftedUsers = users.filter((user) => followings.includes(user.id));

  useEffect(() => {
    if (initialMount) {
      FollowAPI.getFollowings(userId).then(data => {
        dispatch(receiveFollowings(data))
        setInitialMount(false);
      });
    }
  },[initialMount]);

  useEffect(() => {
    return () => setInitialMount(true);
  })

  if(siftedUsers.length > 0){
    return <UserList users={siftedUsers}/>;
  }else{
    return <div>This user doesn't follow anyone.</div>
  }

};

export default FollowingsList;
