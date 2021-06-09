import React from 'react';
import { Route, Switch } from 'react-router';
import HeaderContainer from './components/base/header_container';
import LoginContainer from './components/login_signup/login_form_container';
import SignupContainer from './components/login_signup/signup_form_container';
import FeedContainer from './components/feed/feedContainer';
import ProfileContainer from './components/profile/profileContainer';
import PostForm from './components/posts/postForm';

const App = (props) => {

  return (
    <div id='app'>
      <HeaderContainer />
      <Switch>
        {/* <Route exact path='/' component={IndexComponent} /> */}
        <Route path='/login' component={LoginContainer} />
        <Route path='/signup' component={SignupContainer} />
        <Route path='/feed' component={FeedContainer} />
        <Route path='/users/:userId' component={ProfileContainer} />
        <Route path='/post/create' component={PostForm}/>
        {/* <Route path='/posts/new' component={NewPostContainer} /> */}
        {/* <Route path='/posts/:postId' component={PostShowContainer} /> */}
      </Switch>
    </div>
  )

}

export default App;

