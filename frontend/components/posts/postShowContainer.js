import { connect } from 'react-redux';
import PostShow from './PostShow';
import { requestPost, requestUpdatePost } from '../../actions/postActions';

const mSTP = (state, ownProps) => {
  const ret =  {
    post: state.entities.posts[ownProps.match.params.postId],
    postId: ownProps.match.params.postId
  }
  console.log(ret)

  return ret;
}

const mDTP = dispatch => ({
  requestPost: postId => dispatch(requestPost(postId)),
  requestUpdatePost: post => dispatch(requestUpdatePost(post))
})

export default connect(mSTP, mDTP)(PostShow);