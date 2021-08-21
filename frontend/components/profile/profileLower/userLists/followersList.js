import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as FollowAPI from "../../../../util/FollowAPI";
import UserList from "./userList";
import { receiveFollowers } from "../../../../actions/followActions";

const FollowersList = ({ userId }) => {
  let dispatch = useDispatch();
  let [initialMount, setInitialMount] = useState(true);
  let followers = useSelector((state) => state.entities.follows[userId]?.followers) || [];
  let users = useSelector(state => Object.values(state.entities.users));
  let siftedUsers = users.filter(user => followers.includes(user.id));

  useEffect(() => {
    if (initialMount) {
      FollowAPI.getFollowers(userId).then((data) => {
        dispatch(receiveFollowers(data));
        setInitialMount(false);
      });
    }
  }, [initialMount]);

  useEffect(() => {
    return () => setInitialMount(true);
  });

  if(siftedUsers.length > 0){
    return <UserList users={siftedUsers} />;
  }else{
    return <div>
      This user doesn't have any followers.
    </div>
  }

};
export default FollowersList;
