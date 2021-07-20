import React from "react";
import ProfileBody from './profile_body';
import defaultUserImage from "../../images/user-circle-solid.svg";
import ProfileHeader from "./profileHeader/profile_header";
import ProfileBanner from "./profileHeader/profile_banner";

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
        <ProfileBanner bannerImage={this.props.bannerImage} />
        <ProfileBody 
          profile={this.props.profile.userInfo}
        />
        {/* <ProfileHeader
          profile={this.props.profile}
        /> */}
      </div>
    );
  }
}

export default Profile;
