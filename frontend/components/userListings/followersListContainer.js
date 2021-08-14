import { connect } from "react-redux";
import UserList from "./userList";

// users/:userId/followers

const mapStateToProps = (state, ownProps) => {
  const currentUser = ownProps.match.params.userId;

  return {
    
  }
  
}

const mapDispatchToProps = (dispatch) => {

}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);