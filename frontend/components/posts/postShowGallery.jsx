import React from 'react';
import PostShowNavigation from './postShowNavigation';

/* 
PostShowGallery:
1. split the container in two and have each half be a div that contains a Link
  component to the previous and next image respectively
2. 
*/


const PostShowGallery = ({prevId, nextId, curImageURL, userId}) => (
  <div className="post-show-gallery">
  <PostShowNavigation 
    userId={userId}
    prevId={prevId}
    nextId={nextId}
  />
    <div className="post-show-image">
      <img src={curImageURL} />
    </div>
  </div>
)

export default PostShowGallery;