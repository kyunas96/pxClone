import React from "react";
import ProfilePicture from "../profileHeader/profile_picture";
import { CountryDropdown } from "react-country-region-selector";

class ProfileEdit extends React.Component {
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
  }

  selectCountry(val) {
    this.setState({ country: val });
  }

  componentDidMount() {
    this.props.getUserProfile(this.props.userID);
  }

  render() {
    return (
      <div className="profile-edit">
        <form className="profile-edit-form">
          <ProfilePicture />
          <div className="profile-edit-row">
            <div className="profile-edit-text">
              <label htmlFor="fname">First name</label>
              <input id="fname" type="text"></input>
            </div>
            <div className="profile-edit-text">
              <label htmlFor="lname">Last name</label>
              <input id="lname" type="text"></input>
            </div>
          </div>
          <div className="profile-edit-row">
            <div className="profile-edit-text">
              <label htmlFor="city">City</label>
              <input id="city" type="text"></input>
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
              <input id="website" type="text" placeholder="URL"></input>
            </div>
            <div className="profile-edit-text">
              <label htmlFor="instagram">Instagram</label>
              <input id="instagram" type="text" placeholder="Username"></input>
            </div>
          </div>
          <div className="profile-edit-row">
            <div className="profile-edit-text">
              <label htmlFor="facebook">Facebook</label>
              <input id="facebook" type="text" placeholder="Username"></input>
            </div>
            <div className="profile-edit-text">
              <label htmlFor="twitter">Twitter</label>
              <input id="twitter" type="text" placeholder="Username"></input>
            </div>
          </div>
          <div className="profile-edit-buttons">
            <span>Cancel</span>
            <button className="profile-edit-save">Save Changes</button>
          </div>
        </form>
      </div>
    );
  }
}

export default ProfileEdit;
