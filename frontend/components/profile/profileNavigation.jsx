import React from "react";
import {
  NavLink,
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
        <NavLink activeClassName="selected" to={`${rootUserPath}/profile`}>Posts</NavLink>
        <NavLink activeClassName="selected" to={`${rootUserPath}/likedPosts`}>Liked Posts</NavLink>
        <NavLink activeClassName="selected" to={`${rootUserPath}/followers`}>Followers</NavLink>
        <NavLink activeClassName="selected" to={`${rootUserPath}/followings`}>Following</NavLink>
      </div>
    </>
  );
};

export default ProfileNavigation;
