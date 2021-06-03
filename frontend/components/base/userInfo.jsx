import React from 'react';

const UserInfo = props => {
  console.log(props);
  return (
    <div>
      <span>{props.user.userName}</span>
      <button onClick={props.logout}>Logout</button>
    </div>
  )
}



export default UserInfo;