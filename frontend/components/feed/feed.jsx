import React from "react";
import Image from "./image";
import Masonry from "react-masonry-css";
import FeedBanner from "./feedHeader";
import InfiniteScroll from "react-infinite-scroll-component";

// Feed should associate itself with the current user
class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getFeedItems(this.props.userId);
    this.props.fetchLikedPosts()
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.posts !== undefined) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const breakpointColumnsObj = {
      default: 4,
      1100: 3,
      700: 2,
      500: 1,
    };

    let images = [];

    if (this.props.posts !== null) {
      // console.log(JSON.stringify(this.props.posts))
      Object.values(this.props.posts).forEach((post, i) => {
        const liked = this.props.likedPosts.has(post.id) ? true : false;
        images.push(<Image post={{...post, liked}} key={i} />);
      });
    }

    return (
      <div className="feed">
        <FeedBanner />
        <div className="masonry-container">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid-column"
        >
          {images}
        </Masonry>
        </div>
      </div>
    );
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
