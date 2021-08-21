import React from 'react';
import { useDispatch } from 'react-redux';
import { addFollow, removeFollow } from '../../../../actions/followActions';

const FollowButton = ({userId, isFollowing}) => {
  if(isFollowing === null){
    return null;
  }

  const classList = isFollowing
    ? "user-list-follow following"
    : "user-list-follow follow";
  const dispatch = useDispatch();
  const action = isFollowing ? (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(removeFollow(userId))
  } : (e)  => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addFollow(userId));
  }

  return (
    <div className={classList} onClick={action}>

    </div>
  );
}

export default FollowButton;