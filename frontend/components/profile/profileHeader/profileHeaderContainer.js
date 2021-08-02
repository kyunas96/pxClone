import { connect } from "react-redux";
import ProfileHeader from "./profile_header";

const mapStateToProps = (state, ownProps) => {
  console.log("profileheader", state)
  return {
    bannerImage: state.ui.profile.bannerImage,
    userPhoto: state.ui.profile.userPhoto,
    isCurrentUser: state.ui.profile.isCurrentUser,
    userId: state.ui.profile.userId
  }
}

export default connect(mapStateToProps)(ProfileHeader)