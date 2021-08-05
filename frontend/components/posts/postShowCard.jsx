import React from "react";
import { connect } from "react-redux";
import PostShowInfo from "./postShowInfo";
import PostShowInteractions from "./postShowInteractions";

const mapStateToProps = (state, ownProps) => {
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

  return {
    post: {
      title,
      id,
      description,
      createdAt,
      liked,
    },
    user: {
      poster,
      posterId,
      following,
    },
  };
};

const mapDispatchToProps = (dispatch) => {};

const PostShowCard = ({ post, user }) => {
  return (
    <div className="post-show-card">
      <PostShowInteractions postId={post.id} />
      <PostShowInfo user={user} post={post} />
    </div>
  );
};

export default connect(mapStateToProps, null)(PostShowCard);
