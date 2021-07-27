import React from "react";
import ProfileEditFormHeader from "./profile_edit_form_header";
import { getProfile, updateProfile } from "../../../util/ProfileAPI";
import { CountryDropdown } from "react-country-region-selector";
import { $dataMetaSchema } from "ajv";

class ProfileEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.setFormValue = this.setFormValue.bind(this);
    this.selectCountry = this.selectCountry.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.state = {
      country: "",
    };
    console.log("profileEditForm", this.props);
  }

  selectCountry(val) {
    this.setState({ country: val }, () => console.log(this.state));
  }

  componentDidMount() {
    getProfile(this.props.userId).then((data) => {
      const { socials, ...rest } = data;
      console.log("mount", rest);
      this.setState({
        ...rest,
        socials,
      });
    });
  }

  setFormValue(e) {
    console.log(e);
    if (e.target.type === "file") {
      this.updateFile(e);
    } else {
      const key = e.target.id;
      const value = e.target.value;
      this.setState({ [key]: value }, () => console.log(this.state));
    }
  }

  updateFile(e) {
    const file = e.target.files[0];
    const id = e.target.id;
    console.log(file);
    this.setState({ [id]: file });
    // const fileReader = new FileReader();
    // fileReader.onloadend = () => {
    //   console.log(fileReader.result);
    //   this.setState({ [id]: file}, () =>
    //     console.log(this.state)
    //   );
    // };
    // if (file) {
    //   fileReader.readAsDataURL(file);
    // }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { userPhoto, bannerImage, socials, ...rest } = this.state;
    console.log(userPhoto, bannerImage, socials, rest);
    const formData = new FormData();
    if (userPhoto !== null) {
      console.log("not null");
      formData.append("profile[userPhoto]", userPhoto);
    }
    if (bannerImage !== null) {
      formData.append("profile[bannerImage]", bannerImage);
    }
    const updatedProfile = { ...socials, ...rest };
    console.log(updatedProfile)
    for(const [key, val] of Object.entries(updatedProfile)){
      formData.append(`profile[info][${key}]`, val)
    }
    for (const [key, val] of formData.entries()) {
      console.log(`${key}: ${val}`);
    }

    $.ajax({
      method: "PATCH",
      url: `/api/profile/${this.props.userId}`,
      data: formData,
      contentType: false,
      processData: false,
    }).then((response) => console.log(response));
  }

  render() {
    console.log("renderProps", this.props);
    console.log("renderState", this.state);
    return (
      <form className="profile-edit-form" onSubmit={this.handleSubmit}>
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
