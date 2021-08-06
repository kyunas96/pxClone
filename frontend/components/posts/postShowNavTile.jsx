import React from "react";
import { Link } from "react-router-dom";

const PostShowNavTile = ({ link, userId }) => {
  let style = (link === undefined) ? { cursor: 'default' } : null;
  let checkedLink = null;

  if(link !== undefined && userId !== undefined){
    checkedLink = `/users/${userId}/posts/${link}`;
  }else if(link !== undefined){
    checkedLink = `/posts/${link}`;
  }


  // let checkedLink = (link === undefined) ? null : `/posts/${link}`;

  return (
    <div className="post-show-nav-tile" style={style}>
      <Link className="post-show-nav-button" style={style} to={checkedLink}>
        {/*image arrow left*/}
      </Link>
    </div>
  );
};

export default PostShowNavTile;
