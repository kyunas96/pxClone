import { connect } from "react-redux";
import UserList from './userList';
import { }

// users/:userId/followings

const mapStateToProps = (state, ownProps) => {
  const currentUser = ownProps.match.params.userId;
  const 

  return {

  }
}

const mapDispatchToProps = (dispatch) => {

}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);