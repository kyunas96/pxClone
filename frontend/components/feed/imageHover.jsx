import React from 'react';


// props
// 1. user pertaining to post
// 2. the post id
// 3. the profile image of the user that posted the
//    the image

const ImageHover = props => {
  // const likeImage = postId => {

  // }

  return (
    <div className='image-hover'>
      <div className='image-hover-top'>
        {props.post.title}
      </div>
      <div className='image-hover-bottom'>
        <div className='hover-user'>
          <span>
            {props.post.username}
          </span>
          {
            /* <img>
            Will store the user image
            for the user that posted the image
            </img> */
          }
        </div>

        <div className='hover-interaction'>
          <button>Like</button>
        </div>

      </div>

    </div>
  )
}

export default ImageHover;