import React from "react";
import { Link } from "react-router-dom";
import PostShowNavTile from "./postShowNavTile";

const PostShowNavigation = ({ prevId, nextId }) => {
  console.log("postShowNav", prevId, nextId);

  return (
    <div className="post-show-nav">
    <PostShowNavTile link={prevId} />
    <PostShowNavTile link={nextId} />
    </div>
  );
};

export default PostShowNavigation;
