import { connect } from "react-redux";
import App from "./app";

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: state.session.loggedIn
  }
}

export default connect(mapStateToProps)(App);