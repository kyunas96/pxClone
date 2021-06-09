import React from 'react';
import { Redirect } from 'react-router';
import FormErrors from './formErrors';
import SessionInput from './sessionInput';

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
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
      this.setState({ [field]: e.currentTarget.value })
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
        <form className='session-form' onSubmit={e => this.handleSubmit(e)}>
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

          <button type='submit'>Log in</button>
          <button onClick={this.props.demoLogin}>Demo Login</button>
        </form>
      </div>
    )
  }
}

export default LoginForm;