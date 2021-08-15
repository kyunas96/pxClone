import { connect } from "react-redux";
import UserList from './userList';
import { requestFollowings } from "../../actions/followActions";


// users/:userId/followings

const mapStateToProps = (state, ownProps) => {
  const currentUser = ownProps.match.params.userId;

  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    action: (userId) => dispatch(requestFollowings(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);