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
import ProfileFeed from "../profileFeed/profileFeed";
import LikedPostsFeed from "./likedPostsFeed";


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
          <LikedPostsFeed userId={userId} />
        </Route>
        <Route path={`${rootUserPath}/followers`}>
          <FollowersList userId={userId} /> 
        </Route>
        <Route path={`${rootUserPath}/followings`}>
          <FollowingsList userId={userId} />
        </Route>
        <Route path={`${rootUserPath}/profile`}>
          <ProfileFeed userId={userId} />
        </Route>
      </Switch>
    </div>
  );
};

export default ProfileLower;
