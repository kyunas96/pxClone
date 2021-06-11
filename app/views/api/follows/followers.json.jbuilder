@followers.each do |follower|
  json.partial! 'api/users/user', user: follower
end