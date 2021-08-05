import { connect } from "react-redux";
import ProfileInfo from "./profile_info";

const mapStateToProps = (state, ownProps) => {
  const isCurrentUser = state.ui.currentProfileId === state.session.currentUser.id;
  const renderFollow = (state.session.loggedIn && !isCurrentUser)
  const user = state.entities.users.users[ownProps.userId]
  let username = null;
  let city = null;
  let country = null;
  let description = null;
  
  if(user !== undefined){
    username = user.username;
    city = user.city;
    country = user.country;
    description = user.description;
  }
  return {
    renderFollow,
    username,
    city,
    country,
    description
  };
}

const mapDispatchToProps = dispatch => {

}

export default connect(mapStateToProps, null)(ProfileInfo)