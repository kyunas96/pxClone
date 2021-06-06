import { connect } from 'react-redux';
import Feed from './feed';

const mapStateToProps = state => ({
  currentUser: {
    id: state.session.currentUser.id,
    username: state.session.currentUser.username
  }
})

const mapDispatchToProps = dispatch => ({
  likePost: postId => dispatch(likePost(postId))
})

export default connect(mapStateToProps, null)(Feed);

// when on the backend, a like will be created by grabbing the currentUser's id
// and binding it the id of the post to create a new Like