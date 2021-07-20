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
        <div></div>
        <div>
          <ProfilePicture />
        </div>
        <div>
          <ProfileOptions
            isCurrentUser={this.props.isCurrentUser}
            userId={this.props.userId}
          />
        </div>
      </div>
    );
  }
}

export default ProfileHeader;