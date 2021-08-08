export const createUser = (user) => (
  $.ajax({
    method: 'POST',
    url: 'api/users/',
    data: user
  })
)

export const requestUser = (userId) =>
  $.ajax({
    method: "GET",
    url: `api/users/${userId}`,
  });

export const updateUser = (userId, profile) =>
  $.ajax({
    method: "PATCH",
    url: `api/users/${userId}`,
    data: profile,
  });

export const requestUsersPosts = (userId) =>
  $.ajax({
    method: "GET",
    url: `/api/users/${userId}/posts`,
  });
