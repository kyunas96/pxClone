import React from 'react';
import ImageHover from './ImageHover';

const Image = props => {
  console.log(props)

  return (
    <div className='image-container'>
      <img src={props.post.url}></img>
      {/* <ImageHover post={}></ImageHover> */}
    </div>
  )
}

export default Image;

