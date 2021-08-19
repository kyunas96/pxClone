import React from "react";
import UserList from "./userList";
import { useSelector } from "react-redux";
import * as FollowAPI from "../../../../actions/followActions";

const FollowersList = ({userId}) => {

  return <UserList />
}

export default FollowersList;