import { connect } from 'react-redux';
import Feed from './feed';
import { requestAllPosts } from '../../actions/postActions';

const mapStateToProps = state => ({
  posts: state.entities.posts
})

const mapDispatchToProps = dispatch => ({
  likePost: postId => dispatch(likePost(postId)),
  getPosts: () => dispatch(requestAllPosts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Feed);

// when on the backend, a like will be created by grabbing the currentUser's id
// and binding it the id of the post to create a new Like