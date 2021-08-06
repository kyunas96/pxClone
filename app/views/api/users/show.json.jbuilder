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

  json.bannerImage url_for(@user.banner_image)
  json.userPhoto url_for(@user.user_photo)
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
