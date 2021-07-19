import React from "react";
import { Redirect, Route, Switch } from "react-router";
import HeaderContainer from "./components/base/header_container";
import LoginContainer from "./components/login_signup/login_form_container";
import SignupContainer from "./components/login_signup/signup_form_container";
import FeedContainer from "./components/feed/feedContainer";
import ProfileContainer from "./components/profile/profileContainer";
import CreatePostForm from "./components/posts/createPostForm";
import PostShowContainer from "./components/posts/postShowContainer";
import ProfilePictureEdit from "./components/profile/profile_picture_edit_container";

const App = (props) => {
  const loggedIn = store.getState().session.loggedIn;
  console.log("loggedin:" + loggedIn);
  return (
    <div id="app">
      <HeaderContainer />
      <Switch>
        <Route exact path="/" component={loggedIn ? FeedContainer : null} />
        <Route path="/login" component={LoginContainer} />
        <Route path="/signup" component={SignupContainer} />
        {/* <Route path='/feed' component={FeedContainer} /> */}

        <Route
          path="/users/:userId/profile/profilePicture/edit"
          component={ProfilePictureEdit}
        />
        {/* <Route path="/users/:userId" component={ProfileContainer} /> */}
        {/* {profileImageEdit to be written} */}
        {/* {bannerImageEdit to be written} */}
        {/* <Route
          path="/user/:userId/profile/bannerPicture/edit"
          component={BannerPictureEdit}
        /> */}
        <Route path="/post/create" component={CreatePostForm} />
        <Route path="/posts/:postId" component={PostShowContainer} />
        {/* <Route exact path='/' component={IndexComponent} /> */}
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
