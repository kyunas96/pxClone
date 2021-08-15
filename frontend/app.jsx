import React from "react";
import { Redirect, Route, Switch } from "react-router";
import HeaderContainer from "./components/base/header_container";
import {ProtectedRoute} from "./components/protectedRoute";
import Footer from './components/base/footer';
import SplashPage from "./components/splashPage";
import LoginContainer from "./components/login_signup/login_form_container";
import SignupContainer from "./components/login_signup/signup_form_container";
import FeedContainer from "./components/feed/feedContainer";
import ProfileContainer from "./components/profile/profileContainer";
import CreatePostForm from "./components/posts/createPostForm";
import FeedShowContainer from './components/posts/feedShowContainer';
import ProfileShowContainer from './components/posts/profileShowContainer';
import ProfileEditContainer from "./components/profile/profileEdit/profile_edit_container";
import LikedPostsContainer from "./components/likedPosts/likedPostsContainer";
import followersListContainer from "./components/userListings/followersListContainer";
import followingsListContainer from "./components/userListings/followingsListContainer";

const App = (props) => {
  return (
    <div id="app">
      <HeaderContainer />
      <div id="body">
        <Switch>
          <Route exact path="/" component={props.loggedIn ? FeedContainer : SplashPage} />
          <Route path="/login" component={LoginContainer} />
          <Route path="/signup" component={SignupContainer} />
          <ProtectedRoute
            path="/users/:userId/profile/edit"
            component={ProfileEditContainer}
          />
          <ProtectedRoute exact path="/users/:userId/profile" component={ProfileContainer} />
          <ProtectedRoute exact path="/users/:userId/posts/:postId" component={ProfileShowContainer} />
          <ProtectedRoute exact path="/users/:userId/likedposts" component={LikedPostsContainer} />
          <ProtectedRoute exact path="/users/:userId/followings" component={followingsListContainer} />
          <ProtectedRoute exact path="/users/:userId/followers" component={followersListContainer} />
          
          <ProtectedRoute path="/post/create" component={CreatePostForm} />
          <ProtectedRoute path="/posts/:postId" component={FeedShowContainer} />
          <Redirect to="/" />
        </Switch>
      </div>
    </div>
  );
};

export default App;
