import React from 'react';
import ProfileEditUserPhoto from './profileEditUserPhoto';
import ProfileEditBanner from './profileEditBanner';

const ProfileEditFormHeader = (props) => (
  <div className="profile-edit-form-header">
    <ProfileEditBanner bannerImage={props.bannerImage} />
    <ProfileEditUserPhoto userPhoto={props.userPhoto} />
  </div>
)

export default ProfileEditFormHeader;