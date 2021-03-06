import React from 'react';
import { withRouter } from 'react-router-dom';
import { Redirect } from 'react-router';
import FormErrors from './formErrors';
import SessionInput from './sessionInput';

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.credentials
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  handleSubmit = e => {
    e.stopPropagation();
    e.preventDefault()
    this.props.action(this.state)
    this.setState({ password: "" })
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  demoLogin(e){
    e.preventDefault()
    e.stopPropagation()
    this.props.demoLogin()
  }

  componentWillUnmount() {
    this.props.reset()
  }

  render() {
    if (this.props.loggedIn) {
      return <Redirect to='/' />
    }

    return (
      <div className='session-form-container'>
        <form className='session-form'>
          <h2>Log in to 500px</h2>
          <FormErrors errors={this.props.errors} />
          <SessionInput
            title='username'
            type='text'
            value={this.state.username}
            onChange={this.update('username')}
            autoComplete='username'
          />
          <SessionInput
            title='password'
            type='password'
            value={this.state.password}
            onChange={(this.update('password'))}
            autoComplete='current-password'
          />

          <button type='submit' onClick={this.handleSubmit}>Log in</button>
          <button onClick={this.demoLogin}>Demo Login</button>
        </form>
      </div>
    )
  }
}

export default withRouter(LoginForm);