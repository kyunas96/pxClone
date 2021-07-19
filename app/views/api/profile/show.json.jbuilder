json.userId @user.id
json.following @following
json.isCurrentUser @isCurrentUser
if @user.user_photo.attached?
  json.userPhoto url_for(@user.user_photo)
else
  json.userPhoto nil
end

if @user.banner_image.attached?
  json.bannerImage url_for(@user.banner_image)
else
  json.bannerImage nil
end