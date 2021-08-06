import React from 'react';
import PostShowLike from './postShowLikeContainer';

const PostShowInteractions = ({postId, belongsToUser}) => (
  <div className="post-show-interactions">
    {!belongsToUser && <PostShowLike postId={postId} />}
  </div>
)

export default PostShowInteractions;