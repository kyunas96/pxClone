import React from 'react'
import { Link } from 'react-router-dom';
  
class Index extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <h3>Welcome to the Index!!!</h3>
        {/* <Link to='/login'>Login</Link>
        <Link to='/signup'>Sign Up</Link> */}
      </div>
    )
  }
}

export default Index;