import React from "react";
import { Route, Switch } from "react-router";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeDropdown } from "./actions/uiActions";
import HeaderContainer from "./components/base/headerContainer";
import { ProtectedRoute } from "./components/protectedRoute";
import SplashPage from "./components/splashPage";
import LoginContainer from "./components/login_signup/loginFormContainer";
import SignupContainer from "./components/login_signup/signupFormContainer";
import FeedContainer from "./components/feed/feedContainer";
import ProfileContainer from "./components/profile/profileContainer";
import CreatePostForm from "./components/posts/createPostForm";
import FeedShowContainer from "./components/posts/feedShowContainer";
import ProfileShowContainer from "./components/posts/profileShowContainer";
import ProfileEditContainer from "./components/profile/profileEdit/profileEditContainer";

const App = (props) => {
  const dispatch = useDispatch();

  const toggleDropdown = (e) => {
    setTimeout(() => {
        dispatch(closeDropdown);
    }, 0);
  };

  return (
    <div id="app" onClick={toggleDropdown}>
      <HeaderContainer />
      <div id="body">
        <Switch>
          <Route
            exact
            path="/"
            component={props.loggedIn ? FeedContainer : SplashPage}
          />
          <Route exact path="/feed">
            {props.loggedIn ? <FeedContainer /> : <Redirect to="/" />}
          </Route>
          <Route path="/login" component={LoginContainer} />
          <Route path="/signup" component={SignupContainer} />
          <ProtectedRoute
            path="/users/:userId/profile/edit"
            component={ProfileEditContainer}
          />
          <ProtectedRoute
            exact
            path="/users/:userId/:subComponent"
            component={ProfileContainer}
          />
          <ProtectedRoute
            exact
            path="/users/:userId/posts/:postId"
            component={ProfileShowContainer}
          />

          <ProtectedRoute path="/post/create" component={CreatePostForm} />
          <ProtectedRoute path="/posts/:postId" component={FeedShowContainer} />
          <Route
            path="/"
            component={props.loggedIn ? FeedContainer : SplashPage}
          />
        </Switch>
      </div>
    </div>
  );
};

export default App;
