import React from "react";
import { connect } from "react-redux";
import { addFollow, removeFollow } from '../../actions/followActions';



const mapStateToProps = (state, ownProps) => {
  const currentUser = state.session.currentUser.id;
  const followings = state.entities.follows[currentUser]?.followings || [];
  const isFollowing = followings.includes(ownProps.posterId);
  return {
    isFollowing
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFollow: (userId) => dispatch(addFollow(userId)),
    removeFollow: (userId) => dispatch(removeFollow(userId))
  }
}


/* FIX THIS, THE ACTION DOES NOT WORK PROPERLY RIGHT NOW*/

const PostShowFollowButton = (props) => {
  const classList = props.isFollowing ? "following-text" : "follow-text";
  const action = props.isFollowing ? 
    e => {
      e.preventDefault();
      e.stopPropagation();
      props.removeFollow(props.posterId);
    } :
    e => {
      e.preventDefault();
      e.stopPropagation();
      props.addFollow(props.posterId);
    }

  return (
    <>
      <label className={classList} htmlFor="post-show-follow"></label>
      <input id="post-show-follow" type="button" onClick={action}/>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(PostShowFollowButton);
