import React from 'react';

const PostFormPreview = props => {
  const classname = props.photo === null ? "" : "visible";

  return (<div className='post-form-preview'>
    <img className={classname} src={props.photo}></img>
  </div>)
}

export default PostFormPreview;