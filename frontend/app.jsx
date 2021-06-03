import React from 'react';
import { Route, Switch } from 'react-router';
import IndexComponent from './components/index/index';
import HeaderContainer from './components/base/header_container';
// import LoginContainer from './login_signup/login_form_container';

const App = (props) => (
  <div>
    <HeaderContainer />
    <Switch>
      <Route exact path='/' component={IndexComponent} />
      {/* <Route path='/login' component={LoginContainer} /> */}
      {/* <Route path='/signup' component={SignupContainer} /> */}
      {/* <Route path='/feed' component={IndexContainer} /> */}
      {/* <Route path='/users/:userId' component={UserProfileContainer} /> */}
      {/* <Route path='/posts/new' component={NewPostContainer} /> */}
      {/* <Route path='/posts/:postId' component={PostShowContainer} /> */}
    </Switch>
  </div>
)

export default App;

