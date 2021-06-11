import React from 'react';
import { $CombinedState } from 'redux';
import PostFormPreview from './postFormPreview';

class CreatePostForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      description: "",
      photoURL: null,
      photoFile: null
    }
    this.updateValue = this.updateValue.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  componentDidMount() {

  }

  updateValue(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value }, console.log(this.state))
    }
  }

  //make function to update the file field of the state 
  updateFile(e) {
    const file = e.currentTarget.files[0];
    console.log(file)
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      console.log(fileReader.result)
      this.setState({ photoFile: file, photoURL: fileReader.result })
    }
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleUpload(e) {
    e.preventDefault()
    const formData = new FormData();
    formData.append('[post][title]', this.state.title)
    formData.append('[post][description]', this.state.description)
    if (this.state.photoFile) {
      formData.append('[post][photo]', this.state.photoFile)
    }
    $.ajax({
      method: 'POST',
      url: '/api/posts',
      data: formData,
      contentType: false,
      processData: false
    }).then(
      (response) => console.log(response),
      (responseErrors) => console.log(responseErrors)
    )
  }

  render() {
    const preview = this.state.photoURL ?
      <PostFormPreview photo={this.state.photoURL} />
      : null;

    return (
      // make sure to add `margin-top: 10vh;` in the css styles to accomodate
      // for the header
      <div className='post-form'>
          <PostFormPreview photo={this.state.photoURL} />
        <form onSubmit={this.handleUpload}>
          <h3>Upload a Photo</h3>
          <label htmlFor='title'>Title:</label>

          <input
            id='title'
            type='text'
            name=''
            onChange={this.updateValue('title')}
          ></input>

          <label htmlFor='description'>Description:</label>

          <textarea
            id='description'
            onChange={this.updateValue('description')}
          ></textarea>

          <input
            type='file'
            onChange={this.updateFile}
          ></input>

          <input type='submit' value='Upload Photo'></input>
        </form>
      </div>
    )
  }
}

export default CreatePostForm;