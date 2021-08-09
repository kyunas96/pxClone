import React from "react";
import LikedIcon from "./liked.svg";
import UnlikedWhite from "../feed/unliked-white.svg";

const LikeButton = (props) => {
  if (props.liked === null) {
    return null;
  }
  const heartIcon = props.liked ? LikedIcon : UnlikedWhite;

  const action = props.liked
    ? (e) => {
      e.preventDefault();
      e.stopPropagation();
      props.removeLike(props.postId)
    }
    : (e) => {
      e.preventDefault();
      e.stopPropagation();
      props.addLike(props.postId)
    }

  return (
    <div className="like-button white">
      <img src={heartIcon} onClick={(e) => action(e)} />
    </div>
  );
};

export default LikeButton;
