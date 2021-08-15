import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PostShowFollowButton from "./postShowFollowButton";
import defaultUserImage from 'assets/images/user-circle-solid.svg';

const PostShowInfo = ({ user, post }) => {
  console.log("postshowinfo", user);
  /*
    Notes: 
      • this component will need a container to have access to the dispatch
        for like and follow functionality

    Parts:
      1. Profile Picture
      2. Title
      3. by `Username`
      4. follow button
      5. Upload date
  */

  const followButtonSpacing = post.belongsToUser ? null : " • ";
  const followButton = post.belongsToUser ? null : (
    <PostShowFollowButton posterId={user.posterId} />
  );

  const userPhoto = user.userPhoto ? user.userPhoto : defaultUserImage;

  return (
    <div className="post-show-info">
      <div className="post-show-user-picture">
        <img src={userPhoto} />
      </div>
      <div className="post-show-poster-info">
        <h2>{post.title}</h2>
        <h5>{post.description}</h5>
        <h3 id="post-show-links">
          by <Link to={`/users/${user.posterId}/profile`}>{user.poster}</Link>{followButtonSpacing}
          {followButton}
        </h3>
      </div>
    </div>
  );
};

export default PostShowInfo;
