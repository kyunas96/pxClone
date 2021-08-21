import * as LikeAPI from '../util/LikeAPI'

export const ADD_LIKE = "ADD_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";
export const RECEIVE_LIKES = "RECEIVE_LIKES";

export const receiveLikes = (payload) => ({
  type: RECEIVE_LIKES,
  payload
})

export const addLike = (postId) => (dispatch) => (
  LikeAPI.addLike(postId)
    .then(data => {
      dispatch({
        type: ADD_LIKE,
        post: data
      })
    })
)

export const removeLike = (postId) => (dispatch) => (
  LikeAPI.deleteLike(postId)
    .then(data => {
      dispatch({
        type: REMOVE_LIKE,
        post: data
      })
    })
)

export const requestLikedPosts = (userId) => (dispatch) => (
  LikeAPI.fetchLikes(userId)
    .then(data => dispatch(receiveLikes(data)))
)