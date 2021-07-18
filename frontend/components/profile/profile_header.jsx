import React from "react";
import ProfilePicture from "./profile_picture";
import ProfileBanner from "./profile_banner";

class ProfileHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="profile-header">
        <ProfileBanner src={this.props.bannerPicture} />
        <ProfilePicture
          src={this.props.profilePicture}
          userId={this.props.userId}
        />
      </div>
    );
  }
}

export default ProfileHeader;
