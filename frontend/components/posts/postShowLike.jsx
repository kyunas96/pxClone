import React from "react";
import LikedIcon from "../feed/liked.svg";
import UnlikedBlack from "../feed/unliked-black.svg";

const PostShowLike = (props) => {
  if (props.liked === null) {
    return null;
  }
  const heartIcon = props.liked ? LikedIcon : UnlikedBlack;

  const action = props.liked
    ? (e) => {
        console.log("fired", props.postId);
        e.preventDefault();
        e.stopPropagation();
        props.removeLike(props.postId);
      }
    : (e) => {
        console.log("fired", props.postId);
        e.preventDefault();
        e.stopPropagation();
        props.addLike(props.postId);
      };

  console.log("postShowLike", props);
  console.log("action", action);

  return (
    <div key={"post-show-like-button"} className="like-button black" onClick={(e) => action(e)}>
      <img src={heartIcon} />
    </div>
  );
};

export default PostShowLike;
