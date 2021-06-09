import React from 'react';

class PostForm extends React.Component {
  constructor(props) {
    //should receive a post in props
    super(props)
  }

  componentDidMount() {
    //when the component mounts, should fetch the image url 
  }

  render() {
    return (
      // make sure to add `margin-top: 10vh;` in the css styles to accomodate
      // for the header
      <div className='post-form'>
        <h3>hi</h3>
      </div>
    )
  }
}

export default PostForm;