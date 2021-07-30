import React from "react";
import LikedIcon from "./liked.svg";
import UnlikedIcon from "./unliked.svg";

const LikeButton = (props) => {
  if(props.liked === null){
    return null;
  }
  console.log("likeButton", props);
  const heartIcon = props.liked ? LikedIcon : UnlikedIcon;

  const action = props.liked ? (
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      props.removeLike(props.postId)
    }
  ) : (
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      props.addLike(props.postId)
    }
  )

  console.log("button");
  // console.log(likeButton(0, 0, 0));

  return (
    <div className="like-button">
      <img src={heartIcon} onClick={action} />
    </div>
  );
};

export default LikeButton;
