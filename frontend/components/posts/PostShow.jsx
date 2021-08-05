import React from "react";
import PostShowGallery from "./postShowGallery";
import { Link } from "react-router-dom";
import PostShowLower from "./postShowLower";

class PostShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.post;
  }

  componentDidMount() {
    this.props.requestPost(this.props.postId);
  }

  // componentDidUpdate(){
  //   this.props.requestPost(this.props.postId);
  // }

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
          <PostShowLower postId={this.props.postId}/>
          
        </div>
      );
    } else {
      return null;
    }
  }
}

export default PostShow;
