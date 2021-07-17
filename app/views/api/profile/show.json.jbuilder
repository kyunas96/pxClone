json.partial! 'api/users/user', user: @user
json.following @following
json.isCurrentUser @isCurrentUser
# if url_for(@user.user_photo) == nil 
#   json.user_photo nil
# else
#   json.user_photo url_for(@user.user_photo)
# end