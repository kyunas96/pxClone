import React from 'react';
import ProfileFeedContainer from './profile_feed_container';

class ProfileBody extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    

    return (
      <div className="profile-body">
        {/* This component will be rendered with the userId of the 
        current profile  */}
        {/* <ProfileFeedContainer userId={this.props.userId} /> */}
      </div>
    )
  }
}

export default ProfileBody;