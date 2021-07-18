import React from "react";
import ProfileHeader from "./profile_header";
import defaultUserImage from "../../images/user-circle-solid.svg";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: this.props.userId,
        username: ""
      },
    };
  }

  componentDidMount() {
    this.props.fetchProfile(this.state.user.id);
    //after dispatching this action, is the user waiting in props???
    // this.setState({user: userInfo}, console.log(this.state))
  }

  render() {
    return (
      <div className="user-profile">
        <ProfileHeader
          bannerPicture={this.props.profile.bannerPicture}
          profilePicture={this.props.profile.profilePicture}
          userId={this.state.id}
        />
        <Link
          className="profile-picture-edit"
          to={`/users/${props.userId}/profile/userImage/edit`}
        >
          Edit
        </Link>
      </div>
    );
  }
}

export default Profile;
