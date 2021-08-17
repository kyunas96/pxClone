import { connect } from "react-redux";
import Profile from "./profile";
import { requestUser } from "../../actions/userActions";

const mapStateToProps = (state, ownProps) => {
  console.log("mstp", ownProps)
  return {
    subComponent: ownProps.match.params.subComponent,
    userId: parseInt(ownProps.match.params.userId),
    userErrors: state.errors.users.error,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (userId) => dispatch(requestUser(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
