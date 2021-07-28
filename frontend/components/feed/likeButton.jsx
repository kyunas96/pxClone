import React from 'react';
import LikedIcon from './liked.svg';
import UnlikedIcon from './unliked.svg';

const LikeButton = (props) => {
  
  const postLike = (likedPostId) => {

  }

  const heartIcon = props.liked ? LikedIcon : UnlikedIcon;

  console.log("button")
  // console.log(likeButton(0, 0, 0));

  return (
    <div className="like-button">
      <img src={heartIcon} />
    </div>
  )
}

export default LikeButton;