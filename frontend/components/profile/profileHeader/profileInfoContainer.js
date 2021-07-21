import { connect } from "react-redux";
import ProfileInfo from "./profile_info";

const mapStateToProps = (state, ownProps) => {
  return {
    userName: state.ui.profile.userName,
    city: state.ui.profile.city,
    country: state.ui.profile.country,
    description: state.ui.profile.description,
  };
}

const mapDispatchToProps = dispatch => {

}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileInfo)