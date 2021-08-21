import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as LikeAPI from "../../../util/LikeAPI";
import { receiveLikes } from "../../../actions/likeActions";
import Feed from "../feed";

const LikedPostsFeed = ({ userId }) => {
  // this component must grab posts from state in order to reflect any changes to
  // the like status of a post
  let userIdAsInt = parseInt(userId);
  let currentUserId = useSelector(state => state.session.currentUser.id);
  let isCurrentUser = userIdAsInt === currentUserId;
  let likedPosts = useSelector(state => state.entities.likes[userIdAsInt]);
  let allPosts = useSelector(state => Object.values(state.entities.posts.posts));
  let siftedPosts = allPosts.filter(post => likedPosts.includes(post.id));

  let [initialMount, setInitialMount] = useState(true);
  let [posts, setPosts] = useState(siftedPosts);
  let dispatch = useDispatch();

  useEffect(() => {
    if (initialMount) {
      console.log("crap");
      // if its the initial mount then we want to dispatch the action that will
      // retrieve the posts from the backend and cache them in the store
      LikeAPI.fetchLikes(userIdAsInt).then((data) => {
        dispatch(receiveLikes(data))
        console.log("data", data);
        // setPosts(data.posts);
        setInitialMount(false);
      });

    }
  }, [initialMount]);

  if(posts.length > 0){
    // return <div> PlaceHolder</div>
    return <Feed images={posts} />;
  }else{
    let messagePrefix = isCurrentUser ? "You haven't" : "This user hasn't";
    let message = messagePrefix.concat(' ', "liked any posts.")

    return <div>{message}</div>
  }

  
};

export default LikedPostsFeed;
