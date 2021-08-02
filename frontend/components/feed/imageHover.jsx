import React from "react";
import LikeButton from "./likeButtonContainer";
import { Link } from "react-router-dom";

const ImageHover = ({ title, username, postId, posterId, liked }) => {

  const linkToUser = `users/${posterId}/profile`;

  return (
    <div className="image-hover">
      <div className="image-hover-top">{title}</div>
      <div className="image-hover-bottom">
        <div className="hover-user">
          <Link to={`/users/${posterId}/profile`}>{username}</Link>
          {/* <img>
            Will store the user image
            for the user that posted the image
            </img> */}
          {/* <Link to={`users/${props.posterId}/profile`}>
            {props.post.username}
          </Link> */}
        </div>
        <div className="hover-interaction">
          <LikeButton liked={liked} postId={postId} />
        </div>
      </div>
    </div>
  );
};

export default ImageHover;
