import React from "react";
import ProfileEditHeader from "./profile_edit_header";
import ProfileEditForm from "./profile_edit_form";


class ProfileEdit extends React.Component {
  constructor(props) {
    super(props);
  }

  selectCountry(val) {
    this.setState({ country: val });
  }

  componentDidMount() {
    this.props.getUserProfile(this.props.userId);
  }

  render() {
    return (
      <div className="profile-edit">
        <ProfileEditHeader userId={this.props.userId}/>
        <ProfileEditForm />
      </div>
    );
  }
}

export default ProfileEdit;
