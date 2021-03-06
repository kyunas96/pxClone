import React from "react";
import Image from "./image";
import Masonry from "react-masonry-css";
import FeedBanner from "./feedBanner";
import { withRouter } from "react-router";
// import InfiniteScroll from "react-infinite-scroll-component";

// Feed should associate itself with the current user
class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getFeedItems(this.props.userId);
  }

  componentDidUpdate() {
    if (this.props.history.location.pathname !== "/feed") {
      this.props.history.push("/feed");
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.feedPosts !== undefined) {
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

    if (this.props.feedPosts !== null) {
      Object.values(this.props.feedPosts).forEach((post, i) => {
        images.push(<Image post={{ ...post, isProfile: false }} key={i} />);
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

export default withRouter(Feed);

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
