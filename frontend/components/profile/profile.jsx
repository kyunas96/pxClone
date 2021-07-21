import React from "react";
import ProfileBody from './profile_body';
import defaultUserImage from "../../images/user-circle-solid.svg";
import ProfileHeaderContainer from "./profileHeader/profileHeaderContainer";
import ProfileBanner from "./profileHeader/profile_banner";

class Profile extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchProfile(this.props.userId)
  }

  render(){
    return (
      <div className="profile">
        <ProfileHeaderContainer />
        {/* ProfileFeed */}
        {/* feed component will be rendered here as well */}
      </div>
    )
  }
}

export default Profile;
