import React from "react";
import UserListCard from "./userListCard";

class UserList extends React.Component {
  componentDidMount() {
    console.log("props", this.props)
    this.props.action(this.props.currentUser);
  }

  shouldComponentUpdate(nextProps){
    if(nextProps.users !== this.props.users){
      return true;
    }else{
      return false;
    }
  }

  render() {
    console.log("render", this.props.users)
    return (
    <div>
      <ul>
        {this.props.users.map(user => (
          <li>{user.id}</li>
        ))}
      </ul>
    </div>
    )
  }
}

export default UserList;
