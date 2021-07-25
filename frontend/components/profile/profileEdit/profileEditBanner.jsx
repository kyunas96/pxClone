import React from 'react';
import bannerImage from '../../../images/griffith.jpg';

const ProfileEditBanner = (props) => (
  <div className="profile-banner">
    <img src={bannerImage} />
    <div className="banner-image-button">
      <input id="bannerImage" type="file" onChange={(e) => props.action(e)} />
    </div>
  </div>
);

export default ProfileEditBanner;