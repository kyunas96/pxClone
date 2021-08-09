import React from "react";
import { Link } from "react-router-dom";
import PostShowNavTile from "./postShowNavTile";

const PostShowNavigation = ({ prevId, nextId, userId }) => {
  return (
    <div className="post-show-nav">
      <PostShowNavTile userId={userId} link={prevId} />
      <PostShowNavTile userId={userId} link={nextId} />
    </div>
  );
};

export default PostShowNavigation;
