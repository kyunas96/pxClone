import React from "react";
import { Link, withRouter } from "react-router-dom";


class UserInfoDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.logoutAction = this.logoutAction.bind(this);
  }

  logoutAction(e){
    e.stopPropagation();
    e.preventDefault();
    this.props.logout();
    this.props.history.push("/");
  }

  render() {
    return (
      <div className="user-info-drowpdown">
        <div onClick={this.props.toggleDropdown}>
          <Link to={`/users/${this.props.currentUser.id}/profile`}>
            Profile
          </Link>
        </div>
        <div onClick={this.props.toggleDropdown}>
          <Link to={`/users/${this.props.currentUser.id}/likedposts`}>
            Liked Posts
          </Link>
        </div>
        <div onClick={e=> this.logoutAction(e)}>Logout</div>
      </div>
    );
  }
}

export default withRouter(UserInfoDropdown);

// profile button should reroute to user show page using the current user's id
// to route to the correct profile, the user show page should check to see if the
// current user is the owner of the current profile page
