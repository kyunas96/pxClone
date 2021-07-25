import React from "react";
import ProfileEditHeader from "./profile_edit_header";
import ProfileEditFormContainer from "./profileEditForm";


class ProfileEdit extends React.Component {
  // as the root component for the form and the images, this component must have
  // ways of taking in information from subcomponents to submit
  constructor(props) {
    super(props);
    this.set
  }

  selectCountry(val) {
    this.setState({ country: val });
  }

  componentDidMount() {
    this.props.getUserProfile(this.props.userId);
  }

  sendUpFormValues(values){

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
