import React from "react";
import LikedIcon from "assets/images/liked.svg";
import UnlikedBlack from "assets/images/unliked-black.svg";

const PostShowLike = (props) => {
  if (props.liked === null) {
    return null;
  }
  const heartIcon = props.liked ? LikedIcon : UnlikedBlack;

  const action = props.liked
    ? (e) => {
        e.preventDefault();
        e.stopPropagation();
        props.removeLike(props.postId);
      }
    : (e) => {
        e.preventDefault();
        e.stopPropagation();
        props.addLike(props.postId);
      };

  return (
    <div key={"post-show-like-button"} className="like-button black" onClick={(e) => action(e)}>
      <img src={heartIcon} />
    </div>
  );
};

export default PostShowLike;
