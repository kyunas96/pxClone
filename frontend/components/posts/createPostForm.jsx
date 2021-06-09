import React from 'react';
import { $CombinedState } from 'redux';

class CreatePostForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      description: "",
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
    this.setState({ photoFile: e.currentTarget.files[0] })
  }

  handleUpload(e) {
    e.preventDefault()
    const formData = new FormData();
    formData.append('[post][title]', this.state.title)
    formData.append('[post][description]', this.state.description)
    if(this.state.photoFile){
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
    // for(const ele of formData.entries()){
    //   console.log(ele)
    // }
  }

  render() {
    console.log(this.state)
    return (
      // make sure to add `margin-top: 10vh;` in the css styles to accomodate
      // for the header
      <div className='post-form'>
        <div className='post-form-preview'>
          {
            /* once the form has an image attached, it should be set as the source
          for the image
          */
          }
          <img></img>
        </div>
        <form onSubmit={this.handleUpload}>
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