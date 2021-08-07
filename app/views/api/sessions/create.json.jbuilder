json.user do
  json.extract! @user, :id, :username
  if @postIndices.empty?
    json.userPosts []
  else
    json.userPosts @postIndices
  end
end


