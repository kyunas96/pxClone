import React from "react";
import { connect } from "react-redux";
import PostShowFollowButton from "./postShowFollowButton";
import { Link } from "react-router-dom";

const PostShowInfo = ({ user, post }) => {
  console.log("info", user);
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

  return (
    <div className="post-show-info">
      {/* {profile picture} */}
      <div className="post-show-poster-picture"></div>

      <div className="post-show-poster-info">
        <h3>{post.title}</h3>
        <h3 id="post-show-links">
          by <Link to={`/users/${user.posterId}/profile`}>{user.poster}</Link>{followButtonSpacing}
          {followButton}
        </h3>
      </div>
    </div>
  );
};

export default PostShowInfo;
