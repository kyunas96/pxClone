import * as LikeAPI from '../util/LikeAPI'

export const RECEIVE_LIKES = "RECEIVE_LIKES";
export const ADD_LIKE = "ADD_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";


export const fetchLikedPosts = () => (dispatch) =>  (
  LikeAPI.fetchLikes()
    .then(data => {
      dispatch({
        type: RECEIVE_LIKES,
        likes: data
      })
    })
)

export const addLike = (postId) => (dispatch) => (
  LikeAPI.addLike(postId)
    .then(data => {
      dispatch({
        type: ADD_LIKE,
        like: data
      })
    })
)

export const removeLike = (postId) => (dispatch) => (
  LikeAPI.deleteLike(postId)
    .then(data => {
      dispatch({
        type: REMOVE_LIKE,
        like: data
      })
    })
)