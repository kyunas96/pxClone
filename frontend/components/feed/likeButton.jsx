import React from "react";
import LikedIcon from "./liked.svg";
import UnlikedIcon from "./unliked.svg";

const LikeButton = (props) => {
  console.log("likebutton", props)
  if (props.liked === null) {
    return null;
  }
  const heartIcon = props.liked ? LikedIcon : UnlikedIcon;

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
    <div className="like-button">
      <img src={heartIcon} onClick={(e) => action(e)} />
    </div>
  );
};

export default LikeButton;
