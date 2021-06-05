import React from 'react';

class UserInfo extends React.Component {
  constructor(props) {
    super(props)
    this.setState = { showDropdown: false }
  }

  render() {
    return (
      <div className='user-info' >
        <img src='assets/user-circle-solid.svg'></img>
        {/* <span>{props.currentUser.username}</span> */}
        <button onClick={this.props.logout}>Logout</button>
      </div>
    )
  }
}

export default UserInfo;