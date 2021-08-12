if !@liked_posts.empty?
  json.likedPosts @liked_posts_ids
else
  json.likedPosts []
end

if !@liked_posts.empty?
  json.posts do
    @liked_posts.each do |post|
      json.partial! "api/posts/post", post: post
    end
  end
else
  json.posts []
end