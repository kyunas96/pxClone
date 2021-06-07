import React from 'react';
import Image from './image';
import Masonry from 'react-masonry-css';
import InfiniteScroll from 'react-infinite-scroll-component';

// Feed should associate itself with the current user 
class Feed extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        <Image post={{ url: 'assets/img1' }} />,
        <Image post={{ url: 'assets/img2' }} />,
        <Image post={{ url: 'assets/img3' }} />,
        <Image post={{ url: 'assets/img1' }} />,
        <Image post={{ url: 'assets/img2' }} />,
        <Image post={{ url: 'assets/img3' }} />,
      ]
    }
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    // once the component has mounted, it must fetch the first batch of images
    // that it will render
  }

  fetchData() {
    const newItems = [
      <Image post={{ url: 'assets/img1' }} />,
      <Image post={{ url: 'assets/img2' }} />,
      <Image post={{ url: 'assets/img3' }} />
    ]

    this.setState(prevState => ({
      items: prevState.items.concat(newItems)
    }), console.log(this.state))
  }

  render() {
    const breakpointColumnsObj = {
      default: 4,
      1100: 3,
      700: 2,
      500: 1
    };

    return (
      <InfiniteScroll
        dataLength={this.state.items.length}
        next={this.fetchData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className='my-masonry-grid'
          columnClassName='my-masonry-grid-column'
        >
          {this.state.items}
        </Masonry>

      </InfiniteScroll>
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