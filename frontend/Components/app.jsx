import React from 'react';
import { Route, Switch } from 'react-router';
import IndexComponent from './index';

const App = (props) => (
  <div>
    <h1>Welcome to React Router!!!</h1>
    <Switch>
      <Route exact path='/' component={IndexComponent} />
      <Route path='/login' component={LoginContainer} />
      <Route path='/signup' component={SignupContainer} />
      <Route path='/feed' component={IndexContainer} />
      <Route path='/users/:userId' component={UserProfileContainer} />
      <Route path='/posts/new' component={NewPostContainer} />
      <Route path='/posts/:postId' component={PostShowContainer} />
    </Switch>
  </div>
)

export default App;

