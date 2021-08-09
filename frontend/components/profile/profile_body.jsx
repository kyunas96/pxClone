import React from "react";
import ProfileFeedContainer from "./profile_feed_container";
import ProfileHeader from "./profileHeader/profile_header";
import ProfileInfo from "./profileHeader/profile_info";

const ProfileBody = (props) => {
  if (props.profile !== undefined) {
    var {
      city,
      country,
      following,
      userName,
      description,
      socials,
      isCurrentUser,
      userId,
      toggleFollow,
    } = props.profile;
  }

  return (
    <div className="profile-body">
      <ProfileHeader isCurrentUser={isCurrentUser} userId={userId} />
      <ProfileInfo
        city={city}
        country={country}
        following={following}
        toggleFollow={toggleFollow}
        userId={userId}
        userName={userName}
        description={description}
        socials={socials}
      />
      {/* This component will be rendered with the userId of the 
        current profile  */}
      {/* <ProfileFeedContainer userId={this.props.userId} /> */}
    </div>
  );
};

export default ProfileBody;
