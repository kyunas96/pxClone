import React from "react";
import Image from "../feed/image";
import Masonry from "react-masonry-css";

class LikedPostsFeed extends React.Component {
  componentDidMount() {
    this.props.requestLikedPosts();
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
      Object.values(this.props.likedPosts).forEach((post, i) => {
        images.push(<Image post={{ ...post, isProfile: false }} key={i} />);
      });
    }

    if (images.length > 0) {
      return (
        <div className="feed">
          {/* <FeedBanner /> */}
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
    } else {
      return (
        <div className="feed">
          <div className="feed-message">You haven't liked any posts.</div>
        </div>
      );
    }
  }
}

export default LikedPostsFeed;
