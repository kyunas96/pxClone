import React from 'react';
import ProfilePicture from './profile_picture';
import ProfileBanner from './profile_banner';

class ProfileHeader extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <ProfileBanner src={this.props.banner} />
    )
  }
}

export default ProfileHeader;