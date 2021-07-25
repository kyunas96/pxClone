import React from 'react';
import ProfileEditFormHeader from './profileEditFormHeader';
import { CountryDropdown } from "react-country-region-selector";

class ProfileEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      city: "",
      country: "",
      website: "",
      instagram: "",
      facebook: "",
      twitter: "",
    };
    this.setFormValue = this.setFormValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  selectCountry(val) {
    this.setState({ country: val });
  }

  componentDidMount() {
    this.props.getProfile(this.props.userId);
  }

  setFormValue(e) {
    const key = e.target.id;
    const value = e.target.value;
    this.setState({ [key]: value });
  }

  handleSubmit() {

  }

  render() {
    return (
      <form className="profile-edit-form">
        <ProfileEditFormHeader
          bannerImage={this.props.bannerImage}
          userPhoto={this.props.userPhoto}
          passValue={this.setFormValue}
        />
        <div className="profile-edit-row">
          <div className="profile-edit-text">
            <label htmlFor="firstName">First name</label>
            <input
              id="firstName"
              type="text"
              onChange={this.setFormValue}
            ></input>
          </div>
          <div className="profile-edit-text">
            <label htmlFor="lastName">Last name</label>
            <input
              id="lastName"
              type="text"
              onChange={this.setFormValue}
            ></input>
          </div>
        </div>
        <div className="profile-edit-row">
          <div className="profile-edit-text">
            <label htmlFor="city">City</label>
            <input id="city" type="text" onChange={this.setFormValue}></input>
          </div>
          <div className="profile-edit-text">
            <label htmlFor="country">Country</label>
            <CountryDropdown
              classes="profile-edit-country"
              value={this.state.country}
              onChange={this.selectCountry}
            />
          </div>
        </div>
        <div className="profile-edit-row">
          <div className="profile-edit-text">
            <label htmlFor="website">Website</label>
            <input
              id="website"
              type="text"
              placeholder="URL"
              onChange={this.setFormValue}
            ></input>
          </div>
          <div className="profile-edit-text">
            <label htmlFor="instagram">Instagram</label>
            <input
              id="instagram"
              type="text"
              placeholder="Username"
              onChange={this.setFormValue}
            ></input>
          </div>
        </div>
        <div className="profile-edit-row">
          <div className="profile-edit-text">
            <label htmlFor="facebook">Facebook</label>
            <input
              id="facebook"
              type="text"
              placeholder="Username"
              onChange={this.setFormValue}
            ></input>
          </div>
          <div className="profile-edit-text">
            <label htmlFor="twitter">Twitter</label>
            <input
              id="twitter"
              type="text"
              placeholder="Username"
              onChange={this.setFormValue}
            ></input>
          </div>
        </div>
        <div className="profile-edit-buttons">
          <span>Cancel</span>
          <button className="profile-edit-save">Save Changes</button>
        </div>
      </form>
    );
  }
}

export default ProfileEditForm;