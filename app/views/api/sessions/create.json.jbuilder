json.user do
  json.extract! @user, :id, :username, :firstname, :lastname

  if !@posts.empty?
    json.posts do
      @posts.each do |post|
        json.partial! "api/posts/post", post: post
      end
    end
  else
    json.posts []
  end


  if @postIndices.empty?
    json.userPosts []
  else
    json.userPosts @postIndices
  end
end


