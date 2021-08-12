json.set! post.id do
  json.extract! post, :id, :title, :description
  json.posterId post.user.id
  # json.liked @liked_posts_ids.include?(post.id)
  json.poster post.user.username
  json.createdAt post.created_at.strftime("%F %T")
  json.photoUrl url_for(post.photo)
end
