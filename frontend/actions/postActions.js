import * as PostAPI from "../util/PostAPI";

export const RECEIVE_POST = "RECEIVE_POST";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const UPDATE_POST = "UPDATE_POST";
export const RECEIVE_POST_ERRORS = "RECEIVE_POST_ERRORS";
export const RESET_POST_ERRORS = "RESET_POST_ERRORS";

export const receivePost = (post) => ({
  type: RECEIVE_POST,
  post,
});

export const receivePosts = (payload) => ({
  type: RECEIVE_POSTS,
  payload,
});

export const recievePostErrors = (payload) => ({
  type: RECEIVE_POST_ERRORS,
  payload,
});

export const resetPostErrors = () => ({
  type: RESET_POST_ERRORS,
});

const updatePost = (post) => ({
  type: UPDATE_POST,
  post,
});

export const requestUsersFeed = () => (dispatch) =>(
  PostAPI.requestUsersFeed().then(({ data }) => {
    console.log("feed", data);
    dispatch(receivePosts(data));
  })
)

export const requestLikedPosts = () => (dispatch) => (
  PostAPI.requestLikedPosts()
    .then((data) => console.log(data))
)


export const requestPost = (postId) => (dispatch) => (
  PostAPI.requestPost(postId).then(
    ({ data }) => {
      dispatch(resetPostErrors());
      dispatch(receivePost(data));
    },
    ({ response }) => {
      dispatch(recievePostErrors(response.data));
    }
  )
)

export const requestUpdatePost = (post) => (dispatch) => (
  PostAPI.updatePost(post).then((payload) => dispatch(receivePost(payload)))
)
