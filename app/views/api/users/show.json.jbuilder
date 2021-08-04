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

  json.userPosts @postIndices
end
json.posts @posts

# json.set! :errors do
#   json.array! @errors
# end 
