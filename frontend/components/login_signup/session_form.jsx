import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.credentials
  }

  handleSubmit = e => {
    e.preventDefault()
    props.action(e.currentTarget.value)
  }

  render() {
    const signup = (this.props.formType === 'Signup') ? 
    <label>Email:
      <input
      type='text'
      name='email'
      value={this.state.email}
      ></input>
    </label> 
    : "";

    return (
      <div>
        <form onSubmit={this.props.action}>
          <label>Username:
          <input
              type='text'
              name='[username]'
              value={this.state.username}
            ></input>
          </label>
          {signup}
          <label>Password:
            <input
            type='password'
            name='password'
            ></input>
          </label>

        </form>
      </div>
    )
  }
}

export default SessionForm;