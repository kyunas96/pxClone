import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";

class UserInfoDropdown extends React.Component {
  constructor(props) {
    props;
    super(props);
    this.logoutAction = this.logoutAction.bind(this);
  }

  logoutAction(e){
    e.preventDefault();
    this.props.logout()
  }

  render() {
    if(!this.props.currentUser.id){
      return <Redirect to="/" />
    }
    return (
      <div className="user-info-drowpdown">
        <div onClick={this.props.toggleDropdown}>
          <Link to={`/users/${this.props.currentUser.id}/profile`}>
            Profile
          </Link>
        </div>
        <div onClick={this.logoutAction}>Logout</div>
      </div>
    );
  }
}

export default UserInfoDropdown;

// profile button should reroute to user show page using the current user's id
// to route to the correct profile, the user show page should check to see if the
// current user is the owner of the current profile page
