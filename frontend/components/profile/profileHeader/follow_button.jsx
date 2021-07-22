import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import {
  getFollowing,
  createFollow,
  deleteFollow,
} from "../../../util/FollowAPI";

class FollowButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      followStatus: null,
    };
    this.handleFollowUpdate = this.handleFollowUpdate.bind(this);
  }

  handleFollowUpdate() {
    if (this.state.followStatus === false) {
      createFollow(this.props.profileId).then(({ following }) =>
        this.setState({ followStatus: following })
      );
    } else if (this.state.followStatus === true) {
      deleteFollow(this.props.profileId).then(({ following }) =>
        this.setState({ followStatus: following })
      );
    }
  }

  componentDidMount() {
    getFollowing(this.props.profileId).then(({ following }) => {
      this.setState({ followStatus: following });
    });
  }

  componentDidUpdate() {
    getFollowing(this.props.profileId).then(({ following }) => {
      this.setState({ followStatus: following });
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.profileId !== this.props.profileId ||
      this.state.followStatus != nextState.followStatus
    ) {
      console.log("bang");
      return true;
    } else {
      return false;
    }
  }

  render() {
    let classList = this.state.followStatus === true ? "following" : "follow";
    const profileId = this.props.profileId;
    console.log("profileId", this.props);

    return (
      <button
        className={`follow-button ${classList}`}
        onClick={() => this.handleFollowUpdate()}
      ></button>
    );
  }
}

export default FollowButton;
