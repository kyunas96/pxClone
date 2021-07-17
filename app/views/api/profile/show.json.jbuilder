json.user_id @user.id
json.following @following
json.isCurrentUser @isCurrentUser
if @user.user_photo.attached?
  json.user_photo url_for(@user.user_photo)
else
  json.user_photo nil
end

if @user.banner_image.attached?
  json.banner_image url_for(@user.banner_image)
else
  json.banner_image nil
end