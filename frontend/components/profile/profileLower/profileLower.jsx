import React from "react";
import {
  Link,
  Switch,
  Route,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import profileFeedContainer from "../profileFeed/profile_feed_container";
import ProfileNavigation from "../profileNavigation";


// THIS COMPONENT WILL DETERMINE WHAT IS TO BE RENDERED BASED ON THE CURRENT 
// ROUTE

const ProfileLower = (props) => {
  let { subComponent, userId } = useParams();
  const rootUserPath = `/users/${userId}`;

  return (
    // <div className="profile-lower">
    //     <span>{component}</span>
    // </div>
    <div className="profile-lower">
      <ProfileNavigation />

      <Switch>
        <Route path={`${rootUserPath}/posts`}>
        {/* 
          THIS ROUTE WILL RENDER THE USER'S FEED
         */}
          <h3>Posts</h3>
        </Route>
        <Route path={`${rootUserPath}/likedPosts`}>
        {/* 
          THIS ROUTE WILL RENDER THE USER'S LIKED POSTS
         */}
          <h3>LikedPosts</h3>
        </Route>
        <Route path={`${rootUserPath}/followers`}>
        {/* 
          THIS ROUTE WILL RENDER THE USER'S FOLLOWERS  
        */}
          <h3>Followers</h3>
        </Route>
        <Route path={`${rootUserPath}/followings`}>
        {/* 
          THIS ROUTE WILL RENDER THE USER'S FOLLOWINGS
         */}
          <h3>Followings</h3>
        </Route>
      </Switch>
    </div>
  );
};

export default ProfileLower;
