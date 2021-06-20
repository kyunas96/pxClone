import React from "react";

class PostShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.post;
  }

  componentDidMount() {
    this.props.requestPost(this.props.postId);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.postId !== nextProps.postId) {
      this.props.requestPost(nextProps.postId);
      return true;
    } else if (nextProps.post !== this.props.post) {
      return true;
    } else {
      return false;
    }
  }

  // e.clientX < e.target.clientWidth / 2

  handleNavigation(e) {
    console.log(e);
    if (e.target.className == "post-show-gallery") {
      if (e.clientX < e.target.clientWidth / 2) {
        // functionality that will go back a post
        console.log("left");
      } else {
        // functionality that will go ahead a post
        console.log("right");
      }
    }
  }

  render() {
    console.log(this.props);
    const postItem = this.props.post ? this.props.post.title : null;

    if (this.props.post) {
      return (
        <div className="post-show">
          <div
            className="post-show-gallery"
            onClick={(e) => this.handleNavigation(e)}
          >
            <img src={this.props.post.photoUrl} />
          </div>
          <div className="post-show-description">
            <h3>{this.props.post.title}</h3>
            <h5>by {this.props.post.poster}</h5>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default PostShow;
