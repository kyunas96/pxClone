import React from "react";
import { Redirect, Route, Switch } from "react-router";
import HeaderContainer from "./components/base/header_container";
import LoginContainer from "./components/login_signup/login_form_container";
import SignupContainer from "./components/login_signup/signup_form_container";
import FeedContainer from "./components/feed/feedContainer";
import ProfileContainer from "./components/profile/profileContainer";
import CreatePostForm from "./components/posts/createPostForm";
import PostShowContainer from "./components/posts/postShowContainer";
import ProfileEditContainer from "./components/profile/profileEdit/profile_edit_container";

const App = (props) => {
  console.log("loggedin:" + props.loggedIn);
  return (
    <div id="app">
      <HeaderContainer />
      <div id="body">
        <Switch>
          <Route exact path="/" component={props.loggedIn ? FeedContainer : null} />
          <Route path="/login" component={LoginContainer} />
          <Route path="/signup" component={SignupContainer} />
          {/* <Route path='/feed' component={FeedContainer} /> */}
          <Route
            path="/users/:userId/profile/edit"
            component={ProfileEditContainer}
          />
          <Route path="/users/:userId/profile" component={ProfileContainer} />
          <Route path="/post/create" component={CreatePostForm} />
          <Route path="/posts/:postId" component={PostShowContainer} />
          {/* <Route exact path='/' component={IndexComponent} /> */}
          <Redirect to="/" />
        </Switch>
      </div>
    </div>
  );
};

export default App;
