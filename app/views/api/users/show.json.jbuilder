json.user do
  json.extract! @user, 
  :id, 
  :username, 
  :description,
  :email, 
  :country, 
  :city, 
  :websiteURL, 
  :instagram,
  :facebook,
  :twitter

  if @user.banner_image.attached?
    json.bannerImage url_for(@user.banner_image)
  else
    json.banner_image nil
  end

  if @user.user_photo.attached?
    json.userPhoto url_for(@user.user_photo)
  else
    json.userPhoto nil
  end
  
  json.userPosts @postIndices
end

json.posts do
   @posts.each do |post|
    json.set! post.id do
      json.extract! post, :id, :title, :description, :created_at
      json.posterId post.poster_id
      json.photoUrl url_for(post.photo)
    end
  end
end

# json.set! :errors do
#   json.array! @errors
# end 
