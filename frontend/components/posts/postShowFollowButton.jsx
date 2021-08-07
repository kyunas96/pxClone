import React from "react";
import { connect } from "react-redux";
import { addFollow, removeFollow } from '../../actions/followActions';



const mapStateToProps = (state, ownProps) => {
  const following = state.entities.users.followedUsers.includes(ownProps.posterId)
  console.log("following", following)
  return {
    following
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
  const classList = props.following ? "following" : "follow";
  const action = props.following ? 
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
