import React from "react";
import {
  Link,
  Switch,
  Route,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import ProfileNavigation from "../profileNavigation";
import FollowingsList from "./userLists/followingsList";
import FollowersList from "./userLists/followersList";
import ProfileFeed from "../profileFeed/profile_feed";


// THIS COMPONENT WILL DETERMINE WHAT IS TO BE RENDERED BASED ON THE CURRENT 
// ROUTE

const ProfileLower = (props) => {
  let { subComponent, userId } = useParams();
  const rootUserPath = `/users/${userId}`;

  return (
    <div className="profile-lower">
      <ProfileNavigation />

      <Switch>
        <Route path={`${rootUserPath}/likedPosts`}>
          {/* 
          THIS ROUTE WILL RENDER THE USER'S LIKED POSTS
            LIKED POST FEED WILL HAVE TO BE REFACTORED INTO A FUNCTIONAL COMPONENT
            AND COMPOUNDED INTO ONE FILE, ELIMINATING THE CONTAINER FILE
         */}
          <h3>LikedPosts</h3>
        </Route>
        <Route path={`${rootUserPath}/followers`}>
          {/* 
          THIS ROUTE WILL RENDER THE USER'S FOLLOWERS  
        */}
          <FollowersList userId={userId} /> 
          <h3>Followers</h3>
        </Route>
        <Route path={`${rootUserPath}/followings`}>
          {/* 
          THIS ROUTE WILL RENDER THE USER'S FOLLOWINGS
         */}
          <FollowingsList userId={userId} />
          <h3>Followings</h3>
        </Route>
        <Route path={`${rootUserPath}/profile`}>
          <ProfileFeed userId={userId} />
        </Route>
      </Switch>
    </div>
  );
};

export default ProfileLower;
