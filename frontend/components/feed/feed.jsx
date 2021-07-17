import React from 'react';
import Image from './image';
import Masonry from 'react-masonry-css';
import InfiniteScroll from 'react-infinite-scroll-component';

// Feed should associate itself with the current user 
class Feed extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getPosts()
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.posts !== undefined) {
      console.log(nextProps)
      console.log(nextState)
      return true
    } else {
      return false;
    }
  }

  fetchData() {
    // const newItems = [
    //   <Image post={{ url: 'assets/img1' }} />,
    //   <Image post={{ url: 'assets/img2' }} />,
    //   <Image post={{ url: 'assets/img3' }} />
    // ]

    // this.setState(prevState => ({
    //   items: prevState.items.concat(newItems)
    // }), console.log(this.state))
  }

  render() {
    const breakpointColumnsObj = {
      default: 4,
      1100: 3,
      700: 2,
      500: 1
    };
    console.log(this.props)

    let images = [];

    if (this.props.posts !== null) {
      // console.log(JSON.stringify(this.props.posts))
      Object.values(this.props.posts).forEach((post, i) => {
        images.push(<Image post={post} key={i}/>)
      })
    }

    return (
      // <InfiniteScroll
      //   dataLength={this.state.items.length}
      //   next={this.fetchData}
      //   hasMore={true}
      //   loader={<h4>Loading...</h4>}
      // >
      <div className='feed-container'>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className='my-masonry-grid'
          columnClassName='my-masonry-grid-column'
        >
          {images}
        </Masonry>
      </div>

      // </InfiniteScroll>
    )
  }
}

export default Feed;

// What does InfiniteScroll need?
//  -the length of the data
//  -a way to grab the next elements
//  -a boolean to indicate whether or not there are more items

// if the feed component implements the infinite scroll component, does it need 
// a component wrapper?

// what is the relationship between an infinite scroll component and a redux store

// 1. write the components to make sure they render correctly
// 2. deal with the logic of selecting images from the backend based on the user's
//    the current user follows