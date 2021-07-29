import React from "react";
import ImageHover from "./imageHover";
import { Link } from "react-router-dom";

const Image = ({ post }) => {
  console.log("image", post);
  return (
    <div className="image-container">
      <Link to={`/posts/${post.id}`}>
        <img src={post.photoUrl}></img>
        <ImageHover
          title={post.title}
          username={post.poster}
          postId={post.id}
          liked={post.liked}
        ></ImageHover>
        <div className="shadow"></div>
      </Link>
    </div>
  );
};

export default Image;
