import React from "react";
import ProfileFeedContainer from "./profile_feed_container";
import ProfileHeader from "./profileHeader/profile_header";
import ProfileInfo from "./profileHeader/profile_info";

const ProfileBody = (props) => {
  console.log('profileBody', props)
  if (props.profile !== undefined){
    var {city, country, following, userName, description, socials } = props.profile
  }

  return (
    <div className="profile-body">
      <ProfileHeader />
      <ProfileInfo 
        city={city}
        country={country}
        following={following}
        username={userName}
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
