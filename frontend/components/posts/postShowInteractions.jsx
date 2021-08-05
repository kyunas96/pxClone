import React from 'react';
import PostShowLike from './postShowLikeContainer';

const PostShowInteractions = ({postId}) => (
  <div className="post-show-interactions">
    <PostShowLike postId={postId} />
  </div>
)

export default PostShowInteractions;