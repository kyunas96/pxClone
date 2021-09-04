import React from 'react';
import locationPin from 'assets/images/pin.png';
import { formatLocation } from "../../../util/Util";

const ProfileLocation = ({city, country}) => {
  const formattedLocation = formatLocation(city, country);

  if (formattedLocation !== ""){
    return (
      <div id="profile-location">
        <div id="location-pin">
          <img src={locationPin} />
        </div>
        <span>{formattedLocation}</span>
      </div>
    )
  }else{
    return null;
  }
}

export default ProfileLocation;