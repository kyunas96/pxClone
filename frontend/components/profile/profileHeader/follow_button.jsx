import React from 'react';
// import { capitalize } from '../../../util/Util';

const FollowButton = ({following, toggleFollow, profileId}) => {
  console.log("follow", following)
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