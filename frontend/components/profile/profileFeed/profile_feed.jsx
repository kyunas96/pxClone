import React from "react";
import Feed from "../feed";
import Image from "../../feed/image";
import Masonry from "react-masonry-css";
import { useSelector } from "react-redux";

const ProfileFeed = (props) => {
  console.log("props", props);
  const profileId = parseInt(props.userId);
  const currentUserId = useSelector((state) => state.session.currentUser.id);
  const isCurrentUser = profileId === currentUserId;
  let posts = useSelector((state) => Object.values(state.entities.posts.posts));
  posts = posts.filter((post) => post.posterId === profileId);
  const likedPosts = useSelector((state) => state.entities.posts.likedPosts);

  return (
    <Feed posts={posts} isCurrentUser={isCurrentUser} likedPosts={likedPosts} />
  );
};

export default ProfileFeed;
