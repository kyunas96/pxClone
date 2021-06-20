import React from "react";
import ImageHover from "./imageHover";
import { Link } from "react-router-dom";

const Image = (props) => {
  console.log(props);

  return (
    <div className="image-container">
      <Link to={`/posts/${props.post.id}`}>
        <img src={props.post.photoUrl}></img>
        <ImageHover
          post={{ title: props.post.title, username: props.post.poster }}
        >
        </ImageHover>
        <div className="shadow"></div>
      </Link>
    </div>
  );
};

export default Image;
