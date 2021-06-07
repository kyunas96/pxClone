import React from 'react';
import Image from './image';
import Masonry from 'react-masonry-css';
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
    const breakpointColumnsObj = {
      default: 4,
      1100: 3,
      700: 2,
      500: 1
    };

    return (
      // <div className='feed-container'>
      //   <Image post={{url: 'assets/img1'}} />
      // </div>
      // <ResponsiveMasonry >
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        <Image post={{ url: 'assets/img1' }} />
        <Image post={{ url: 'assets/img2' }} />
        <Image post={{ url: 'assets/img1' }} />
        <Image post={{ url: 'assets/img2' }} />
        <Image post={{ url: 'assets/img3' }} />
        <Image post={{ url: 'assets/img2' }} />
        <Image post={{ url: 'assets/img1' }} />
        <Image post={{ url: 'assets/img2' }} />
      </Masonry>
      // </ResponsiveMasonry>

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