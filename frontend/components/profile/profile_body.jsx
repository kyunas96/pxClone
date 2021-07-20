import React from 'react';
import ProfilePicture from './profileHeader/profile_picture';
import ProfileFeedContainer from './profile_feed_container';
import ProfileHeader from './profileHeader/profile_header';

class ProfileBody extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    

    return (
      <div className="profile-body">
        <ProfileHeader />
        {/* This component will be rendered with the userId of the 
        current profile  */}
        {/* <ProfileFeedContainer userId={this.props.userId} /> */}
      </div>
    )
  }
}

export default ProfileBody;