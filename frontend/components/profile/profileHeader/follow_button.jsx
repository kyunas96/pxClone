import React from 'react';

const FollowButton = ({following, toggleFollow, profileId}) => {
  let classList = following === true ? "following" : "follow";
  return (
    <button
      className={`follow-button ${classList}`}
      onClick={() => toggleFollow(following, profileId)}
    ></button>
  )

  return button;
}

export default FollowButton;