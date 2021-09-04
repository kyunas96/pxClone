import React from "react";
import PostShowGallery from "./postShowGallery";
import { Link } from "react-router-dom";
import PostShowLower from "./postShowLower";
import NotFoundPage from "../notFound";

class PostShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.post;
  }

  componentDidMount() {
    this.props.requestPost(this.props.postId);
  }

  componentDidUpdate() {
    this.props.requestPost(this.props.postId);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.postId !== this.props.postId ||
      nextProps.postErrors !== this.props.postErrors
    ) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const postItem = this.props.post ? this.props.post.title : null;

    if (this.props.post && this.props.postErrors === undefined) {
      return (
        <div className="post-show">
          <PostShowGallery
            userId={this.props.userId}
            prevId={this.props.prevPostId}
            nextId={this.props.nextPostId}
            curImageURL={this.props.post.photoUrl}
          />
          <PostShowLower postId={this.props.postId} />
        </div>
      );
    } else {
      return <NotFoundPage errors={this.props.postErrors} />;
    }
  }
}

export default PostShow;
