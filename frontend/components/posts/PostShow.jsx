import React from 'react';

class PostShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.post
  }

  componentDidMount() {
    this.props.requestPost(this.props.postId)
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.postId !== nextProps.postId) {
      this.props.requestPost(nextProps.postId)
      return true;
    } else if (nextProps.post !== this.props.post) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    console.log(this.props)
    const postItem = this.props.post ? this.props.post.title : (null);

    if (this.props.post) {
      return (
        <div className='post-show'>
          <div className='post-show-gallery'>
            <div className='left-arrow'></div>
            <img src={this.props.post.photoUrl} />
            <div className='right-arrow'></div>
          </div>
          <div className='post-show-description'>
            <h3>{this.props.post.title}</h3>
            <h5>by {this.props.post.poster}</h5>
          </div>
        </div>
      )
    } else {
      return (null)
    }
  }
}

export default PostShow;