import React from "react";
import ProfilePicture from "./profile_picture";
import ProfileBanner from "./profile_banner";
import ProfileInfo from "./profile_info";
import ProfileOptions from "./profile_options";

class ProfileHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("header", this.props);
    return (
      <div className="profile-header">
        <ProfileBanner src={this.props.bannerImage} />
        {/* <ProfilePicture
          src={this.props.profile.profilePicture}
        /> */}
        <ProfileOptions
          isCurrentUser={this.props.isCurrentUser}
          userId={this.props.userId}
        />
        {/* <ProfileInfo profileInfo={} /> */}
      </div>
    );
  }
}

export default ProfileHeader;
