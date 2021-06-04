import React from 'react';
import { Redirect } from 'react-router';
import FormErrors from './formErrors';

class SessionForm extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props)
    this.state = this.props.credentials
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.action(this.state)
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value }, console.log(this.state))
    }
  }

  componentWillUnmount(){
    this.props.reset()
  }

  render() {
    if (this.props.loggedIn){
      return <Redirect to='/'/>
    }

    let signingUp = this.props.formType === 'Signup';
    let userNameAutoComplete = signingUp ? 'off' : 'username';
    let passwordAutoComplete = signingUp ? 'new-password' : 'current-password';

    let email = signingUp ?
      (
        <label>Email:
          <input
            type='text'
            value={this.state.email}
            onChange={this.update('email')}>
          </input>
        </label>
      ) :
      (null);


    return (
      <div className='session-form'>
        <FormErrors errors={this.props.errors} />
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>Username:
            <input
              type='text'
              value={this.state.username}
              onChange={this.update('username')}
              autoComplete={userNameAutoComplete}>
            </input>
          </label>
          {email}
          <label>Password:
            <input
              type='password'
              onChange={this.update('password')}
              autoComplete={passwordAutoComplete}>
            </input>
          </label>
          <button type='submit'>{this.props.formType}</button>
        </form>
      </div>
    )
  }
}

export default SessionForm;