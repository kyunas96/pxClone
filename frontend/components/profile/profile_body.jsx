import React from 'react';
import ProfileFeedContainer from './profile_feed_container';
import ProfileHeader from './profileHeader/profile_header';
import ProfileInfo from './profileHeader/profile_info';

class ProfileBody extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    console.log("body", this.props)

    return (
      <div className="profile-body">
        <ProfileHeader />
        <ProfileInfo />
        {/* This component will be rendered with the userId of the 
        current profile  */}
        {/* <ProfileFeedContainer userId={this.props.userId} /> */}
      </div>
    )
  }
}

export default ProfileBody;