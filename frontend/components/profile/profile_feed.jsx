import React from "react";
import Image from "../feed/image";
import Masonry from "react-masonry-css";

class ProfileFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: this.props.posts,
    };
  }

  render() {
    const breakpointColumnsObj = {
      default: 4,
      1100: 3,
      700: 2,
      500: 1,
    };

    let images = [];

    Object.values(this.props.posts).forEach((post, i) => {
      const liked = this.props.isCurrentUser
        ? null
        : this.props.likedPosts.includes(post.id);
      images.push(<Image post={{ ...post, liked, isProfile: true}} key={i} like />);
    });

    return (
      <div className="profile-feed">
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

export default ProfileFeed;
