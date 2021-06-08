import { connect } from 'react-redux';
import Profile from './profile';

const mapStateToProps = (state, ownProps) => ({
  userId: ownProps.match.params.userId
})

// const mapDispatchToProps = dispatch => ({
//   requestUser: userId => dispatch(requestUser(userId))
// })

export default connect(mapStateToProps, null)(Profile);