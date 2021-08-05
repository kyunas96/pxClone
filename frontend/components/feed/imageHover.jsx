import React from "react";
import LikeButton from "./likeButtonContainer";
import { useHistory } from "react-router";

const ImageHover = ({ title, username, postId, posterId, liked }) => {
  let history = useHistory();
  const linkToUser = `users/${posterId}/profile`;

  const handleClick = e => {
    e.preventDefault();
    e.stopPropagation();
    history.push(linkToUser);
  }

  return (
    <div className="image-hover">
      <div className="image-hover-top">{title}</div>
      <div className="image-hover-bottom">
        <div className="hover-user">
          {/* <img>
            Will store the user image
            for the user that posted the image
            </img> */}
          <div onClick={e => handleClick(e)}>{username}</div>
        </div>
        <div className="hover-interaction">
          <LikeButton liked={liked} postId={postId} />
        </div>
      </div>
    </div>
  );
};

export default ImageHover;
