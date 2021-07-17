json.set! post.id do
  json.extract! post, :id, :title, :description, :created_at
  json.created_at post.created_at.strftime("%F %T")
  json.poster post.user.username
  json.photoUrl url_for(post.photo)
end
