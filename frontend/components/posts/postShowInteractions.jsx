import React from 'react';
import LikeButton from '../feed/likeButtonContainer';

const PostShowInteractions = ({liked, postId}) => (
  <div className="post-show-interactions">
    <LikeButton liked={liked} postId={postId}/>
  </div>
)

export default PostShowInteractions;