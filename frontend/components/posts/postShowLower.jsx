import React from "react";
import PostShowCard from "./postShowCard";

const PostShowLower = ({ postId }) => (
  <div className="post-show-lower">
    <PostShowCard postId={postId} />
  </div>
);
export default PostShowLower;
