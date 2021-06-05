import React from 'react';
import { Redirect } from 'react-router';
import FormErrors from './formErrors';
import SessionInput from './sessionInput';

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props)
    this.state = this.props.credentials
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.action(this.state)
    this.setState({ password: "" })
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value }, console.log(this.state))
    }
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
        <FormErrors errors={this.props.errors} />
        <form className='session-form' onSubmit={e => this.handleSubmit(e)}>
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

          <button type='submit'>Login</button>
        </form>
      </div>
    )
  }
}

export default LoginForm;