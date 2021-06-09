import React from 'react';
import { Link } from 'react-router-dom';
import UserInfoDropdown from './userInfoDropdown';

class UserInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showDropdown: false }
  }

  toggleDropdown(e){
    e.preventDefault();
    this.setState(prevState => ({
       showDropdown: !prevState.showDropdown 
      })
    )
  }

  render() {
    return (
      <div className='user-info' >
        <button className='user-info-toggle' onClick={e => this.toggleDropdown(e)}>
        </button>
        {this.state.showDropdown ?
          <UserInfoDropdown
            currentUser={this.props.currentUser}
            logout={this.props.logout}
          /> : (null)}
          <div className='user-info-upload'>
            {/* add icon here for upload */}
            {/* <img></img> */}
            <Link to='/post/create' className='upload-button'>Upload</Link>
          </div>
      </div>
    )
  }
}

export default UserInfo;