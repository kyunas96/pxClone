import React from "react";
import { $CombinedState } from "redux";
import PostFormPreview from "./postFormPreview";

class CreatePostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      photoURL: null,
      photoFile: null,
      errors: [],
    };
    this.updateValue = this.updateValue.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.checkFields = this.checkFields.bind(this);
  }

  updateValue(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  //make function to update the file field of the state
  updateFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photoFile: file, photoURL: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  checkFields() {
    const state = this.state;
    const errors = [];
    if (state.title === "") {
      errors.push("Post needs a title");
    }
    if (state.photoFile === null) {
      errors.push("No photo selected");
    }
    this.setState({ errors });
  }

  handleUpload(e) {
    e.preventDefault();
    if (this.checkFields()) {
      const formData = new FormData();
      formData.append("[post][title]", this.state.title);
      formData.append("[post][description]", this.state.description);
      if (this.state.photoFile) {
        formData.append("[post][photo]", this.state.photoFile);
      }
      $.ajax({
        method: "POST",
        url: "/api/posts",
        data: formData,
        contentType: false,
        processData: false,
      })
    }
  }

  render() {
    const preview = this.state.photoURL ? (
      <PostFormPreview photo={this.state.photoURL} />
    ) : null;

    return (
      // make sure to add `margin-top: 10vh;` in the css styles to accomodate
      // for the header
      <div className="post-form">
        <PostFormPreview photo={this.state.photoURL} />
        <form onSubmit={this.handleUpload}>
          <ul className="post-form-errors">
            {this.state.errors.map((error) => (
              <li>{error}</li>
            ))}
          </ul>
          <h3>Upload a Photo</h3>
          <label htmlFor="title">Title:</label>

          <input
            id="title"
            type="text"
            name=""
            onChange={this.updateValue("title")}
          ></input>

          <label htmlFor="description">Description:</label>

          <textarea
            id="description"
            onChange={this.updateValue("description")}
          ></textarea>

          <input type="file" onChange={this.updateFile}></input>

          <input type="submit" value="Upload Photo"></input>
        </form>
      </div>
    );
  }
}

export default CreatePostForm;
