import React from 'react';
import { Route, Switch } from 'react-router';
import HeaderContainer from './components/base/header_container';
import LoginContainer from './components/login_signup/login_form_container';
import SignupContainer from './components/login_signup/signup_form_container';
import FeedContainer from './components/feed/feedContainer';

const App = (props) => {

  return (
    <div id='app'>
      <HeaderContainer />
      <Switch>
        {/* <Route exact path='/' component={IndexComponent} /> */}
        <Route path='/login' component={LoginContainer} />
        <Route path='/signup' component={SignupContainer} />
        <Route path='/feed' component={FeedContainer} />
        {/* <Route path='/users/:userId' component={UserProfileContainer} /> */}
        {/* <Route path='/posts/new' component={NewPostContainer} /> */}
        {/* <Route path='/posts/:postId' component={PostShowContainer} /> */}
      </Switch>
    </div>
  )

}

export default App;

