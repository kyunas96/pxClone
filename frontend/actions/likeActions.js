import * as LikeAPI from '../util/LikeAPI'

export const UPDATE_LIKE = "UPDATE_LIKE";

export const addLike = (postId) => (dispatch) => (
  LikeAPI.addLike(postId)
    .then(data => {
      dispatch({
        type: UPDATE_LIKE,
        post: data
      })
    })
)

export const removeLike = (postId) => (dispatch) => (
  LikeAPI.deleteLike(postId)
    .then(data => {
      dispatch({
        type: UPDATE_LIKE,
        post: data
      })
    })
)