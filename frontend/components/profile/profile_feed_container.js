import { connect } from "react-redux";
import ProfileFeed from "./profile_feed";

const mapStateToProps = (state, ownProps) => {
  console.log("profileFeed", ownProps)
  let isCurrentUser = state.session.currentUser.id === ownProps.userId;
  let posts = Object.values(state.entities.posts.posts);
  posts = posts.filter((post) => post.poster_id === ownProps.userId);
  console.log("profile feed map", posts);
  let likedPosts = state.entities.posts.likedPosts;

  return {
    isCurrentUser,
    userId: ownProps.userId,
    posts,
    likedPosts,
  };
};

export default connect(mapStateToProps)(ProfileFeed);
