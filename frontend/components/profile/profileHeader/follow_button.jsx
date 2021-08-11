import React from "react";

const FollowButton = (props) => {
  let classList = props.following === true ? "following" : "follow";
  const profileId = props.profileId;
  const action = props.following
    ? props.removeFollow
    : props.addFollow;

  return (
    <button
      className={`follow-button ${classList}`}
      onClick={() => action(props.profileId)}
    ></button>
  );
};

export default FollowButton;
