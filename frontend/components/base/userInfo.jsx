import React from 'react';

const UserInfo = props => {
  // console.log(props.currentUser.username);

  return (
    <div className='user-info'>
      <span>{props.currentUser.username}</span>
      <button onClick={props.logout}>Logout</button>
    </div>
  )
}

export default UserInfo;