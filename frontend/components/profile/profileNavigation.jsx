import React from "react";
import {
  Link,
  Switch,
  Route,
  useParams,
  useRouteMatch,
} from "react-router-dom";

const ProfileNavigation = (props) => {
  let { userId } = useParams();
  const rootUserPath = `/users/${userId}`;

  return (
    <>
      <div className="profile-navigation">
        <Link to={`${rootUserPath}/posts`}>Posts</Link>
        <Link to={`${rootUserPath}/likedPosts`}>Liked Posts</Link>
        <Link to={`${rootUserPath}/followers`}>Followers</Link>
        <Link to={`${rootUserPath}/followings`}>Following</Link>
      </div>
    </>
  );
};

export default ProfileNavigation;
