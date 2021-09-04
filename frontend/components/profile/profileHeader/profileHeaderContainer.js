import { connect } from "react-redux";
import ProfileHeader from "./profileHeader";

const mapStateToProps = (state, ownProps) => {
  const user = state.entities.users.users[ownProps.userId];
  let bannerImage = null;
  let userPhoto = null;
  if (user !== undefined) {
    bannerImage = user.bannerImage;
    userPhoto = user.userPhoto;
  }
  const isCurrentUser = ownProps.userId === state.session.currentUser.id;
  return {
    isCurrentUser,
    bannerImage,
    userPhoto,
    id: ownProps.userId,
  };
};

export default connect(mapStateToProps)(ProfileHeader);
