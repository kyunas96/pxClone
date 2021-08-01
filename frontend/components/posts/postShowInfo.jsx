import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const PostShowInfo = ({userPicture, title, user, upload, description}) => (
  /*
    Notes: 
      • this component will need a container to have access to the dispatch
        for like and follow functionality

    Parts:
      1. Profile Picture
      2. Title
      3. by `Username`
      4. follow button
      5. Upload date
  */

      <div className="post-show-info">

          {/* {profile picture} */}
        <div>

        </div>

          {/* {post info} */}
        <div>
          <h3>
            {title}
          </h3>
          <h3>
            by <Link to={`/users/${user.id}/profile`}>
              {user.username}
            </Link> • 
          </h3>
        </div>
      </div>
);

export default PostShowInfo;