@posts.each do |post|
    json.partial! "api/posts/profile_post", post: post
end