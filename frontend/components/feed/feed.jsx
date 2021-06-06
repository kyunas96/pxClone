import React from 'react';
import Image from './image';
//import Masonry
//import InfiniteScroll

// Feed should associate itself with the current user 
class Feed extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // once the component has mounted, it must fetch the first batch of images
    // that it will render
  }

  grabNextBatch() {

  }

  render() {
    return (
      <div className='feed-container'>
        <Image post={{url: 'assets/img1'}} />
      </div>
    )
  }
}

export default Feed;











// if the feed component implements the infinite scroll component, does it need 
// a component wrapper?

// what is the relationship between an infinite scroll component and a redux store

// 1. write the components to make sure they render correctly
// 2. deal with the logic of selecting images from the backend based on the user's
//    the current user follows