import * as PostAPI from '../util/PostAPI';

export const RECEIVE_POST = 'RECEIVE_POST';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const UPDATE_POST = 'UPDATE_POST';

export const receivePost = post => ({
  type: RECEIVE_POST,
  post
})

export const receivePosts = payload => ({
  type: RECEIVE_POSTS,
  payload
})

const updatePost = post => ({
  type: UPDATE_POST,
  post
})

export const requestUsersFeed = () => dispatch => (
  PostAPI.requestUsersFeed()
    .then(payload => dispatch(receivePosts(payload)))
)

export const requestPost = postId => dispatch => (
  PostAPI.requestPost(postId)
    .then(payload => dispatch(receivePost(payload)))
)

export const requestUpdatePost = post => dispatch => (
  PostAPI.updatePost(post)
    .then(payload => dispatch(receivePost(payload)))
)