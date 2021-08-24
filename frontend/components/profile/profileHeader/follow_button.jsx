import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFollow, removeFollow } from "../../../actions/followActions";

const FollowButton = (props) => {
  const curUserId = useSelector((state) => state.session.currentUser.id);
  const followings =
    useSelector((state) => state.entities.follows[curUserId]?.followings) || [];
  const curProfileId = useSelector((state) => state.ui.currentProfileId);
  const isFollowing = followings.includes(curProfileId);
  const dispatch = useDispatch();

  let classList = isFollowing === true ? "following" : "follow";
  const action = isFollowing
    ? () => dispatch(removeFollow(curProfileId))
    : () => dispatch(addFollow(curProfileId));

  return (
    <button
      className={`follow-button ${classList}`}
      onClick={() => action()}
    ></button>
  );
};

export default FollowButton;
