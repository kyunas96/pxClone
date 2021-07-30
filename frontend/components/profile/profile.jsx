import React from "react";
import ProfileHeaderContainer from "./profileHeader/profileHeaderContainer";
import ProfileFeedContainer from "./profile_feed_container";

class Profile extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchProfile(this.props.userId)
    this.props.fetchProfilePosts(this.props.userId)
    this.props.fetchLikedPosts()
  }

  componentDidUpdate(){
    this.props.fetchProfile(this.props.userId)
    this.props.fetchProfilePosts(this.props.userId);
  }

  render(){
    return (
      <div className="user-profile">
        <ProfileHeaderContainer />
        <ProfileFeedContainer userId={this.props.userId}/>
        {/* feed component will be rendered here as well */}
      </div>
    );
  }
}

export default Profile;
