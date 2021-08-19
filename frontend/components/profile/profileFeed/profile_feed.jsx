import React from "react";
import Image from "../../feed/image";
import Masonry from "react-masonry-css";
import { useSelector } from "react-redux";

const ProfileFeed = (props) => {
  const profileId = useSelector(state => state.session.currentUser.id)
  const isCurrentUser = profileId === props.userId;
  let posts = useSelector(state => Object.values(state.entities.posts.posts));
  posts = posts.filter(post => post.posterId === profileId);
  const likedPosts = useSelector(state => state.entities.posts.likedPosts);


  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  let images = [];

  Object.values(posts).forEach((post, i) => {
    const liked = isCurrentUser
      ? null
      : likedPosts.includes(post.id);
    images.push(
      <Image post={{ ...post, liked, isProfile: true }} key={i} like />
    );
  });

  return (
    <div className="profile-feed">
      <div className="masonry-container">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid-column"
        >
          {images}
        </Masonry>
      </div>
    </div>
  );
};

export default ProfileFeed;
