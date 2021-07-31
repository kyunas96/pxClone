import React from 'react';
import { Link } from 'react-router-dom';

/* 
PostShowGallery:
1. split the container in two and have each half be a div that contains a Link
  component to the previous and next image respectively
2. 
*/


const PostShowGallery = ({prevId, nextId, curImageURL}) => (
  <div className="post-show-gallery">
    <div className="post-show-left">
      <Link to={`post/${prevId}`}>
        {/*image arrow left*/}
      </Link>
    </div>
    <div className="post-show-right">
      <Link to={`posts/${nextId}`}>
        {/*image arrow right*/}
      </Link>
    </div>
    <div className="post-show-image">
      <img src={curImageURL} />
    </div>
  </div>
)

export default PostShowGallery;