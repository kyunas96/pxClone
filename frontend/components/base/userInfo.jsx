import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleDropdown as toggleDropdownAction } from "../../actions/uiActions";
import UserInfoDropdown from "./userInfoDropdown";
import userInfoButton from "assets/images/user-circle-solid.svg";

const UserInfo = ({currentUser, logout}) => {
  const dispatch = useDispatch();
  const dropdownIsVisible = useSelector(state => state.ui.dropdownIsVisible);

  const toggleDropdown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(toggleDropdownAction)
  }

  return (
    <div className="user-info">
      <button
        className="user-info-toggle"
        onClick={e => toggleDropdown(e)}
      >
        <img src={userInfoButton} />
      </button>
      {dropdownIsVisible ? (
        <UserInfoDropdown
          currentUser={currentUser}
          logout={logout}
          toggleDropdown={e => toggleDropdown(e)}
        />
      ) : null}
      <div className="user-info-upload">
        <Link to="/post/create" className="upload-button">
          Upload
        </Link>
      </div>
    </div>
  );
};

export default UserInfo;
