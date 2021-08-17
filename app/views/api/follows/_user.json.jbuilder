json.set! user.id do
  json.extract! user,
  :id,
  :username,
  :country,
  :city

  if user.user_photo.attached?
    json.userPhoto url_for(user.user_photo)
  else
    json.userPhoto nil
  end
  
end