import React from "react";
import ProfilePicture from "../profileHeader/profile_picture";

class ProfileEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.profile;
  }

  componentDidMount() {
    this.props.getUserProfile(this.props.userID);
  }

  render() {
    return (
      <div className="profile-edit">
        <form className="profile-edit-form">
          <ProfilePicture />
          <div className="profile-edit-name">
            <div className="profile-edit-text">
              <label for="fname">First name</label>
              <input id="fname" type="text"></input>
            </div>
            <div className="profile-edit-text">
              <label for="lname">Last name</label>
              <input id="lname" type="text"></input>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default ProfileEdit;
