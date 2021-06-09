@followings.each do |followed|
  json.partial! "api/users/user", user: followed
end
