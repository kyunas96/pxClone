import { connect } from "react-redux";
import Profile from "./profile";
import { getProfile } from "../../actions/profileActions";

const mapStateToProps = (state, ownProps) => ({
  userId: ownProps.match.params.userId
})

const mapDispatchToProps = (dispatch) => ({
  fetchProfile: (userId) => dispatch(getProfile(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);