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
          <h3>Posts</h3>
        </Route>
        <Route path={`${rootUserPath}/likedPosts`}>
          <h3>LikedPosts</h3>
        </Route>
        <Route path={`${rootUserPath}/followers`}>
          <h3>Followers</h3>
        </Route>
        <Route path={`${rootUserPath}/followings`}>
          <h3>Followings</h3>
        </Route>
      </Switch>
    </div>
  );
};

export default ProfileLower;
