import React from 'react';
import { requestUser } from '../../util/UserAPI';

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        id: null,
        username: ""
      }
    }
  }

  componentDidMount() {
    requestUser(this.props.userId)
      .then(data => this.setState({ user: data.user }))
    //after dispatching this action, is the user waiting in props???
    // this.setState({user: userInfo}, console.log(this.state))
  }

  render() {
    return (
      <div className='user-profile'>
        <div className='user-profile-picture'>
          <img src='assets/img1'></img>
        </div>
        <h3>{this.state.user.username !== undefined ? this.state.user.username : ""}</h3>

      </div>
    )
  }
}

export default Profile;