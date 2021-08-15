import { connect } from "react-redux";
import UserList from "./userList";
import { requestFollowers } from "../../actions/followActions";

// users/:userId/followers

const mapStateToProps = (state, ownProps) => {
  const currentUser = parseInt(ownProps.match.params.userId);
  const followedUserIDs = state.entities.follows[currentUser];
  const allUsers = Object.values(state.entities.users.users);
  const followedUsers = allUsers.filter(user => (
    followedUserIDs.includes(user.id)
  ));


  return {
    currentUser,
    users: followedUsers
  }
  
}

const mapDispatchToProps = (dispatch) => {
  return {
    action: (userId) => dispatch(requestFollowers(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);