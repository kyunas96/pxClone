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

  // componentDidMount() {
  //   this.props.fetchProfilePosts(this.props.userId);
  // }

  // componentDidUpdate() {
  //   this.props.fetchProfilePosts(this.props.userId);
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("feedProps", nextProps.posts.keys)
  //   // const curPostsLength = this.props.posts.keys.length;
  //   // const nextPostsLength = nextProps.posts.keys.length;
  //   if (
  //     (nextProps.userId !== this.props.userId)
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  render() {
    console.log("feedRender", this.props);
    const breakpointColumnsObj = {
      default: 4,
      1100: 3,
      700: 2,
      500: 1,
    };

    let images = [];

    // console.log(JSON.stringify(this.props.posts))
    Object.values(this.props.posts).forEach((post, i) => {
      const liked = this.props.isCurrentUser
        ? null
        : this.props.likedPosts.includes(post.id);
      images.push(<Image post={{ ...post, liked }} key={i} like />);
    });

    console.log("images", images)

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
