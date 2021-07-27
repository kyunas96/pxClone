json.userId @user.id
json.isCurrentUser @isCurrentUser
json.userName @user.username
json.description @user.description
json.following @following
json.city @user.city
json.country @user.country

json.websiteURL @user.websiteURL
json.instagram @user.instagram
json.facebook @user.facebook
json.twitter @user.twitter

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