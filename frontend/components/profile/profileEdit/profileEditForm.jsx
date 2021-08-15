import React from "react";
import { withRouter, Link } from "react-router-dom";
import ProfileEditFormHeader from "./profile_edit_form_header";
import { getUser, updateUser } from "../../../actions/userActions";
import { CountryDropdown } from "react-country-region-selector";

class ProfileEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.setFormValue = this.setFormValue.bind(this);
    this.selectCountry = this.selectCountry.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.state = {
      profile: {
        ...this.props.user,
      },
      previews: {
        userPhoto: this.props.user.userPhoto || null,
        bannerImage: this.props.user.bannerImage || null,
      },
    };
  }

  selectCountry(val) {
    this.setState({ country: val });
  }

  setFormValue(e) {
    if (e.target.type === "file") {
      this.updateFile(e);
    } else {
      const key = e.target.id;
      const value = e.target.value;
      this.setState((prevState) => {
        return { profile: { ...prevState.profile, [key]: value } };
      }, () => console.log("newState", this.state));
    }
  }

  updateFile(e) {
    const file = e.target.files[0];
    const id = e.target.id;
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState((prevState) => {
        const previews = prevState.previews;
        return {
          profile: { ...prevState.profile, [id]: file },
          previews: Object.assign(previews, { [id]: fileReader.result }),
        };
      });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { userPhoto, bannerImage, ...rest } = this.state.profile;
    const formData = new FormData();
    if (userPhoto !== null && userPhoto !== undefined) {
      formData.append("user[user_photo]", userPhoto);
    }
    if (bannerImage !== null && bannerImage !== undefined) {
      formData.append("user[banner_image]", bannerImage);
    }
    for (const [key, val] of Object.entries(rest)) {
      if (val !== null) {
        formData.append(`user[${key}]`, val);
      }
    }
    for (const [key, val] of formData.entries()) {
      console.log(key + " " + val);
    }
    this.props.updateUser(this.props.user.id, formData);
    this.props.history.push(`/users/${this.props.user.id}/profile`);
  }

  render() {
    console.log("render", this.props);
    return (
      <form
        className="profile-edit-form"
        onSubmit={(e) => this.handleSubmit(e)}
      >
        <ProfileEditFormHeader
          bannerImage={this.state.previews.bannerImage}
          userPhoto={this.state.previews.userPhoto}
          passValue={this.setFormValue}
        />
        <div className="profile-edit-row">
          <div className="profile-edit-text">
            <label htmlFor="firstname">First name</label>
            <input
              id="firstname"
              value={this.state.profile.firstname || ""}
              onChange={this.setFormValue}
            />
          </div>
          <div className="profile-edit-text">
            <label htmlFor="lastname">Last name</label>
            <input
              id="lastname"
              value={this.state.profile.lastname || ""}
              type="text"
              onChange={this.setFormValue}
            />
          </div>
        </div>
        <div className="profile-edit-row">
          <div className="profile-edit-text">
            <label htmlFor="city">City</label>
            <input
              id="city"
              type="text"
              value={this.state.profile.city || ""}
              onChange={this.setFormValue}
            />
          </div>
          <div className="profile-edit-text">
            <label htmlFor="country">Country</label>
            <CountryDropdown
              classes="profile-edit-country"
              value={this.state.profile.country}
              onChange={this.selectCountry}
            />
          </div>
        </div>
        <div className="profile-edit-row">
          <div className="profile-edit-text">
            <label htmlFor="websiteURL">Website</label>
            <input
              id="websiteURL"
              value={this.state.profile.websiteURL || ""}
              type="text"
              placeholder="URL"
              onChange={this.setFormValue}
            />
          </div>
          <div className="profile-edit-text">
            <label htmlFor="instagram">Instagram</label>
            <input
              id="instagram"
              type="text"
              value={this.state.profile.instagram || ""}
              placeholder="Username"
              onChange={this.setFormValue}
            />
          </div>
        </div>
        <div className="profile-edit-row">
          <div className="profile-edit-text">
            <label htmlFor="facebook">Facebook</label>
            <input
              id="facebook"
              type="text"
              value={this.state.profile.facebook || ""}
              placeholder="Username"
              onChange={this.setFormValue}
            />
          </div>
          <div className="profile-edit-text">
            <label htmlFor="twitter">Twitter</label>
            <input
              id="twitter"
              type="text"
              value={this.state.profile.twitter || ""}
              placeholder="Username"
              onChange={this.setFormValue}
            />
          </div>
        </div>
        <div className="profile-edit-description">
          <label htmlFor="description">Description</label>
          <textarea 
            id="description" 
            value={this.state.profile.description || ""}
            onChange={this.setFormValue}

          />
        </div>
        <div className="profile-edit-buttons">
          <Link className="cancel-button" to={`/users/${this.props.user.id}/profile`}>Cancel</Link>
          <button className="profile-edit-save">Save Changes</button>
        </div>
      </form>
    );
  }
}

export default withRouter(ProfileEditForm);
