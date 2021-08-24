import React from 'react';
import defaultProfilePicture from 'assets/images/user-circle-solid.svg';

const UserListingPicture = ({userPhoto}) => {
  const src = userPhoto ? userPhoto : defaultProfilePicture;
  return (
    <div className="user-listing-photo">
      <img src={src} /> 
    </div>
  )
}

export default UserListingPicture;