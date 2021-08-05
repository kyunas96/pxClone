import React from "react";
import { connect } from "react-redux";
import { addFollow, removeFollow } from '../../actions/followActions';



const mapStateToProps = (state, ownProps) => {
  const following = state.entities.users.followedUsers.includes(ownProps.posterId)
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

const PostShowFollowButton = (props) => {
  console.log("postShowFollowButton", props);
  const action = props.following
    ? () => deleteFollow(props.posterId).then(({ following }) =>
        setFollowing({ following })
      )
    : () => createFollow(props.posterId).then(({ following }) =>
        setFollowing({ following })
      );

  return (
    <>
      <label className={"follow"} htmlFor="post-show-follow"></label>
      <input id="post-show-follow" type="button" onClick={action}/>
    </>
  );
};

export default PostShowFollowButton;
