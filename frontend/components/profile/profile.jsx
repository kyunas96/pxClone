import React from "react";
import ProfileHeaderContainer from "./profileHeader/profileHeaderContainer";
import NotFoundPage from "../notFound";
import ProfileLower from './profileLower/profileLower';
import ProfileNavigation from "./profileNavigation";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: this.props.userErrors,
    };
  }

  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  componentDidUpdate() {
    this.props.fetchUser(this.props.userId);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.userErrors !== this.props.userErrors ||
      this.props.userId !== nextProps.userId
    ) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    console.log("render", this.props);
    if (this.props.userErrors !== undefined) {
      console.log("errored", this.props.userErrors);
      return <NotFoundPage errors={this.props.userErrors} />;
    } else {
      console.log("succeeded");
      return (
        <div className="user-profile">
          <ProfileHeaderContainer userId={this.props.userId} />
          <ProfileLower />
          {/* <ProfileFeedContainer userId={this.props.userId} /> */}
          {/* feed component will be rendered here as well */}
        </div>
      );
    }
  }
}

export default Profile;
