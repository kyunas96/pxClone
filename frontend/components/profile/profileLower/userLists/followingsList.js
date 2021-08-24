import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as FollowAPI from "../../../../util/FollowAPI";
import { receiveFollowings } from "../../../../actions/followActions";
import UserList from "./userList";

const FollowingsList = ({ userId }) => {
  let dispatch = useDispatch();
  let [initialMount, setInitialMount] = useState(true);

  let userIdAsInt = parseInt(userId);
  let currentUserId = useSelector((state) => state.session.currentUser.id);
  let isCurrentUser = currentUserId === userIdAsInt;
  console.log("isCurrentUSer", isCurrentUser)
  let currentUserFollowings =
    useSelector((state) => state.entities.follows[currentUserId]?.followings) || [];
  let followingIds =
    useSelector((state) => state.entities.follows[userId]?.followings) || [];
  let users = useSelector((state) => Object.values(state.entities.users));
  let siftedUsers = users.filter((user) => followingIds.includes(user.id));

  useEffect(() => {
    if (initialMount) {
      FollowAPI.getFollowings(userId).then((data) => {
        dispatch(receiveFollowings(data));
        setInitialMount(false);
      });
    }
  }, [initialMount]);

  useEffect(() => {
    return () => setInitialMount(true);
  });

  if (siftedUsers.length > 0) {
    return <UserList users={siftedUsers} followings={currentUserFollowings} />;
  } else {
    const message = isCurrentUser ? "You do" : "This user does"
    return <div>{`${message} not follow anyone.`}</div>;
  }
};

export default FollowingsList;
