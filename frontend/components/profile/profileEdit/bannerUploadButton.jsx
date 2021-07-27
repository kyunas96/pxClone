import React from "react";
import cameraIcon from "./camera.svg";

const BannerUploadButton = (props) => {
  const buttonActionTitle =
    props.bannerImage === undefined ? "Upload a " : "Change";

    return (
      <>
        <label htmlFor="bannerImage">
          <div className="camera-icon-container">
            <img src={cameraIcon} />
            {`${buttonActionTitle} cover photo`}
          </div>
        </label>
        <input id="bannerImage" type="file" onChange={(e) => props.action(e)} />
      </>
    );
};

export default BannerUploadButton;
