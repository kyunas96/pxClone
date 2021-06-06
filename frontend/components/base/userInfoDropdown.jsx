import React from 'react';
import { Link } from 'react-router-dom'

class UserInfoDropdown extends React.Component {
  constructor(props) {
    console.log(props);
    super(props)
  }



  render() {
    return (
      <div className='user-info-drowpdown'>
        <Link>Profile</Link>
        <button onClick={this.props.logout}>Logout</button>
      </div>
    )
  }
}

export default UserInfoDropdown;

// profile button should reroute to user show page using the current user's id
// to route to the correct profile, the user show page should check to see if the
// current user is the owner of the current profile page