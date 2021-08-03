import React, { useState } from "react";
import { connect } from "react-redux";
import { createFollow, deleteFollow } from "../../util/FollowAPI";

const PostShowFollowButton = (props) => {
  const [isFollowing, setFollowing] = useState(props.following);
  console.log("postShowFollowButton", props);
  const action = props.following
    ? () => deleteFollow(props.posterId).then(({ following }) =>
        setFollowing({ following })
      )
    : () => createFollow(props.posterId).then(({ following }) =>
        setFollowing({ following })
      );

  return (
    <>
      <label className={"follow"} htmlFor="post-show-follow"></label>
      <input id="post-show-follow" type="button" onClick={action}/>
    </>
  );
};

export default PostShowFollowButton;
