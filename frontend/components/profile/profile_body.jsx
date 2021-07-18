import React from 'react';
import ProfileOptions from './profile_options';

class ProfileBody extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    

    return (
      <div className="profile-body">
        <ProfileOptions />
      </div>
    )
  }
}

export default ProfileBody;