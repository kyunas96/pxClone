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
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      this.props.profileId !== nextProps.profileId ||
      this.props.following !== nextState.following
    ) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    let classList = this.props.following === true ? "following" : "follow";
    const profileId = this.props.profileId;
    const action = this.props.following
      ? this.props.removeFollow
      : this.props.addFollow;

    return (
      <button
        className={`follow-button ${classList}`}
        onClick={() => action(this.props.profileId)}
      ></button>
    );
  }
}

export default FollowButton;
