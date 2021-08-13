import React from "react";
import { connect } from "react-redux";
import PostShowInfo from "./postShowInfo";
import PostShowInteractions from "./postShowInteractions";

const mapStateToProps = (state, ownProps) => {
  const postId = parseInt(ownProps.postId);
  const currentUserId = state.session.currentUser.id;
  const currentUserPosts = state.entities.users.users[currentUserId].userPosts;
  const belongsToUser = currentUserPosts.includes(postId);
  
  const {
    title,
    id,
    description,
    poster,
    posterId,
    liked,
    following,
    createdAt,
  } = state.entities.posts.posts[ownProps.postId];
  
  const userPhoto = state.entities.users.users[posterId]?.userPhoto;
  
  return {
    post: {
      title,
      id,
      description,
      createdAt,
      liked,
      belongsToUser
    },
    user: {
      poster,
      posterId,
      following,
      userPhoto
    },
  };
};

const mapDispatchToProps = (dispatch) => {};

const PostShowCard = ({ post, user }) => {
  return (
    <div className="post-show-card">
      <PostShowInteractions belongsToUser={post.belongsToUser} postId={post.id} />
      <PostShowInfo user={user} post={post} />
    </div>
  );
};

export default connect(mapStateToProps, null)(PostShowCard);
