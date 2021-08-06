import React from "react";
import ImageHover from "./imageHover";
import { useHistory } from "react-router";

const Image = ({ post }) => {
  let history = useHistory();
  console.log("image", post)
  let postLink = post.isProfile ? `/users/${post.posterId}/posts/${post.id}` :`/posts/${post.id}`

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    history.push(postLink);
  };

  return (
    <div className="image-container" onClick={(e) => handleClick(e)}>
      <img src={post.photoUrl}></img>
      <ImageHover
        title={post.title}
        username={post.poster}
        posterId={post.posterId}
        postId={post.id}
        liked={post.liked}
      ></ImageHover>
      <div className="shadow"></div>
    </div>
  );
};

export default Image;
