import React from "react";
import Cropper from "react-easy-crop";

class ProfilePictureEdit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imageSrc: null,
      crop: { x: 0, y: 0 },
      zoom: 1,
      aspect: 1 / 1,
    };
    console.log("profilePictureEdit", this.props)
  }

  onCropChange = (crop) => {
    this.setState({ crop });
  };

  onZoomChange = (zoom) => {
    this.setState({ zoom });
  };

  render() {
    return (
      <div className="profile-picture-edit">
        <div className="cropper-container">
          <Cropper
            image={this.state.imageSrc}
            crop={this.state.crop}
            zoom={this.state.zoom}
            aspect={this.state.aspect}
            onCropChange={this.onCropChange}
            onZoomChange={this.onZoomChange}
          />
        </div>
        <div className="cropper-controls">
          <input 
            id="cropper-zoom"
            type="range"
            min="1"
            max="3"
            step="0.1"
            value={this.state.zoom}
            onChange={(e, zoom) => this.onZoomChange(zoom)}
          >
          </input>
        </div>
      </div>
    );
  }
}

export default ProfilePictureEdit;
