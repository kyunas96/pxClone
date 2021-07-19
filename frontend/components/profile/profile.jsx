import React from "react";
import ProfileHeader from "./profile_header";
import ProfileBody from './profile_body';
import defaultUserImage from "../../images/user-circle-solid.svg";

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProfile(this.props.userId);
    //after dispatching this action, is the user waiting in props???
    // this.setState({user: userInfo}, console.log(this.state))
  }

  render() {
    return (
      <div className="user-profile">
        <ProfileHeader
          profile={this.props.profile}
        />
      </div>
    );
  }
}

export default Profile;
