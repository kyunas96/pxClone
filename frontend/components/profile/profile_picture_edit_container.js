import { connect } from "react-redux";
import ProfilePictureEdit from "./profile_picture_edit";

const mapStateToProps = (state, ownProps) => {
  return {
    userId: ownProps.match.params.userId
  }
}

const mapDispatchToProps = (dispatch) => {

}

export default connect(mapStateToProps, null)(ProfilePictureEdit);