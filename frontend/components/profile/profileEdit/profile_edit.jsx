import React from "react";
import ProfileEditHeader from "./profile_edit_header";
import ProfileEditFormContainer from "./profile_edit_form_container";


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
        <ProfileEditFormContainer />
      </div>
    );
  }
}

export default ProfileEdit;
