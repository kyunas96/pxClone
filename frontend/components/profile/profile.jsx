import React from 'react';
import ProfileHeader from './profile_header';
import defaultUserImage from '../../images/user-circle-solid.svg';

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        id: this.props.userId,
        username: ""
      }
    }
  }

  componentDidMount() {
    this.props.fetchProfile(this.state.user.id);
    //after dispatching this action, is the user waiting in props???
    // this.setState({user: userInfo}, console.log(this.state))
  }

  render() {
    return (
      <div className='user-profile'>
        <div className='user-profile-picture'>
          <img src={defaultUserImage} />
        </div>
        <h3>{this.state.user.username !== undefined ? this.state.user.username : ""}</h3>
        {/* <button onClick={this.props.action()}></button> */}
      </div>
    )
  }
}

export default Profile;