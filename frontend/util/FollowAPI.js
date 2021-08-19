/* 
  getFollowers and getFollowings do not need a url parameter since the backend
  already knows who the current user and their id
*/

import axios from "axios"

export const getFollowers = (userId) => (
  $.ajax({
    method: 'GET',
    url: '/api/followers/',
    data: {user_id: userId}
  })
)

export const getFollowings = (userId) => (
  $.ajax({
    method: 'GET',
    url: '/api/followings/',
    data: {user_id: userId}
  })
)

export const getFollowing = (followee_id) => (
  $.ajax({
    method: 'GET',
    url: `/api/following/${followee_id}`,
  })
)

export const createFollow = followedUserId => (
  $.ajax({
    method: 'POST',
    url: '/api/follows/',
    data: { followed_user_id: followedUserId }
  })
)

export const deleteFollow = followedUserId => (
  $.ajax({
    method: 'DELETE',
    url: '/api/follows/',
    data: { followed_user_id: followedUserId }
  })
)