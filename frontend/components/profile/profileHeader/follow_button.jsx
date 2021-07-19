import React from 'react';

const FollowButton = (props) => {


  let button;
  if (props.following === true){
    button = (
    <button className="follow-button follow">
      
    </button>
    )
  }else{
    button = (
    <button className="follow-button following">
      
    </button>
    )
  }

  return button;
}

export default FollowButton;