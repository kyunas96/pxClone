import React from "react";
import PostShowInteractions from "./postShowInteractions";
import PostShowGallery from "./postShowGallery";
import { Link } from "react-router-dom";

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
    console.log("post show", this.props);
    const postItem = this.props.post ? this.props.post.title : null;

    if (this.props.post) {
      return (
        <div className="post-show">
          <PostShowGallery 
            prevId={this.props.prevPostId}
            nextId={this.props.nextPostId}
            curImageURL={this.props.post.photoUrl}
          />
          <div className="post-show-description">
            <PostShowInteractions />
            <h3>{this.props.post.title}</h3>
            <h5>
              by <Link to={`users/${this.props.post.poster}/profile`}>
                {this.props.post.poster}
              </Link>
            </h5>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default PostShow;
