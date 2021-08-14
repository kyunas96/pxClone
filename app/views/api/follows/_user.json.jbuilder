json.set! user.id do
  json.extract! user, 
  :id, 
  :username

  if user.user_photo.attached?
    json.user_photo url_for(user.user_photo)
  else
    json.user_photo nil
  end
end