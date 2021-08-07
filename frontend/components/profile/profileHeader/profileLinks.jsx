import React from "react";
import ProfileLink from "./profileLink";

const ProfileLinks = ({ socials }) => {
  let links = [];
  for (const [key, val] of Object.entries(socials)) {
    if (val !== null) {
      links.push(<ProfileLink type={key} url={val} />);
    }
  }

  if(links.length > 0){
    return (
      <div className="profile-links">
        {links}
      </div>
    )
  }else{
    return null;
  }
};

export default ProfileLinks;
