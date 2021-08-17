import React from 'react';
import { useParams } from 'react-router';
import profileFeedContainer from '../profileFeed/profile_feed_container';

const ProfileLower = (props) => {
  let {subComponent, userId} = useParams();
  // console.log("params", params)
  let component;

  switch(subComponent){
    case "profile":
    case "feed":
      component= "feed";
      break;
    case "likedPosts":
      component = "likedPosts";
      break;
    case "followers":
      component = "followers";
      break;
    case "followings": 
      component = "followings";
      break;
    default:
        component ="profile";
        break;
      // render the profile feed on the default case
  }


  return (
    <div className="profile-lower">
        <span>{component}</span>
    </div>
  )
}

export default ProfileLower;